import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Development',
    description: 'A comprehensive financial analytics dashboard with real-time data visualization and reporting.',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Scalable e-commerce solution with inventory management and payment integration.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'Healthcare App',
    category: 'Mobile App',
    description: 'Patient management system with telemedicine features and appointment scheduling.',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    color: 'from-rose-500/20 to-orange-500/20',
  },
  {
    id: 4,
    title: 'Logistics Platform',
    category: 'Enterprise Software',
    description: 'Fleet management and route optimization system for logistics companies.',
    tags: ['Python', 'Django', 'AWS', 'Machine Learning'],
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 5,
    title: 'EdTech Portal',
    category: 'Web Application',
    description: 'Learning management system with video conferencing and progress tracking.',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours and agent management.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Three.js'],
    color: 'from-cyan-500/20 to-emerald-500/20',
  },
];

const categories = ['All', 'Web Development', 'Mobile App', 'Full Stack', 'Enterprise Software', 'Web Application'];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">Portfolio</span>
          <h2 className="heading-lg mt-3 sm:mt-4 mb-3 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              layout
              className="group relative bg-background border border-border rounded-2xl sm:rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-glass-lg transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`relative h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-background/80 rounded-lg sm:rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">{project.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-background rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group text-sm sm:text-base">
            View All Projects
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
