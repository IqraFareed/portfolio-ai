import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import Project from "./project";
const Projects = () => {
  return (
    <section>
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
