import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Search, User, Heart, ShoppingBag } from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';
import { Button } from './Button';

export const Navbar = ({ companyName, navLinks = ['About', 'Services', 'Projects', 'Contact'] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, setIsDarkMode, currentTheme } = useTheme();
  const isConstruction = currentTheme === 'construction';
  const isRealEstate = currentTheme === 'realEstate';
  const isEcommerce = currentTheme === 'ecommerce';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── ECOMMERCE NAVBAR ─────────────────────────────────────────────
  if (isEcommerce) {
    const ecomLinks = ['Shop', 'Product', 'Pages', 'Blog'];
    return (
      <nav className="fixed w-full z-50 bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Left: nav links */}
          <div className="hidden md:flex items-center gap-8">
            {ecomLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="text-2xl font-black tracking-widest text-zinc-950 uppercase absolute left-1/2 -translate-x-1/2">
            {companyName}
          </div>

          {/* Right: Icons */}
          <div className="hidden md:flex items-center gap-5 text-zinc-600">
            <button className="hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
            <button className="hover:text-primary transition-colors"><User className="w-5 h-5" /></button>
            <button className="hover:text-primary transition-colors"><Heart className="w-5 h-5" /></button>
            <button className="relative hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-zinc-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t border-zinc-100 px-6 py-6 flex flex-col gap-4"
            >
              {ecomLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-zinc-700 hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-3xl font-black tracking-tighter drop-shadow-sm ${
            scrolled 
              ? 'text-primary' 
              : isConstruction ? 'text-white' 
              : isRealEstate ? 'text-accent'
              : isEcommerce ? 'text-white'
              : 'text-primary'
          }`}
        >
          {companyName}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                scrolled 
                  ? 'text-[var(--color-text)] hover:text-primary'
                  : isConstruction ? 'text-white hover:text-primary drop-shadow-md'
                  : isRealEstate ? 'text-accent hover:text-white drop-shadow-md'
                  : isEcommerce ? 'text-white hover:text-primary drop-shadow-md'
                  : 'text-white hover:text-primary drop-shadow-md'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? 'text-[var(--color-text)]' : 'text-white'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] md:hidden bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-3 bg-primary/10 rounded-full text-[var(--color-text)]"
            >
              <X size={30} />

          
            </button>

            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-black text-[var(--color-text)] hover:text-primary transition-colors tracking-tighter"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-center opacity-40">
              <p className="text-sm font-bold uppercase tracking-widest">{companyName}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
