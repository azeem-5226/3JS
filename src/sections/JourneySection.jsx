import { motion } from 'framer-motion';
import { journey } from '../data/portfolioData';

const JourneySection = () => {
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

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-border transform md:-translate-x-1/2"></div>
          
          <div className="space-y-24">
            {journey.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-dark z-10"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-8 relative`}>
                  <div className="md:hidden absolute left-0 top-6 -translate-x-[5px] w-3 h-3 rounded-full bg-white ring-4 ring-dark z-10"></div>
                  
                  <div className="group cursor-default">
                    <span className="inline-block px-4 py-1 border border-dark-border text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-6 group-hover:bg-white group-hover:text-dark transition-colors">
                      {item.year}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 uppercase tracking-tight group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-xl text-gray-500 font-sans mb-6">
                      {item.institution}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
