import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PracticeCard = ({ icon: Icon, title, description, index, to }) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="premium-card p-8 h-full flex flex-col group relative overflow-hidden"
    >
      <div className="mb-6 flex justify-between items-start">
        <div className="w-14 h-14 bg-[#477956]/10 flex items-center justify-center rounded-sm">
          <Icon className="w-7 h-7 text-[#477956]" />
        </div>
        {to && (
          <div className="text-muted-foreground/40 group-hover:text-[#477956] transition-colors duration-300">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        )}
      </div>
      
      <h3 className="serif-heading text-2xl md:text-3xl mb-4 text-balance group-hover:text-[#477956] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed flex-grow relative z-10">
        {description}
      </p>
      
      {/* Decorative hover gradient */}
      <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-tl from-[#F2D09F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full pointer-events-none" />
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#477956] rounded-sm">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default PracticeCard;