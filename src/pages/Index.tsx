import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zenvexia Solutions - Digital Transformation & IT Consulting</title>
        <meta name="description" content="Zenvexia Solutions is a premier technology partner offering web development, app development, UI/UX design, software solutions, digital transformation, and IT consulting services." />
        <meta name="keywords" content="web development, app development, UI/UX design, software solutions, digital transformation, IT consulting, MERN stack, React, Node.js" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenvexia Solutions - Digital Transformation & IT Consulting" />
        <meta property="og:description" content="Transform your business with cutting-edge digital solutions. Web & mobile development, UI/UX design, and IT consulting services." />
        <meta property="og:site_name" content="Zenvexia Solutions" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zenvexia Solutions - Digital Transformation & IT Consulting" />
        <meta name="twitter:description" content="Transform your business with cutting-edge digital solutions. Web & mobile development, UI/UX design, and IT consulting services." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://zenvexia.com" />
        
        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zenvexia Solutions",
            "url": "https://zenvexia.com",
            "description": "Premier technology partner offering digital transformation and IT consulting services.",
            "sameAs": [
              "https://linkedin.com/company/zenvexia",
              "https://twitter.com/zenvexia",
              "https://github.com/zenvexia"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          })}
        </script>
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Technology Services",
            "provider": {
              "@type": "Organization",
              "name": "Zenvexia Solutions"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "App Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UI/UX Design"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <TechnologiesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
