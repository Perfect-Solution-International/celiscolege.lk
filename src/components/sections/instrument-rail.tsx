"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { Media } from "@/components/media";
import { ArrowBadge, cn } from "@/components/ui";
import type { Instrument } from "@/content/instruments";

/**
 * Horizontally scrolling instrument carousel. Scrolls natively (so it works
 * with touch, trackpads and keyboards); the round buttons just nudge it.
 */
export function InstrumentRail({ instruments }: { instruments: Instrument[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      rail.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const nudge = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    // Scroll by roughly one card plus its gap.
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.55), behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <RailButton
        side="left"
        disabled={atStart}
        onClick={() => nudge(-1)}
        label="Previous instruments"
      />
      <RailButton
        side="right"
        disabled={atEnd}
        onClick={() => nudge(1)}
        label="Next instruments"
      />

      <ul ref={railRef} className="rail flex gap-4 overflow-x-auto pb-2">
        {instruments.map((instrument) => (
          <li
            key={instrument.slug}
            className="w-[72%] shrink-0 sm:w-[46%] lg:w-[23%] xl:w-[18.5%]"
          >
            <Link
              href={`/learning-experience#${instrument.slug}`}
              className="group glass flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-transform duration-200 hover:-translate-y-1"
            >
              <Media
                src={instrument.image}
                alt={instrument.imageAlt}
                accent={instrument.accent}
                sizes="(min-width: 1024px) 22vw, 70vw"
                className="aspect-[4/3] w-full"
              />
              <div className="flex flex-1 items-center gap-3 px-4 py-4">
                <span className="text-sm font-semibold leading-snug text-ink">
                  {instrument.name}
                </span>
                <ArrowBadge className="ml-auto h-8 w-8" label={instrument.name} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RailButton({
  side,
  disabled,
  onClick,
  label,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "absolute top-[38%] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white shadow-[var(--shadow-pill)] transition-opacity duration-200 sm:flex",
        side === "left" ? "-left-3 lg:-left-5" : "-right-3 lg:-right-5",
        disabled && "pointer-events-none opacity-0",
      )}
    >
      <ArrowRightIcon
        className={cn("h-4 w-4", side === "left" && "rotate-180")}
        aria-hidden
      />
    </button>
  );
}
