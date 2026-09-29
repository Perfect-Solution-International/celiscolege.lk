/**
 * Home page copy.
 *
 * IMAGES: every `image` field is a path under /public. Leave it as an empty
 * string and the component renders a soft gradient placeholder instead - so an
 * unfinished photo never shows as a broken image. Drop your photo in
 * `public/images/` and set the path here (e.g. "/images/hero.jpg").
 */

export const hero = {
  eyebrow: "Institute of Biomedical Engineering Technology",
  /** The headline is split so the last phrase can be highlighted in blue. */
  title: "Empowering Professionals.",
  titleAccent: "Advancing Healthcare Technology.",
  subtitle: "Learn. Practice. Build.",
  body: "CELIS College is a professional education and skills-development institution focused on Biomedical Engineering, Healthcare Technology, and Medical Laboratory Instruments. Build industry-ready capability through practical, technical learning.",
  primaryCta: { href: "/program", label: "Explore Our Program" },
  secondaryCta: { href: "/learning-experience", label: "See How You Will Learn" },
  /** Three short words stacked over the hero image. */
  overlayWords: ["Precision", "People", "Better Healthcare"],
  /** Vertical label at the top right of the hero. */
  sideLabel: "Medical technology education for a brighter tomorrow",
  image: "/images/hero-scientific-discovery.jpg",
  imageAlt: "Revolutionizing scientific discovery in medical laboratory technology",
};

/** The four pills directly under the hero. */
export const pillars = [
  {
    icon: "graduation",
    title: "Professional Education",
  },
  {
    icon: "gear",
    title: "Practical Training",
  },
  {
    icon: "chart",
    title: "Industry Relevant Skills",
  },
  {
    icon: "heart",
    title: "Better Healthcare",
  },
] as const;

export const pillarsCta = {
  title: "Your Future in Healthcare Technology Starts Here.",
  href: "/contact#enquiry",
};

/** The full-width section near the foot of the home page. */
export const ecosystem = {
  title: "A stronger biomedical engineering ecosystem for Sri Lanka",
  body: "Through education, practical training, and collaboration, we contribute to a better and healthier tomorrow.",
  cta: { href: "/about", label: "Be Part of Our Journey" },
  sideLabel: ["People", "Knowledge", "Innovation", "Healthcare"],
  closing: {
    title: "Learn. Practice. Build Your Career.",
    href: "/contact#enquiry",
  },
  image: "/images/celis-instrument-room.jpg",
  imageAlt: "Medical laboratory instruments in the CELIS College training room",
  /** Keep these honest and current - they are read as claims about the school. */
  stats: [
    { value: "100+", label: "Trained Professionals", icon: "users" },
    { value: "Modern", label: "Learning Facilities", icon: "building" },
    { value: "Industry", label: "Relevant Education", icon: "chart" },
    { value: "Brighter", label: "Healthcare Future", icon: "heart" },
  ],
};

/**
 * "What we focus on" - the four subject areas introduced on the home page,
 * each expanded on its own page. Copy is drawn from the About Us and Our
 * Courses material, kept short here because these are introductions.
 */
export const focusAreas = {
  eyebrow: "What we focus on",
  title: "Four things every CELIS learner works with",
  areas: [
    {
      icon: "heart",
      title: "Healthcare Technology",
      body: "Modern healthcare runs on technology. Diagnostic analyzers, monitoring systems, laboratory instruments and critical-care equipment all have to work safely and reliably before care can be delivered.",
      href: "/about",
    },
    {
      icon: "gear",
      title: "Biomedical Engineering",
      body: "Biomedical Engineering connects engineering knowledge with healthcare technology - understanding how medical equipment works, and maintaining, troubleshooting and servicing it so it keeps performing.",
      href: "/about",
    },
    {
      icon: "document",
      title: "Medical Laboratory Instruments",
      body: "Our current academic focus. Learners develop the knowledge and technical skills needed to understand laboratory instruments and meet their service requirements.",
      href: "/learning-experience",
    },
    {
      icon: "graduation",
      title: "Professional Learning",
      body: "We focus on practical, industry-oriented learning rather than theory alone, helping learners build technical knowledge, problem-solving ability and professional confidence.",
      href: "/program",
    },
  ],
} as const;

/** Photo gallery shown under the "Learn. Practice. Build." principles section. */
export const learningGallery = {
  eyebrow: "Inside CELIS College",
  title: "Learning, in the room where it happens",
  body: "A look at our learners and instructors at work with real medical laboratory instruments.",
  images: Array.from({ length: 15 }, (_, i) => ({
    src: `/images/learning-gallery/learning-gallery-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: "CELIS College learners and instructors working with medical laboratory instruments",
  })),
};

/** Career development and certification, introduced side by side. */
export const homeClosing = {
  career: {
    icon: "chart",
    eyebrow: "Career development",
    title: "A structured path into equipment service",
    body: "Whether you are starting your journey in Biomedical Engineering or looking to strengthen existing technical skills, the program provides a structured pathway to develop your knowledge in Medical Laboratory Instrument Service.",
    cta: { href: "/program", label: "See the pathway" },
  },
  certification: {
    icon: "certificate",
    eyebrow: "Professional certification",
    title: "CELIS College Service Professional Certificate",
    body: "The Standard and Advanced levels form one complete professional learning pathway. On successful completion of both, learners are awarded the Service Professional Certificate from CELIS College.",
    cta: { href: "/program#certificate", label: "About the certificate" },
  },
} as const;
