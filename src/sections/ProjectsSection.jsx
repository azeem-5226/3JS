import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative z-10 bg-dark border-t border-dark-border overflow-hidden">
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
            SELECTED
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] font-display font-black text-accent uppercase tracking-tighter mix-blend-normal leading-none ml-0 md:ml-32"
          >
            WORKS
          </motion.h2>
        </div>

        <div className="flex flex-col space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full lg:w-3/5 overflow-hidden bg-dark-lighter aspect-[4/3] relative">
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-lighten"
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <div className="w-24 h-24 rounded-full bg-white text-dark flex items-center justify-center font-bold tracking-widest uppercase text-xs">
                    View
                  </div>
                </div>
              </div>
              
              <div className={`w-full lg:w-2/5 ${index % 2 !== 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-gray-500 mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 border border-dark-border rounded-full text-gray-400 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;
