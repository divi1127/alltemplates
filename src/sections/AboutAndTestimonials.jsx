import { motion } from 'framer-motion';
import { SectionTitle, Card } from '../components/Common';
import { useTheme } from '../themes/ThemeContext';

export const About = ({ about }) => {
  if (!about) return null;
  const { currentTheme } = useTheme();
  const isConstruction = currentTheme === 'construction';

  if (isConstruction) {
    return (
      <section id="about" className="bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[90vh]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center px-10 py-20 lg:w-1/2 lg:pr-16"
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Who We Are</span>
            <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-8">
              {about.title}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-14 max-w-lg">
              {about.description}
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-8 border-r border-white/10 hover:bg-white/5 transition-colors">
                <span className="text-5xl font-black text-primary/20 block mb-3">01</span>
                <h4 className="text-xl font-black text-white mb-3 tracking-tight">Our Vision</h4>
                <div className="w-10 h-0.5 bg-primary mb-4" />
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {about.vision || "To be the global leader through innovation and integrity."}
                </p>
              </div>
              <div className="p-8 hover:bg-white/5 transition-colors">
                <span className="text-5xl font-black text-primary/20 block mb-3">02</span>
                <h4 className="text-xl font-black text-white mb-3 tracking-tight">Our Mission</h4>
                <div className="w-10 h-0.5 bg-primary mb-4" />
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {about.mission || "Empowering clients with solutions that drive sustainable growth."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:w-1/2 h-80 lg:h-auto"
          >
            <img
              src={about.image || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200"}
              alt="About SteelForge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent lg:block hidden" />
            {/* Stat overlays */}
            <div className="absolute bottom-10 left-10 flex gap-6">
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-center">
                <span className="text-3xl font-black text-primary block">500+</span>
                <span className="text-zinc-400 text-xs uppercase tracking-widest">Projects</span>
              </div>
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-center">
                <span className="text-3xl font-black text-primary block">30+</span>
                <span className="text-zinc-400 text-xs uppercase tracking-widest">Years</span>
              </div>
              <div className="bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-center">
                <span className="text-3xl font-black text-primary block">200+</span>
                <span className="text-zinc-400 text-xs uppercase tracking-widest">Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section-padding bg-[var(--color-background)]">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group max-w-md mx-auto lg:mx-0"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
            <img 
              src={about.image || "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"} 
              alt="About Image" 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/20 -z-0 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/20 -z-0 rounded-full blur-[80px]"></div>
        </motion.div>

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title={about.title} 
              subtitle="" 
              centered={false} 
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-text)] mb-10 leading-relaxed font-semibold italic opacity-90"
          >
            {about.description}
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-10 mt-12">
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-accent opacity-30">01</span>
                <h4 className="text-2xl font-black tracking-tight text-[var(--color-text)]">Our Vision</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed border-l-2 border-accent/20 pl-6">
                {about.vision || "To be the global leader in our industry through innovation and integrity."}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-accent opacity-30">02</span>
                <h4 className="text-2xl font-black tracking-tight text-[var(--color-text)]">Our Mission</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed border-l-2 border-accent/20 pl-6">
                {about.mission || "Empowering clients with solutions that drive sustainable growth."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const Testimonials = ({ testimonials = [] }) => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <SectionTitle title="Client Success Stories" subtitle="Don't just take our word for it—hear from the people we've worked with." />
      
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full max-w-md"
          >
            <Card className="flex flex-col h-full italic">
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-black mb-8">
                "{item.content}"
              </p>
              <div className="mt-auto flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${item.author}`} alt={item.author} />
                </div>
                <div>
                  <h5 className="font-bold">{item.author}</h5>
                  <p className="text-sm opacity-60">{item.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
