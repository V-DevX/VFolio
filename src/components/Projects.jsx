// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../utils/animations";
import { projectsData } from "../utils/data/projects-data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Sticky header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" />
        <div className="flex items-center justify-start relative">
          <motion.span
            className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md font-semibold"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            PROJECTS
          </motion.span>
          <span className="w-full h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Project cards */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, i) => (
            <div
              key={project.id ?? i}
              id={`sticky-card-${i + 1}`}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
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
