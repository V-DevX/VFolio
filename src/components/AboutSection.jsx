import { motion } from "framer-motion";
import { slideUp, slideLeft } from "../utils/animations";
import { personalData } from "../utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative ">
      {/* “ABOUT ME” label for large screens */}
      <motion.div
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md font-semibold">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <motion.p
            className="font-mono mb-5 text-[#16f2b3] text-xl lg:text-4xl uppercase font-bold text-center lg:text-left"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
          >
            Who I am?
          </motion.p>

          <motion.p
            className="text-gray-200 text-sm lg:text-lg leading-7 lg:leading-8 text-center lg:text-left"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            {personalData.description}
          </motion.p>
        </div>

        {/* Profile Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img
            src={personalData.profile}
            alt={personalData.name}
            width={280}
            height={280}
            className={
              "rounded-lg transition-all duration-1000 grayscale " +
              "hover:grayscale-0 active:grayscale-0 focus:grayscale-0 " +
              "hover:scale-110 active:scale-110 focus:scale-110 " +
              "cursor-pointer"
            }
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
