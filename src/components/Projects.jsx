// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../utils/animations";
import { projectsData } from "../utils/data/projects-data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 ">
      {/* Sticky header */}
      <div className="pt-1 md:pt-5 sticky top-1">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-30" />
        <div className="flex items-center justify-center relative">
          <motion.span
            className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md font-semibold "
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            PROJECTS
          </motion.span>
          <span className="w-full h-[2px] bg-[#1a1443] ml-4" />
        </div>
      </div>

      {/* Project cards */}
      <div className="pt-28">
        <div className="flex flex-col items-center gap-6">
          {projectsData.slice(0, 4).map((project, i) => (
            <div
              key={project.id ?? i}
              id={`sticky-card-${i + 1}`}
              className="sticky-card w-full max-w-2xl mx-auto sticky"
              tabIndex={0}
              aria-label={`Project ${project.title}`}
            >
              <div
                className="
                  pt-3 flex items-center justify-center
                  rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]
                  transition-all duration-500
                  hover:scale-105 active:scale-105 focus:scale-105
                  focus:outline-none focus:ring-2 focus:ring-violet-500
                "
              >
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
