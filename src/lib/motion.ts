export const easing = {
  smooth: [0.22, 1, 0.36, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
};

export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
};

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.base, ease: easing.smooth },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration.base, ease: easing.smooth },
};

export const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
