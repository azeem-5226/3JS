import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { certificates } from '../data/portfolioData';

const JourneySection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  return (
    <section id="journey" className="py-32 relative z-10 bg-dark border-t border-dark-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Massive Brutalist Header */}
        <div className="mb-24 flex flex-col items-start border-b border-dark-border pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="text-[15vw] md:text-[12vw] font-display font-black text-white uppercase tracking-tighter mix-blend-normal leading-none"
          >
            CERTIFICATE
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] font-display font-black text-accent uppercase tracking-tighter mix-blend-normal leading-none ml-0 md:ml-32"
          >
            JOURNEY
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative pt-12" ref={containerRef}>
          
          {/* Advanced Winding SVG Root Path */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[300px] pointer-events-none hidden md:block">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 100 1000" 
              preserveAspectRatio="none"
              fill="none"
              strokeWidth="1"
            >
              {/* Background faint path */}
              <path 
                d="M 50,0 C 90,100 10,200 50,300 C 90,400 10,500 50,600 C 90,700 10,800 50,900 C 90,1000 50,1000" 
                stroke="#1E293B" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              {/* Glowing animated path */}
              <motion.path 
                d="M 50,0 C 90,100 10,200 50,300 C 90,400 10,500 50,600 C 90,700 10,800 50,900 C 90,1000 50,1000" 
                stroke="#06B6D4" 
                strokeWidth="4"
                style={{ pathLength: scrollYProgress }}
                className="drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              />
            </svg>
          </div>

          {/* Mobile Straight Path */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-dark-border md:hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-accent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
          
          <div className="space-y-48">
            {certificates.map((cert, index) => {
              // Alternate sides
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node Point */}
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: '#1E293B' }}
                    whileInView={{ scale: 1, backgroundColor: '#06B6D4' }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-[20px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full ring-8 ring-dark z-10 shadow-[0_0_30px_rgba(6,182,212,1)] border-4 border-dark flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                  
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-32' : 'md:pr-32'} pl-20 relative`}>
                    
                    <div className="group bg-dark-lighter p-8 rounded-2xl border border-dark-border hover:border-accent transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                      {/* Year / Date Badge */}
                      <span className="inline-block px-5 py-2 border border-accent rounded-full text-xs font-sans uppercase tracking-[0.2em] text-accent mb-6 bg-accent/5 font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        Acquired • {cert.date}
                      </span>
                      
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 uppercase tracking-tight leading-none group-hover:text-accent transition-colors">
                        {cert.name}
                      </h3>
                      <h4 className="text-xl text-gray-400 font-sans mb-8 font-light">
                        {cert.issuer}
                      </h4>
                      
                      {/* Interactive Image Preview in Card */}
                      <div className="w-full h-48 overflow-hidden rounded-xl bg-dark border border-dark-border group-hover:border-accent/50 transition-colors">
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                      </div>
                      
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
