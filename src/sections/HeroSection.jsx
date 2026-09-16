import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Calculate mask size - gets bigger when hovering text
  const size = isHovered ? 400 : 40;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-dark cursor-none">
      
      {/* Base Layer (Dark Theme) */}
      <div className="h-full w-full flex flex-col items-center justify-center relative">
        <div 
          className="flex flex-col items-center z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-gray-500 tracking-[0.5em] text-sm md:text-base uppercase mb-4 font-sans font-bold">
            Interactive Developer
          </p>
          <h1 className="text-[18vw] md:text-[12vw] font-display font-black leading-none text-white tracking-tighter uppercase text-center m-0 p-0">
            AZEEM
          </h1>
          <h1 className="text-[18vw] md:text-[12vw] font-display font-black leading-none text-transparent tracking-tighter uppercase text-center m-0 p-0" style={{ WebkitTextStroke: '2px var(--color-white, #F8FAFC)' }}>
            NOOR
          </h1>
        </div>
      </div>

      {/* Masked Layer (Image + X-Ray Text) */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center bg-accent"
        animate={{
          WebkitMaskImage: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        {/* The background inside the mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/azeem-123.jpeg" 
            alt="Azeem Noor Mask" 
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-accent/40 mix-blend-color"></div>
        </div>

        {/* The text inside the mask (inverted color) */}
        <div className="flex flex-col items-center z-10 relative mt-10">
          <p className="text-white tracking-[0.5em] text-sm md:text-base uppercase mb-4 font-sans font-bold mix-blend-difference">
            Interactive Developer
          </p>
          <h1 className="text-[18vw] md:text-[12vw] font-display font-black leading-none text-dark tracking-tighter uppercase text-center m-0 p-0 drop-shadow-2xl">
            AZEEM
          </h1>
          <h1 className="text-[18vw] md:text-[12vw] font-display font-black leading-none text-transparent tracking-tighter uppercase text-center m-0 p-0" style={{ WebkitTextStroke: '4px #020617' }}>
            NOOR
          </h1>
        </div>
      </motion.div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none opacity-50">
        <div className="w-[2px] h-16 bg-dark-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-white"
            animate={{ top: ['-50%', '150%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
