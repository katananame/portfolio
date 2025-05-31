import React from 'react';
import { Sparkles } from 'lucide-react';
import { useAnimations } from '@/contexts/AnimationContext';

const AnimationToggle = () => {
  const { isAnimationsEnabled, toggleAnimations } = useAnimations();

  return (
    <button
      onClick={toggleAnimations}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full backdrop-blur-sm border transition-all duration-300 flex items-center gap-2 ${
        isAnimationsEnabled 
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
          : 'bg-slate-800/80 border-white/10 text-gray-400 hover:bg-slate-800'
      }`}
      title={`${isAnimationsEnabled ? 'Disable' : 'Enable'} animations`}
    >
      <Sparkles size={20} />
      <span className="text-sm font-medium">
        {isAnimationsEnabled ? 'Animations On' : 'Animations Off'}
      </span>
    </button>
  );
};

export default AnimationToggle; 