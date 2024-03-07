"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/IMG-20210410-WA0004.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const IntroSection = () => {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center
     sm:mb-0 "
    >
      <div
        className="flex items-center justify-center scroll-mt-[100rem]"
        id="home"
      >
        <div className="relative">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {" "}
            <Image
              src={profile}
              alt=""
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div> */}

          {/* <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
          <motion.h1
            className="font-bold mt-4 px-4 text-8xl  !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Iqra Fareed
          </motion.h1>
        </div>
      </div>
      <motion.h1
        className=" mb-10 mt-2 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="">{`Hello `}</span>
        {`I'm a `} <span className="font-bold"> front-end developer</span> with
        <span className="'font-bold"> 3 years</span> of experience.
        {`I've done BS in software engineering from COMSATS university `}. I
        enjoy building various kinds of sites. My focus is{" "}
        <span className="underline">React.js (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center px-4 text-md font-medium gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group cursor-pointer borderBlack bg-white  text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110  active:scale-105 
           transition dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/iqra-fareed-2701871a5/"
          target="_blank"
          className="cursor-pointer bg-white  focus:scale-[1.15] hover:scale-[1.15]  active:scale-[105]
           transition borderBlack text-gray-700 p-4 flex items-center
            gap-2 rounded-full dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/IqraFareed"
          target="_blank"
          className="cursor-pointer bg-white focus:scale-[1.15] hover:scale-[1.15] 
           active:scale-[105] transition borderBlack text-gray-700 p-4 
           flex items-center gap-2 text-[0.95rem] rounded-full dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
