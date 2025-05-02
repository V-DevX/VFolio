// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp, slideRight, staggerContainer } from "../utils/animations";
import { experiences } from "../utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/animation-lottie";
import GlowCard from "../helper/glow-card";
import codeAnimation from "../assets/lottie/code.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background SVG */}
      <img
        src="/section.svg"
        alt="Section background"
        className="absolute top-0 -z-10 w-full object-cover"
      />

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <motion.span
            className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Experiences
          </motion.span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie animation */}
          <motion.div
            className="flex justify-center items-start"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-full h-full">
              <AnimationLottie animationData={codeAnimation} />
            </div>
          </motion.div>

          {/* Experience cards */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={slideRight}>
                <GlowCard>
                  <div className="p-3 relative text-white">
                    {/* Blur background */}
                    <img
                      src="/blur-23.svg"
                      alt="Blur background"
                      className="absolute bottom-0 w-full opacity-80 object-cover"
                    />

                    {/* Duration */}
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {exp.duration}
                      </p>
                    </div>

                    {/* Icon, Title & Company */}
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {exp.title}
                        </p>
                        <p className="text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
