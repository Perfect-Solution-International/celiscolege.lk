"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowRightIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Container, cn } from "@/components/ui";
import { headerCta, primaryNav } from "@/content/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        (scrolled || open) && "bg-white/85 shadow-sm backdrop-blur-xl",
      )}
    >
      <Container className="flex min-h-16 items-center gap-3 py-2.5 sm:min-h-20 sm:gap-4 sm:py-3">
        <Logo className="mr-auto min-w-0" />

        {/* Floating glass pill - the navigation shape from the design. */}
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="glass flex items-center gap-1 rounded-full p-1.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "bg-gradient-to-r from-brand to-brand-dark text-white shadow-[var(--shadow-pill)]"
                      : "text-ink/80 hover:bg-white hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/program"
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-white hover:text-brand"
                aria-label="Find a program"
              >
                <SearchIcon className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href={headerCta.href}
          className="group hidden shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-pill)] transition-colors hover:from-brand-dark hover:to-brand-dark xl:inline-flex"
        >
          {headerCta.label}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink sm:h-11 sm:w-11 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 -z-10 bg-ink/20 backdrop-blur-sm sm:top-20 xl:hidden"
          />
          <Container className="xl:hidden">
          <div
            id="mobile-nav"
            className="glass-strong mb-3 max-h-[calc(100dvh-5.75rem)] overflow-y-auto rounded-3xl p-3 shadow-2xl"
          >
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 hover:bg-white"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium",
                      isActive(item.href)
                        ? "bg-gradient-to-r from-brand to-brand-dark text-white"
                        : "text-ink hover:bg-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={headerCta.href}
              className="mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand to-brand-dark px-5 py-3.5 text-sm font-semibold text-white"
            >
              {headerCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          </Container>
        </>
      ) : null}
    </header>
  );
}
