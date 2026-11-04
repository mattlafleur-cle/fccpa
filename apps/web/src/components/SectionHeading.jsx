import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'left', className = '' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      <h2 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-balance mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-prose">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;