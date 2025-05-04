// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { slideLeft, staggerContainer } from "../utils/animations";
import { services } from "../utils/data/services";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/animation-lottie";
import GlowCard from "../helper/glow-card";
import serviceAnimation from "../assets/lottie/development.json";

function Services() {
  return (
    <div
      id="services"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] "
    >
      {/* Section background */}
      <img
        src="/section.svg"
        alt="Section background"
        className="absolute top-0 -z-10 w-full object-cover"
      />

      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <motion.span
            className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            SERVICES
          </motion.span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          {/* Left: Lottie Animation */}
          <motion.div
            className="flex justify-center items-center w-full"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimationLottie animationData={serviceAnimation} width="100%" />
          </motion.div>

          {/* Right: Service Cards */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-6 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {services.map((svc) => (
              <motion.div key={svc.id} variants={slideLeft} className="w-full">
                <GlowCard>
                  <div className="p-3 relative text-white">
                    {/* Blur background */}
                    <img
                      src="/blur-23.svg"
                      alt="Blur background"
                      className="absolute bottom-0 w-full opacity-80 object-cover"
                    />

                    {/* Icon + Text */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 px-3 py-5">
                      <div
                        tabIndex={0}
                        className="
                          text-violet-500 transition-all duration-300
                          hover:scale-125 active:scale-125 focus:scale-125
                          cursor-pointer
                        "
                      >
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {svc.title}
                        </p>
                        <p className="text-sm sm:text-base whitespace-pre-line">
                          {svc.description}
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

export default Services;
