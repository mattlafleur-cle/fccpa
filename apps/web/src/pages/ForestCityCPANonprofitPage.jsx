import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Church, HeartHandshake, Users, BookOpen, PieChart, TrendingUp,
  Landmark, FileCheck, ShieldCheck, ClipboardCheck, Lightbulb,
  ArrowRight, CheckCircle2, Building2, MapPin, Clock, DollarSign, Award, Sparkles
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const HERO_IMG = 'https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png';
const FOREST_IMG = 'https://images.hostinger.com/91e13a6c-5ffa-4b27-bb44-e0571a04ced5.png';
const BOARDROOM_IMG = 'https://images.hostinger.com/0d6a540f-0f6d-40fe-905e-ee44ae3ed210.png';

const audiences = [
  {
    icon: Church,
    title: 'Churches & Synagogues',
    description:
      'Fund accounting, contribution reporting, clergy compensation planning, and board-ready financials for faith communities of every size.'
  },
  {
    icon: HeartHandshake,
    title: 'Nonprofits & Charities',
    description:
      'Audit-ready financials, grant tracking, restricted-fund reporting, and compliance for mission-driven 501(c)(3) organizations.'
  },
  {
    icon: Users,
    title: 'Faith-Based & Community Orgs',
    description:
      'Specialized accounting for ministries, religious schools, community organizations, and other mission-driven groups.'
  }
];

const services = [
  {
    icon: BookOpen,
    title: 'Outsourced Accounting & Bookkeeping',
    description:
      'Meticulous transaction categorization, reconciliation, and ledger management built on modern cloud-accounting systems — so your foundation is always clean and current.'
  },
  {
    icon: PieChart,
    title: 'Financial Reporting',
    description:
      'Accurate, timely monthly close processes and bespoke dashboards that give your board and leadership real visibility into organizational health.'
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis',
    description:
      'We translate financial data into actionable intelligence — surfacing trends, risks, and opportunities so leadership can make confident decisions.'
  },
  {
    icon: Award,
    title: 'Fractional CFO Services',
    description:
      'High-level strategic financial leadership, cash flow forecasting, and KPI development without the cost of a full-time executive.'
  },
  {
    icon: Landmark,
    title: 'Tax Compliance',
    description:
      'Proactive preparation and filing for nonprofit and faith-based organizations, ensuring compliance while protecting your tax-exempt status.'
  },
  {
    icon: FileCheck,
    title: 'Audit Preparation',
    description:
      'Clean, audit-ready financials and organized documentation that make your annual audit or review smoother, faster, and less stressful.'
  },
  {
    icon: ShieldCheck,
    title: 'Internal Controls',
    description:
      'Practical safeguards over cash, contributions, and disbursements that protect your organization and strengthen donor confidence.'
  },
  {
    icon: Lightbulb,
    title: 'Advisory Support',
    description:
      'Forward-looking guidance on budgeting, reserves, grant readiness, and strategic growth — pairing proven technical expertise with practical wisdom.'
  }
];

const problems = [
  'Financial reports that are late, unclear, or hard to trust',
  'Difficulty tracking restricted funds, grants, and donor designations',
  'Board meetings without board-ready financial information',
  'Cash visibility gaps that make planning and decisions difficult',
  'Audit or review preparation that feels chaotic every year',
  'Limited internal controls over contributions and disbursements',
  'No direct access to experienced CPA leadership when questions arise',
  'Outgrown accounting systems that no longer fit the organization'
];

const engagement = [
  {
    step: '01',
    title: 'Conversation',
    description:
      'We start with a no-pressure conversation to understand your organization, your mission, your current accounting setup, and where you feel blind spots.'
  },
  {
    step: '02',
    title: 'Assessment',
    description:
      'We review your books, reporting, controls, and systems — and identify the specific areas where financial clarity and stewardship can be strengthened.'
  },
  {
    step: '03',
    title: 'Engagement',
    description:
      'We design a scope built around your goals, complexity, and stage of growth — no templates, no guesswork, just a plan designed specifically for your organization.'
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description:
      'We deliver responsive, ongoing accounting and advisory support — with direct access to experienced CPA leadership — so you always know where you stand.'
  }
];

const benefits = [
  {
    icon: PieChart,
    title: 'Financial Clarity',
    description:
      'Clean, timely, trustworthy numbers that give your board and leadership a clear picture of organizational health.'
  },
  {
    icon: ShieldCheck,
    title: 'Stewardship',
    description:
      'Practical controls and disciplined processes that protect the resources entrusted to your organization.'
  },
  {
    icon: FileCheck,
    title: 'Fund & Donor Reporting',
    description:
      'Accurate tracking and reporting for restricted funds, grants, and donor designations — so every dollar is accounted for.'
  },
  {
    icon: Users,
    title: 'Board-Ready Information',
    description:
      'Reports your board can actually understand and act on, delivered on time and ready for every meeting.'
  },
  {
    icon: Clock,
    title: 'Responsive Support',
    description:
      'When urgent financial issues arise, we step in quickly, resolve problems, and restore order — because financial clarity cannot wait.'
  },
  {
    icon: Sparkles,
    title: 'Modern Systems & Direct Access',
    description:
      'Modern cloud-accounting architecture paired with direct access to experienced, actively licensed CPA leadership.'
  }
];

const faqs = [
  {
    q: 'Do you work with organizations outside of Cleveland and Northeast Ohio?',
    a: 'Yes. Forest City CPA is rooted in Cleveland and Northeast Ohio, but we already serve clients remotely across the country. Modern cloud-accounting systems make it straightforward to support your organization wherever you are located.'
  },
  {
    q: 'Can you handle fund accounting for churches and synagogues?',
    a: 'Yes. We provide specialized accounting for faith communities — including fund accounting, contribution reporting, clergy compensation planning, and board-ready financials tailored to the way religious organizations operate.'
  },
  {
    q: 'Do you prepare our organization for its annual audit?',
    a: 'Yes. We deliver clean, audit-ready financials and organized documentation that make your annual audit or review smoother, faster, and less stressful for your staff and board.'
  },
  {
    q: 'What does a fractional CFO do for a nonprofit?',
    a: 'A fractional CFO provides high-level strategic financial leadership — cash flow forecasting, KPI development, board reporting, and forward-looking guidance — without the cost of a full-time executive. It is an efficient way to bring senior financial leadership into your organization.'
  },
  {
    q: 'Can you help us track restricted funds and grants?',
    a: 'Yes. Accurate tracking and reporting for restricted funds, grants, and donor designations is a core part of our nonprofit accounting work, so every dollar is accounted for and reported correctly.'
  },
  {
    q: 'How does an engagement begin?',
    a: 'We start with a no-pressure conversation to understand your organization and where you feel blind spots. From there we assess your current accounting, design a scope built around your goals, and begin responsive ongoing support with direct access to experienced CPA leadership.'
  },
  {
    q: 'Will we work directly with a CPA?',
    a: 'Yes. You have direct access to experienced, actively licensed CPA leadership — not a hand-off to a call center or a rotating cast of contacts.'
  }
];

const ForestCityCPANonprofitPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://forestcity.pro/cpa/nonprofit-religious-organizations#service',
        serviceType: 'Nonprofit & Religious Organization Accounting',
        name: 'Nonprofit & Religious Organization Accounting Services',
        description:
          'Outsourced accounting, bookkeeping, financial reporting, financial analysis, fractional CFO services, tax compliance, audit preparation, internal controls, and advisory support for nonprofit organizations, churches, synagogues, and other faith-based organizations.',
        provider: {
          '@type': 'AccountingService',
          '@id': 'https://forestcity.pro/cpa/about#forest-city-cpa',
          name: 'Forest City CPA',
          telephone: '+1-216-550-4689',
          email: 'hello@forestcity.pro',
          areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Ohio', 'United States (remote)'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cleveland',
            addressRegion: 'OH',
            addressCountry: 'US'
          }
        },
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
        audience: {
          '@type': 'Audience',
          audienceType: 'Nonprofit organizations, churches, synagogues, and other faith-based organizations'
        }
      },
      {
        '@type': 'AccountingService',
        '@id': 'https://forestcity.pro/cpa/nonprofit-religious-organizations#accounting-service',
        name: 'Forest City CPA — Nonprofit & Religious Organization Accounting',
        description:
          'Forest City CPA provides outsourced accounting, bookkeeping, financial reporting, financial analysis, fractional CFO services, tax compliance, audit preparation, internal controls, and advisory support for nonprofit organizations, churches, synagogues, and other faith-based organizations.',
        url: 'https://forestcity.pro/cpa/nonprofit-religious-organizations',
        telephone: '+1-216-550-4689',
        email: 'hello@forestcity.pro',
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cleveland',
          addressRegion: 'OH',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://forestcity.pro/cpa/nonprofit-religious-organizations#faq',
        url: 'https://forestcity.pro/cpa/nonprofit-religious-organizations',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Nonprofit &amp; Religious Organization Accounting — Forest City CPA</title>
        <meta
          name="description"
          content="Forest City CPA provides outsourced accounting, bookkeeping, financial reporting, fractional CFO services, tax compliance, audit preparation, internal controls, and advisory support for nonprofit organizations, churches, synagogues, and faith-based organizations."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/nonprofit-religious-organizations" />
        <meta property="og:title" content="Nonprofit & Religious Organization Accounting — Forest City CPA" />
        <meta
          property="og:description"
          content="Outsourced accounting, bookkeeping, financial reporting, fractional CFO services, tax compliance, audit preparation, internal controls, and advisory support for nonprofit organizations, churches, synagogues, and faith-based organizations."
        />
        <meta property="og:url" content="https://forestcity.pro/cpa/nonprofit-religious-organizations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nonprofit & Religious Organization Accounting — Forest City CPA" />
        <meta name="twitter:description" content="Outsourced accounting, bookkeeping, financial reporting, fractional CFO services, tax compliance, audit preparation, internal controls, and advisory support for nonprofit organizations, churches, synagogues, and faith-based organizations." />
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
                Forest City CPA · Nonprofit &amp; Religious Organizations
              </span>
              <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight text-balance">
                Financial clarity for mission-driven organizations.
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                Outsourced accounting, bookkeeping, financial reporting, and advisory support built for nonprofit organizations, churches, synagogues, and other faith-based organizations — grounded in stewardship, fund and donor reporting, and board-ready information.
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

        {/* ── Who This Is For ── */}
        <section className="py-24 md:py-32 bg-[#0F1820]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Who This Is For
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Built for organizations entrusted with a mission.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audiences.map((item, i) => (
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

        {/* ── Common Problems (narrative over forest imagery) ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={FOREST_IMG}
              alt="Misty Northeast Ohio forest at dawn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1820] via-[#0F1820]/90 to-[#0F1820]/60" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Common Problems We Address
              </span>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-snug text-balance">
                Capable leaders. Meaningful missions. Still flying partly blind.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-10">
                Most nonprofit and faith-based organizations have important work underway — but still struggle with financial visibility, reporting clarity, fund and donor tracking, and proactive decision-making. These are the problems we are built to solve.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Available ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={BOARDROOM_IMG}
              alt="Boardroom in a Cleveland high-rise at night"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#0F1820]/92" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="mb-14 max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Services Available
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Comprehensive accounting for your organization.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="bg-[#0F1820]/85 backdrop-blur-sm p-8 group hover:bg-[#14212b] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#477956]/25 flex items-center justify-center mb-6 group-hover:bg-[#477956]/40 transition-colors">
                    <s.icon className="w-5 h-5 text-[#F2D09F]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How Engagement Works ── */}
        <section className="py-24 md:py-32 bg-[#0B1218]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                How Engagement Works
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                A clear path from conversation to clarity.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagement.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative p-8 border border-white/10 bg-white/[0.03]"
                >
                  <span className="serif-heading text-4xl text-[#477956]/60 block mb-6">
                    {item.step}
                  </span>
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

        {/* ── Expected Benefits ── */}
        <section className="py-24 md:py-32 bg-[#0F1820]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Expected Benefits
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                What you can expect.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#477956]/25 flex items-center justify-center mb-6">
                    <b.icon className="w-5 h-5 text-[#F2D09F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {b.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
                  Already serving clients remotely, nationwide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 md:py-32 bg-[#0B1218]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-white text-balance leading-tight">
                Questions, answered.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="text-white font-semibold text-base md:text-lg leading-snug">
                      {f.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-white/20 text-[#F2D09F] transition-transform duration-200 group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
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
                Bring financial clarity to your mission.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://fantastical.app/mattlafleur/forest-city-cpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/cpa"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F2D09F] text-[#F2D09F] font-medium text-lg hover:bg-[#F2D09F] hover:text-[#0F1820] active:scale-[0.98] transition-all duration-200"
                >
                  Explore Forest City CPA
                </Link>
              </div>
              <p className="mt-8 text-white/60 text-sm">
                Learn more about{' '}
                <Link to="/cpa/about" className="text-[#F2D09F] hover:text-white transition-colors underline underline-offset-4">
                  Matt LaFleur, CPA
                </Link>{' '}
                and the team behind Forest City CPA.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ForestCityCPANonprofitPage;
