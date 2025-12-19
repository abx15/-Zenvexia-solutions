import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  Workflow, 
  HeadphonesIcon,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom, responsive, and scalable web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Software Solutions',
    description: 'Custom software development tailored to your business needs, from enterprise applications to specialized tools.',
    features: ['Custom CRM/ERP', 'SaaS Development', 'Legacy Modernization', 'Cloud Solutions'],
  },
  {
    icon: Workflow,
    title: 'Digital Transformation',
    description: 'Strategic digital transformation services to modernize your business processes and technology infrastructure.',
    features: ['Process Automation', 'Cloud Migration', 'Data Analytics', 'AI Integration'],
  },
  {
    icon: HeadphonesIcon,
    title: 'IT Consulting',
    description: 'Expert IT consulting services to help you make informed technology decisions and optimize your digital strategy.',
    features: ['Technology Strategy', 'Architecture Review', 'Security Audits', 'Team Augmentation'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">Our Services</span>
          <h2 className="heading-lg mt-3 sm:mt-4 mb-3 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Comprehensive Digital<br />Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            From concept to deployment, we provide end-to-end digital services that help your business thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-background border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-primary/50 hover:shadow-glass-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-primary/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-foreground" />
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl">
            Discuss Your Project
            <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
