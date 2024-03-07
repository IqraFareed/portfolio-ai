import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>built with
        React & Next.js(App Router & Server Actions), Typescript Tailwind css ,
        Framer motion , React Email & Resend, Vercel hosting.
      </p>
      <div className="flex items-center justify-center gap-2 mt-8 ">
        {" "}
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
      </div>
    </footer>
  );
};

export default Footer;
