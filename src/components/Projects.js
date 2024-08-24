import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full mb-20"
        >
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          These projects showcase my passion for creating innovative solutions 
          to real-world problems. From streamlining workflows to automating research 
          tasks, each application demonstrates my skills in full-stack development, 
          data analysis, and user-centric design. Below, you'll find a diverse range 
          of projects that highlight my proficiency in various programming languages and technologies.
          </p>
        </div>
        </motion.div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative overflow-hidden group">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}