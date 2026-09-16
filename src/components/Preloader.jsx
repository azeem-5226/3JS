import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Easing function approach for the counter: slow at ends, fast in middle
        const increment = Math.max(1, Math.floor(Math.random() * 5));
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark pointer-events-none"></div>
      
      {/* Cinematic noise on preloader too */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-20 flex flex-col items-center">
        <motion.div 
          className="text-[20vw] md:text-[15vw] font-display font-black leading-none flex items-baseline tracking-tighter"
        >
          {progress}
          <span className="text-[10vw] md:text-[5vw] text-accent">%</span>
        </motion.div>
        
        <div className="h-[2px] w-[200px] md:w-[400px] bg-dark-border mt-8 overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.div 
          className="mt-8 text-gray-500 uppercase tracking-[0.3em] text-xs font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Experience
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
