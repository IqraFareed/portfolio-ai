"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpeg";
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
      className="mb-28 max-w-[50rem] text-center
     sm:mb-0 "
    >
      <div
        className="flex items-center justify-center scroll-mt-[100rem]"
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
              className=" h-48 w-48 rounded-full object-cover border-[0.15rem] shadow-xl"
            />
          </motion.div>

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
            className="font-bold mt-4 px-4 text-2xl  !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tayyab
          </motion.h1>
        </div>
      </div>
      <motion.h1
        className=" mb-10 mt-2 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="">{`Hello `}</span>
        {`I'm a `} <span className="font-bold"> front-end</span> developer based
        in Islamabad Pakistan, with
        <span className="'font-bold"> 3 years</span> of experience in React
        js.My main focus these days is building accessible user interfaces.
        {` I've done BS in software engineering from COMSATS university`}. I
        enjoy building various kinds of sites. My focus is{" "}
        <span className="underline">React.js (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center px-4 text-md font-medium gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* <Link
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
        </Link> */}

        <Link
          href={
            "https://drive.google.com/file/d/1OlngCiU7phEcVjVJtwmUfEBIB_dBBMRA/view"
          }
          target="_blank"
          download
          className="group cursor-pointer borderBlack bg-white  text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110  active:scale-105 
           transition dark:bg-white/10"
        >
          Click here to view CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
