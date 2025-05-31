
import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Coming soon... I'm working on some amazing projects to showcase here.
          </p>
        </div>
        
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Projects loading...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
