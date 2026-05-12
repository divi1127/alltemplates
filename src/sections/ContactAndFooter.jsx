import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle, Card } from '../components/Common';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle 
            title="Let's Start a Conversation" 
            subtitle={<span className="text-black font-medium text-lg">Ready to transform your business? Get in touch with us today for a free consultation.</span>} 
            centered={false} 
          />
          
          <div className="space-y-8 mt-12">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-xl font-bold">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Call Us</p>
                <p className="text-xl font-bold">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Visit Us</p>
                <p className="text-xl font-bold">123 Design St, Creative City, NY</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">Name</label>
                  <input required type="text" className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-theme p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">Email</label>
                  <input required type="email" className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-theme p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">Subject</label>
                <input required type="text" className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-theme p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">Message</label>
                <textarea required className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-theme p-4 focus:ring-2 focus:ring-primary outline-none transition-all h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <Button type="submit" className="w-full py-4 flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[300] bg-primary text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold"
          >
            <CheckCircle /> Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const Footer = ({ companyName, services }) => {
  return (
    <footer className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">{companyName}</h2>
          <p className="opacity-60 leading-relaxed">
            Building the next generation of digital experiences. We focus on quality, innovation, and speed to help your business thrive.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 opacity-60">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">Our Services</h4>
          <ul className="space-y-4 opacity-60">
            {services ? services.slice(0, 4).map(service => (
              <li key={service.id}>
                <a href="#services" className="hover:text-primary transition-colors">{service.title}</a>
              </li>
            )) : (
              <>
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">Newsletter</h4>
          <p className="opacity-60 mb-6">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-theme px-4 py-2 w-full focus:outline-none focus:border-primary" />
            <Button className="px-4">Join</Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-sm">
        <p>© 2026 {companyName}. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
