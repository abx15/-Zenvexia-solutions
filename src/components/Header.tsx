import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/siteicon.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled 
            ? 'h-16 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'h-20 bg-white/80 backdrop-blur-md shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex items-center justify-between">
            {/* Logo + Name - Clean */}
            <a href="#home" className="flex items-center gap-3 flex-shrink-0">
              <img
                src={logo}
                alt="Zenvexia"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
              />
              {/* <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                  Zenvexia
                </h1>
              </div> */}
            </a>

            {/* Desktop Nav - Clean */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA - Simple */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#portfolio" className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Portfolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white/50 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Clean */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 right-0 bg-white shadow-2xl border-t"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-8">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-xl font-semibold text-gray-800 hover:bg-gray-100 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-4 mt-6 bg-blue-600 text-white font-bold text-lg rounded-xl text-center shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200"
                  >
                    Get Started
                  </a>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
