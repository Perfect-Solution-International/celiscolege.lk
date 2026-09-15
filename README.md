# CELIS College — celiscollege.lk

Marketing site for CELIS College, Institute of Biomedical Engineering Technology.
Next.js 15 (App Router), TypeScript, Tailwind CSS v4. All content lives in plain
TypeScript files, so copy changes never require touching a component.

## Quick start

```bash
npm install
cp .env.example .env        # set NEXT_PUBLIC_SITE_URL at minimum
npm run dev                 # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Pages

| Route                   | File                                     |
| ----------------------- | ---------------------------------------- |
| `/`                     | `src/app/page.tsx`                       |
| `/about`                | `src/app/about/page.tsx`                 |
| `/program`              | `src/app/program/page.tsx`               |
| `/learning-experience`  | `src/app/learning-experience/page.tsx`   |
| `/contact`              | `src/app/contact/page.tsx`               |
| `/api/contact`          | enquiry form endpoint                    |

## Editing content

Everything editable is in [`src/content/`](src/content/). Nothing else needs to change.

| File               | Controls                                                           |
| ------------------ | ------------------------------------------------------------------ |
| `site.ts`          | Name, address, phones, email, social links, opening hours, site URL |
| `navigation.ts`    | Header and footer links, and the header button                      |
| `home.ts`          | Hero, the four pillars, the ecosystem section and its stats         |
| `about.ts`         | About intro and cards, purpose, who we teach, vision, commitments   |
| `program.ts`       | The two levels and their topics, certificate, philosophy, principles |
| `instruments.ts`   | The instrument carousel and the grid on Learning Experience         |
| `experience.ts`    | Learning Experience intro and the training-room photo gallery       |
| `faqs.ts`          | The questions on `/contact` — also emitted as FAQ structured data   |

Adding a program level, an instrument or an FAQ is just another entry in the
array; the pages, the carousel and the structured data all follow.

### Still to be confirmed by the client

These are deliberately absent rather than guessed, because publishing a wrong
figure is worse than publishing none. Each has a marked home in the content:

- **Fees, course duration and intake dates** — add to `admissionFacts` in
  `program.ts` and they appear as fact cards on `/program`. Also worth adding
  as FAQ entries: they are the most searched questions an institute gets.
- **Email domain** — supplied as `info@celiscollage.lk` while the site is
  `celiscollege.lk`. Confirm which is right (`site.ts`).
- **Opening hours** — currently a sensible default in `site.ts`.
- **Postal code and map coordinates** — `site.ts`; while `geo` is `null`, map
  links search the street address instead.
- **Social profile URLs** — empty in `site.ts`; empty ones are hidden.

### Adding photographs

Every image field is empty by default, and an empty field renders a soft
gradient placeholder instead of a broken image. To use a real photo:

1. Put the file in `public/images/` (e.g. `public/images/lab-bench.jpg`).
2. Set the path in the matching content file: `image: "/images/lab-bench.jpg"`.
3. Keep the `imageAlt` text accurate — it is read aloud by screen readers and
   used by image search.

Use landscape photos at roughly 1600×1000 or larger. Next.js converts them to
WebP/AVIF and resizes per device automatically.

## SEO

What is already in place:

- **Metadata on every page** — title, description, canonical URL, Open Graph
  and Twitter cards, built by `src/lib/seo.ts`.
- **Structured data** (`src/lib/schema.ts`) — `CollegeOrUniversity` with the
  address and both phone numbers, `WebSite`, `Course` with both levels and the
  topics they teach, `FAQPage` on `/contact`, and `BreadcrumbList` on inner
  pages. Fields with no confirmed value are omitted, never guessed.
- **`/sitemap.xml`** generated from the navigation, and **`/robots.txt`**.
- **Social share card** generated at `/opengraph-image` (1200×630).
- Semantic headings (one `<h1>` per page), skip link, focus styles, alt text.
- Static prerendering, so every page is HTML on first byte.

After the first deploy:

1. Set `NEXT_PUBLIC_SITE_URL=https://celiscollege.lk` in `.env` — canonical
   URLs, the sitemap and OG tags are all derived from it.
2. Add the site to [Google Search Console](https://search.google.com/search-console),
   verify it (put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`), and
   submit `https://celiscollege.lk/sitemap.xml`.
3. Create a Google Business Profile for the campus address — for a local
   institute this drives more traffic than anything on the site itself.
4. Check the structured data with the
   [Rich Results Test](https://search.google.com/test/rich-results).
5. Keep every claim on the site verifiable — the stats in `home.ts` are read
   as statements about the college.

## Enquiry form

`POST /api/contact` validates the submission, rejects bots with a honeypot
field, rate-limits to 5 per IP per 10 minutes, and appends every enquiry to
`data/submissions.jsonl`. If `SMTP_HOST` is set in `.env` it also emails
`CONTACT_TO`; if mail fails, the file still has the record.

`data/submissions.jsonl` is gitignored and must be writable by the service user.

The standalone `server.js` chdirs into `.next/standalone`, which `npm run build`
wipes, so `deploy.sh` symlinks `.next/standalone/data` to the project's `data/`
directory. Enquiries therefore survive deploys.

## Deploying to the Debian VPS

The site runs on the VPS as a **pm2** process named `celiscollege`, listening on
`127.0.0.1:3002`, with nginx terminating TLS and proxying to it. (pm2 is what the
other sites on this host use; `deploy/celiscollege.service` is a systemd unit for
hosts that prefer systemd instead — it is not in use here.)

One-time setup, as root:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs nginx
npm i -g npm pm2

mkdir -p /var/www/celiscollege.lk
# copy or git clone the project into that directory
cd /var/www/celiscollege.lk
cp .env.example .env && nano .env      # set the site URL and SMTP details

cp deploy/nginx.conf /etc/nginx/sites-available/celiscollege.lk
ln -s /etc/nginx/sites-available/celiscollege.lk /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

apt install -y certbot python3-certbot-nginx
certbot --nginx -d celiscollege.lk -d www.celiscollege.lk

pm2 startup        # so the app comes back after a reboot
```

Then, for the first deploy and every one after:

```bash
cd /var/www/celiscollege.lk
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

`deploy.sh` installs, builds, assembles the standalone bundle, links the data
directory and restarts the pm2 process. Logs: `pm2 logs celiscollege`.
Status: `pm2 list`.

Point the DNS `A` record for `celiscollege.lk` (and `www`) at the VPS before
running certbot, or certificate issuance will fail.

## Notes

- The app listens on `127.0.0.1:3002` only; nginx terminates TLS and proxies to
  it. Do not expose port 3002 publicly. (3000 and 3001 are taken by the other
  sites on this host.)
- `next.config.ts` sets the security headers (HSTS, nosniff, frame options) and
  `output: "standalone"` for a small deploy bundle.
- Content changes require a rebuild (`./deploy/deploy.sh`) because the pages are
  statically prerendered.
