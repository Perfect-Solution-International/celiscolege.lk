/** Copy for the About Us page and the "About CELIS" block on the home page. */

export const aboutIntro = {
  eyebrow: "About CELIS",
  title: "Empowering Professionals.",
  titleSecondLine: "Advancing Healthcare Technology.",
  body: "CELIS College is a professional education and skills-development institution dedicated to building competent, industry-ready professionals in Biomedical Engineering, Healthcare Technology, and related technical fields.",
  cta: { href: "/about", label: "Discover Our Story" },
};

/** The four glass cards beside the About intro (from the approved design). */
export const aboutPillars = [
  {
    icon: "target",
    title: "Our Purpose",
    body: "To develop skilled Biomedical Engineering Service Professionals.",
  },
  {
    icon: "eye",
    title: "Our Vision",
    body: "A stronger Biomedical Engineering ecosystem in Sri Lanka.",
  },
  {
    icon: "users",
    title: "Our Commitment",
    body: "Practical learning, industry relevance, continuous development and professional responsibility.",
  },
  {
    icon: "chart",
    title: "Our Impact",
    body: "Building the next generation of Biomedical Engineering professionals for better healthcare.",
  },
] as const;

/** The opening of /about, under the page title. */
export const aboutLead = [
  "We believe that effective healthcare depends not only on medical professionals, but also on the people who ensure that healthcare technology works safely, reliably, and efficiently. From diagnostic laboratory analyzers and patient-monitoring systems to critical-care equipment and advanced medical technologies, biomedical equipment plays an essential role in modern healthcare.",
  "At CELIS College, our mission is to bridge the gap between theory and real-world technical practice by providing practical, industry-oriented learning that helps students and working professionals develop the knowledge, skills, and confidence required to work with healthcare technology.",
];

export const purpose = {
  title: "Our Purpose",
  paragraphs: [
    "CELIS College was established with a clear purpose: to develop skilled Biomedical Engineering Service Professionals who can contribute meaningfully to the healthcare sector.",
    "Our learning approach focuses on understanding how medical equipment works, how to identify and troubleshoot technical problems, how to approach preventive and corrective maintenance, and most importantly, how to work with healthcare technology responsibly and professionally.",
    "We aim to create an environment where learners do not simply memorize technical concepts. Instead, they are encouraged to understand, practice, troubleshoot, and continuously improve.",
  ],
  image: "/images/celis-lecture-instrument-room.jpg",
  imageAlt:
    "CELIS College instructor teaching in front of laboratory instruments in the training room",
};

export const whatWeDo = {
  title: "What We Do",
  intro:
    "We provide professional and practical learning opportunities designed for:",
  audience: [
    "Students interested in Biomedical Engineering and Healthcare Technology",
    "Biomedical Engineering and technical service professionals",
    "Electronics and electrical engineering professionals",
    "Medical equipment service personnel",
    "Healthcare technology enthusiasts",
    "Professionals looking to develop or transition their careers into the biomedical field",
  ],
  closing:
    "Our programs are designed to connect fundamental engineering principles with real healthcare applications, helping learners understand both the technology and the service environment in which it operates.",
  /** Decorative, washed-out photo behind the section. */
  background: "/images/stock-bg-circuit-board.jpg",
};

export const vision = {
  title: "Our Vision",
  paragraphs: [
    "Our vision extends beyond conducting individual courses.",
    "We aspire to contribute to the development of a strong and professional Biomedical Engineering ecosystem in Sri Lanka, where skilled professionals, quality education, practical training, and healthcare technology come together to support better healthcare delivery.",
    "As CELIS College grows, we envision developing into a leading institution for Biomedical Engineering education and professional development, while creating opportunities for learners to continuously learn, practice, and build their careers.",
  ],
  image: "/images/stock-operating-room.jpg",
  imageAlt:
    "Modern hospital operating room with a surgical light, operating table and equipment cabinets",
};

/** Decorative, washed-out photo behind the "Our Commitment" section. */
export const commitmentsBackground = "/images/stock-bg-hospital-corridor.jpg";

/** "Our Commitment" - the five things the college commits to. */
export const commitments = [
  {
    icon: "gear",
    title: "Practical Learning",
    body: "We emphasize hands-on understanding and real-world application rather than theory alone.",
  },
  {
    icon: "graduation",
    title: "Professional Development",
    body: "We help learners build technical knowledge, problem-solving abilities, and professional confidence.",
  },
  {
    icon: "chart",
    title: "Industry Relevance",
    body: "Our learning content is designed around the technologies, challenges, and service practices encountered in real healthcare environments.",
  },
  {
    icon: "eye",
    title: "Continuous Learning",
    body: "Healthcare technology is constantly evolving. We encourage our learners to remain curious, adaptable, and committed to lifelong learning.",
  },
  {
    icon: "heart",
    title: "Professional Responsibility",
    body: "Biomedical equipment directly supports patient care. We therefore promote accuracy, safety, ethics, accountability, and professional responsibility in every aspect of our training.",
  },
] as const;

export const future = {
  title: "Building the Future of Biomedical Engineering",
  paragraphs: [
    "We see CELIS College as more than an education provider. We see it as a community of learners, engineers, technicians, educators, and healthcare technology professionals working toward a common goal.",
    "Our journey is only beginning.",
    "Through education, practical training, professional collaboration, and continuous innovation, CELIS College aims to play a meaningful role in developing the next generation of Biomedical Engineering Service Professionals and strengthening healthcare technology capabilities in Sri Lanka.",
  ],
  image: "/images/stock-ecg-monitor.jpg",
  imageAlt: "Cardiac monitor displaying a live ECG trace in a hospital room",
};
