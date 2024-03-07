"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
const About = () => {
  // const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center 
      leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software engineering</span>, I decided to
        pursue my passion for programming.
        <span className="font-medium">
          and started working as a front end development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js</span>. I am also
        familiar with TypeScript . I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front end
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not codin`}g</span>, I enjoy reading
        books watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">data structure </span>.
      </p>
    </motion.section>
  );
};
export default About;
