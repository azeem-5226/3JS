import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', path: '/#projects' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-dark-border' : 'bg-transparent py-8 mix-blend-normal'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-black tracking-tighter text-white uppercase">
          AZEEM NOOR
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path.startsWith('/#') && location.pathname === '/' ? link.path.substring(1) : link.path}
                  className="text-gray-300 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-gray-400 transition-colors mix-blend-normal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-dark border-b border-dark-border overflow-hidden"
          >
            <ul className="flex flex-col py-8 px-6 space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path.startsWith('/#') && location.pathname === '/' ? link.path.substring(1) : link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-display font-black text-white uppercase tracking-tighter hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
