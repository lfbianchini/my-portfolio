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
          <p className="mb-4 leading-relaxed text-gray-300">
            I'm a second-year Computer Science student at the University of San Francisco with a deep passion for programming and building impactful solutions.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            As a Software Engineering Intern at Lasaria, I've honed my skills in backend development, working with Express, GraphQL, and AWS services to enhance music streaming and social media applications. My expertise extends to full-stack development, demonstrated by my contract work at E2E Mfg, where I built a cross-platform Electron application using React, Vite, and TypeScript.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Proficient in Java, Python, JavaScript, and TypeScript, with growing experience in C, I thrive on developing challenging projects that span from web scraping to cloud-based solutions. While I'm adept at frontend technologies like React, my true passion lies in backend development, particularly with Express.js and AWS services like Lambda and DynamoDB.
          </p>
          <p className="mb-8 leading-relaxed text-gray-300">
            My project portfolio showcases my ability to leverage cutting-edge technologies, from AI-powered note organization systems to sentiment analysis tools for professor ratings. I'm committed to continuous learning and applying my skills to create innovative, user-centric solutions that make a difference.
          </p>
          <div className="flex flex-wrap justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1v28BIuKEpwPTgGKruHRuqN2y-UmzuN8u/view"
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