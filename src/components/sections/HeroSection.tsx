import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import logo from '@/assets/siteicon.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
      <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto container-padding w-full py-16 sm:py-24 lg:py-32 xl:py-40">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Digital Transformation Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-xl mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Transforming Ideas Into{' '}
              <span className="relative">
                Digital Reality
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We craft cutting-edge web & mobile solutions that drive growth, enhance user experiences, and empower businesses to thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl">
                Start Your Project
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-outline inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl">
                <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-border"
            >
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '8+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element - FIXED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle - Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full animate-pulse z-0" />
              
              {/* Inner Circle */}
              <div className="absolute inset-4 bg-gradient-to-br from-background to-accent/50 rounded-full shadow-glass-lg z-10" />
              
              {/* Floating Cards - Proper z-index */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -left-8 glass-card rounded-2xl p-4 shadow-glass z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Fast Delivery</div>
                    <div className="text-xs text-muted-foreground">On-time, every time</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -right-4 glass-card rounded-2xl p-4 shadow-glass z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Innovation</div>
                    <div className="text-xs text-muted-foreground">Cutting-edge tech</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-8 left-8 glass-card rounded-2xl p-4 shadow-glass z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">5-Star Quality</div>
                    <div className="text-xs text-muted-foreground">Client satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Center Logo - FIXED WITH PROPER Z-INDEX & SIZING */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="text-center">
                  <img 
                    src={logo} 
                    alt="Zenvexia Logo"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto drop-shadow-2xl" 
                  />
                  {/* Uncomment if you want text below logo */}
                  {/* <div className="text-sm font-medium text-muted-foreground mt-2">Zenvexia</div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-current rounded-full flex justify-center pt-1.5 sm:pt-2"
          >
            <div className="w-1 h-1.5 sm:h-2 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
