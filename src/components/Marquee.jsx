import { motion } from 'framer-motion';

const Marquee = ({ text }) => {
  return (
    <div className="relative w-full overflow-hidden bg-accent py-4 flex whitespace-nowrap z-20 mix-blend-difference">
      <motion.div 
        className="flex space-x-12 shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
        <span className="text-4xl md:text-6xl font-display font-black text-dark tracking-tighter uppercase">{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
