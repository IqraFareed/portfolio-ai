import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import Project from "./project";
const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects </SectionHeading>
      <div>
        {projectsData.map((data, index) => (
          <Project key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
