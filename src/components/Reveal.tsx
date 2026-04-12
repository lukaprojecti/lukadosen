'use client';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';

export function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...fadeUp.transition, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
