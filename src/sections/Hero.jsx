import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { useTheme } from '../themes/ThemeContext';
import { Truck, RotateCcw, ShieldCheck, Star } from 'lucide-react';

export const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentTheme } = useTheme();
  const slides = data.slides || [{ image: data.image, title: data.title, subtitle: data.subtitle, cta: data.cta }];
  const isSlideshow = slides.length > 1;
  const highlightColor = currentTheme === 'realEstate' ? 'text-accent' : 'text-primary';

  useEffect(() => {
    if (!isSlideshow) return;
    const interval = currentTheme === 'ecommerce' ? 5000 : 6000;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isSlideshow, slides.length, currentTheme]);

  const slide = slides[currentSlide];

  // ── ECOMMERCE HERO ────────────────────────────────────────────────
  if (currentTheme === 'ecommerce') {
    const heroImage = "https://i.pinimg.com/1200x/88/11/85/881185e849305be9cba584d78fe406ee.jpg";
    
    return (
      <section className="relative flex flex-col overflow-hidden pt-16">
        {/* Full-width hero image container */}
        <div className="relative w-full h-[80vh] min-h-[800px] flex items-center justify-center">
          {/* Background Image */}
          <img
            src={heroImage}
            alt="Skincare Collection"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/30" />

          {/* Text content - Centered */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-800 mb-4 bg-white/60 px-4 py-1.5 rounded-sm inline-block">
              New Collection
            </p>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-zinc-900 mb-6 drop-shadow-sm">
              Get The Perfectly<br />Hydrated Skin
            </h1>
            <p className="text-zinc-800 text-base lg:text-lg font-medium leading-relaxed mb-8 max-w-md bg-white/20 px-4 py-2 rounded-lg backdrop-blur-[1px]">
              Made using clean, non-toxic ingredients, our products are designed for everyone.
            </p>
            <button className="w-fit bg-zinc-900 text-white text-sm font-bold px-10 py-4 hover:bg-zinc-700 transition-colors shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Slide dots (static, decorative) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-zinc-900" />
            <span className="h-1.5 w-2 rounded-full bg-zinc-400" />
            <span className="h-1.5 w-2 rounded-full bg-zinc-400" />
          </div>
        </div>
      </section>
    );
  }

  // ── DEFAULT HERO (all other templates) ───────────────────────────
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={slide.image}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex justify-center lg:justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-white drop-shadow-2xl">
              {slide.title.split(' ').map((word, i) => (
                <span key={i} className={i % 3 === 0 ? highlightColor : "text-white"}> {word}</span>
              ))}
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-semibold max-w-lg drop-shadow-lg">
              {slide.subtitle}
            </motion.p>

            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="px-8 py-3.5 text-lg font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-transform text-white">
                {slide.cta}
              </Button>
              <Button variant="outline" className="px-8 py-3.5 text-lg font-bold border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
                Explore More
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      {isSlideshow && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 z-30 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-500 rounded-full ${
                currentSlide === i ? 'w-16 bg-accent' : 'w-4 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
