import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 KatanaName Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
