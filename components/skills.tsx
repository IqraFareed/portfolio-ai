"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-full
             px-5 py-1 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
