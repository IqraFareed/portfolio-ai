"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[99]">
      {/* <motion.div
        className="  h-[4.5rem] w-full  bg-red-500
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]
         dark:bg-gray-950 dark:border-black/40
        dark:bg-opacity-75 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div> */}
      <nav className="  ">
        <ul className="flex flex-wrap items-end justify-end gap-y-1 text-[1rem] font-medium  sm:flex-nowrap sm:gap-5">
          {links?.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  `${
                    activeSection === link.name
                      ? "text-[#ff6464]"
                      : "text-[#000]"
                  } flex w-full items-center justify-center  px-3 py-3   hover:text-[#ff6464] transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    " dark:text-gray-200": activeSection === link.name,
                  }`
                )}
                href={link.hash}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
              >
                {" "}
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="text-[#ff6464]  absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
