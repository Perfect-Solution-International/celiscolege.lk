/**
 * Questions shown on /contact and emitted as FAQPage structured data,
 * which is what makes them eligible to appear under the search result.
 *
 * Every answer here comes from the client's own copy. The questions people
 * actually search for most - fee, course length, intake dates - are missing
 * because those details were not supplied. Add them here once confirmed:
 * they are the highest-value FAQ entries you can have.
 */

export const faqs = [
  {
    question: "What does CELIS College teach?",
    answer:
      "Our current academic focus is Medical Laboratory Instruments and Healthcare Technology. The flagship program is the Biomedical Engineering Service Professional Program, which prepares learners for a career in Biomedical Engineering Equipment Service.",
  },
  {
    question: "How is the Service Professional Program structured?",
    answer:
      "It is a two-level pathway. Service Professional - Standard builds the foundation, and Service Professional - Advanced develops advanced diagnostic and service skills. Completing both levels leads to the CELIS College Service Professional Certificate.",
  },
  {
    question: "Who is the program designed for?",
    answer:
      "Students interested in Biomedical Engineering and Healthcare Technology, biomedical and technical service professionals, electronics and electrical engineering professionals, medical equipment service personnel, and anyone looking to move into the biomedical field.",
  },
  {
    question: "What is covered in the Standard level?",
    answer:
      "Fundamentals of Biomedical Engineering, medical laboratory instruments, electrical and electronic fundamentals, instrument components and systems, operating principles, sensors, fluidics and mechanical systems, preventive maintenance, basic troubleshooting, and safety and professional service practices.",
  },
  {
    question: "What is covered in the Advanced level?",
    answer:
      "Advanced instrument systems and operating principles, advanced troubleshooting, fault diagnosis, system-level analysis, electronic and mechanical fault finding, error and alarm analysis, preventive and corrective maintenance, service procedures, technical documentation and root-cause analysis.",
  },
  {
    question: "Which instruments does the program cover?",
    answer:
      "Hematology analyzers, clinical chemistry analyzers, immunoassay analyzers, electrolyte analyzers, laboratory centrifuges, microscopy systems, sample processing equipment and other medical laboratory instruments.",
  },
  {
    question: "What qualification do learners receive?",
    answer:
      "On successful completion of both the Standard and Advanced programs, learners are awarded the Service Professional Certificate from CELIS College.",
  },
  {
    question: "Where is CELIS College located?",
    answer:
      "Celis College (Pvt) Ltd is at 494, Galle Road, Nalluruwa, Panadura, Sri Lanka. You can call 038 22 57 657 or 074 415 4431, or send an enquiry through the form on this page.",
  },
] as const;
