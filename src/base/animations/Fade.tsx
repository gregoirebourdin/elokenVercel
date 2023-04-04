import { motion } from 'framer-motion';

export const animate = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
    },
  },

  // Fade In Up
  fadeInUp: {
    initial: { y: 120, opacity: 0 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
  },
  // Fade In Up
  fadeInDown: {
    initial: { y: -80, opacity: 0 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
  },
  // Fade In Left
  fadeInLeft: {
    initial: { x: -120, opacity: 0 },
    whileInView: {
      opacity: 1,
      x: 0,
    },
  },
  // Fade In Right
  fadeInRight: {
    initial: { x: 120, opacity: 0 },
    whileInView: {
      opacity: 1,
      x: 0,
    },
  },
};

export default function Fade({ children, animate, ...other }: any) {
  return (
    <motion.div
      initial={animate.initial}
      whileInView={animate.whileInView}
      className={"w-full h-full"}
      viewport={{ once: true, margin: '-150px 0px 0px 0px' }}
      transition={{
        duration: 0.64,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: other.delay || 0.2,
      }}>
      {children}
    </motion.div>
  );
}
