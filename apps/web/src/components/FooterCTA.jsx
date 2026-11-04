import React from 'react';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const FooterCTA = ({ compact = false, description = 'Thirty minutes, no cost, no pitch. If we are not the right fit, we will say so.' }) => {
  return (
    <section className={`bg-[#0F1820] ${compact ? 'py-14 md:py-20' : 'py-20 md:py-28'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-4xl md:text-5xl text-white mb-6 leading-tight text-balance">
          Know exactly where you stand.
        </h2>
        <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer">
          <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
            Book a Clarity Call
          </span>
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
