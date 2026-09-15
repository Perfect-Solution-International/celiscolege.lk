/**
 * Copy for /learning-experience.
 *
 * The teaching philosophy and the Learn / Practice / Build principles live in
 * `program.ts`, since they belong to the program itself and are reused here.
 */

export const experienceIntro = {
  eyebrow: "Learning Experience",
  title: "Learn how the instrument works,",
  titleSecondLine: "not just how to operate it.",
  body: "Our learning approach focuses on understanding how medical equipment works, how to identify and troubleshoot technical problems, how to approach preventive and corrective maintenance, and most importantly, how to work with healthcare technology responsibly and professionally.",
  closing:
    "We aim to create an environment where learners do not simply memorize technical concepts. Instead, they are encouraged to understand, practice, troubleshoot, and continuously improve.",
  /** Optional video for the "Watch Video" button (YouTube/Vimeo URL). */
  videoUrl: "",
};

/**
 * Photographs of the instrument training room.
 *
 * TO ENABLE: save the client's photos in `public/images/` using the file names
 * in each comment below, then replace the empty string with that path.
 * While a path is empty the card shows a gradient placeholder, not a break.
 */
export const gallery = [
  {
    image: "/images/celis-analyzer-bench.jpg",
    alt: "Clinical chemistry and immunoassay analyzers set up along the training bench",
    caption: "Analyzers set up as working service benches",
  },
  {
    image: "/images/celis-training-lab.jpg",
    alt: "The CELIS College instrument training room with service tools laid out",
    caption: "Service tools laid out for practical sessions",
  },
  {
    image: "/images/celis-instrument-room.jpg",
    alt: "Racks of medical laboratory instruments in the CELIS College training room",
    caption: "A range of instruments available for training",
  },
] as const;
