import { motion } from 'framer-motion';

function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-150px 0px 0px 0px' }}
      transition={{
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.32,
        delay: 0.32,
      }}>
      {children}
    </motion.div>
  );
}

export default FadeIn;
