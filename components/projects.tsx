"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
const Projects = () => {
  const { ref } = useSectionInView("Work", 0.25);

  return (
    <motion.section ref={ref} id="work" className="scroll-mt-28 mb-28 mt-16">
      <SectionHeading>My Work </SectionHeading>
      <div>
        {projectsData.map((data, index) => (
          <Project key={index} {...data} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
