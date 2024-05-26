import image1 from "../images/wisdom.png";
import image2 from "../images/devJobs.png";

export const projectData = [
  {
    id: 1,
    title: "Wisdom Dictionary",
    description:
      "Wisdom Dictionary is a single page app thst allows users to search for word definitions, images, synonyms, antonyms, examples, audio pronunciation, and ability to add words to a favorites list.",
    techStack: ["React", "React Router", "React Hook", "Tailwind CSS"],
    sourceCode: "https://github.com/Aeeshadam/wisdom",
    demo: "https://wisdom-dictionary.netlify.app/",
    image: image1,
  },

  {
    id: 2,
    title: "Dev Jobs",
    description:
      "This project is a job board app, built as a challenge from Frontend Mentor with additional features implemented such as authentication and ability to post and delete jobs.",
    techStack: [
      "React",
      "React Router",
      "React Hook",
      "Styled Components",
      "Context API",
      "Firebase",
    ],
    sourceCode: "https://github.com/Aeeshadam/devjobs",
    demo: "https://devvjobs.netlify.app/",
    image: image2,
  },
];
