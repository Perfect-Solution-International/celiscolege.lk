import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

export function GraduationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
      <path d="M21 9.5V15" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20h16" />
      <rect x="5.5" y="11" width="3.2" height="6" rx="1" />
      <rect x="10.4" y="7" width="3.2" height="10" rx="1" />
      <rect x="15.3" y="13" width="3.2" height="4" rx="1" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 8.3a4.1 4.1 0 0 1 7.5 2.3C19.5 15.6 12 20 12 20Z" />
      <path d="M8.2 12.4h2l1.1-1.8 1.3 3 1-1.2h2.2" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="m12 12 6-6M16.5 4.2 18 6l1.8 1.5" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="9" r="3" />
      <path d="M3.5 19a6 6 0 0 1 12 0" />
      <path d="M16.5 7.4a3 3 0 0 1 0 5.2M18 19a5.6 5.6 0 0 0-2.3-4.3" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V6.5L12 3l8 3.5V20" />
      <path d="M2.5 20h19" />
      <path d="M9 20v-4.2h6V20" />
      <path d="M8.5 9.5h2M13.5 9.5h2M8.5 12.6h2M13.5 12.6h2" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3.5" width="13" height="13.5" rx="2" />
      <path d="M7.5 8h6M7.5 11.2h4" />
      <circle cx="16.5" cy="17" r="3" />
      <path d="M14.8 19.3 14 22.5l2.5-1.3 2.5 1.3-.8-3.2" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5L13.5 3Z" />
      <path d="M13.5 3v5.5H19" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 6.8a1 1 0 0 1 1.5-.87l7.2 4.2a1 1 0 0 1 0 1.74l-7.2 4.2A1 1 0 0 1 9 15.2V6.8Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

/* Social marks are filled rather than stroked, to read at small sizes. */

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.63.07 4.81s0 3.56-.07 4.81c-.05 1.17-.25 1.8-.42 2.23a3.7 3.7 0 0 1-.89 1.38c-.42.42-.82.68-1.38.89-.42.17-1.06.37-2.23.42-1.25.06-1.63.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.89 3.7 3.7 0 0 1-.89-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.56 2.2 15.18 2.2 12s0-3.56.07-4.81c.05-1.17.25-1.8.42-2.23.21-.56.47-.96.89-1.38a3.7 3.7 0 0 1 1.38-.89c.42-.17 1.06-.37 2.23-.42C8.44 2.2 8.82 2.2 12 2.2Zm0 1.98c-3.13 0-3.5.01-4.73.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.23-.06-1.6-.07-4.73-.07Zm0 3.37a5.45 5.45 0 1 1 0 10.9 5.45 5.45 0 0 1 0-10.9Zm0 8.99a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm6.94-9.21a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.9v11.2H3.2V8.9h3.74Zm.24-3.46a2.11 2.11 0 1 1-4.22 0 2.11 2.11 0 0 1 4.22 0ZM20.8 13.9v6.2h-3.72v-5.77c0-1.45-.52-2.44-1.82-2.44-.99 0-1.58.67-1.84 1.31-.1.23-.12.55-.12.87v6.03H9.58s.05-9.78 0-10.79h3.72v1.53c.5-.76 1.38-1.85 3.36-1.85 2.45 0 4.14 1.6 4.14 5.04Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.83-1.84C18.15 4.9 12 4.9 12 4.9s-6.15 0-7.77.46A2.6 2.6 0 0 0 2.4 7.2 27.3 27.3 0 0 0 1.95 12c0 1.62.15 3.23.45 4.8a2.6 2.6 0 0 0 1.83 1.84c1.62.46 7.77.46 7.77.46s6.15 0 7.77-.46a2.6 2.6 0 0 0 1.83-1.84c.3-1.57.45-3.18.45-4.8 0-1.62-.15-3.23-.45-4.8ZM10.05 15V9l5.15 3-5.15 3Z" />
    </svg>
  );
}

/** Maps the `icon` strings used in the content files to components. */
export const iconMap = {
  graduation: GraduationIcon,
  gear: GearIcon,
  chart: ChartIcon,
  heart: HeartIcon,
  target: TargetIcon,
  eye: EyeIcon,
  users: UsersIcon,
  building: BuildingIcon,
  certificate: CertificateIcon,
  document: DocumentIcon,
} as const;

export type IconName = keyof typeof iconMap;
