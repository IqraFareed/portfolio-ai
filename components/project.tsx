"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); //

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group border border-black/5 overflow-hidden w-[60vw] relative sm:h-[15rem] mb-3 sm:mb-8 last:mb-0 sm:pl-4
       hover:bg-gray-200 transtion rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:ml-[18rem]">
        <h3 className="text-2x font-semibold">{title}</h3>
        <div
          className="bg-black/[0.7] w-[4rem] px-3 py-1 mt-2 text-[0.7rem] uppercase tracking-wider
               text-white rounded-full dark:text-white/70"
          key={1}
        >
          {2020}
        </div>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {" "}
          {description}
        </p>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute hidden sm:block top-8  w-[18.25rem] rounded-t-lg 
      shadow-2xl 
      
       group-hover:-translate-x-3 
       group-hover:translate-y-3 
       group-hover:-rotate-2 


       group-even:group-hover:translate-x-3 
       group-even:group-hover:translate-y-3 
       group-even:group-hover:rotate-2 
       transation 
       group-hover:scale-[1.04]"
      />
    </motion.section>
  );
};
export default Project;
