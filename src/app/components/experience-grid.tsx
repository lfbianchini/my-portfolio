"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Calendar, 
  Code 
} from 'lucide-react';

const experiences = [
  {
    company: 'Lasaria',
    role: 'Software Engineering Intern',
    date: 'September 2024 - January 2025',
    description: 'Designed and implemented scalable backend architecture using Express.js and AWS services like S3, DynamoDB, Cognito, Lambda, and Elasticache. Built frontend components with React Native and state management using Zustand.',
    technologies: ['Express.js', 'AWS', 'React Native', 'Zustand', 'DynamoDB'],
    image: 'images/lasaria.jpg',
    responsibilities: [
      'Developed backend services for music upload and streaming',
      'Implemented metadata processing and playlist management',
      'Integrated frontend components with cloud services'
    ]
  },
  {
    company: 'Curriculum Associates',
    role: 'Software Engineer Intern',
    date: 'June 2025 - August 2025',
    description: 'Upcoming internship focused on software engineering and product development.',
    technologies: ['TBD'],
    image: 'images/curriculum.jpg',
    responsibilities: [
      'Preparing for upcoming internship',
      'Excited to contribute to innovative educational technology'
    ]
  }
];

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div className="min-h-screen py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A7ADB] to-[#FFFFFF]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience List */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0.6 }}
                animate={{ 
                  opacity: activeExperience === index ? 1 : 0.6,
                  scale: activeExperience === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`
                  cursor-pointer 
                  p-4 
                  rounded-lg 
                  border-2 
                  ${activeExperience === index 
                    ? 'border-[#A594F9] bg-[#4D4855]' 
                    : 'border-transparent hover:bg-[#4D4855]'}
                  transition-all duration-300
                `}
                onClick={() => setActiveExperience(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    <span className="text-[#7A7ADB]">{exp.role}</span> @ {exp.company}
                  </h3>
                  <Building className="text-[#7A7ADB]" />
                </div>
                <div className="flex items-center text-gray-400 mt-2 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {exp.date}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Details */}
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#363539] rounded-lg overflow-hidden shadow-2xl"
          >
            <div 
              className="h-96 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${experiences[activeExperience].image})`,
                backgroundSize: 'cover'
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {experiences[activeExperience].company}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {experiences[activeExperience].technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="
                      px-3 py-1 
                      bg-[#4D4855] 
                      text-[#A594F9] 
                      rounded-full 
                      text-xs 
                      font-medium
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                {experiences[activeExperience].description}
              </p>
              <div className="bg-[#262528] p-4 rounded-lg border border-[#7A7ADB]">
                <h4 className="text-white font-semibold mb-2 flex items-center">
                  <Code className="mr-2 text-[#7A7ADB]" /> Key Responsibilities
                </h4>
                <ul className="text-gray-300 space-y-2">
                  {experiences[activeExperience].responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start">
                      <span className="text-[#7A7ADB] mr-2">▸</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}