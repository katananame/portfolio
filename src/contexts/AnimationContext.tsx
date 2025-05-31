import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationContextType {
  isAnimationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  // Try to get the initial state from localStorage
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(() => {
    const saved = localStorage.getItem('animationsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem('animationsEnabled', JSON.stringify(isAnimationsEnabled));
    // Update the body class for global CSS control
    document.body.classList.toggle('animations-disabled', !isAnimationsEnabled);
  }, [isAnimationsEnabled]);

  const toggleAnimations = () => {
    setIsAnimationsEnabled(prev => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isAnimationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimations() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimations must be used within an AnimationProvider');
  }
  return context;
} 