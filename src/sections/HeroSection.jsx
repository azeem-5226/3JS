import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll Animations for Kinetic Typography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Spring physics for smoother scroll transforms
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // "AZEEM" moves Left
  const x1 = useTransform(smoothProgress, [0, 1], [0, -500]);
  // "NOOR" moves Right
  const x2 = useTransform(smoothProgress, [0, 1], [0, 500]);
  // Image scales down slightly on scroll
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 0.8]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, 200]);

  // Mouse interaction for the image
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden z-10 bg-dark"
    >
      {/* Structural Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center">
        
        {/* Layer 1: Background Outlined Text (Behind Image) */}
        <motion.div 
          style={{ x: x1 }}
          className="absolute top-1/4 md:top-[15%] w-full flex justify-center z-10 pointer-events-none opacity-40 overflow-hidden"
        >
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="text-[25vw] md:text-[20vw] font-display font-black leading-none uppercase text-transparent"
            style={{ WebkitTextStroke: '2px var(--color-white, #F8FAFC)' }}
          >
            CREATIVE
          </motion.h1>
        </motion.div>

        {/* Layer 2: Interactive Floating Image (Middle) */}
        <motion.div 
          initial={{ clipPath: "inset(50% 50% 50% 50% round 200px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 200px)" }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
          style={{ scale: imageScale, y: imageY, x: mousePosition.x, rotateY: mousePosition.x / 2, rotateX: -mousePosition.y / 2 }}
          className="absolute z-20 w-[60vw] h-[40vh] md:w-[25vw] md:h-[60vh] overflow-hidden shadow-2xl border-2 border-dark-border"
        >
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
          <img 
            src="/assets/images/azeem-123.jpeg" 
            alt="Azeem Noor" 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110"
          />
        </motion.div>

        {/* Layer 3: Foreground Solid Text (In Front of Image) */}
        <motion.div 
          style={{ x: x2 }}
          className="absolute bottom-1/4 md:bottom-[15%] w-full flex justify-center z-30 pointer-events-none overflow-hidden"
        >
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
            className="text-[25vw] md:text-[20vw] font-display font-black leading-none uppercase text-white mix-blend-exclusion"
          >
            DEVELOPER
          </motion.h1>
        </motion.div>

        {/* Layer 4: Meta info and scrolling indicator */}
        <div className="absolute bottom-12 w-full px-8 md:px-16 flex justify-between items-end z-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col space-y-1"
          >
            <p className="text-accent font-sans text-xs uppercase tracking-[0.3em] font-bold">Azeem Noor</p>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-widest max-w-[200px]">
              Crafting immersive digital experiences through code.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-white uppercase font-sans text-[11px] tracking-[0.2em]">
                  <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text>
                    <textPath href="#circlePath2" startOffset="0%">
                      SCROLL DOWN • DISCOVER • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
