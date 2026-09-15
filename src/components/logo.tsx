import Image from "next/image";
import Link from "next/link";

import { cn } from "@/components/ui";
import { site } from "@/content/site";

export function Logo({
  className,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex shrink-0 items-center rounded-sm focus-visible:outline-offset-4",
        className,
      )}
      aria-label={`${site.name} - home`}
    >
      <Image
        src="/celis-college-logo.png"
        alt={`${site.name} logo`}
        width={2003}
        height={785}
        priority
        sizes="(max-width: 639px) 124px, (max-width: 1279px) 150px, 168px"
        className="h-auto w-[7.75rem] object-contain sm:w-[9.375rem] xl:w-[10.5rem]"
      />
    </Link>
  );
}
