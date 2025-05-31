import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimations } from '@/contexts/AnimationContext';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const { isAnimationsEnabled } = useAnimations();
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.3
  });

  // Всегда используем motion.div, но меняем его поведение в зависимости от isAnimationsEnabled
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isAnimationsEnabled ? {
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay
        }
      } : {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0
        }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}; 