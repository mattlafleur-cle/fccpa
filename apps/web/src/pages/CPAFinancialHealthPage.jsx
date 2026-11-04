import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wallet, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const whereWeStart = [
  {
    title: 'Bookkeeping cleanup and catch-up.',
    text: 'Months or years behind, brought current and reconciled.',
  },
  {
    title: 'Personal and business separated.',
    text: 'Accounts, cards, and records untangled so the numbers mean something.',
  },
  {
    title: 'Structure and setup.',
    text: 'Entity selection and formation, chart of accounts, payroll, and systems configured properly at the start.',
  },
  {
    title: 'A cash routine.',
    text: 'A simple monthly rhythm you can actually maintain, and reports you understand.',
  },
  {
    title: 'Succession and transition readiness.',
    text: 'Clean records and defensible numbers well before a sale or handoff, so the financial side is ready when the decision arrives.',
  },
];

const CPAFinancialHealthPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Financial Health and Operations',
    serviceType: 'Bookkeeping, Structure, and Financial Cleanup',
    description:
      'Bookkeeping cleanup and catch-up, personal and business separation, entity setup, cash routines, and succession readiness for businesses, individuals, and households.',
    provider: {
      '@type': 'AccountingService',
      name: 'Forest City CPA',
      telephone: '+1-216-550-4689',
      email: 'hello@forestcity.pro',
      areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
      address: { '@type': 'PostalAddress', addressLocality: 'Cleveland', addressRegion: 'OH', addressCountry: 'US' },
    },
    url: 'https://forestcity.pro/cpa/financial-health',
  };

  return (
    <>
      <Helmet>
        <title>Bookkeeping, Structure, and Financial Cleanup | Forest City CPA | Cleveland, OH</title>
        <meta
          name="description"
          content="Bookkeeping cleanup and catch-up, personal and business separation, entity setup, cash routines, and succession readiness for businesses, individuals, and households."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/financial-health" />
        <meta property="og:title" content="Bookkeeping, Structure, and Financial Cleanup | Forest City CPA | Cleveland, OH" />
        <meta property="og:description" content="Bookkeeping cleanup and catch-up, personal and business separation, entity setup, cash routines, and succession readiness for businesses, individuals, and households." />
        <meta property="og:url" content="https://forestcity.pro/cpa/financial-health" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bookkeeping, Structure, and Financial Cleanup | Forest City CPA | Cleveland, OH" />
        <meta name="twitter:description" content="Bookkeeping cleanup and catch-up, personal and business separation, entity setup, cash routines, and succession readiness." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forestcity.pro/' },
            { '@type': 'ListItem', position: 2, name: 'Forest City CPA', item: 'https://forestcity.pro/cpa' },
            { '@type': 'ListItem', position: 3, name: 'Bookkeeping & Financial Cleanup', item: 'https://forestcity.pro/cpa/financial-health' },
          ],
        })}</script>
      </Helmet>

      <Header transparent={true} />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1698435378315-3cf2e03473a4"
            alt="Financial analysis and business architecture"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/85 via-[#0F1820]/75 to-[#0F1820]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <Wallet className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
            </div>
            <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
              Get the fundamentals right.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Clean books, the right structure, separated accounts, and a routine you can keep. This is the work that has to happen before strategy means anything, for businesses, individuals, and households alike.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                Book a Clarity Call
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Where we usually start */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-10 text-balance">Where we usually start</h2>
          <div className="space-y-8">
            {whereWeStart.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-5 border-l-2 border-[#477956]/40 pl-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1820] mb-2">{item.title}</h3>
                  <p className="text-[#0F1820]/80 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed scope, fixed fee */}
      <section className="section-spacing !pt-12 !pb-14 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-6 text-balance">Fixed scope, fixed fee</h2>
          <p className="text-lg text-[#0F1820]/80 leading-relaxed max-w-2xl mx-auto mb-10">
            This work is quoted as a defined project with a clear finish line, not open-ended hourly billing. You will know the scope and the fee before we start.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
              Book a Clarity Call
            </span>
          </a>
          <p className="mt-8 text-[#0F1820]/60 text-sm">
            Forest City CPA helps businesses, individuals, and households across Cleveland, Lorain County, and Northeast Ohio get their financial fundamentals in order, with clients served remotely nationwide.
          </p>
          <p className="mt-4 text-[#0F1820]/60 text-sm">
            <Link to="/cpa" className="text-[#477956] hover:underline underline-offset-4 inline-flex items-center gap-1">
              Back to Forest City CPA <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </>
  );
};

export default CPAFinancialHealthPage;
