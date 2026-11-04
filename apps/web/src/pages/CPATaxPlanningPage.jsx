import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const includes = [
  'A tax projection updated during the year, not reconstructed in April',
  'Entity structure and reasonable compensation reviewed and documented',
  'Retirement, benefits, and compensation planning coordinated with your other advisors',
  'Real estate and investment activity reviewed alongside the business, not separately',
  'Quarterly planning meetings with a written action list',
  'Business and individual return preparation included',
];

const whoThisFits = [
  'Business owners whose profit or complexity has outgrown a once-a-year relationship',
  'Owners considering a sale, a transition, or a change in structure',
  'Owners with real estate alongside an operating business',
  'Anyone who has been surprised by a tax bill in the last two years',
];

const CPATaxPlanningPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tax Strategy and Planning',
    serviceType: 'Tax Strategy and Planning for Business Owners',
    description:
      'Quarterly tax planning, entity structure review, return preparation, and coordinated planning for business owners and investors.',
    provider: {
      '@type': 'AccountingService',
      name: 'Forest City CPA',
      telephone: '+1-216-550-4689',
      email: 'hello@forestcity.pro',
      areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
      address: { '@type': 'PostalAddress', addressLocality: 'Cleveland', addressRegion: 'OH', addressCountry: 'US' },
    },
    url: 'https://forestcity.pro/cpa/tax-planning',
  };

  return (
    <>
      <Helmet>
        <title>Tax Strategy and Planning for Business Owners | Forest City CPA | Cleveland, OH</title>
        <meta
          name="description"
          content="Quarterly tax planning, entity structure review, return preparation, and coordinated planning for business owners and investors across Northeast Ohio."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/tax-planning" />
        <meta property="og:title" content="Tax Strategy and Planning for Business Owners | Forest City CPA | Cleveland, OH" />
        <meta property="og:description" content="Quarterly tax planning, entity structure review, return preparation, and coordinated planning for business owners and investors across Northeast Ohio." />
        <meta property="og:url" content="https://forestcity.pro/cpa/tax-planning" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tax Strategy and Planning for Business Owners | Forest City CPA | Cleveland, OH" />
        <meta name="twitter:description" content="Quarterly tax planning, entity structure review, return preparation, and coordinated planning for business owners and investors across Northeast Ohio." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forestcity.pro/' },
            { '@type': 'ListItem', position: 2, name: 'Forest City CPA', item: 'https://forestcity.pro/cpa' },
            { '@type': 'ListItem', position: 3, name: 'Tax Planning & Strategy', item: 'https://forestcity.pro/cpa/tax-planning' },
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
              <Landmark className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
            </div>
            <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
              Planning happens before December.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Most owners meet their CPA once a year, after every decision that mattered has already been made. We work on a quarterly rhythm so the planning happens while it can still change the outcome.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                Book a Clarity Call
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What a planning relationship includes */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-8 text-balance">What a planning relationship includes</h2>
          <ul className="space-y-4">
            {includes.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who this fits */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-8 text-balance">Who this fits</h2>
          <ul className="space-y-4">
            {whoThisFits.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-[#477956] rounded-full flex-shrink-0 mt-2.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do not do */}
      <section className="section-spacing !pt-12 !pb-14 md:!pt-16 md:!pb-16 bg-[#0F1820] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-white mb-6 text-balance">What we do not do</h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            We do not promise a percentage. Every situation is different, and the honest answer about what planning is worth to you comes after we look at your actual returns and structure, not before. The Clarity Call is free, and we will tell you if there is not enough there to justify the work.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
              Book a Clarity Call
            </span>
          </a>
          <p className="mt-8 text-white/60 text-sm">
            Forest City CPA provides tax planning and strategy for business owners and investors across Cleveland, Lorain County, and Northeast Ohio, with clients served remotely nationwide.
          </p>
          <p className="mt-4 text-white/60 text-sm">
            <Link to="/cpa" className="text-[#F2D09F] hover:text-white transition-colors inline-flex items-center gap-1">
              Back to Forest City CPA <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
          <p className="mt-4 text-white/60 text-sm">
            Looking for help with a personal return? See our{' '}
            <Link to="/individual-tax-preparation" className="text-[#F2D09F] hover:text-white transition-colors">
              individual and family tax preparation
            </Link>{' '}
            services.
          </p>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </>
  );
};

export default CPATaxPlanningPage;
