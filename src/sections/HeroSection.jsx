import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-12 flex flex-col items-center justify-center overflow-hidden z-10 bg-dark">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 w-full h-full flex flex-col items-center justify-between mt-12">
        
        {/* Massive Centered Typography */}
        <div className="text-center w-full flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] md:text-[8rem] font-display font-black text-white leading-[0.9] tracking-tighter uppercase"
          >
            AZEEM
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-[12vw] md:text-[8rem] font-display font-black text-accent leading-[0.9] tracking-tighter uppercase"
          >
            NOOR
          </motion.h1>
        </div>

        {/* Middle Section: Image and Meta */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-16 md:mt-24 px-4 md:px-12">
          
          {/* Left Meta Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex flex-col space-y-2 max-w-[200px]"
          >
            <p className="text-xs font-sans text-gray-400 uppercase tracking-widest leading-relaxed">
              Frontend & MERN Stack Developer based in the creative digital world.
            </p>
          </motion.div>

          {/* Center Pill Image */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-48 h-64 md:w-64 md:h-80 z-10 border border-dark-border shadow-2xl overflow-hidden rounded-t-[150px] rounded-b-[150px]"
          >
            <img 
              src="/assets/images/azeem-123.jpeg" 
              alt="Azeem Noor" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Rotating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex items-center justify-center mt-8 md:mt-0"
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 border border-dark-border rounded-full"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-white uppercase font-sans text-[10px] tracking-[0.3em]">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      SCROLL TO EXPLORE • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
