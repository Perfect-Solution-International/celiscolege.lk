/** Primary navigation. Order here is the order in the header and the footer. */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/program", label: "Programs & Courses" },
  { href: "/learning-experience", label: "Student Experience" },
  { href: "/contact", label: "Contact & Apply" },
] as const;

/** The blue pill button at the right of the header. */
export const headerCta = {
  href: "/contact#enquiry",
  label: "Apply Now",
} as const;

export type NavItem = (typeof primaryNav)[number];
