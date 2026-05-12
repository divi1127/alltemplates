import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Card = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -10, transition: { duration: 0.3 } } : {}}
      className={twMerge(
        "bg-white dark:bg-secondary/10 border border-slate-200 dark:border-white/10 p-6 rounded-theme shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={twMerge("mb-12", centered && "text-center")}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
