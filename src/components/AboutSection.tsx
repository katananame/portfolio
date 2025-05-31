import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useAnimations } from '@/contexts/AnimationContext';
import { cn } from '../lib/utils';

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { isAnimationsEnabled } = useAnimations();

  const handleInteraction = () => {
    if (!isAnimationsEnabled) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="relative w-full h-[250px] perspective-1000 group cursor-pointer"
      onClick={handleInteraction}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isAnimationsEnabled) {
          e.preventDefault();
          handleInteraction();
        }
      }}
      onMouseEnter={() => isAnimationsEnabled && setIsFlipped(true)}
      onMouseLeave={() => isAnimationsEnabled && setIsFlipped(false)}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-300 ease-out"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.05 : 1,
        }}
        transition={{
          duration: isAnimationsEnabled ? 0.3 : 0
        }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 h-full 
                        transition-all duration-300 group-hover:border-white/20
                        bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50
                        flex flex-col items-center">
            <div className="text-white mb-4">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 w-full text-center">
              {skill.title}
            </h3>
            <p className="text-gray-300 text-center text-sm">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="p-4 rounded-2xl h-full overflow-hidden
                        transition-all duration-300 group-hover:border-white/20
                        bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80
                        border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center h-full text-center">
              <p className="text-gray-200 text-lg font-medium">
                {skill.easterEgg}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      easterEgg: "🎮 When I'm stuck, I don't debug... I just tell myself it's a feature! 😅\n\nP.S. Don't tell my boss!"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Modern design, responsive layouts, user experience",
      easterEgg: "🎨 My design process:\n1. Make it pretty\n2. Make it prettier\n3. Coffee break\n4. Realize I forgot about mobile view 🙈"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "Optimization, fast loading, best practices",
      easterEgg: "⚡ Loading times so fast, even The Flash is taking notes!\n\nTrust me, I timed it with console.log() 😉"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer with over 3 years of experience creating 
            web applications. I love turning ideas into beautiful and functional interfaces.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={0.2}>
              <SkillCard skill={skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
