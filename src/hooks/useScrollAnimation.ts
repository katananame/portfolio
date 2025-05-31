import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated]);

  return { ref, isInView, hasAnimated };
}; 