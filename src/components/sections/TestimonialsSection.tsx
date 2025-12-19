import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Zenvexia transformed our digital presence completely. Their team delivered a stunning web application that exceeded our expectations. The attention to detail and technical expertise was remarkable.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, FinanceFlow',
    content: 'Working with Zenvexia was a game-changer for our fintech platform. They understood our complex requirements and delivered a scalable, secure solution that handles millions of transactions.',
    rating: 5,
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, HealthHub',
    content: 'The mobile app Zenvexia built for us has received incredible feedback from our users. Their UI/UX expertise and technical skills made the development process smooth and enjoyable.',
    rating: 5,
    avatar: 'ER',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Director, LogiPro Solutions',
    content: 'Zenvexia\'s digital transformation consulting helped us modernize our entire logistics operation. The custom software they developed has improved our efficiency by 40%.',
    rating: 5,
    avatar: 'DK',
  },
  {
    id: 5,
    name: 'Amanda Foster',
    role: 'Product Manager, EduLearn',
    content: 'The team at Zenvexia brought our EdTech vision to life. Their collaborative approach and commitment to quality resulted in a platform that our students and teachers love.',
    rating: 5,
    avatar: 'AF',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-background/60 uppercase tracking-widest">Testimonials</span>
          <h2 className="heading-lg mt-4 mb-6 text-background">
            What Our Clients Say
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Zenvexia Solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-background/10"
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mb-8 mx-auto">
              <Quote className="w-6 h-6 text-background" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-background/90 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-background">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-background">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-background/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-background/10 hover:text-background transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-primary' : 'bg-background/30 hover:bg-background/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-background/10 hover:text-background transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Clients Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-background/50 mb-8 uppercase tracking-widest">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['TechCorp', 'FinanceHub', 'HealthFirst', 'EduGlobal', 'LogiSmart'].map((company) => (
              <div
                key={company}
                className="text-xl md:text-2xl font-bold text-background/30 hover:text-background/50 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
