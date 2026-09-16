import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// A collection of images to use in the scattered cloud
const floatingImages = [
  { src: '/assets/images/azeem-123.jpeg', top: '15%', left: '10%', speed: 1.5, rotate: -15, width: '250px' },
  { src: '/assets/images/AL=SHIFA   CLINIC IMAGE.png', top: '20%', left: '70%', speed: -1, rotate: 10, width: '300px' },
  { src: '/assets/images/streamify-image.png', top: '70%', left: '15%', speed: 2, rotate: 5, width: '280px' },
  { src: '/assets/certificate/HTML5 - The Language.png', top: '65%', left: '75%', speed: -1.5, rotate: -10, width: '220px' },
  { src: '/assets/certificate/CCNA.png', top: '40%', left: '85%', speed: 0.5, rotate: 20, width: '200px' }
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll Animations for fading out
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacityOut = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const yOut = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse Parallax Interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden z-10 bg-dark"
    >
      <motion.div style={{ opacity: opacityOut, y: yOut }} className="w-full h-full relative flex items-center justify-center">
        
        {/* The Floating Image Cloud */}
        {floatingImages.map((img, index) => {
          // Dynamic parallax based on mouse
          const xMove = mousePosition.x * -50 * img.speed;
          const yMove = mousePosition.y * -50 * img.speed;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 * index, type: 'spring' }}
              className="absolute z-10 hidden md:block overflow-hidden rounded-2xl shadow-2xl border border-dark-border"
              style={{
                top: img.top,
                left: img.left,
                width: img.width,
                rotate: img.rotate,
                x: xMove,
                y: yMove,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src={img.src} 
                alt="Floating Portfolio Piece" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          );
        })}

        {/* Center Giant Typography */}
        <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none mix-blend-exclusion">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 1 }}
            className="text-[20vw] md:text-[15vw] font-display font-black leading-none text-white tracking-tighter"
          >
            AZEEM
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 1.2 }}
            className="text-[20vw] md:text-[15vw] font-display font-black leading-none text-white tracking-tighter ml-0 md:ml-32"
          >
            NOOR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 text-white uppercase tracking-[0.4em] font-sans text-xs md:text-sm font-bold"
          >
            Fullstack Developer & Designer
          </motion.p>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
