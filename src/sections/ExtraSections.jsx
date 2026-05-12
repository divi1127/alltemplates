import { motion } from 'framer-motion';
import { SectionTitle, Card } from '../components/Common';
import { Check, Plus, Minus } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/Button';

export const Gallery = ({ items = [], title = "Our Recent Projects" }) => {
  return (
    <section id="gallery" className="section-padding">
      <SectionTitle title={title} subtitle="A showcase of our best work across various industries and domains." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="group relative overflow-hidden rounded-theme shadow-lg aspect-square">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Pricing = ({ plans = [], id = "pricing", title = "Our Menu", subtitle }) => {
  const defaultSubtitle = 
    id === 'listings' ? "Discover exclusive properties in premier locations worldwide."
    : id === 'projects' ? "Transparent, competitive packages built for every scale of construction."
    : "Choose from our delicious selection of treats.";

  const sectionBg = 
    id === 'listings' ? 'bg-slate-900'
    : id === 'projects' ? 'bg-zinc-950'
    : 'bg-slate-50 dark:bg-slate-900/50';

  return (
    <section id={id} className={`section-padding ${sectionBg}`}>
      <SectionTitle 
        title={title} 
        subtitle={<span className={`${id === 'listings' || id === 'projects' ? 'text-white/60' : 'text-black'} font-medium`}>{subtitle || defaultSubtitle}</span>} 
      />
      <div className={`max-w-6xl mx-auto px-6 ${
        id === 'projects' ? 'grid grid-cols-1 gap-8'
        : id === 'listings' ? 'grid gap-12 grid-cols-1'
        : 'grid md:grid-cols-3 gap-8'
      }`}>
        {plans.map((plan, index) => {
          if (id === 'projects') {
            const stats = [
              { label: "Timeline", value: plan.features[plan.features.length - 1] },
              { label: "Scale", value: plan.features[0] },
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-xl border ${
                  plan.featured 
                    ? 'border-primary shadow-2xl shadow-primary/20' 
                    : 'border-white/10'
                } bg-white/5 flex flex-col md:flex-row`}>
                  
                  {/* Amber accent stripe */}
                  <div className={`w-full md:w-2 shrink-0 ${
                    plan.featured ? 'bg-primary' : 'bg-white/10'
                  }`} />

                  {/* Image */}
                  <div className="relative md:w-64 h-52 md:h-auto shrink-0 overflow-hidden">
                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-zinc-950/40" />
                    {plan.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-zinc-950 text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between p-8 flex-grow">
                    <div>
                      <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-2 block">Package 0{index + 1}</span>
                      <h3 className="text-3xl font-black text-white tracking-tighter mb-3">{plan.name}</h3>
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {plan.features.slice(0, -1).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-sm" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center border-t border-white/10 pt-6">
                      <Button className="bg-primary text-zinc-950 hover:bg-white font-black px-8 py-3 border-none active:scale-95 transition-all">
                        Request a Quote
                      </Button>
                      <span className="text-white/30 text-sm font-bold uppercase tracking-widest">Starting at {plan.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (id === 'listings') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:border-accent/50 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Property Image - Landscape */}
                  <div className="relative md:w-1/2 h-80 md:h-auto overflow-hidden">
                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    
                    {plan.featured && (
                      <div className="absolute top-6 left-6 bg-accent text-slate-950 text-xs font-bold px-4 py-2 rounded-lg shadow-xl uppercase tracking-widest z-20">
                        Featured Property
                      </div>
                    )}
                  </div>

                  {/* Property Details */}
                  <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4 block">Exclusive Listing 0{index + 1}</span>
                    <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">{plan.name}</h3>
                    
                    <ul className="grid grid-cols-2 gap-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-6 items-center">
                      <Button variant="primary" className="bg-accent text-slate-950 hover:bg-white hover:text-slate-950 border-none font-black px-10 py-4 transition-all active:scale-95 shadow-2xl shadow-accent/20">
                        Explore Property
                      </Button>
                      <button className="text-white/40 hover:text-white font-bold flex items-center gap-2 group/btn">
                        Download Brochure <Icons.Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={plan.featured ? "border-primary ring-2 ring-primary relative overflow-hidden h-full flex flex-col p-0" : "h-full flex flex-col p-0"}>
                {plan.image && (
                  <div className="w-full h-64 overflow-hidden">
                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow text-center">
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold px-4 py-1 rounded-bl-theme">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-sm font-medium opacity-80 flex items-center justify-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="primary" className="w-full text-white font-bold">
                      Order Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export const FAQ = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Frequently Asked Questions" subtitle="Find answers to common questions about our services and process." />
        <div className="space-y-4 mt-12">
          {items.map((item, index) => (
            <div key={index} className="border border-slate-200 dark:border-white/10 rounded-theme overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold">{item.question}</span>
                {activeIndex === index ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 opacity-70 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InfoSection = ({ details = [] }) => {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col"
          >
            <h4 className="text-3xl font-black mb-8 text-[var(--color-text)] flex items-center gap-4">
              <span className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-lg font-black shadow-lg shadow-primary/10">!</span>
              {detail.title}
            </h4>
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none h-full">
              <ul className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                {detail.items.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0"></div>
                    <span className="text-lg font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
