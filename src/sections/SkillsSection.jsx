import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const SkillCategory = ({ title, items }) => (
  <div className="mb-16">
    <h3 className="text-sm font-sans uppercase tracking-[0.3em] text-gray-500 mb-8 border-b border-dark-border pb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {items.map((skill) => (
        <div key={skill.name} className="px-6 py-3 border border-dark-border text-white hover:bg-white hover:text-dark transition-colors duration-300 font-medium text-lg uppercase tracking-wider cursor-default">
          {skill.name}
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative z-10 bg-dark border-t border-dark-border overflow-hidden">
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
            TECH
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] font-display font-black text-accent uppercase tracking-tighter mix-blend-normal leading-none ml-0 md:ml-32"
          >
            SKILLS
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <p className="text-gray-500 text-lg leading-relaxed pr-8">
              My technical arsenal is constantly evolving. I focus on technologies that enable high-performance, robust, and visually stunning web applications.
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <SkillCategory title="Frontend Engineering" items={skills.frontend} />
            <SkillCategory title="Backend & MERN" items={skills.backend} />
            <SkillCategory title="Languages & Tools" items={[...skills.programming, ...skills.tools]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
