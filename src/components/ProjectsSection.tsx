
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features modern design, 3D animations, and responsive layout.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/katananame/portfolio",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've been working on. More coming soon!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 text-white border border-white/30 shadow-lg backdrop-blur-sm hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                      style={{
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">More projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
