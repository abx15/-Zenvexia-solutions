import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Sparkles, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    { icon: Sparkles, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve excellence' },
    { icon: Award, title: 'Quality', description: 'Delivering exceptional results every time' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients worldwide with local care' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">About Us</span>
          <h2 className="heading-lg mt-4 mb-6">
            Building the Future of<br />Digital Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zenvexia Solutions is a premier technology partner dedicated to transforming businesses through innovative digital solutions and strategic IT consulting.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10 hover-lift"
          >
            <div className="w-14 h-14 bg-primary/30 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="heading-md mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with transformative technology solutions that drive growth, enhance efficiency, and create lasting value. We are committed to delivering excellence through innovation, integrity, and unwavering dedication to our clients' success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 md:p-10 hover-lift"
          >
            <div className="w-14 h-14 bg-primary/30 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="heading-md mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in digital transformation, recognized for our innovative solutions, exceptional talent, and positive impact on businesses worldwide. We envision a future where technology seamlessly empowers every organization to achieve its full potential.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="heading-md text-center mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background hover:bg-primary/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 bg-foreground rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '50+', label: 'Global Clients' },
              { value: '25+', label: 'Team Members' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-background mb-2">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
