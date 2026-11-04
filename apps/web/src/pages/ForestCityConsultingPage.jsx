import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Network, RefreshCw, Presentation, Target, Anchor } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const ForestCityConsultingPage = () => {
  const approaches = [
    {
      title: "Business Strategy",
      description: "We help leadership teams clarify their vision, identify competitive advantages, and build actionable roadmaps for sustainable growth.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa"
    },
    {
      title: "Operations Improvement",
      description: "Analyzing and restructuring internal processes to eliminate friction, improve margins, and scale without breaking.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1692914274476-0e6920cc80cf"
    },
    {
      title: "Organizational Design",
      description: "Structuring teams, communication pathways, and accountability systems to execute on your strategy effectively.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1702547403011-a0f439b50aa8"
    },
    {
      title: "Leadership Development",
      description: "Equipping management with the frameworks and decision-making tools necessary to lead high-performing teams.",
      icon: Presentation,
      image: "https://images.unsplash.com/photo-1681949103006-70066fb25dfe"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Forest City Consulting | Strategy, Operations &amp; Leadership</title>
        <meta name="description" content="Forest City Consulting provides management consulting, operations improvement, organizational design, and leadership development for Cleveland and Northeast Ohio organizations." />
        <link rel="canonical" href="https://forestcity.pro/consulting" />
        <meta property="og:title" content="Forest City Consulting | Strategy, Operations & Leadership" />
        <meta property="og:description" content="Management consulting, operations improvement, and business strategy for forward-thinking organizations." />
        <meta property="og:url" content="https://forestcity.pro/consulting" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest City Consulting | Strategy, Operations & Leadership" />
        <meta name="twitter:description" content="Management consulting, operations improvement, and business strategy for forward-thinking organizations." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>
      
      <Header transparent={true} />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1685955011452-2d9cf1cb4081"
            alt="Modern architectural lines representing strategy"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/80 via-[#0F1820]/70 to-[#0F1820]/95"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <Compass className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City Consulting</span>
            </div>
            <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight">
              Direction and momentum.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
              Management consulting built on practical realities. We help leadership teams solve complex problems and build resilient organizations.
            </p>
            <Link to="/contact">
              <span className="px-8 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 inline-block font-medium text-lg">
                Schedule a Consultation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Zig-Zag Layout */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Strategic Consulting"
            subtitle="Theory without execution is a waste of time. Our consulting services are designed to create measurable momentum in your organization."
            align="center"
          />
          
          <div className="mt-16 space-y-24">
            {approaches.map((item, i) => (
              <div key={item.title} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] bg-[#FAFAFA] border border-border overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#477956]" />
                  </div>
                  <h3 className="serif-heading text-3xl mb-4 text-[#0F1820]">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-spacing bg-[#0F1820] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-3xl md:text-5xl mb-16">The Consulting Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="mx-auto w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#F2D09F]" />
              </div>
              <h4 className="text-xl font-semibold mb-3">1. Diagnose Objective Reality</h4>
              <p className="text-white/70 leading-relaxed">We start by understanding the unvarnished truth of your current operations, financials, and culture.</p>
            </div>
            <div>
              <div className="mx-auto w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#F2D09F]" />
              </div>
              <h4 className="text-xl font-semibold mb-3">2. Design the Intervention</h4>
              <p className="text-white/70 leading-relaxed">Developing tailored, practical solutions rather than applying templated corporate frameworks.</p>
            </div>
            <div>
              <div className="mx-auto w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <Anchor className="w-6 h-6 text-[#F2D09F]" />
              </div>
              <h4 className="text-xl font-semibold mb-3">3. Embed & Execute</h4>
              <p className="text-white/70 leading-relaxed">Working alongside your team to implement changes, ensuring they stick and yield measurable results.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ForestCityConsultingPage;