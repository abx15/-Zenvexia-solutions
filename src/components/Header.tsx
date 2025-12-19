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

  // Close mobile menu when clicking a nav link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out ${
          isScrolled 
            ? 'h-14 sm:h-16 bg-white/98 backdrop-blur-2xl shadow-xl border-b border-gray-100/60' 
            : 'h-16 sm:h-20 bg-gradient-to-b from-white/98 to-white/94 backdrop-blur-2xl shadow-lg border-b border-gray-100/40'
        }`}
      >
        {/* Animated gradient line under header */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0.3 : 0.15 }}
          transition={{ duration: 0.5 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
          <div className="h-full flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo with smooth animation */}
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 flex-shrink-0 group"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.img
                src={logo}
                alt="Zenvexia"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain rounded-lg sm:rounded-xl shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.span 
                className="hidden sm:inline font-bold text-lg sm:text-xl text-gray-900 tracking-tight"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Zenvexia
              </motion.span>
            </motion.a>

            {/* Desktop Nav - Enhanced with smooth transitions */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg z-0" />
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-blue-700 transition-colors duration-300">{link.name}</span>
                  
                  {/* Bottom line animation */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA - Enhanced */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a 
                href="#portfolio"
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                
                <span className="relative z-10">Get Started</span>
              </motion.a>
            </div>

            {/* Mobile Button - Enhanced */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 transition-all duration-200 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ backgroundColor: '#e5e7eb' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="stroke-2" />
                ) : (
                  <Menu size={24} className="stroke-2" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with smooth animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-lg z-[997]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Enhanced smooth dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 35, duration: 0.4 }}
              className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100/60 z-[998] max-h-[calc(100vh-64px)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
                {/* Navigation Links - Staggered smooth animation */}
                <nav className="space-y-1.5 mb-8 sm:mb-10">
                  <motion.div 
                    className="text-xs uppercase font-bold text-gray-500 px-4 py-2 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Menu
                  </motion.div>
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: -40, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: -40, y: 10 }}
                      transition={{ 
                        delay: 0.15 + (index * 0.08), 
                        type: 'spring', 
                        stiffness: 300,
                        damping: 25
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 px-4 py-4 text-base sm:text-lg font-bold text-gray-800 rounded-xl transition-all duration-300 hover:bg-blue-100 hover:text-blue-700"
                    >
                      {/* Dot indicator */}
                      <motion.span 
                        className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      />
                      
                      {/* Text */}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </nav>

                {/* Divider with gradient */}
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 sm:my-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />

                {/* Action Buttons - Smooth staggered entrance */}
                <motion.div 
                  className="space-y-3 sm:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                >
                  {/* Get Started Button */}
                  <motion.a
                    href="#contact"
                    onClick={handleNavClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full px-6 py-4 sm:py-4.5 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.a>

                  {/* Portfolio Button */}
                  <motion.a
                    href="#portfolio"
                    onClick={handleNavClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full px-6 py-4 sm:py-4.5 border-2 border-blue-600 text-blue-600 font-bold text-base sm:text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Background on hover */}
                    <span className="absolute inset-0 bg-blue-50 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-0" />
                    
                    <span className="relative z-10">View Portfolio</span>
                  </motion.a>
                </motion.div>

                {/* Footer Info - Smooth fade in */}
                <motion.div 
                  className="mt-10 sm:mt-12 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Transform your business with <br className="block sm:hidden" />
                    <motion.span 
                      className="font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Zenvexia Solutions
                    </motion.span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
