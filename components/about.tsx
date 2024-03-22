"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After getting a{" "}
        <span className="font-semibold">
          Bachelor's degree in Electronics and Communication Engineering (ECE){" "}
        </span>
        , I started my journey in technology. I am very curious and want to
        create{" "}
        <span className="font-semibold">new and innovative solutions</span>. I
        have <span className="font-semibold">Six Months</span> of Internship
        experience working as a frontend developer.
      </p>
      <p className="mb-3">
        In this time, I have learned{" "}
        <span className="font-semibold">React.js</span> for building user
        interfaces. I am also skilled in using{" "}
        <span className="font-semibold">Tailwind CSS</span> for styling
        websites. I have a good understanding of{" "}
        <span className="font-semibold">data structures</span>, which helps me
        write better code. I can{" "}
        <span className="font-semibold">deploy websites</span> using various
        tools.
      </p>
      <p className="mb-3">
        Apart from coding, I like technology and keeping up with the{" "}
        <span className="font-semibold">latest frontend trends</span> in the
        industry. I enjoy taking on new challenges and seeing how far I can push
        frontend technologies to do new things.
      </p>
    </motion.section>
  );
}
