/**
 * Medical laboratory instruments the Service Professional Program covers.
 * Rendered as the carousel on the home page and the grid on /learning-experience.
 * Each `image` is a path under /public; empty renders a gradient placeholder.
 */

export type Instrument = {
  slug: string;
  name: string;
  /** A short, factual line about what the instrument is. */
  summary: string;
  image: string;
  imageAlt: string;
  /** Tailwind gradient used for the placeholder artwork. */
  accent: string;
};

export const instruments: Instrument[] = [
  {
    slug: "hematology-analyzers",
    name: "Hematology Analyzers",
    summary:
      "Automated blood cell counting systems, and one of the highest-volume instruments in a clinical laboratory.",
    image: "/images/celis-hematology-analyzer.jpg",
    imageAlt: "A Mindray BC-2300 hematology analyzer on the CELIS College training bench",
    accent: "from-sky-400 to-blue-600",
  },
  {
    slug: "clinical-chemistry-analyzers",
    name: "Clinical Chemistry Analyzers",
    summary:
      "Photometric systems that measure enzymes, metabolites and other analytes in serum and plasma.",
    image: "/images/celis-chemistry-analyzer.jpg",
    imageAlt: "A CELIS College lecturer explaining a clinical chemistry analyzer to the class",
    accent: "from-cyan-400 to-sky-600",
  },
  {
    slug: "immunoassay-analyzers",
    name: "Immunoassay Analyzers",
    summary:
      "Platforms used for hormone, marker and infectious disease testing through immunoassay techniques.",
    image: "/images/celis-immunoassay-bench.jpg",
    imageAlt: "Analyzers and service workstations along the CELIS College training bench",
    accent: "from-indigo-400 to-blue-700",
  },
  {
    slug: "electrolyte-analyzers",
    name: "Electrolyte Analyzers",
    summary:
      "Ion-selective electrode systems that measure sodium, potassium, chloride and related electrolytes.",
    image: "/images/celis-electrolyte-analyzer.jpg",
    imageAlt: "A Miura One ISE analyzer in the CELIS College training room",
    accent: "from-blue-400 to-indigo-600",
  },
  {
    slug: "laboratory-centrifuges",
    name: "Laboratory Centrifuges",
    summary:
      "Sample separation equipment built around rotor balance, drive systems and safety interlocks.",
    image: "/images/celis-sample-prep-bench.jpg",
    imageAlt: "Sample preparation equipment and test instruments on the CELIS College bench",
    accent: "from-teal-400 to-cyan-600",
  },
  {
    slug: "microscopy-systems",
    name: "Microscopy Systems",
    summary:
      "Clinical microscopes and their illumination, optical and digital imaging subsystems.",
    image: "/images/celis-microscopes.jpg",
    imageAlt: "Clinical microscopes on the instrument rack in the CELIS College training room",
    accent: "from-sky-500 to-indigo-600",
  },
  {
    slug: "sample-processing-equipment",
    name: "Sample Processing Equipment",
    summary:
      "The preparation and handling equipment that keeps samples ready for analysis.",
    image: "/images/celis-analyzer-bench.jpg",
    imageAlt: "Medical laboratory analyzers arranged on the CELIS College training bench",
    accent: "from-blue-400 to-sky-600",
  },
  {
    slug: "other-laboratory-instruments",
    name: "Other Medical Laboratory Instruments",
    summary:
      "Additional instruments found across diagnostic laboratories, added to the program as it grows.",
    image: "/images/celis-instrument-rack.jpg",
    imageAlt: "Instrument racks holding laboratory equipment in the CELIS College training room",
    accent: "from-indigo-400 to-sky-600",
  },
];

export const instrumentsSection = {
  eyebrow: "Medical Laboratory Instruments",
  title: "Explore the Technology You Will Learn",
  /** Shown on /learning-experience above the grid. */
  intro:
    "Our Service Professional Program is currently focused on Medical Laboratory Instruments. Learners are encouraged to understand not only the purpose of each instrument, but also the engineering principles and systems that enable the instrument to perform its function.",
  cta: { href: "/learning-experience", label: "View Learning Experience" },
};

export function getInstrument(slug: string): Instrument | undefined {
  return instruments.find((instrument) => instrument.slug === slug);
}
