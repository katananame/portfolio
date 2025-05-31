import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      
      // Calculate mouse position relative to the window center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const getTransform = (baseDelay, intensity = 1) => {
    if (prefersReducedMotion) return {};
    
    const moveX = mousePosition.x * 30 * intensity;
    const moveY = mousePosition.y * 30 * intensity;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.2s ease-out',
      animationDelay: `${baseDelay}s`
    };
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800 py-8">
      {/* 3D Objects Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating 3D Cubes */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 animate-float-3d"
          style={getTransform(0, 1.2)}
        >
          <div className="cube-3d">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-1/3 right-1/4 w-24 h-24 animate-float-3d"
          style={getTransform(2, 0.8)}
        >
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
        <div 
          className="absolute top-1/2 right-1/3 w-28 h-28 animate-float-3d"
          style={getTransform(1, 1.5)}
        >
          <div className="pyramid-3d">
            <div className="pyramid-face pyramid-front"></div>
            <div className="pyramid-face pyramid-back"></div>
            <div className="pyramid-face pyramid-right"></div>
            <div className="pyramid-face pyramid-left"></div>
            <div className="pyramid-face pyramid-base"></div>
          </div>
        </div>

        {/* Interactive rotating sphere */}
        <div 
          className="absolute top-1/3 left-1/2 w-40 h-40 animate-sphere-rotate cursor-pointer hover:scale-110 transition-transform duration-300"
          style={getTransform(0.5, 0.6)}
        >
          <div className="sphere-3d"></div>
        </div>
        
        {/* Gradient blobs */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-float"
          style={getTransform(0, 0.3)}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"
          style={{
            ...getTransform(1, 0.4),
            animationDelay: '1s'
          }}
        ></div>
      </div>
      
      <div /> {/* Spacer */}
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{ willChange: 'opacity, transform' }}>
          {/* Main heading with gradient and glow */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight opacity-100">
            <span className="block text-gradient glow-effect animate-glow">
              Hello, I'm
            </span>
            <span className="block text-gradient glow-effect animate-glow break-words" style={{ animationDelay: '0.5s' }}>
              KatanaName
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-90">
            Creating modern web applications using the latest technologies. 
            Specializing in React, TypeScript and modern UI/UX design.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
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
      <div className="flex justify-center w-full mt-8">
        <ArrowDown size={32} className="text-white/60 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
