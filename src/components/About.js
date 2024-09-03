import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-5 py-10 md:py-20 md:flex-row flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-green-500">Luca</span>.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
          I'm a second-year Computer Science student at the University of San Francisco with a deep passion for programming and building projects that make life easier. Skilled in Java, Python, and JavaScript, with emerging proficiency in C, I thrive on developing challenging projects. My expertise includes web scraping with Selenium and Jsoup, and while I'm skilled in React, my real enthusiasm lies in backend development using Express.js and FastAPI. I excel in object-oriented design and project structuring, and I take great pride in seamlessly integrating frontend and backend systems.
          </p>
          <div className="flex flex-wrap justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1ONoEwr3VLVEW7i_uWAdNjB4Bt6U-Aj4s/view?usp=sharing"
              className="inline-flex text-white bg-green-500 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-green-600 rounded text-sm md:text-lg m-1 transition-colors duration-300"
            >
              View My Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm md:text-lg m-1 transition-colors duration-300"
            >
              See My Past Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm md:text-lg m-1 transition-colors duration-300"
            >
              Contact me
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="hero"
            src="./selfie.png"
          />
        </motion.div>
      </div>
    </section>
  );
}