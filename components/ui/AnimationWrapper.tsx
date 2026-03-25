'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export default function AnimationWrapper({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  direction = 'up',
  distance = 30,
}: AnimationWrapperProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(10px)',
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
