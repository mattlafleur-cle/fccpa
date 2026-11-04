import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ArrowRight, Church, Landmark, Wallet } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const serviceLines = [
  {
    tag: 'PRIMARY FOCUS',
    title: 'Nonprofit & Religious Organization Accounting',
    description:
      'Nonprofit accounting and financial services for churches, synagogues, ministries, schools, and nonprofit organizations that need clearer reporting, stronger financial systems, and dependable financial leadership.',
    icon: Church,
    featured: true,
    bullets: [
      'Monthly close and management reporting your board can actually read',
      'Restricted and designated fund tracking done correctly',
      'Clergy and staff payroll, including housing allowance set the right way',
      'Form 990 preparation and filing',
      'Internal controls and financial oversight sized to your organization',
      'Outsourced finance leadership on an ongoing monthly basis',
    ],
    link: { label: 'Nonprofit and religious organization accounting', to: '/cpa/nonprofit' },
  },
  {
    tag: null,
    title: 'Tax Planning & Strategy',
    description:
      'Proactive tax planning and tax strategy for business owners and investors who want fewer tax surprises, better planning, and financial decisions made before deadlines instead of after them.',
    icon: Landmark,
    featured: false,
    bullets: [
      'Proactive quarterly tax planning, not once-a-year filing',
      'Entity structure and reasonable compensation review',
      'Business, individual, and multi-state Ohio return preparation',
      'Real estate and investment tax coordination',
      'IRS and Ohio resolution, including RITA and local matters',
    ],
    link: { label: 'Tax planning and strategy services', to: '/cpa/tax-planning' },
  },
  {
    tag: null,
    title: 'Financial Cleanup & Operations',
    description:
      'Accounting cleanup, bookkeeping, and financial operations support for businesses and individuals who need clean books, stronger financial organization, and better systems before moving forward.',
    icon: Wallet,
    featured: false,
    bullets: [
      'Bookkeeping cleanup, catch-up, and modernized monthly bookkeeping',
      'Separating personal and business finances',
      'Entity selection, formation, and startup setup done right the first time',
      'Chart of accounts, payroll, and systems configuration',
      'Cash routines and financial reporting you understand',
      'Financial preparation for a sale, transition, or succession',
    ],
    link: { label: 'Financial cleanup and bookkeeping services', to: '/cpa/financial-health' },
  },
];

const fiveTests = [
  { label: 'REPORTING', text: 'Are your reports timely, accurate, understandable, and useful?' },
  { label: 'CASH', text: 'Can you clearly distinguish available cash from restricted, committed, or timing-related balances?' },
  { label: 'SYSTEMS', text: 'Do your accounting, payroll, banking, tax, and key financial systems work together reliably?' },
  { label: 'CONTROLS', text: 'Are approvals, review points, and financial safeguards appropriate for your organization?' },
  { label: 'INTERPRETATION', text: 'Can you use the numbers to make better decisions, not simply read them?' },
];

const engagementSteps = [
  {
    step: '01',
    title: 'Clarity Call',
    text: 'A 30-minute conversation to understand your situation, identify the main issue, and determine whether Forest City CPA can help.',
  },
  {
    step: '02',
    title: 'Financial Assessment',
    text: 'When a deeper review is useful, we examine relevant records, systems, and financial information and provide prioritized findings and recommended next steps.',
  },
  {
    step: '03',
    title: 'Scope & Plan',
    text: 'We agree on scope, timing, responsibilities, and fees before substantial work begins. Cleanup, onboarding, and unusual implementation work are scoped separately when needed.',
  },
  {
    step: '04',
    title: 'Ongoing Partnership',
    text: 'For clients who need continuing support, we provide recurring accounting, planning, reporting, and financial guidance on an agreed cadence.',
  },
];

const ForestCityCPAPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://forestcity.pro/cpa#localbusiness',
        name: 'Forest City CPA',
        description:
          'Forest City CPA provides accounting, tax planning, nonprofit finance, and advisory services to businesses and organizations in Cleveland and Northeast Ohio.',
        url: 'https://forestcity.pro/cpa',
        telephone: '+1-216-550-4689',
        email: 'hello@forestcity.pro',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cleveland',
          addressRegion: 'OH',
          addressCountry: 'US',
        },
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Ohio', 'United States (remote)'],
      },
      {
        '@type': 'AccountingService',
        '@id': 'https://forestcity.pro/cpa#accounting-service',
        name: 'Forest City CPA',
        description:
          'Forest City CPA provides accounting, tax planning, nonprofit finance, and advisory services to businesses and organizations in Cleveland and Northeast Ohio.',
        url: 'https://forestcity.pro/cpa',
        telephone: '+1-216-550-4689',
        email: 'hello@forestcity.pro',
        areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'United States (remote)'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cleveland',
          addressRegion: 'OH',
          addressCountry: 'US',
        },
        founder: {
          '@type': 'Person',
          name: 'Matt LaFleur, CPA',
          jobTitle: 'CPA',
        },
        knowsAbout: [
          'Accounting',
          'Tax planning',
          'Nonprofit accounting',
          'Church accounting',
          'Religious organization accounting',
          'Bookkeeping',
          'Financial advisory',
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Cleveland CPA & Accounting Firm | Forest City CPA</title>
        <meta
          name="description"
          content="Forest City CPA provides accounting, tax planning, nonprofit finance, and advisory services to businesses and organizations in Cleveland and Northeast Ohio."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa" />
        <meta property="og:title" content="Cleveland CPA & Accounting Firm | Forest City CPA" />
        <meta
          property="og:description"
          content="Forest City CPA provides accounting, tax planning, nonprofit finance, and advisory services to businesses and organizations in Cleveland and Northeast Ohio."
        />
        <meta property="og:url" content="https://forestcity.pro/cpa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cleveland CPA & Accounting Firm | Forest City CPA" />
        <meta name="twitter:description" content="Forest City CPA provides accounting, tax planning, nonprofit finance, and advisory services to businesses and organizations in Cleveland and Northeast Ohio." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header transparent={true} />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1698435378315-3cf2e03473a4"
            alt="Financial analysis and business architecture"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/80 via-[#0F1820]/70 to-[#0F1820]/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <Calculator className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
            </div>
            <p className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-[#F2D09F] mb-4">
              Cleveland CPA & Financial Advisory Firm
            </p>
            <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight">
              Absolute financial clarity.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              Forest City CPA helps nonprofits, religious organizations, and business owners in Cleveland, Northeast Ohio, and beyond understand their numbers, strengthen their financial systems, and make better decisions through accounting, tax planning, and ongoing financial guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="px-8 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 inline-block font-medium text-lg text-center min-w-[260px]">
                  Book a Clarity Call
                </span>
              </a>
              <a href="#how-we-work">
                <span className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0F1820] active:scale-[0.98] transition-all duration-200 inline-block font-medium text-lg text-center min-w-[200px]">
                  How we work
                </span>
              </a>
            </div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70 pb-10">
              Direct CPA Access &nbsp;•&nbsp; Nonprofit and Religious Organization Specialists &nbsp;•&nbsp; Cleveland-Based &nbsp;•&nbsp; NATIONALLY AVAILABLE AND EXPERIENCED
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three ways we work */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Three areas of special expertise"
            subtitle="Different clients, different vocabularies, the same job. Reliable numbers, a clear picture, and a next step you can act on."
            align="center"
            className="!mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {serviceLines.map((line, i) => (
              <motion.div
                key={line.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-[#F9F6F0] p-8 shadow-sm border-2 hover:shadow-md transition-shadow relative flex flex-col ${line.featured ? 'border-[#477956]' : 'border-border/50'}`}
              >
                {line.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#477956]">
                    {line.tag}
                  </span>
                )}
                <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
                  <line.icon className="w-6 h-6 text-[#477956]" />
                </div>
                <h3 className={`text-2xl mb-3 text-[#0F1820] ${line.featured ? 'font-bold' : 'font-semibold'}`}>
                  {line.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{line.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {line.bullets.map((b) => (
                    <li key={b} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0F1820]/85 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={line.link.to}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#477956] hover:gap-2 transition-all"
                >
                  {line.link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The five tests */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Five questions behind financial clarity"
            subtitle="Every Forest City CPA engagement starts with the same five questions to determine whether the financial information is reliable, useful, and ready to support better decisions."
            align="center"
            className="!mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-fr gap-6 mt-10">
            {fiveTests.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white p-6 border border-border/50"
              >
                <span className="block text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-[#477956] mb-3">
                  {t.label}
                </span>
                <p className="text-base md:text-lg text-[#0F1820]/85 leading-[1.5]">{t.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-12 text-base text-[#0F1820]/80">
            A lender or board asked for reviewed financial statements? See our{' '}
            <Link
              to="/cpa/review-services"
              className="text-[#477956] font-medium hover:underline underline-offset-4"
            >
              financial statement reviews
            </Link>
            .
          </p>

          <p className="text-center mt-6 text-base text-[#0F1820]/80">
            Not sure where you stand? Take the{' '}
            <Link
              to="/cpa/financial-visibility-check"
              className="text-[#477956] font-medium hover:underline underline-offset-4"
            >
              Financial Visibility Health Check
            </Link>
            . Three minutes, no email required to see your score.
          </p>
        </div>
      </section>

      {/* Trusted guidance for complex environments */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
                Trusted guidance for complex environments.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Good accounting should do more than record what already happened. Forest City CPA combines strong accounting fundamentals with proactive financial guidance so clients can understand what the numbers mean and what should happen next.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We pair practical financial systems with experienced CPA judgment to help organizations and business owners improve reporting, planning, controls, and decision-making.
              </p>

              <div className="space-y-3">
                {[
                  'Clean, reliable financial reporting',
                  'Planning that happens before the deadline, not after',
                  'Modern accounting systems and workflows',
                  'Direct access to experienced financial leadership',
                  'Specialized experience with nonprofits and religious organizations',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#477956]" />
                    <span className="font-medium text-[#0F1820]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#0F1820] p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#477956]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <h3 className="serif-heading text-3xl mb-6">The Forest City Standard</h3>
              <blockquote className="text-xl leading-relaxed text-white/90 italic mb-8 border-l-2 border-[#F2D09F] pl-6">
                "Stewardship of your organization's resources requires more than just balancing the books. It requires understanding the operational reality behind the numbers."
              </blockquote>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="inline-block border-2 border-[#F2D09F] text-[#F2D09F] px-6 py-3 font-medium hover:bg-[#F2D09F] hover:text-[#0F1820] transition-colors">
                  Book a Clarity Call
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced CPA guidance */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
                Experienced CPA guidance, with direct access.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Forest City CPA is led by Matt LaFleur, CPA. Matt brings more than a decade of experience across accounting, tax, financial reporting, advisory, and operational finance, with particular experience serving nonprofit and religious organizations as well as business owners.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Clients work directly with experienced financial leadership and receive practical, responsive guidance designed to make complex financial matters easier to understand and act on.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Active CPA',
                  'More than a decade of accounting, tax, and advisory experience',
                  'Specialized experience with nonprofits and religious organizations',
                  'Direct, responsive client access',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#477956]" />
                    <span className="font-medium text-[#0F1820]">{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://www.linkedin.com/in/mattlafleurcleveland/" target="_blank" rel="noreferrer">
                <span className="inline-block px-8 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 font-medium text-lg">
                  Meet Matt
                </span>
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="aspect-[4/5] w-full bg-[#0F1820] relative overflow-hidden">
                <img
                  src="https://horizons-cdn.hostinger.com/c6c1f45b-a6a0-4e8e-989b-cbba6e4f2541/3c207db40910814d3a53ce68bc3a16f5.png"
                  alt="Matt LaFleur, CPA"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1820]/80 via-transparent to-[#0F1820]/5 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 px-6 py-5 sm:px-8 sm:py-6">
                  <span className="block serif-heading text-2xl text-white leading-snug">
                    Matt LaFleur, CPA
                  </span>
                  <span className="mt-1 block text-xs font-medium tracking-[0.16em] uppercase text-[#F2D09F]">
                    Founder, Forest City CPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How an engagement works */}
      <section id="how-we-work" className="section-spacing !pt-12 !pb-14 md:!pt-16 md:!pb-16 bg-[#FFFEFC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How an engagement works"
            subtitle="Every situation is different, but most relationships follow a simple path. We will tell you early whether we are a good fit and what the appropriate next step should be."
            align="center"
            className="!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {engagementSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white p-8 border border-border/50"
              >
                <span className="serif-heading text-4xl text-[#477956]/60 block mb-5">{s.step}</span>
                <h3 className="text-lg font-semibold text-[#0F1820] mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#0F1820]/80 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-10 text-base text-[#0F1820]/80 max-w-2xl mx-auto">
            The right next step depends on the situation. Some clients move directly to a defined engagement, while others benefit from a focused assessment first.
          </p>

          <p className="text-center mt-6 text-sm text-[#0F1820]/65 max-w-2xl mx-auto">
            Forest City CPA is based in the Cleveland area and serves businesses, nonprofit organizations, churches, synagogues, ministries, and other clients throughout Northeast Ohio — including Cleveland's west side and Lorain County — and clients nationwide.
          </p>

          <p className="text-center mt-6 text-base text-[#0F1820]/80 max-w-2xl mx-auto">
            Do not own a business? We also prepare{' '}
            <Link to="/individual-tax-preparation" className="text-[#477956] font-medium hover:underline underline-offset-4">
              individual and family tax returns
            </Link>
            .
          </p>

          <div className="text-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="inline-block px-10 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 font-medium text-lg">
                Book a Clarity Call
              </span>
            </a>
          </div>
        </div>
      </section>

      <FooterCTA description="Start with a 30-minute or less conversation about where things stand, what you need, and whether Forest City CPA can help." />
      <Footer description="Financial clarity. Stronger systems. Better decisions. CPA, tax, accounting, and advisory support for organizations and business owners." />
    </>
  );
};

export default ForestCityCPAPage;
