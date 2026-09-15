import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { site } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Enquiry endpoint.
 *
 * Every submission is appended to data/submissions.jsonl so nothing is ever
 * lost, even if mail delivery fails. If SMTP_HOST is configured the enquiry is
 * also emailed to CONTACT_TO; if it is not, the file is the record.
 */

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  education?: string;
  profession?: string;
  experience?: string;
  message?: string;
  /** Honeypot - must stay empty. */
  company?: string;
};

/** Simple in-memory throttle: 5 submissions per IP per 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this connection. Try again later." },
      { status: 429 },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // A filled honeypot is a bot. Answer 200 so it does not learn anything.
  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    name: clean(payload.name, 120),
    email: clean(payload.email, 160),
    phone: clean(payload.phone, 40),
    interest: clean(payload.interest, 120),
    education: clean(payload.education, 300),
    profession: clean(payload.profession, 300),
    experience: clean(payload.experience, 1200),
    message: clean(payload.message),
    receivedAt: new Date().toISOString(),
    ip,
  };

  if (!enquiry.name || !enquiry.message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name and your message." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "submissions.jsonl"),
      `${JSON.stringify(enquiry)}\n`,
      "utf8",
    );
  } catch (writeError) {
    console.error("[contact] could not write submission", writeError);
  }

  await sendEmail(enquiry);

  return NextResponse.json({ ok: true });
}

async function sendEmail(enquiry: Record<string, string>) {
  const host = process.env.SMTP_HOST;
  if (!host) return; // SMTP not configured - the JSONL file is the record.

  try {
    // Imported lazily so the build does not require SMTP to be set up.
    const nodemailer = (await import("nodemailer")).default;

    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });

    await transport.sendMail({
      to: process.env.CONTACT_TO ?? site.contact.admissionsEmail,
      from: process.env.CONTACT_FROM ?? `website@${new URL(site.url).hostname}`,
      replyTo: enquiry.email,
      subject: `Website enquiry - ${enquiry.name}${enquiry.interest ? ` (${enquiry.interest})` : ""}`,
      text: [
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Phone: ${enquiry.phone || "-"}`,
        `Interested in: ${enquiry.interest || "-"}`,
        `Educational background: ${enquiry.education || "-"}`,
        `Professional background: ${enquiry.profession || "-"}`,
        `Technical experience: ${enquiry.experience || "-"}`,
        "",
        enquiry.message,
        "",
        `Received: ${enquiry.receivedAt}`,
      ].join("\n"),
    });
  } catch (mailError) {
    // The submission is already on disk, so a mail failure is not fatal.
    console.error("[contact] could not send email", mailError);
  }
}
