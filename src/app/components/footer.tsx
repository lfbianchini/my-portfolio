"use client";
import { 
  LinkedinIcon, 
  GithubIcon, 
  MailIcon 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className=" py-16 px-4 bg-[#262528] md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A7ADB] to-[#FFFFFF]">Keep in Touch</span>
        </h2>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/luca-bianchini-650923288/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              text-[#7A7ADB] 
              hover:text-white 
              transition-colors 
              duration-300 
              hover:scale-110
            "
          >
            <LinkedinIcon size={48} />
          </a>
          
          <a 
            href="https://github.com/lfbianchini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              text-[#7A7ADB] 
              hover:text-white 
              transition-colors 
              duration-300 
              hover:scale-110
            "
          >
            <GithubIcon size={48} />
          </a>
          
          <a 
            href="mailto:lucafbianchini@yahoo.com"
            className="
              text-[#7A7ADB] 
              hover:text-white 
              transition-colors 
              duration-300 
              hover:scale-110
            "
          >
            <MailIcon size={48} />
          </a>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
            <p>Made by Luca Bianchini</p>
        </div>
      </div>
    </footer>
  );
}