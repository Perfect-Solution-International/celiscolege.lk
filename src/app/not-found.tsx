import type { Metadata } from "next";

import { Button, Container } from "@/components/ui";
import { primaryNav } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="px-3 py-20 sm:px-4">
      <Container className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-body">
          The link may be out of date. Here is everything else on the site.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Button href={item.href} variant="ghost" arrow={false}>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
