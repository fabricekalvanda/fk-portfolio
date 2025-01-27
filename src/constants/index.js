import project1 from "../assets/projects/hummingbird.png";
import project2 from "../assets/projects/theStreamApp.png";
import project3 from "../assets/projects/westAfricanCenter.png";

export const HERO_CONTENT = `I am a versatile software developer passionate about creating impactful mobile and web applications. With a strong foundation in programming and expertise in tools like React, Cypress, and CI/CD delivery. I combine technical skill with a commitment to delivering user-centric solutions.`;

export const ABOUT_TEXT = `I’m a dedicated developer originally from Congo, now based in Seattle since 2015. With a Bachelor’s in Mobile Application Development and an Associate Degree in Web Programming from Cascadia College, I’ve honed my ability to design and build applications that solve real-world problems.

Professionally, I’ve worked on diverse projects, including automation for quality assurance at Pacific Northwest National Laboratory and user-friendly interfaces for community-focused solutions. 

My passion for learning drives me to continuously expand my skill set, collaborate with innovative teams, and contribute to meaningful projects that make a difference.


`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: `Post Bach RA – App & Systems Testing`,
    company: "Pacific Northwest National Laboratory",
    description: `I have experience ensuring automation in the quality and performance of software applications using Cypress. Also, I provided web-based application support utilizing TypeScript and PostgreSQL. Throughout my work, I’ve honed my ability to communicate effectively within a team and under supervision to align on backend development processes. Additionally, I’ve collaborated closely with senior developers to maintain the quality of software products by adhering to industry best practices and standards.`,
    technologies: [
      "ReactJs",
      "Svelte",
      "Cypress",
      "Jest Expo",
      "Jira",
      "Bitbucket",
    ],
  },
  {
    year: "2019- 2020",
    role: "Frontend Developer Intern",
    company: "Precor",
    description: `I collaborated with graphic designers and team members to develop user interface applications for Precor’s web products, enhancing user experiences to help people achieve their health and fitness goals. I was responsible for implementing interfaces using CSS,and JavaScript in the ReactJs framework, while also identifying and leveraging opportunities for code reuse across platforms. Additionally, I worked alongside software engineers to develop, test, and review code, ensuring quality and efficient solutions.`,
    technologies: ["TypeScript", "ReactJs", "Unit Testing", "GitLab"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
];

export const PROJECTS = [
  {
    title: "Pollinator Pathway",
    image: project1,
    link:'https://github.com/orgs/MobileApps-Cascadia/repositories?q=pollinator',
    description:
      "The PNW Pollinator Pathway App is a versatile tool for pathway members, offering features like pollinator box registration via QR code, a live pathway map, member profiles, and chat functionality to enhance communication and engagement.",
    technologies: ["Java", "Swift", "Firebase"],
  },
  {
    title: "The Stream App",
    image: project2,
    link:'https://fabricekalvanda.com/thestreamapp/',
    description: `An applicaDeveloped a dynamic web application enabling users to view popular movies and create a favorites list. Integrated an API to display movie details, including posters, overviews, and ratings.`,
    technologies: ["HTML", "CSS", "PHP", "TMDB API", "MySQL"],
  },
  {
    title: "Gambian Talents Promotion Foundation",
    image: project3,
    link:'https://wawac.org/',
    description: `Worked on a team project to develop a website for a local non-profit organization to promote cultural diversity
    and community integration.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const CONTACT = {
  address: " Seattle Greater Area",
  phoneNo: "+1 (541) 701-9806",
  email: "contact@fabricekalvanda.com",
};
