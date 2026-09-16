import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolioData';
import { Award, X } from 'lucide-react';

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-32 relative z-10 bg-dark border-t border-dark-border overflow-hidden">
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
            AWARDS &
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] font-display font-black text-accent uppercase tracking-tighter mix-blend-normal leading-none ml-0 md:ml-32"
          >
            CREDENTIALS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-dark p-12 flex flex-col justify-between group cursor-pointer hover:bg-white hover:text-dark transition-colors duration-500 min-h-[320px]"
              onClick={() => setSelectedCert(cert)}
            >
              <div>
                <Award size={32} className="text-gray-500 group-hover:text-dark mb-8 transition-colors" />
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-dark mb-4 uppercase leading-snug">
                  {cert.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-600 font-sans tracking-wide">
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-8 text-xs font-sans uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-800">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              className="relative bg-dark-lighter p-2 w-full max-w-5xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 bg-white text-dark p-3 rounded-full hover:scale-110 transition-transform z-10"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-full flex flex-col items-center">
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.name} className="w-full object-contain max-h-[80vh]" />
                ) : (
                  <div className="py-32 flex items-center justify-center bg-dark w-full">
                    <Award size={120} className="text-gray-600" />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
