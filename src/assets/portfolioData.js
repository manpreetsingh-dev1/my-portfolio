import profileIllustration from "./me.jpg";
import projectCommerce from "./project-commerce.png";
import projectTaskFlow from "./project-taskflow.png";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics = [
  { label: "Projects Built", value: "2" },
  { label: "Tech Focus", value: "MERN" },
  { label: "Learning Mindset", value: "Daily" },
];

export const aboutHighlights = [
  "Strong focus on clean, responsive interfaces that feel fast and intuitive.",
  "Comfortable building full-stack applications with React, Node.js, Express, and MongoDB.",
  "Enjoy turning ideas into usable products while continuously improving code quality.",
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Creating responsive, accessible, and polished user experiences.",
    skills: [
      { name: "React", level: 92 },
      { name: "HTML", level: 96 },
      { name: "CSS", level: 94 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    description: "Building APIs, business logic, and scalable server-side workflows.",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express", level: 84 },
    ],
  },
  {
    title: "Database",
    description: "Designing and connecting data models for real-world applications.",
    skills: [{ name: "MongoDB", level: 82 }],
  },
];

export const projects = [
  {
    title: "J&K LUXE",
    description:
      "A modern MERN e-commerce platform with product discovery, cart flows, secure auth with OTP Verifications, and admin inventory management.",
    techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com/storefront-pro",
    githubUrl: "https://github.com/example/storefront-pro",
    image: projectCommerce,
  },
  {
    title: "Resume-Builder with AI Enhance",
    description:
      "A Resume Builder Platform Where User can Build Their Resume With AI Enhancing And With Profile Image with RemoveBackground with AI .",
    techStack: ["React", "Lucide-React","ImageKit", "Express", "MongoDB"],
    liveUrl: "https://example.com/taskflow-dashboard",
    githubUrl: "https://github.com/example/taskflow-dashboard",
    image: projectTaskFlow,
  },
  ];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/manpreet-singh-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manpreet-singh-dev" },
];

export const contactDetails = [
  { label: "Email", value: "manpreetvirdi271@email.com" },
  { label: "Location", value: "Punjab, India" },
  { label: "Availability", value: "Open to internships and junior developer roles" },
];

export const whatsappNumber = "918196937984";
export const profileImage = profileIllustration;
export const resumeFile = "/manpreet-singh-resume.pdf";
