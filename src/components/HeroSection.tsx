import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* 3D Objects Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating 3D Cubes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-float-3d">
          <div className="cube-3d">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 animate-float-3d" style={{ animationDelay: '2s' }}>
          <div className="cube-3d">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>

        {/* Floating 3D Pyramid */}
        <div className="absolute top-1/2 right-1/3 w-28 h-28 animate-float-3d" style={{ animationDelay: '1s' }}>
          <div className="pyramid-3d">
            <div className="pyramid-face pyramid-front"></div>
            <div className="pyramid-face pyramid-back"></div>
            <div className="pyramid-face pyramid-right"></div>
            <div className="pyramid-face pyramid-left"></div>
            <div className="pyramid-face pyramid-base"></div>
          </div>
        </div>

        {/* Interactive rotating sphere */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 animate-sphere-rotate cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="sphere-3d"></div>
        </div>
        
        {/* Original gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading with gradient and glow */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block text-gradient glow-effect animate-glow">
              Hello, I'm
            </span>
            <span className="block text-gradient glow-effect animate-glow" style={{ animationDelay: '0.5s' }}>
              KatanaName
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-90">
            Creating modern web applications using the latest technologies. 
            Specializing in React, TypeScript and modern UI/UX design.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="https://github.com/katananame" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:katanacyoff@gmail.com" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
