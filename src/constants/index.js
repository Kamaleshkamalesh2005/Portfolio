import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextJs,
  nodejs,
  java,
  mysql,
  git,
  easwari,
  aptihealthWeb,
  zealWeb,
  rollWeb,
  linkedIn,
  github,
  leetcode,
  kalaivani,
  vybog,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Data Science",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Full-Stack Dev",
    icon: backend,
  },
  {
    title: "Computer Vision",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: nodejs, // Using Node.js icon as placeholder for Python if not available, or I could use backend.png
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "B.Tech – AI & Data Science",
    company_name: "Easwari Engineering College",
    company_website: "https://srmeaswari.ac.in/",
    icon: easwari,
    iconBg: "#E6DEDD",
    date: "Sep 2023 – May 2027 (Pursuing)",
    points: [
      "CGPA: 8.27 / 10",
      "Specializing in Artificial Intelligence and Data Science.",
      "Key coursework: Machine Learning, Deep Learning, Data Structures, Algorithms.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Kalaivani Logistics Pvt. Ltd.",
    company_website: "https://www.kvlpl.com/",
    icon: kalaivani,
    iconBg: "#E6DEDD",
    date: "Oct 2025 – Jan 2026",
    points: [
      "Built AI-driven logistics analytics platform.",
      "Developed REST APIs using Next.js.",
      "Implemented Excel upload, validation, SQL persistence.",
      "Created dashboards with charts and implemented JWT-based authentication.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "VyBog India Pvt. Ltd.",
    company_website: "https://vybog.com/",
    icon: vybog,
    iconBg: "#E6DEDD",
    date: "Dec 2024 – Jan 2025",
    points: [
      "Built resume parsing pipeline extracting structured data from 1000+ resumes.",
      "Developed resume–job matching using TF-IDF, Word2Vec, Cosine Similarity.",
      "Improved matching accuracy by ~25%.",
      "Evaluated models using precision, recall, F1-score.",
    ],
  },
];

const projects = [
  {
    name: "Academic Progress Tracking Platform",
    category: "Full-Stack Web Application",
    date: "Oct 2025",
    description: [
      "Architected scalable full-stack system with RBAC supporting 4 user tiers (Students, Teachers, Admins, SuperAdmin)",
      "Engineered secure JWT-based authentication with approval-driven onboarding workflow",
      "Developed progress tracking, goal management, and persistent state handling with real-time synchronization",
      "Built interactive analytics dashboards generating visual performance insights",
      "Optimized frontend rendering and API queries, reducing page load time by 40%"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "#",
  },
  {
    name: "Kidney Stone Detection from KUB X-Ray",
    category: "Machine Learning / Medical Computer Vision",
    date: "Nov 2025",
    description: [
      "Developed YOLOv8-nano model achieving mAP@0.5 of 0.85 (Precision: 0.89, Recall: 0.87) on 1,300+ images",
      "Optimized inference pipeline for real-time edge deployment (8-10ms per frame) with compact 6MB model",
      "Implemented 3-tier Explainable AI framework using Grad-CAM and attention mechanisms",
      "Automated severity scoring, reducing diagnostic review time by 66% (6 min → 2 min per case)",
      "Designed Flask backend API with production-ready inference pipeline for clinical integration"
    ],
    tags: [
      {
        name: "yolov8",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "gradcam",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "#",
  },
];

const personalInfo = {
  name: "Kamalesh B",
  fullName: "Kamalesh B",
  email: "kamalesh012005@gmail.com",
  mobile: "+91 93612 26676",
  role: "AI & Data Science Undergraduate",
  roleDetail: "AI & Data Science Undergraduate | Machine Learning & Full-Stack Developer",
  about: `AI and Data Science undergraduate with hands-on experience in Machine Learning, NLP, and Computer Vision. Experienced in building and deploying end-to-end AI systems such as resume parsers, job matching platforms, medical image analysis, and full-stack web applications. Skilled in Python, Java, JavaScript, and modern frameworks like React, Next.js, and TensorFlow. Passionate about solving complex problems through data-driven solutions and efficient software architecture.`,
  projectsIntro: `The projects below represent real-world applications of my skills in AI, Machine Learning, Computer Vision, and Full-Stack Development. They showcase my ability to design, develop, and deploy practical solutions while working with diverse technologies and solving complex technical challenges.`,
};

const publicUrls = {
  resume: "/Kamalesh_B_Resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/kamal-b-5a524932a",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Kamaleshkamalesh2005",
      icon: github,
    },
    leetcode: {
      title: "leetcode",
      link: "https://leetcode.com/u/Kamaleshkamalesh/",
      icon: leetcode,
    },
  },
};

const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    link: "https://drive.google.com/file/d/1HGhcDGVRERTeJCRQAeFJaXQUf4iHYpGb/view",
  },
  {
    name: "Machine Learning I – Columbia University",
    link: "https://drive.google.com/file/d/13OWiIHefDhwa6vAYSDp-QrnKwHA9ZGzA/view",
  },
  {
    name: "Python Essentials 1 – Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1CTdoYXfEXXz8obIns9YRthPRgzQFHI37/view",
  },
  {
    name: "Python Essentials 2 – Cisco Networking Academy",
    link: "https://drive.google.com/file/d/14l9BAzi1t2fuH90AvRiNmnSUDbaVasnY/view",
  },
];

const internships = [
  {
    name: "Machine Learning Internship – VyBog India Pvt. Ltd.",
    link: "https://drive.google.com/file/d/1_48gBHbvyuv3k6CNWs1FNp3vIH4gqeow/view",
  },
  {
    name: "Full-Stack Developer Internship – Kalaivani Logistics Pvt. Ltd.",
    link: "https://drive.google.com/file/d/1ceFIOb0VEtlORRgi1Z-LiNIIMshlbRFZ/view",
  },
];

const nptelCertifications = [
  {
    name: "Business Fundamentals and Entrepreneurs",
    link: "https://drive.google.com/file/d/1cr8o4kHXVJgbM1H5AX6bk9XouIhlruOv/view",
  },
  {
    name: "Entrepreneurship",
    link: "https://drive.google.com/file/d/16ejOV4GKPCTCHDOGYBNW82Z3qMz7Xtl6/view",
  },
  {
    name: "Introduction to Industry 4.0 and Industrial Internet of Things",
    link: "https://drive.google.com/file/d/1rjzxfEUkHXqSEDfRCL1iLzv3Ov_eAjcM/view",
  },
  {
    name: "Introduction to Large Language Models",
    link: "https://drive.google.com/file/d/1QN9mtKuIDUy3NVS5h17CyiJou7StLD3Z/view",
  },
];

const softSkills = [
  "Problem Solving & Analytical Thinking",
  "Clear Communication",
  "Team Collaboration",
  "Adaptability & Continuous Learning",
  "Time Management",
  "Ownership & Accountability",
  "Attention to Detail",
  "Presentation & Documentation Skills",
];

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
  certificates,
  internships,
  nptelCertifications,
  softSkills,
};
