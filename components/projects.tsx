"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <motion.section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects </SectionHeading>
      <div>
        {projectsData.map((data, index) => (
          <Project key={index} {...data} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
