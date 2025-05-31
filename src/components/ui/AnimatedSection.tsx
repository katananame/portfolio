import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 30,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoother animation
        delay: delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}; 