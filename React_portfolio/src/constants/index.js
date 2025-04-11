import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  genetec,
  ipath,
  shriominfotech,
  concordia,
  lj,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Genetec",
    icon: genetec,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Architected and maintained scalable, high-performance microservices using .NET Core/C# and Angular/TypeScript.",
      "Implemented event-driven architecture using Azure Service Bus and Event Hubs for efficient inter-service communication.",
      "Engineered optimized data storage strategies with Elastic Cloud for enhanced system performance and resilience.",
      "Automated CI/CD pipelines using Azure DevOps and Terraform, streamlining deployment workflows.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "iPath Solutions",
    icon: ipath,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2023",
    points: [
      "Designed and developed scalable web applications using ASP.NET MVC, ASP.NET Core, and Angular.",
      "Enhanced system performance by optimizing database queries and stored procedures in MSSQL and PostgreSQL.",
      "Led code reviews and implemented performance optimizations to ensure faster, more responsive application experiences.",
      "Collaborated with cross-functional teams to ensure the robustness and maintainability of software solutions.",
    ],
  },
  {
    title: "Jr ASP.Net Developer",
    company_name: "Shri OM Infotech",
    icon: shriominfotech,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Designed and engineered advanced web systems leveraging ASP.NET MVC, integrating backend services with front-end technologies including JavaScript, jQuery, and Bootstrap.",
      "Integrated RESTful APIs into applications, enhancing functionality and user experience.",
      "Designed high-performance C# applications with optimized asynchronous and multi-threaded algorithms, reducing processing time by 30%.",
      "Collaborated with the team to ensure effective communication between front-end and back-end systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const education = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Concordia University",
    icon: concordia,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - June 2025 (Expected)",
    points: [
      "GPA: 3.54/4.30",
      "Relevant Courses: Distributed System Design, Programming and Problem Solving, Computer Networks.",
      "Engaged in academic projects involving distributed systems, stream processing with Kafka & Flink, and full-stack development.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Gujarat Technological University",
    icon: lj,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - June 2021",
    points: [
      "GPA: 8.94/10.0",
      "Relevant Courses: Data Structures, Programming and Problem Solving, Theory of Computation.",
      "Completed multiple projects, including a Risk board game and system hardware simulations.",
    ],
  },
];

export { services, experiences, testimonials, projects, education };
