import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-dark border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 w-full rounded-t-2xl overflow-hidden shrink-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 hover:bg-accent text-white hover:text-dark p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-10 flex flex-col grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-dark-lighter border border-white/5 rounded text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-dark-lighter border border-white/10 rounded-lg hover:border-accent hover:text-accent transition-colors disabled:opacity-50"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-accent text-dark font-medium rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
