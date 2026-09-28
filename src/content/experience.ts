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
 * Photographs from the CELIS College training room.
 *
 * TO SWAP A PHOTO: save the new file in `public/images/` and point the `image`
 * field at it. While a path is empty the card shows a gradient placeholder,
 * not a break.
 */
export const gallery = [
  {
    image: "/images/celis-lecture-instrument-room.jpg",
    alt: "A CELIS College lecturer teaching a class in the training room, with laboratory analyzers along the back wall",
    caption: "Classes run in the instrument room, beside the analyzers",
  },
  {
    image: "/images/celis-medical-devices-lecture.jpg",
    alt: "A lecturer presenting a slide on medical equipment classification during a CELIS College session",
    caption: "Mapping the medical device landscape from the ground up",
  },
  {
    image: "/images/celis-classroom-session.jpg",
    alt: "Students seated in the CELIS College classroom during a session led by an instructor",
    caption: "Small groups, so every learner can ask and practise",
  },
] as const;
