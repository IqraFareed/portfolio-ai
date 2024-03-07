import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import code from "@/public/code.jpg";
import matrix from "@/public/matrix-356024_1280.webp";
import coding from "@/public/coding.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    title: "React js developer",
    company: "Naxxa consulting",
    description:
      "In my last year of univeristy I started my internship in Naxxa consulting and then promoted to Associate engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2022",
  },
  {
    title: "Front-End Developer",
    company: "Qisst pay",
    description:
      " Worked on the Merchant portal, a CMS handling various operations and data records.Collaborated on the 1-click-checkout and Askari Mall ecommerce website",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Front end Developer",
    company: "App in snap",
    description:
      "Worked on projects such as Mediko, Car Parking, Car Sharing Web application, and JS Remittance App.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "J-ace",
    description:
      "I worked as a react-js developer on this home remitance application where the remittance will be delivered to home of beneficiary.",
    tags: ["React", "Next.js", "Material-UI", "RTK", "Axios"],
    imageUrl: code,
  },
  {
    title: "Merchant Portal",
    description:
      "It's a rich project basically handles all the data and functionalties related to the merchants associated with qisstpay ",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux Toolkit",
      "Context Api",
    ],
    imageUrl: matrix,
  },
  {
    title: "Tely Md",
    description:
      "A public web app for Online medical consult . It connects doctors and pateints remotely. It's a new way of medicie",
    tags: ["React", "Material ui", "Redux", "Tailwind", "Framer"],
    imageUrl: coding,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL APIS",
  "REST APIS",
  "Framer Motion",
  " Agile Methodologies",
] as const;
