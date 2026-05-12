import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'hover:bg-primary/10 text-primary transition-all rounded-theme px-6 py-3',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
