import Image from "next/image";

import { cn } from "@/components/ui";

/**
 * Renders a photo when the content file has one, and a soft gradient panel
 * when it does not - so a site with no photography yet still looks finished
 * and never shows a broken image.
 *
 * To use a real photo: drop the file in `public/images/` and set the `image`
 * field in the matching content file to its path.
 */
export function Media({
  src,
  alt,
  className,
  accent = "from-sky-200 via-blue-100 to-indigo-200",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  children,
}: {
  src?: string;
  alt: string;
  className?: string;
  accent?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-blue", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <Placeholder accent={accent} label={alt} />
      )}
      {children}
    </div>
  );
}

function Placeholder({ accent, label }: { accent: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("absolute inset-0 bg-gradient-to-br", accent)}
    >
      {/* A faint grid and glow, so the empty state reads as deliberate. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white/50 to-transparent"
      />
    </div>
  );
}
