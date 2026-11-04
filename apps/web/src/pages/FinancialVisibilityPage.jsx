import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Award, DollarSign, Clock, FileCheck, Sparkles,
  Star, ArrowRight, CheckCircle2
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const HERO_IMG = 'https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png';
const FOREST_IMG = 'https://images.hostinger.com/91e13a6c-5ffa-4b27-bb44-e0571a04ced5.png';
const BOARDROOM_IMG = 'https://images.hostinger.com/0d6a540f-0f6d-40fe-905e-ee44ae3ed210.png';
const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const pillars = [
  {
    icon: Clock,
    title: 'Responsive & Available',
    description:
      'When urgent financial issues arise, we step in quickly, resolve problems, and restore order — because financial clarity cannot wait.'
  },
  {
    icon: FileCheck,
    title: 'Licensed & Credentialed',
    description:
      'Our team consists of experienced, actively licensed CPAs who maintain strong connections across the profession, ensuring our work reflects current standards and best practices.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'No hidden costs. Fair, honest pricing so you know exactly what you are paying for — and in most cases, the clarity we deliver more than pays for itself.'
  },
  {
    icon: Shield,
    title: 'Committed to Excellence',
    description:
      'We stand behind our work. If something does not meet your expectations, we work with you to resolve it promptly and completely.'
  },
  {
    icon: Award,
    title: 'Deep Financial Expertise',
    description:
      'We combine rigorous accounting fundamentals with a forward-looking advisory mindset — pairing proven technical expertise with modern, cloud-native systems.'
  },
  {
    icon: Sparkles,
    title: 'Customized to You',
    description:
      'Every engagement is built around your goals, complexity, and stage of growth. No templates, no guesswork — just a plan designed specifically for your organization.'
  }
];

const testimonials = [
  {
    quote:
      '"Forest City CPA brought genuine clarity to our finances at a time when we desperately needed it. They are thorough, honest, and truly invested in our organization\'s success."',
    name: 'Margaret H.',
    role: 'Executive Director, Nonprofit'
  },
  {
    quote:
      '"From the first conversation, I knew I was in good hands. They answered every question patiently, handled the complexity without fuss, and kept us informed the entire way."',
    name: 'David K.',
    role: 'Founder & CEO, Growth-Stage Company'
  },
  {
    quote:
      '"What sets Forest City apart is their combination of technical depth and practical wisdom. They understand both the numbers and the business behind them."',
    name: 'Christine P.',
    role: 'President, Family Business'
  }
];

const FinancialVisibilityPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Visibility &amp; Health Check | Forest City CPA Cleveland, OH</title>
        <meta
          name="description"
          content="Gain a clearer picture of your organization's financial health, visibility, and direction with Forest City CPA's Financial Visibility & Health Check for Cleveland and Northeast Ohio nonprofits and businesses."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/financial-visibility" />
        <meta property="og:title" content="Financial Visibility & Health Check | Forest City CPA Cleveland, OH" />
        <meta property="og:description" content="Gain a clearer picture of your organization's financial health, visibility, and direction with Forest City CPA's Financial Visibility & Health Check." />
        <meta property="og:url" content="https://forestcity.pro/cpa/financial-visibility" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Visibility & Health Check | Forest City CPA Cleveland, OH" />
        <meta name="twitter:description" content="Gain a clearer picture of your organization's financial health, visibility, and direction with Forest City CPA's Financial Visibility & Health Check." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>

      <Header transparent={true} />

      <main className="bg-[#0F1820]">
        {/* ── Hero ── */}
        <section className="relative flex items-center overflow-hidden pt-28">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMG}
              alt="Cleveland skyline at dusk across Lake Erie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/85 via-[#0F1820]/75 to-[#0F1820]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-6">
                Forest City CPA
              </span>
              <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight text-balance">
                Financial Visibility &amp; Health Check
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                Gain a clearer picture of your organization's financial health, visibility, and direction — grounded in real numbers and practical next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                  <span className="inline-block px-8 py-4 bg-[#477956] text-white font-medium hover:brightness-110 active:scale-[0.98] transition-all duration-200 min-w-[240px] text-center">
                    Nonprofits &amp; Mission-Driven Orgs
                  </span>
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                  <span className="inline-block px-8 py-4 border-2 border-[#F2D09F] text-[#F2D09F] font-medium hover:bg-[#F2D09F] hover:text-[#0F1820] active:scale-[0.98] transition-all duration-200 min-w-[200px] text-center">
                    Growing Businesses
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Narrative over forest imagery ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={FOREST_IMG}
              alt="Misty Northeast Ohio forest at dawn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1820] via-[#0F1820]/90 to-[#0F1820]/60" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-snug text-balance">
                Capable leaders. Meaningful goals. Still flying partly blind.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Most organizations have important work underway — but still struggle with financial visibility, reporting clarity, cash management, and proactive decision-making.
              </p>
              <p className="text-white/75 text-lg leading-relaxed">
                The Health Check helps you{' '}
                <strong className="text-[#F2D09F] font-semibold">identify blind spots</strong>,{' '}
                <strong className="text-[#F2D09F] font-semibold">strengthen financial clarity</strong>, and{' '}
                <strong className="text-[#F2D09F] font-semibold">discover practical next steps</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── What You'll Gain strip ── */}
        <section className="py-14 bg-[#477956]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Identify financial blind spots',
                'Strengthen reporting clarity',
                'Improve cash visibility',
                'Discover practical next steps'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F2D09F] flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Forest City Standard (6 pillars) ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={BOARDROOM_IMG}
              alt="Boardroom in a Cleveland high-rise at night"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[#0F1820]/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Why Forest City CPA
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Principled &amp; Purposeful
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="bg-[#0F1820]/80 backdrop-blur-sm p-8 group hover:bg-[#14212b] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#477956]/25 flex items-center justify-center mb-6 group-hover:bg-[#477956]/40 transition-colors">
                    <pillar.icon className="w-5 h-5 text-[#F2D09F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-12 md:py-16 bg-[#0B1218]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Client Voices
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Organizations We've Served
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 flex flex-col border border-white/10 bg-white/[0.03]"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#F2D09F] text-[#F2D09F]" />
                    ))}
                  </div>
                  <p className="text-white/85 leading-relaxed text-base mb-8 flex-1 italic">
                    {t.quote}
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs mt-1">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMG}
              alt="Cleveland waterfront at dusk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F1820]/80" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="serif-heading text-4xl md:text-5xl text-white mb-8 leading-tight text-balance">
                Ready to take a first step?
              </h2>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2 px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterCTA />
      <Footer />
    </>
  );
};

export default FinancialVisibilityPage;
