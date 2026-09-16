import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import Marquee from '../components/Marquee';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <section id="projects" className="relative z-10 bg-dark border-t border-dark-border overflow-hidden">
      <Marquee text="SELECTED WORKS • FRONTEND & BACKEND • " />
      
      <div className="container mx-auto px-4 md:px-8 py-32 relative">
        <div className="flex flex-col border-t border-dark-border">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-dark-border py-12 md:py-20 cursor-pointer relative z-10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-[12vw] md:text-[8vw] font-display font-black text-white uppercase tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-8 group-hover:text-transparent mix-blend-difference" style={{ WebkitTextStroke: '1px var(--color-white, #F8FAFC)' }}>
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs px-4 py-2 border border-white rounded-full text-white uppercase tracking-wider mix-blend-difference">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal (Ultra Premium) */}
      <AnimatePresence>
        {hoveredIndex !== null && typeof window !== 'undefined' && !window.matchMedia('(hover: none) and (pointer: coarse)').matches && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-0 overflow-hidden shadow-2xl rounded-2xl"
            style={{
              x: mousePos.x - 200,
              y: mousePos.y - 150,
            }}
          >
            <img 
              src={projects[hoveredIndex].image} 
              alt={projects[hoveredIndex].title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;
