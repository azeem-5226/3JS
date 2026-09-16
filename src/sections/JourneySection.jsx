import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journey } from '../data/portfolioData';

const JourneySection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
            CAREER
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

        <div className="max-w-5xl mx-auto relative" ref={containerRef}>
          {/* Faint Background Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-border transform md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-[15px] md:left-1/2 top-0 w-[2px] bg-accent transform md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            style={{ height: lineHeight }}
          />
          
          <div className="space-y-32">
            {journey.map((item, index) => {
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Desktop Dot */}
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: '#1E293B' }}
                    whileInView={{ scale: 1, backgroundColor: '#06B6D4' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full ring-8 ring-dark z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                  />
                  
                  {/* Mobile Dot */}
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: '#1E293B' }}
                    whileInView={{ scale: 1, backgroundColor: '#06B6D4' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="md:hidden absolute left-[15px] top-6 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-dark z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                  />
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-16 relative`}>
                    <div className="group cursor-default bg-dark-lighter p-8 border border-dark-border hover:border-accent transition-colors duration-500 relative overflow-hidden">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"></div>
                      
                      <span className="inline-block px-4 py-1 border border-accent text-xs font-sans uppercase tracking-[0.2em] text-accent mb-6">
                        {item.year}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      {item.institution && (
                        <h4 className="text-xl text-gray-500 font-sans mb-6">
                          {item.institution}
                        </h4>
                      )}
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {item.description}
                      </p>
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
