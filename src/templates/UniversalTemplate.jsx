import { useEffect } from 'react';
import { useTheme } from '../themes/ThemeContext';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { About, Testimonials } from '../sections/AboutAndTestimonials';
import { Gallery, Pricing, FAQ, InfoSection } from '../sections/ExtraSections';
import { Contact, Footer } from '../sections/ContactAndFooter';
import { motion } from 'framer-motion';

const Template = ({ data }) => {
  const { setCurrentTheme } = useTheme();

  useEffect(() => {
    if (data.theme) {
      setCurrentTheme(data.theme);
    }
  }, [data.theme, setCurrentTheme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Navbar 
        companyName={data.companyName} 
        navLinks={
          data.theme === 'realEstate' 
            ? ['About', 'Services', 'Listings', 'Contact']
            : data.theme === 'construction'
            ? ['About', 'Services', 'Projects', 'Contact']
            : data.theme === 'ecommerce'
            ? ['Shop', 'About', 'Categories', 'Contact']
            : ['About', 'Services', 'Gallery', 'Contact']
        } 
      />
      
      <main>
        <Hero data={data.hero} />
        
        {data.services && <Services services={data.services} />}
        
        <About about={data.about} />
        
        {data.gallery && <Gallery items={data.gallery} title={data.galleryTitle} />}
        
        {data.pricing && <Pricing 
          plans={data.pricing} 
          title={
            data.theme === 'realEstate' ? "Our Signature Listings" 
            : data.theme === 'construction' ? "Our Build Packages"
            : data.theme === 'ecommerce' ? "Style Box Plans"
            : "Our Menu"
          } 
          id={
            data.theme === 'realEstate' ? 'listings' 
            : data.theme === 'construction' ? 'projects'
            : data.theme === 'ecommerce' ? 'shop'
            : 'pricing'
          } 
        />}
        
        {data.info && <InfoSection details={data.info} />}
        
        {data.testimonials && <Testimonials testimonials={data.testimonials} />}
        
        {data.faq && <FAQ items={data.faq} />}
        
        <Contact />
      </main>
      
      <Footer companyName={data.companyName} services={data.services} />
    </motion.div>
  );
};

export default Template;
