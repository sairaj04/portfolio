import youtubeClone from "@/public/youtubeClone.jpeg";
import ecommerceApp from "@/public/ecommerceApp.jpeg";
import newsApp from "@/public/newsWebsite.jpeg";
import passwordGenerator from "@/public/passwordGenerator.jpeg";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PONNAIYAH RAMAJAYAM INSTITUTE OF SCIENCE & TECHNOLOGY",
    location: "Thanjavur, Tamil Nadu",
    description:
      "Graduated with a B.Tech degree in Electronics and Communication Engineering (ECE) ",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Front-end Developer Intern",
    location: "Multeway, India",
    description:
      "Completed a 6months Front-end Developer Internship at Multeway Technologies. Collaborated with experienced developers, contributing to real-world projects and refining my skills.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Feb 2024",
  },
] as const;

export const projectsData = [
  {
    title: "YouTube Clone",
    description:
      "A YouTube clone built with React.js.Utilized Firebase for authentication, real-time database, and video hosting.",
    tags: ["React.js", "Firebase"],
    imageUrl: youtubeClone,
  },
  {
    title: "Daily news",
    description: "A news app that fetches news from the News API.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: newsApp,
  },
  {
    title: "Ecommerce website",
    description: "An E-commerce website built with React.js",
    tags: ["React.js"],
    imageUrl: ecommerceApp,
  },
  {
    title: "Password Generator",
    description: "A password generator built with React.js",
    tags: ["Next.js", "Tailwind"],
    imageUrl: passwordGenerator,
  },
] as const;

export const skillsData = [
  "Html",
  "CSS",
  "Javascript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "Git",
  "Firebase",
] as const;
