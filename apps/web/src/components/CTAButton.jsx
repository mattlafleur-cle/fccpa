import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyles = 'px-8 py-3 font-medium transition-all duration-200 inline-block text-center';
  
  const variants = {
    primary: 'bg-[#477956] text-white hover:brightness-110 active:scale-[0.98]',
    secondary: 'border-2 border-[#477956] text-[#477956] hover:bg-[#477956] hover:text-white active:scale-[0.98]'
  };
  
  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;