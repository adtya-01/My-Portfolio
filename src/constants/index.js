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
    acalvio,
    intense,
    defend,
    fit,
    tindog,
    threejs,
    portfolio
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Doodle|Pattern Artist",
      icon: backend,
    },
    {
      title: "LOGO Designer",
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
      title: "Front-end Developer",
      company_name: "Acalvio",
      icon: acalvio,
      iconBg: "#383E56",
      date: "March 2017 - Sep 2019",
      points: [
        "Worked on a variety of web application projects using React and Redux.",
        "Improved application performance through optimization and code refactoring.",
        "Contributed to the development of a comprehensive testing strategy using Jest and Enzyme.",
        "Worked in an agile development environment using Scrum methodologies.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Intense Technologies Ltd",
      icon: intense,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - May 2021",
      points: [
        "Developed real-time chat application using React, Socket.io.",
        "Utilized REST API for backend integration, worked in Kanban development methodology.",
        "Experienced with React components and functional JavaScript for SPAs and performance optimization.",
        "Used JIRA for bug tracking, Git for version control, managed CRUD operations using Microsoft SQL Server.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "HelpUsDefend",
      icon: defend,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Currently working on a social media/E-commerce Web application.",
        "Developed front-end components and implemented features using React, JavaScript, HTML, and CSSs.",
        "Collaborated with the development team to optimize performance and ensure accessibility across a range of devices.",
        "Contributed to the implementation of strong security protocols and data protection.",
      ],
    },
  
  ];
  

  
  const projects = [
    {
      name: "Exercise",
      description:
        "Quantum Fitness is a Gym Fitness App with the functionality to choose exercise categories, browse exercises with examples, exercise details and pull related videos from YouTube to display similar exercises.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: fit,
      source_code_link: "https://github.com/adtya-01/quantum-fitness",
      live_link: "https://quantumfitness.netlify.app/"
    },
    {
      name: "Dating",
      description:
        "Tindog is a simple web application built with HTML, CSS, and Bootstrap that allows users to browse and connect with other dog owners . It is a practice front-end webpage to practice the design aspects.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/adtya-01/TinDog",
      live_link: "https://adtya-01.github.io/TinDog/"
    },

    {
      name: "Portfolio",
      description:
        "A 3D portfolio of all my experiences and skillset using React.js, Tailwind, 3.js , with an About section, Experience section, Project section and contact section to get in touch with me.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "3.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/adtya-01/My-Portfolio",
      live_link: "https://my-3-portfolio.netlify.app/"
    },
    
  ];
  
  export { services, technologies, experiences, projects };
