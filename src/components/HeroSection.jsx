import { motion } from "framer-motion";
import { slideUp, staggerContainer, slideLeft } from "../utils/animations";
import { personalData } from "../utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  // Shared wrapper for each social icon
  const iconWrapper = "relative group w-20 h-20 flex items-center justify-center";

  // Shared classes for the overlay behind each icon
  const overlayClasses =
    "absolute inset-0 rounded-xl scale-0 transition-transform duration-300 z-0 shadow-lg " +
    "group-hover:scale-100 group-active:scale-100 focus:scale-100";

  // Shared classes for the icon itself
  const iconClasses =
    "text-white transition-transform duration-300 " +
    "group-hover:scale-110 group-active:scale-110 focus:scale-110";

  // Shared classes for the label under each icon
  const labelClasses =
    "text-sm text-white transform -translate-y-2 opacity-0 transition-all duration-300 font-medium " +
    "group-hover:translate-y-0 group-hover:opacity-100 " +
    "group-active:translate-y-0 group-active:opacity-100 focus:translate-y-0 focus:opacity-100";

  return (
    <section className="relative flex flex-col items-center justify-between w-full">
      <img
        src="/hero.svg"
        alt="Hero background"
        className="absolute -top-[98px] -z-10 w-full object-cover"
      />

      <div className="w-full grid grid-cols-1 items-center lg:items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center w-full p-2 pb-20 md:pb-10 lg:pt-10">
          {/* Heading */}
          <motion.h1
            className="text-3xl font-bold leading-10 text-white text-center lg:text-left md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </motion.h1>

          {/* Social icons */}
          <motion.div
            className="my-12 flex items-center justify-center lg:justify-start gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              {
                name: "GitHub",
                icon: <BsGithub size={30} />,
                url: personalData.github,
                bg: "bg-gray-800/40 backdrop-blur-md border border-gray-500/30",
              },
              {
                name: "LinkedIn",
                icon: <BsLinkedin size={30} />,
                url: personalData.linkedIn,
                bg: "bg-blue-600/40 backdrop-blur-md border border-blue-300/30",
              },
              {
                name: "LeetCode",
                icon: <SiLeetcode size={30} />,
                url: personalData.leetcode,
                bg: "bg-gradient-to-br from-yellow-500/40 to-black/40 backdrop-blur-md border border-yellow-400/30",
              },
              {
                name: "Twitter",
                icon: <FaTwitterSquare size={30} />,
                url: personalData.twitter,
                bg: "bg-sky-500/40 backdrop-blur-md border border-sky-400/30",
              },
            ].map(({ name, icon, url, bg }, i) => (
              <motion.div key={i} variants={slideUp} className={iconWrapper}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    className={`${overlayClasses} ${bg}`}
                  />
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 flex flex-col items-center justify-center gap-1"
                  >
                    <div className={iconClasses}>{icon}</div>
                    <div className="relative overflow-hidden h-5">
                      <span className={labelClasses}>{name}</span>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={slideUp}>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 active:from-pink-500 active:to-violet-600 focus:from-pink-500 focus:to-violet-600"
                >
                  <button
                    className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white text-center md:text-sm font-medium uppercase tracking-wider transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 active:gap-3 focus:gap-3"
                  >
                    <span>Contact me</span>
                    <RiContactsFill size={16} />
                  </button>
                </a>
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold hover:gap-3 active:gap-3 focus:gap-3"
                >
                  <span>Get Resume</span>
                  <MdDownload size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right section */}
        <motion.div
          className="order-1 lg:order-2 mt-8 lg:mt-12 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r to-[#0a0d37] from-[#0d1224] w-full max-w-md mx-auto"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">'</span>
                <span className="text-amber-300">VASANTH</span>
                <span className="text-gray-400">',</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">['</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">Django</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">', '</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">'],</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">(</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">;</span></div>
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
