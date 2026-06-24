'use client';

import { SlideUpSectionProps } from '@/types';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SlideUpSection = ({
  children,
  delay = 0,
  duration = 1.5,
}: SlideUpSectionProps & { duration?: number }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-150px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpSection;