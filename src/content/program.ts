/**
 * Our Courses / the Biomedical Engineering Service Professional Program.
 *
 * All copy here is the client's own. The two levels below drive the pathway
 * graphic on the home page, the whole of /program, and the Course structured
 * data Google reads - add a level and everything follows.
 *
 * Deliberately NOT stated anywhere: fees, course length and intake dates.
 * Add them to `admissionFacts` below once they are confirmed.
 */

export const coursesIntro = {
  eyebrow: "Our Courses",
  title: "Specialized Education in Medical Laboratory Instruments",
  paragraphs: [
    "At CELIS College, our current academic focus is Medical Laboratory Instruments and Healthcare Technology.",
    "We are committed to providing practical, industry-oriented education that helps students and professionals understand the technologies behind modern medical laboratory equipment and develop the skills needed for a career in Biomedical Engineering Equipment Service.",
    "Our flagship program is the Biomedical Engineering Service Professional Program, structured into two progressive levels to provide a clear pathway from foundational knowledge to advanced technical skills.",
  ],
};

export const program = {
  eyebrow: "Our Program",
  title: "Biomedical Engineering Service Professional Program",
  subtitle: "A Two-Level Professional Learning Pathway",
  /** 150-160 characters: the <meta name="description"> for /program. */
  metaDescription:
    "The CELIS College Biomedical Engineering Service Professional Program - a two-level pathway in medical laboratory instrument service, in Panadura, Sri Lanka.",
  summary:
    "Our flagship Service Professional Program is designed to progressively develop the knowledge, practical skills, and technical thinking required for professional service of medical laboratory instruments.",
  cta: { href: "/program", label: "View Program Details" },
  image: "/images/celis-analyzer-bench.jpg",
  imageAlt:
    "Medical laboratory analyzers on the CELIS College instrument training bench",
};

export type ProgramLevel = {
  /** Displayed as the large number on the pathway card. */
  number: string;
  slug: string;
  title: string;
  strapline: string;
  intro: string;
  /** The heading above the topic list, since the two levels word it differently. */
  topicsLabel: string;
  topics: string[];
  closing: string;
};

export const levels: ProgramLevel[] = [
  {
    number: "01",
    slug: "service-professional-standard",
    title: "Service Professional - Standard",
    strapline: "Build the Foundation",
    intro:
      "The Standard level establishes the essential foundation for working with medical laboratory instruments.",
    topicsLabel: "Learners are introduced to",
    topics: [
      "Fundamentals of Biomedical Engineering",
      "Medical Laboratory Instruments",
      "Electrical & Electronic Fundamentals",
      "Instrument Components and Systems",
      "Basic Operating Principles",
      "Sensors and Measurement Systems",
      "Fluidics and Mechanical Systems",
      "Preventive Maintenance",
      "Basic Troubleshooting",
      "Safety and Professional Service Practices",
    ],
    closing:
      "The Standard level is designed to help learners build a strong understanding of how laboratory instruments work and how their major systems interact.",
  },
  {
    number: "02",
    slug: "service-professional-advanced",
    title: "Service Professional - Advanced",
    strapline: "Develop Advanced Skills",
    intro:
      "The Advanced level builds upon the knowledge developed in the Standard program and takes learners deeper into the technical aspects of medical laboratory equipment service.",
    topicsLabel: "The program focuses on areas such as",
    topics: [
      "Advanced Instrument Systems",
      "Detailed Operating Principles",
      "Advanced Troubleshooting",
      "Fault Diagnosis",
      "System-Level Analysis",
      "Electronic and Mechanical Fault Finding",
      "Instrument Error and Alarm Analysis",
      "Preventive & Corrective Maintenance",
      "Service Procedures",
      "Technical Documentation",
      "Root-Cause Analysis",
      "Advanced Practical Applications",
      "Professional Equipment Service Practices",
    ],
    closing:
      "The Advanced level is designed to develop a more structured and analytical approach to diagnosing and resolving technical problems in medical laboratory instruments.",
  },
];

/** The dark card at the end of the pathway. */
export const certificate = {
  issuer: "CELIS College",
  title: "Service Professional Certificate",
  strapline: "Complete the Professional Pathway",
  body: "Upon successful completion of both the Standard and Advanced programs, learners will be awarded the Service Professional Certificate from CELIS College.",
  note: "The two levels form one complete professional learning pathway, allowing learners to progress step-by-step while building their technical knowledge and practical capabilities throughout the program.",
};

/** "Learn How the Instrument Works" - the questions that shape the teaching. */
export const learningPhilosophy = {
  eyebrow: "Learn How the Instrument Works",
  title:
    "A good service professional should understand more than how to operate an instrument.",
  intro: "Our learning philosophy encourages students to ask:",
  questions: [
    "How does the instrument work?",
    "How is the measurement produced?",
    "What happens inside the instrument?",
    "Why does a fault occur?",
    "How can the problem be diagnosed?",
    "How can the instrument be safely restored and verified?",
  ],
  closing:
    "This approach helps develop the technical thinking and problem-solving skills required in professional equipment service.",
};

/** "Learn. Practice. Build." - the three principles of the pathway. */
export const principles = [
  {
    key: "LEARN",
    icon: "graduation",
    body: "Develop a strong foundation in Biomedical Engineering and Medical Laboratory Instrumentation.",
  },
  {
    key: "PRACTICE",
    icon: "gear",
    body: "Connect theoretical knowledge with practical applications, instruments, technical examples, and troubleshooting situations.",
  },
  {
    key: "BUILD",
    icon: "chart",
    body: "Build the technical confidence, professional mindset, and knowledge needed to develop your career.",
  },
] as const;

export const pathClosing = {
  eyebrow: "Your Path to Becoming a Service Professional",
  body: "Whether you are starting your journey in Biomedical Engineering or looking to strengthen your existing technical skills, the CELIS College Service Professional Program provides a structured pathway to develop your knowledge in Medical Laboratory Instrument Service.",
  sign: "Developing the next generation of Medical Laboratory Equipment Service Professionals.",
};

/**
 * Practical admission details. Each entry appears as a fact card on /program.
 * Left empty on purpose - fees, duration and intake dates were not supplied.
 * Add entries like { label: "Duration", value: "6 months" } once confirmed.
 */
export const admissionFacts: { label: string; value: string; note?: string }[] = [];
