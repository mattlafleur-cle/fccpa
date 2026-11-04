import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Church, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const whatWeHandle = [
  'Monthly close and board-ready management reporting',
  'Restricted, designated, and unrestricted fund tracking',
  'Clergy and staff payroll, including housing allowance designated correctly and in advance',
  'Form 990 and related filings',
  'Internal controls and cash handling procedures',
  'Outsourced finance leadership, including attending board or finance committee meetings',
];

const problems = [
  {
    title: 'Ministers paid as contractors.',
    text: 'Ministers are generally common-law employees for income tax purposes and should be on payroll. Getting this wrong creates penalties and puts the housing allowance at risk.',
  },
  {
    title: 'Housing allowance designated after the fact.',
    text: 'It has to be designated in advance, in writing, by the governing body. Retroactive designation does not work and it costs the minister real money.',
  },
  {
    title: 'Restricted funds spent on operations.',
    text: 'A gift given for one purpose and spent on another is a legal and donor-trust problem, not just a bookkeeping one. It needs to be tracked in the system, not in someone\'s memory.',
  },
];

const CPANonprofitPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ministry and Nonprofit Financial Services',
    serviceType: 'Church and Nonprofit Accounting',
    description:
      'Accounting, fund tracking, clergy payroll, Form 990 preparation, internal controls, and outsourced finance leadership for churches, ministries, and nonprofit organizations.',
    provider: {
      '@type': 'AccountingService',
      name: 'Forest City CPA',
      telephone: '+1-216-550-4689',
      email: 'hello@forestcity.pro',
      areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
      address: { '@type': 'PostalAddress', addressLocality: 'Cleveland', addressRegion: 'OH', addressCountry: 'US' },
    },
    url: 'https://forestcity.pro/cpa/nonprofit',
  };

  return (
    <>
      <Helmet>
        <title>Church and Nonprofit Accounting | Forest City CPA | Cleveland, OH</title>
        <meta
          name="description"
          content="Accounting, fund tracking, clergy payroll, Form 990 preparation, internal controls, and outsourced finance leadership for churches, ministries, and nonprofit organizations."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/nonprofit" />
        <meta property="og:title" content="Church and Nonprofit Accounting | Forest City CPA | Cleveland, OH" />
        <meta property="og:description" content="Accounting, fund tracking, clergy payroll, Form 990 preparation, internal controls, and outsourced finance leadership for churches, ministries, and nonprofit organizations in Northeast Ohio." />
        <meta property="og:url" content="https://forestcity.pro/cpa/nonprofit" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Church and Nonprofit Accounting | Forest City CPA | Cleveland, OH" />
        <meta name="twitter:description" content="Accounting, fund tracking, clergy payroll, Form 990 preparation, internal controls, and outsourced finance leadership for churches, ministries, and nonprofit organizations." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forestcity.pro/' },
            { '@type': 'ListItem', position: 2, name: 'Forest City CPA', item: 'https://forestcity.pro/cpa' },
            { '@type': 'ListItem', position: 3, name: 'Nonprofit & Church Accounting', item: 'https://forestcity.pro/cpa/nonprofit' },
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
              <Church className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
            </div>
            <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
              Financial clarity for ministries and nonprofits.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Your board should understand its own statements. Your restricted funds should actually be restricted. Your executive director should not be guessing at cash. We do this work every week.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                Book a Clarity Call
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What we handle */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-8 text-balance">What we handle</h2>
          <ul className="space-y-4">
            {whatWeHandle.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Three problems */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-4 text-balance">Three problems we see constantly</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">These are common, fixable, and worth catching early.</p>
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white p-7 border border-border/50 flex gap-5"
              >
                <AlertTriangle className="w-6 h-6 text-[#477956] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1820] mb-2">{p.title}</h3>
                  <p className="text-[#0F1820]/80 leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free 990 and payroll risk check */}
      <section className="section-spacing !pt-12 !pb-14 md:!pt-16 md:!pb-16 bg-[#0F1820] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-white mb-6 text-balance">A free 990 and payroll risk check</h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Thirty minutes with a CPA who does this work. We will look at how ministers are paid, how housing allowance is designated, and how restricted funds are tracked, and tell you what needs attention. No pitch.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
              Book a Clarity Call
            </span>
          </a>
          <p className="mt-8 text-white/60 text-sm">
            Forest City CPA serves churches, ministries, and nonprofit organizations across Cleveland, Lorain County, and Northeast Ohio, with clients served remotely nationwide.
          </p>
          <p className="mt-4 text-white/60 text-sm">
            <Link to="/cpa" className="text-[#F2D09F] hover:text-white transition-colors inline-flex items-center gap-1">
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

export default CPANonprofitPage;
