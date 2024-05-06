"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/portfolio.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const IntroSection = () => {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.section
      ref={ref}
      className="sm:flex mb-28 mx-16 sm:pt-20 text-center
     sm:mb-0 "
    >
      <div className="w-[18rem] sm:w-[40rem] sm:text-left">
        <motion.h1
          className="font-bold mt-4 px-4 text-2xl  !leading-[1.5] sm:text-5xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I am Tayyab,
        </motion.h1>
        <motion.h1
          className="font-bold  px-4 text-2xl  !leading-[1.5] sm:text-5xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Explainable AI
        </motion.h1>
        <motion.h1
          className=" mb-10 mt-2 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="">{`Hello `}</span>
          {`I'm a `} <span className="font-bold"> front-end</span> developer
          with
          <span className="'font-bold"> 3 years</span> of experience in React
          js.
          {` I've done BS in software engineering from COMSATS university`}. I
          enjoy building various kinds of sites.
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-end justify-start px-4 text-md font-medium gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href={
              "https://drive.google.com/file/d/1OlngCiU7phEcVjVJtwmUfEBIB_dBBMRA/view"
            }
            target="_blank"
            download
            className="group cursor-pointer borderBlack bg-[#ff6464] rounded-[4px] text-[#fff] px-7 py-3 flex items-center gap-2 
           outline-none focus:scale-110 hover:scale-110  active:scale-105 
           transition dark:bg-white/10"
          >
            Click here to view CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
        </motion.div>
      </div>
      <div
        className="w-[20rem]  items-center justify-center scroll-mt-[100rem]"
        id="home"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="flex justify-center"
          >
            {" "}
            <Image
              src={profile}
              alt=""
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="mt-6 h-48 w-48 rounded-full object-cover border-[0.15rem] shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
