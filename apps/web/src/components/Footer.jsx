import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = ({ compact = false, description = 'Financial clarity. Intelligent systems. Better decisions. Building organizations designed to last.' }) => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0F1820] text-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? 'py-12' : 'py-16'}`}>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${compact ? 'gap-8 mb-8' : 'gap-12 mb-12'}`}>
          {/* Brand */}
          <div>
            <span className="serif-heading text-3xl block mb-4">Forest City</span>
            <p className="text-white/70 leading-relaxed text-sm lg:text-base max-w-sm">
              {description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <span className="font-semibold text-lg block mb-4 tracking-wide">Quick Links</span>
            <nav className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/ai" className="block text-white/70 hover:text-white transition-colors">
                Forest City AI
              </Link>
              <Link to="/cpa" className="block text-white/70 hover:text-white transition-colors">
                Forest City CPA
              </Link>
              <div className="pl-4 space-y-2 border-l border-white/10">
                <Link to="/cpa/nonprofit" className="block text-white/55 hover:text-white text-sm transition-colors">
                  Nonprofit
                </Link>
                <Link to="/cpa/tax-planning" className="block text-white/55 hover:text-white text-sm transition-colors">
                  Tax Planning
                </Link>
                <Link to="/individual-tax-preparation" className="block text-white/55 hover:text-white text-sm transition-colors">
                  Individual Taxes
                </Link>
                <Link to="/cpa/financial-health" className="block text-white/55 hover:text-white text-sm transition-colors">
                  Financial Health
                </Link>
                <Link to="/cpa/review-services" className="block text-white/55 hover:text-white text-sm transition-colors">
                  Statement Reviews
                </Link>
              </div>
              <Link to="/consulting" className="block text-white/70 hover:text-white transition-colors">
                Forest City Consulting
              </Link>
              <Link to="/faq" className="block text-white/70 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="block text-white/70 hover:text-[#F2D09F] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div>
            <span className="font-semibold text-lg block mb-4 tracking-wide">Contact</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white/70 mt-0.5" />
                <a href="mailto:hello@forestcity.pro" className="text-white/70 hover:text-white transition-colors">
                  hello@forestcity.pro
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/70 mt-0.5" />
                <a href="tel:+12165504689" className="text-white/70 hover:text-white transition-colors">
                  (216) 550-4689
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/70 mt-0.5" />
                <span className="text-white/70">
                  Cleveland, Ohio
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/45 text-xs leading-relaxed max-w-3xl mb-6">
            Forest City CPA provides accounting and tax services. Information on this site is general and not advice for any specific situation. Outcomes depend on individual facts and circumstances.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Forest City. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;