import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { ArrowRightIcon } from "@/components/icons";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/** A rounded panel section - the stacked-card rhythm of the design. */
export function Panel({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="px-3 py-3 sm:px-4 sm:py-4">
      <div className={cn("panel overflow-hidden px-5 py-14 sm:px-8 lg:px-12", className)}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  secondLine,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  secondLine?: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.6rem]">
        {title}
        {secondLine ? (
          <>
            <br />
            {secondLine}
          </>
        ) : null}
      </h2>
      {body ? <p className="mt-5 text-base leading-relaxed text-body">{body}</p> : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
  className?: string;
  /** Adds the trailing arrow used throughout the design. */
  arrow?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  ...rest
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-brand to-brand-dark text-white shadow-[var(--shadow-pill)] hover:from-brand-dark hover:to-brand-dark",
    ghost:
      "border border-line bg-white/70 text-ink hover:border-brand/40 hover:bg-white",
    white: "bg-white text-ink shadow-[var(--shadow-glass)] hover:bg-surface-blue",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200",
        styles,
        className,
      )}
      {...rest}
    >
      {children}
      {arrow ? (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

/** The small circular arrow button that sits in the corner of feature cards. */
export function ArrowBadge({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white transition-transform duration-200 group-hover:translate-x-0.5",
        className,
      )}
    >
      {label ? <span className="sr-only">{label}</span> : null}
      <ArrowRightIcon className="h-4 w-4" aria-hidden />
    </span>
  );
}

/** Small uppercase label used at the edges of the hero and ecosystem sections. */
export function EdgeLabel({
  lines,
  className,
}: {
  lines: readonly string[];
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.65rem] font-semibold uppercase leading-[1.9] tracking-[0.28em] text-ink-soft/70",
        className,
      )}
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}
