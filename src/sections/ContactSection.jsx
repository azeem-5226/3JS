import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-dark-border bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter mb-6">
              Let's Talk
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm uppercase tracking-widest leading-relaxed">
              Have a project in mind or want to collaborate? Send me a message and I'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-dark-border py-4 text-white font-sans text-xl focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-dark-border py-4 text-white font-sans text-xl focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border-b border-dark-border py-4 text-white font-sans text-xl focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitted}
                className="btn-primary w-full md:w-auto"
              >
                {isSubmitted ? 'Message Sent' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
