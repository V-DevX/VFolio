// src/components/ProjectCard.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { name, tools, role, description, code, demo } = project;

  // Shared button/base classes
  const baseBtnClasses =
    "flex items-center justify-center px-3 py-1 text-[0.50rem] sm:text-[0.60rem] md:text-[0.70rem] font-medium uppercase tracking-wide bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-200 ease-out";
  const visitClasses = "rounded-l-full rounded-r-none hover:scale-105 active:scale-95";
  const codeClasses = "rounded-r-full rounded-l-none hover:scale-105 active:scale-95";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full group overflow-hidden">
      {/* Top borders */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
      </div>

      {/* Header: Title + Buttons */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative flex items-center justify-between">
        {/* Window dots */}
        <div className="flex items-center space-x-1 lg:space-x-2 absolute top-1/2 left-4 -translate-y-1/2">
          <div className="sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 lg:h-3 lg:w-3 rounded-full bg-red-400" />
          <div className="sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400" />
          <div className="sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 lg:h-3 lg:w-3 rounded-full bg-green-200" />
        </div>

        {/* Project Name */}
        <h3 className="text-[#16f2b3] text-[0.70rem] sm:text-[0.70rem] md:text-base lg:text-base font-bold uppercase text-center mx-auto">
          {name}
        </h3>

        {/* Visit & GitHub Buttons */}
        <div className="flex items-center space-x-1">
          {/* Visit */}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseBtnClasses} ${visitClasses}`}
            >
              <FaExternalLinkAlt size={12} />
              <span className="ml-1 hidden md:inline">Visit</span>
            </a>
          ) : (
            <span className={`${baseBtnClasses} ${visitClasses} ${disabledClasses}`}>
              <FaExternalLinkAlt size={12} />
              <span className="ml-1 hidden md:inline">Visit</span>
            </span>
          )}

          {/* GitHub */}
          {code ? (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseBtnClasses} ${codeClasses}`}
            >
              <FaGithub size={12} />
              <span className="ml-1 hidden md:inline">GitHub</span>
            </a>
          ) : (
            <span className={`${baseBtnClasses} ${codeClasses} ${disabledClasses}`}>
              <FaGithub size={12} />
              <span className="ml-1 hidden md:inline">GitHub</span>
            </span>
          )}
        </div>
      </div>

      {/* Code-like details */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-[0.9rem] text-gray-200 block whitespace-pre-wrap">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">{name}</span>
            <span className="text-gray-400">',</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400"> ['</span>
            {tools.map((tag, i) => (
              <span key={i}>
                <span className="text-amber-300">{tag}</span>
                {i < tools.length - 1 && <span className="text-gray-400">', '</span>}
              </span>
            ))}
            <span className="text-gray-400">],</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400"> {description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
