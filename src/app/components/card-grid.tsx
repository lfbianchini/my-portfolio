"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Code, 
  Database, 
  CloudCog 
} from 'lucide-react';

const projects = [
  {
    title: 'algowar.xyz',
    description: 'Full-stack coding challenge platform with multiplayer and gamification features',
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Socket.io'],
    image: 'images/coming-soon.webp',
    link: 'https://github.com/rohanshah35/algowar'
  },
  {
    title: 'Professor Insights',
    description: 'Java application for professor ratings using web scraping and NLP',
    technologies: ['Java', 'Selenium', 'JavaFX', 'NLP'],
    image: 'gifs/project-3.gif',
    link: 'https://github.com/lfbianchini/RMP-Search-Tool'
  },
  {
    title: 'Note Genius',
    description: 'AI-powered note transcription and study guide generator',
    technologies: ['React', 'Azure OCR', 'GPT-4', 'AWS S3'],
    image: 'gifs/project-5.gif',
    link: 'https://github.com/lfbianchini/ergon'
  },
  {
    title: 'Intern Management',
    description: 'Project management tool with LinkedIn verification and reporting',
    technologies: ['Python', 'Selenium', 'Tkinter', 'Excel'],
    image: 'gifs/project-2.gif',
    link: 'https://github.com/rohanshah35/idwr-sleuth-tool'
  },
  {
    title: 'Daily Cal Archive',
    description: 'Automated archival research tool for UC Berkeley newspaper',
    technologies: ['Java', 'Selenium', 'Azure OCR'],
    image: 'gifs/project-4.gif',
    link: 'https://github.com/lfbianchini/thedailycal-search-tool'
  },
  {
    title: 'Secure File Share',
    description: 'Full-stack file storage with real-time upload and sharing',
    technologies: ['React', 'Node.js', 'AWS S3', 'PostgreSQL'],
    image: 'gifs/project-1.gif',
    link: 'https://github.com/lfbianchini/dropbox-clone-web-app'
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="min-h-screen py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A594F9] to-[#6247AA]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0.6 }}
                animate={{ 
                  opacity: activeProject === index ? 1 : 0.6,
                  scale: activeProject === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`
                  cursor-pointer 
                  p-4 
                  rounded-lg 
                  border-2 
                  ${activeProject === index 
                    ? 'border-[#A594F9] bg-[#4D4855]' 
                    : 'border-transparent hover:bg-[#4D4855]'}
                  transition-all duration-300
                `}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <ArrowUpRight className="text-[#A594F9]" />
                </div>
                <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#363539] rounded-lg overflow-hidden shadow-2xl"
          >
            <div 
              className="h-96 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${projects[activeProject].image})`,
                backgroundSize: 'cover'
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {projects[activeProject].title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[activeProject].technologies.map((tech) => (
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
                {projects[activeProject].description}
              </p>
              <div className="flex space-x-4">
                <button 
                  className="
                    flex items-center 
                    bg-gradient-to-r from-[#A594F9] to-[#6247AA] 
                    text-white 
                    px-4 py-2 
                    rounded-lg 
                    hover:opacity-90 
                    transition
                  "
                  onClick={() => window.open(projects[activeProject].link)}
                >
                  <Code className="mr-2" size={20} /> View Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}