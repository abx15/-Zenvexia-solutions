import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🎸' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⎈' },
      { name: 'CI/CD', icon: '🔄' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Figma', icon: '🎯' },
      { name: 'Git', icon: '📂' },
      { name: 'Jira', icon: '📋' },
      { name: 'Slack', icon: '💬' },
    ],
  },
];

const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="technologies" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Tech Stack</span>
          <h2 className="heading-lg mt-4 mb-6">
            Technologies We Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions for our clients.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="bg-background rounded-3xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold mb-6 text-center">{category.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * categoryIndex + 0.05 * itemIndex }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/20 rounded-full px-8 py-4">
            <span className="text-sm font-medium text-foreground">Our Core Stack:</span>
            <div className="flex items-center gap-3">
              {['MongoDB', 'Express', 'React', 'Node'].map((tech, index) => (
                <span
                  key={tech}
                  className="bg-background px-4 py-2 rounded-full text-sm font-semibold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
