import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

const Footer = () => {
  return (
    <footer className="bg-dark pt-32 pb-8 border-t border-dark-border z-10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <h2 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.8] tracking-tighter uppercase">
              AZEEM<br/>NOOR
            </h2>
          </div>
          <div className="mt-12 md:mt-0 flex gap-6">
            <a href="https://github.com/azeem-noor" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-dark-border flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/azeem-noor" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-dark-border flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark-border text-gray-600 text-xs uppercase tracking-widest font-sans">
          <p>&copy; {new Date().getFullYear()} Azeem Noor.</p>
          <p className="mt-4 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
