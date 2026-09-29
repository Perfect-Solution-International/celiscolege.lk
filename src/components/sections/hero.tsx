import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { Button, Container } from "@/components/ui";
import { hero } from "@/content/home";

const highlights = [
  "Practical learning",
  "Medical laboratory instruments",
  "Standard → Advanced",
] as const;

export function Hero() {
  return (
    <section className="px-3 pt-2 sm:px-4">
      <div className="relative isolate min-h-[34rem] overflow-hidden rounded-[var(--radius-panel)] bg-[#061a3d] shadow-[var(--shadow-panel)] lg:h-[35rem] lg:min-h-0">
        <Media
          src={hero.image}
          alt={hero.imageAlt}
          priority
          sizes="100vw"
          className="absolute inset-0 opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#061a3d]/85 via-[#061a3d]/55 to-[#061a3d]/25 lg:bg-gradient-to-r lg:from-[#061a3d]/92 lg:via-[#061a3d]/55 lg:to-[#061a3d]/15"
        />
        <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />

        <Container className="relative flex h-full items-center py-7 sm:py-12">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 font-display text-[2.1rem] leading-[1.02] tracking-[-0.025em] text-white text-balance sm:mt-5 sm:text-5xl lg:text-[3.45rem]">
              {hero.title}{" "}
              <span className="text-sky-300">{hero.titleAccent}</span>
            </h1>
            <p className="mt-4 font-display text-lg text-white sm:mt-5 sm:text-xl">
              {hero.subtitle}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/75">
              {hero.body}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
              <Button href={hero.primaryCta.href} className="justify-center bg-white text-ink shadow-xl hover:bg-sky-100">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost" className="justify-center border-white/25 bg-white/10 text-white hover:bg-white/15">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 sm:mt-7 sm:flex">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.7rem] text-blue-100/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>

        <div className="absolute bottom-3 right-3 rounded-xl border border-white/20 bg-[#061a3d]/75 px-3 py-2.5 text-white shadow-xl backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-4 sm:py-3">
          <p className="text-sm font-semibold">Professional pathway</p>
          <p className="mt-1 text-[0.65rem] text-sky-200">Learn · Practice · Build</p>
        </div>
      </div>
    </section>
  );
}
