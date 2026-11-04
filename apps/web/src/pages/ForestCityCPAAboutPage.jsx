import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BadgeCheck, MapPin, Users, Briefcase, Church, HeartHandshake,
  TrendingUp, ShieldCheck, Star, ArrowRight, CheckCircle2, Building2
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const HERO_IMG = 'https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png';
const BOARDROOM_IMG = 'https://images.hostinger.com/0d6a540f-0f6d-40fe-905e-ee44ae3ed210.png';

const credentials = [
  {
    icon: BadgeCheck,
    title: 'Actively Licensed CPA — Ohio',
    description:
      'Matt LaFleur maintains an active, in-good-standing Certified Public Accountant license in the State of Ohio.'
  },
  {
    icon: BadgeCheck,
    title: 'Actively Licensed CPA — California',
    description:
      'Matt also holds an active CPA license in California, allowing him to serve clients across both states with full regulatory authority.'
  },
  {
    icon: ShieldCheck,
    title: 'RamseyTrusted Tax Professional',
    description:
      'Matt participates as a RamseyTrusted tax professional — a designation earned through vetting and a commitment to honest, client-first tax guidance.'
  }
];

const experience = [
  {
    icon: Briefcase,
    title: 'Businesses',
    description:
      'Fractional CFO leadership, outsourced accounting, tax strategy, and financial reporting for growth-stage and established companies.'
  },
  {
    icon: HeartHandshake,
    title: 'Nonprofits',
    description:
      'Audit-ready financials, grant tracking, board reporting, and compliance for mission-driven organizations of every size.'
  },
  {
    icon: Church,
    title: 'Churches & Synagogues',
    description:
      'Specialized accounting for faith communities — fund accounting, contribution reporting, and clergy compensation planning.'
  },
  {
    icon: Users,
    title: 'Individuals & Families',
    description:
      'Personal tax preparation, planning, and advisory work that helps individuals and families make confident financial decisions.'
  }
];

const ForestCityCPAAboutPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://forestcity.pro/cpa/about#matt-lafleur',
        name: 'Matt LaFleur, CPA',
        jobTitle: 'Certified Public Accountant & Fractional CFO',
        worksFor: {
          '@type': 'AccountingService',
          '@id': 'https://forestcity.pro/cpa/about#forest-city-cpa',
          name: 'Forest City CPA'
        },
        knowsAbout: [
          'Tax Strategy & Preparation',
          'Fractional CFO Services',
          'Outsourced Accounting',
          'Nonprofit Accounting',
          'Financial Reporting',
          'Bookkeeping'
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Certified Public Accountant — Ohio' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Certified Public Accountant — California' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'RamseyTrusted Tax Professional' }
        ],
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Ohio', 'California', 'United States (remote)'],
        url: 'https://forestcity.pro/cpa/about'
      },
      {
        '@type': 'AccountingService',
        '@id': 'https://forestcity.pro/cpa/about#forest-city-cpa',
        name: 'Forest City CPA',
        alternateName: 'Cleveland CPAs and More',
        description:
          'Forest City CPA (formerly Cleveland CPAs and More) provides fractional CFO services, tax strategy, outsourced accounting, and financial reporting to businesses, nonprofits, churches, synagogues, and individuals.',
        founder: { '@id': 'https://forestcity.pro/cpa/about#matt-lafleur' },
        employee: { '@id': 'https://forestcity.pro/cpa/about#matt-lafleur' },
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Ohio', 'California', 'United States (remote)'],
        url: 'https://forestcity.pro/cpa/about',
        telephone: '+1-216-550-4689',
        email: 'hello@forestcity.pro',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cleveland',
          addressRegion: 'OH',
          addressCountry: 'US'
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Forest City CPA &amp; Matt LaFleur, CPA — Cleveland, Ohio</title>
        <meta
          name="description"
          content="Meet Matt LaFleur, CPA — an actively licensed CPA in Ohio and California with 14+ years of accounting and financial leadership experience. Forest City CPA is the new name of Cleveland CPAs and More."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/about" />
        <meta property="og:title" content="About Forest City CPA & Matt LaFleur, CPA — Cleveland, Ohio" />
        <meta
          property="og:description"
          content="Matt LaFleur, CPA — actively licensed in Ohio and California with 14+ years of experience serving businesses, nonprofits, churches, synagogues, and individuals. Forest City CPA is the new name of Cleveland CPAs and More."
        />
        <meta property="og:url" content="https://forestcity.pro/cpa/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Forest City CPA & Matt LaFleur, CPA — Cleveland, Ohio" />
        <meta name="twitter:description" content="Matt LaFleur, CPA — actively licensed in Ohio and California with 14+ years of experience serving businesses, nonprofits, churches, synagogues, and individuals." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header transparent={true} />

      <main className="bg-[#0F1820]">
        {/* ── Hero ── */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMG}
              alt="Cleveland skyline at dusk across Lake Erie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/85 via-[#0F1820]/75 to-[#0F1820]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-6">
                Forest City CPA · About
              </span>
              <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight text-balance">
                Trusted financial leadership, built on real credentials.
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                Meet Matt LaFleur, CPA — an actively licensed Certified Public Accountant in Ohio and California with more than 14 years of accounting and financial leadership experience, and the leader behind Forest City CPA.
              </p>
              <a
                href="https://fantastical.app/mattlafleur/forest-city-cpa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Matt LaFleur intro ── */}
        <section className="py-24 md:py-32 bg-[#0F1820]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-5">
                  The CPA Behind the Firm
                </span>
                <h2 className="serif-heading text-4xl md:text-5xl text-white mb-8 leading-tight text-balance">
                  Matt LaFleur, CPA
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-6">
                  Matt LaFleur is a Certified Public Accountant with more than 14 years of accounting and financial leadership experience. He holds active CPA licenses in both Ohio and California, giving him the authority and expertise to serve clients across state lines — and he participates as a RamseyTrusted tax professional, reflecting a commitment to honest, client-first guidance.
                </p>
                <p className="text-white/75 text-lg leading-relaxed mb-6">
                  Over his career, Matt has served businesses, nonprofits, churches, synagogues, and individuals — providing fractional CFO leadership, outsourced accounting, tax strategy, and financial reporting that translate complex numbers into confident decisions.
                </p>
                <p className="text-white/75 text-lg leading-relaxed">
                  His approach pairs rigorous accounting fundamentals with a forward-looking advisory mindset, so the organizations and families he serves always know where they stand and what to do next.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="border border-white/10 bg-white/[0.03] p-8 lg:p-10">
                  <h3 className="serif-heading text-2xl text-white mb-6">At a Glance</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white font-semibold">Active CPA license — Ohio</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white font-semibold">Active CPA license — California</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white font-semibold">RamseyTrusted</strong> tax professional
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white font-semibold">14+ years</strong> of accounting &amp; financial leadership experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        Fractional CFO &amp; outsourced accounting experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#F2D09F] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        Based in Cleveland, Northeast Ohio — serving clients remotely nationwide
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={BOARDROOM_IMG}
              alt="Boardroom in a Cleveland high-rise"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#0F1820]/92" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Credentials &amp; Trust
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Licensed. Vetted. Accountable.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-[#0F1820]/85 backdrop-blur-sm p-8 group hover:bg-[#14212b] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#477956]/25 flex items-center justify-center mb-6 group-hover:bg-[#477956]/40 transition-colors">
                    <c.icon className="w-5 h-5 text-[#F2D09F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {c.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Matt Serves ── */}
        <section className="py-24 md:py-32 bg-[#0B1218]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Who We Serve
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Experience across every kind of client.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experience.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#477956]/25 flex items-center justify-center mb-6">
                    <item.icon className="w-5 h-5 text-[#F2D09F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── New Name, Same Firm ── */}
        <section className="py-24 md:py-32 bg-[#0F1820]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-5">
                A Note on Our Name
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white mb-8 leading-tight text-balance">
                Forest City CPA is the new name of Cleveland CPAs and More.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Same ownership. Same people. Same client relationships. Same commitment to service. Only the name has changed.
              </p>
              <p className="text-white/75 text-lg leading-relaxed">
                If you have worked with Cleveland CPAs and More in the past, you will continue to work with the very same team — now operating as Forest City CPA. Nothing about your engagement, your contacts, or the care you receive has changed.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                {[
                  'No change in ownership',
                  'No change in people or team',
                  'No change in client relationships',
                  'No change in commitment to service'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0" />
                    <span className="text-white/85 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Geography strip ── */}
        <section className="py-14 bg-[#477956]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#F2D09F] flex-shrink-0" />
                <span className="text-white font-semibold text-base md:text-lg">
                  Rooted in Cleveland &amp; Northeast Ohio
                </span>
              </div>
              <span className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#F2D09F] flex-shrink-0" />
                <span className="text-white font-semibold text-base md:text-lg">
                  Serving clients remotely, nationwide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── RamseyTrusted highlight ── */}
        <section className="py-24 md:py-32 bg-[#0B1218]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-[#F2D09F] text-[#F2D09F]" />
                ))}
              </div>
              <h2 className="serif-heading text-3xl md:text-4xl text-white mb-6 leading-tight text-balance">
                A RamseyTrusted Tax Professional
              </h2>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
                Matt LaFleur participates as a RamseyTrusted tax professional — a designation built on vetting and a commitment to the kind of honest, practical, client-first tax guidance that organizations and families can rely on.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMG}
              alt="Cleveland waterfront at dusk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F1820]/80" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="serif-heading text-4xl md:text-5xl text-white mb-8 leading-tight text-balance">
                Work with a CPA you can trust.
              </h2>
              <a
                href="https://fantastical.app/mattlafleur/forest-city-cpa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ForestCityCPAAboutPage;
