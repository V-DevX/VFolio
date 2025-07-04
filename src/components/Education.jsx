import React from "react";
import { motion } from "framer-motion";
import { slideUp, slideRight, staggerContainer } from "../utils/animations";
import { educations } from "../utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/animation-lottie";
import GlowCard from "../helper/glow-card";
import studyLottie from "../assets/lottie/study.json";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] "
    >
      {/* Section background */}
      <img
        src="/section.svg"
        alt="Section background"
        className="absolute top-0 -z-10 w-full object-cover"
      />

      {/* Divider line + animated title */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
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
            EDUCATION
          </motion.span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          {/* Lottie Animation */}
          <div className="order-1 lg:order-2 flex justify-center items-center w-full">
            <div className="w-full max-w-md">
              <AnimationLottie animationData={studyLottie} />
            </div>
          </div>

          {/* Education cards */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start gap-6 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {educations.map((edu) => (
              <motion.div
                key={edu.id}
                variants={slideRight}
                className="w-full"
              >
                <GlowCard identifier={`education-${edu.id}`}>
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
                        {edu.duration}
                      </p>
                    </div>

                    {/* Icon, Title & Institution */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-x-8 px-3 py-5">
                      <div
                        tabIndex={0}
                        className="
                          text-violet-500 transition-all duration-300
                          hover:scale-125 active:scale-125 focus:scale-125
                          cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500
                        "
                      >
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {edu.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {edu.institution}
                        </p>
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

export default Education;
