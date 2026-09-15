import { Media } from "@/components/media";
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
      <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[#061a3d] shadow-[var(--shadow-panel)]">
        <div className="grid lg:h-[35rem] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="order-2 relative flex items-center lg:order-1">
            <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
            <Container className="relative py-9 sm:py-12 lg:pr-8 xl:pr-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
                    {hero.eyebrow}
                  </p>
                </div>

                <h1 className="mt-5 font-display text-[2.45rem] leading-[1.01] tracking-[-0.025em] text-white text-balance sm:text-5xl lg:text-[3.45rem]">
                  {hero.title}{" "}
                  <span className="text-sky-300">{hero.titleAccent}</span>
                </h1>
                <p className="mt-5 font-display text-lg text-white sm:text-xl">
                  {hero.subtitle}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/75">
                  {hero.body}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href={hero.primaryCta.href} className="justify-center bg-white text-ink shadow-xl hover:bg-sky-100">
                    {hero.primaryCta.label}
                  </Button>
                  <Button href={hero.secondaryCta.href} variant="ghost" className="justify-center border-white/25 bg-white/10 text-white hover:bg-white/15">
                    {hero.secondaryCta.label}
                  </Button>
                </div>

                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[0.7rem] text-blue-100/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </div>

          <div className="order-1 relative h-64 sm:h-80 lg:order-2 lg:h-full">
            <Media
              src={hero.image}
              alt={hero.imageAlt}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#061a3d]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#061a3d]/35 lg:to-transparent" />
            <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-[#061a3d]/75 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:bottom-6 sm:right-6">
              <p className="text-sm font-semibold">Professional pathway</p>
              <p className="mt-1 text-[0.65rem] text-sky-200">Learn · Practice · Build</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
