import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative z-10 border-t border-dark-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-[15vw] md:text-[10vw] font-display font-black text-transparent opacity-20 absolute -top-20 left-0 mix-blend-overlay pointer-events-none" style={{ WebkitTextStroke: '2px var(--color-white, #F8FAFC)' }}>
                ABOUT
              </h2>
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-gray-500 mb-6 border-b border-dark-border pb-4 relative z-10">
                About The Developer
              </h2>
            </div>
            
            <div className="lg:col-span-8 relative z-10">
              <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-12 mix-blend-normal">
                I build digital solutions bridging <span className="text-gray-500 italic">technical SEO</span> and fullstack excellence.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 font-sans text-lg leading-relaxed">
                <p>
                  I'm Azeem Noor, a Full Stack Developer and B.Sc. IT graduate (2026) from Mumbai University. I specialize in building modern, responsive, and scalable web applications with a strong focus on performance and clean architecture.
                </p>
                <p>
                  Alongside full-stack development, I have deep experience in Technical SEO, AI SEO (AIO), and AI Visibility Optimization. I'm passionate about continuous learning in DevOps, Cloud Computing, and Artificial Intelligence.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border">
            {[
              { label: 'Projects Built', value: '10+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Certificates', value: '9' },
              { label: 'Technologies', value: '20+' },
            ].map((stat, i) => (
              <div key={i} className="bg-dark p-8 md:p-12 flex flex-col items-center justify-center text-center group cursor-default">
                <span className="text-4xl md:text-6xl font-display font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
