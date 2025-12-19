import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We stay ahead of the curve, leveraging the latest technologies and frameworks to build future-proof solutions.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Your data security is our priority. We implement industry-leading security practices in every project.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of seasoned professionals brings decades of combined experience across various industries.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'We build solutions that grow with your business, ensuring long-term value and flexibility.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand the importance of deadlines. Our agile methodology ensures timely project completion.',
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to assist you with any questions or issues.',
  },
];

const achievements = [
  '150+ successful projects delivered',
  '50+ satisfied global clients',
  '8+ years of industry experience',
  '25+ skilled team members',
  '98% client satisfaction rate',
  'ISO 27001 certified processes',
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Why Choose Us</span>
            <h2 className="heading-lg mt-4 mb-6">
              Your Trusted Partner in Digital Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Zenvexia Solutions, we don't just build software – we build lasting partnerships. Our commitment to excellence, innovation, and client success sets us apart.
            </p>

            {/* Achievements List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
