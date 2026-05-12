import { motion } from 'framer-motion';
import { SectionTitle, Card } from '../components/Common';
import * as Icons from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';

export const Services = ({ services }) => {
  const { currentTheme } = useTheme();
  const isRealEstate = currentTheme === 'realEstate';
  const isEcommerce = currentTheme === 'ecommerce';

  // ── ECOMMERCE: Skincare category grid ─────────────────────────────
  if (isEcommerce) {
    return (
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 mb-3">Our Range</p>
          <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            Shop By Category
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto">
            From serums to SPF — everything your skin needs, curated with care.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Droplets;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3] mb-5">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-zinc-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-all duration-500 rounded-2xl" />
                  <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-zinc-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>
                <div className="px-1">
                  <h3 className="text-lg font-black text-zinc-900 mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">
                    Shop Now
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // ── DEFAULT: Real Estate & all other templates ────────────────────
  return (
    <section id="services" className={`section-padding ${isRealEstate ? 'bg-slate-950 text-white' : ''}`}>
      <SectionTitle
        title={isRealEstate ? "Exquisite Real Estate Services" : "Our Premium Services"}
        subtitle={isRealEstate
          ? "Unparalleled expertise and personalized attention for your most significant investments."
          : "We provide tailored solutions to help your business scale and succeed in the modern market."
        }
      />

      <div className={`grid gap-8 ${isRealEstate ? 'md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {services.map((service, index) => {
          const IconComponent = Icons[service.icon] || Icons.HelpCircle;

          if (isRealEstate) {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative"
              >
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-10 backdrop-blur-xl hover:border-accent/50 transition-all duration-500">
                  <div className="flex gap-8 items-start relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 shadow-lg shadow-accent/10 border border-accent/20">
                      <IconComponent className="text-accent w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4 block">Service 0{index + 1}</span>
                      <h3 className="text-3xl font-black mb-4 tracking-tighter">{service.title}</h3>
                      <p className="text-white/60 leading-relaxed text-lg mb-8">{service.description}</p>
                      <button className="flex items-center gap-3 text-accent font-bold group/btn">
                        Learn More
                        <div className="w-10 h-[2px] bg-accent group-hover/btn:w-16 transition-all duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <IconComponent className="text-primary group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 group-hover:text-white/80">{service.description}</p>
                <div className="mt-6 flex items-center text-primary font-semibold group-hover:text-white cursor-pointer">
                  Learn More <Icons.ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
