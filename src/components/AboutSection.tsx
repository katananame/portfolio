import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Modern design, responsive layouts, user experience"
    },
    {
      icon: <Zap size={40} />,
      title: "Performance",
      description: "Optimization, fast loading, best practices"
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer with over 3 years of experience creating 
            web applications. I love turning ideas into beautiful and functional interfaces.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              delay={0.2}
            >
              <div className="text-white mb-6 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-center">
                {skill.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
