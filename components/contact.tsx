"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import ButtonContact from "./Button";
const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-centerzzzzzzzzzzzzz"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:iqrafareed56@gmail.com">
          iqrafareed56@gmail.com
        </a>{" "}
        or through this from.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const res = await sendEmail(formData);
          toast.success(res as string);
        }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          placeholder="Your message"
          required
          name="message"
          maxLength={500}
          className="h-52 px-4 my-3 rounded-lg borderBlack p-4"
        />
        <ButtonContact />
      </form>
    </motion.section>
  );
};

export default Contact;
