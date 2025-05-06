import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { fadeInStagger } from "../utils/animations";
import { skillsData } from "../utils/data/skills";
import { skillsImage } from "../utils/skill-image";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] "
    >
      {/* blurred circle */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      {/* top divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* scrolling list */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          delay={0}
          play
          direction="left"
        >
          {skillsData.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={fadeInStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              tabIndex={0}
              className="
                w-36 min-w-fit h-fit flex flex-col items-center justify-center
                m-3 sm:m-5 rounded-lg group relative
                transition-all duration-500
                hover:scale-[1.15] active:scale-[1.15] focus:scale-[1.15]
                cursor-pointer
              "
            >
              <div
                className="
                  h-full w-full rounded-lg border bg-[#11152c]
                  border-[#1f223c]
                  transition-all duration-500
                  group-hover:border-violet-500
                  group-active:border-violet-500
                  focus:border-violet-500
                "
              >
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
