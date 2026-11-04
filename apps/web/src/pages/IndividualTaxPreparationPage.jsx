import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, ArrowRight, Users, HeartHandshake, MapPin, Video } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const whoWeHelp = [
  {
    title: 'Individuals',
    text: 'Working professionals, single filers, and anyone who wants their personal return prepared carefully and filed on time.',
  },
  {
    title: 'Married couples',
    text: 'Joint or separate filings, with the filing status and treatment that best fits your situation.',
  },
  {
    title: 'Families with children',
    text: 'Dependents, child-related credits, and education expenses reviewed for the deductions and credits that apply to you.',
  },
  {
    title: 'Retirees',
    text: 'Retirement income, Social Security, pensions, and withdrawals handled with attention to how they interact on your return.',
  },
  {
    title: 'Self-employment and investment income',
    text: 'Side income, freelance work, investment sales, and other activity that adds complexity to a personal return.',
  },
];

const whatWeHelpWith = [
  'Federal Form 1040 preparation and filing',
  'Applicable state income tax returns',
  'Ohio municipal and school district returns when needed',
  'W-2 wages and standard employment income',
  'Retirement income, pensions, and Social Security',
  'Interest, dividends, and investment sales',
  'Dependents and education expenses',
  'Self-employment income reported on a personal return',
  'Review of relevant information for applicable deductions and credits',
];

const processSteps = [
  {
    step: '01',
    title: 'A conversation about your needs',
    text: 'We start by understanding your situation, what returns you need, and anything that makes this year different from last year.',
  },
  {
    step: '02',
    title: 'Confirm scope and fees',
    text: 'Before we begin, we agree on the returns involved and the fee. Additional filings and complexity affect scope, so you know what to expect up front.',
  },
  {
    step: '03',
    title: 'Submit your documents',
    text: 'We provide clear instructions for sending your tax documents securely, along with a list of what to gather.',
  },
  {
    step: '04',
    title: 'We prepare your returns',
    text: 'We prepare your federal and applicable state and local returns carefully, reviewing the information for applicable deductions and credits.',
  },
  {
    step: '05',
    title: 'Your review and authorization',
    text: 'You review the prepared returns, ask any questions, and provide the authorization we need before anything is filed.',
  },
];

const faqs = [
  {
    question: 'Do you prepare taxes for individuals who do not own a business?',
    answer: 'Yes. You do not have to own a business to work with Forest City CPA. We welcome individuals, couples, families, and retirees who simply need their annual personal income tax returns prepared and filed.',
  },
  {
    question: 'Can you help if we only need annual tax preparation?',
    answer: 'Absolutely. Annual tax preparation can be the entire relationship. There is no requirement to purchase ongoing advisory services, and additional planning can be discussed separately only when it would be useful to you.',
  },
  {
    question: 'Do you prepare federal and Ohio income tax returns?',
    answer: 'Yes. We prepare and file federal Form 1040 returns and the applicable state income tax returns, including Ohio. We also prepare Ohio municipal and school district returns when they apply to your situation.',
  },
  {
    question: 'Can you help with local or school district tax returns?',
    answer: 'Yes. When your locality or school district requires a separate return, we prepare those as part of your filing. Additional returns affect the scope and fee, which we confirm before starting.',
  },
  {
    question: 'Do I need to visit your office?',
    answer: 'No. Our standard service is virtual, using phone and video calls and our secure online portal. For clients who prefer to meet in person, a local in-office option is available at a higher rate. Contact us to discuss the options and fees.',
  },
  {
    question: 'What documents should I gather?',
    answer: 'Common items include W-2s, 1099s for retirement income, interest, dividends, and investment sales, Social Security statements, records of dependents and education expenses, and any self-employment income records. We provide a clear checklist once we confirm your scope.',
  },
  {
    question: 'How much does tax preparation cost?',
    answer: 'Fees depend on the complexity of your return and the filings required, such as state, municipal, or school district returns. Rather than publish a single number, we prefer to discuss your situation and confirm the fee before any work begins. Reach out and we will be glad to talk it through.',
  },
];

const IndividualTaxPreparationPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Individual and Family Tax Preparation',
    serviceType: 'Personal Income Tax Preparation',
    description:
      'Personal tax preparation for individuals, couples, families, and retirees in Northeast Ohio. Federal Form 1040 preparation and filing, applicable state returns, and Ohio municipal or school district returns.',
    provider: {
      '@type': 'AccountingService',
      name: 'Forest City CPA',
      telephone: '+1-216-550-4689',
      email: 'hello@forestcity.pro',
      areaServed: ['Northeast Ohio', 'Lorain County', 'Cleveland, Ohio', 'Ohio', 'United States (remote)'],
      address: { '@type': 'PostalAddress', addressLocality: 'Cleveland', addressRegion: 'OH', addressCountry: 'US' },
    },
    url: 'https://forestcity.pro/individual-tax-preparation',
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Individual Tax Preparation in Northeast Ohio | Forest City CPA</title>
        <meta
          name="description"
          content="Personal tax preparation for individuals, families, and retirees in Northeast Ohio. Get help with federal and Ohio returns from Forest City CPA."
        />
        <link rel="canonical" href="https://forestcity.pro/individual-tax-preparation" />
        <meta property="og:title" content="Individual Tax Preparation in Northeast Ohio | Forest City CPA" />
        <meta
          property="og:description"
          content="Personal tax preparation for individuals, families, and retirees in Northeast Ohio. Get help with federal and Ohio returns from Forest City CPA."
        />
        <meta property="og:url" content="https://forestcity.pro/individual-tax-preparation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Individual Tax Preparation in Northeast Ohio | Forest City CPA" />
        <meta name="twitter:description" content="Personal tax preparation for individuals, families, and retirees in Northeast Ohio. Get help with federal and Ohio returns from Forest City CPA." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forestcity.pro/' },
            { '@type': 'ListItem', position: 2, name: 'Individual & Family Tax Preparation', item: 'https://forestcity.pro/individual-tax-preparation' },
          ],
        })}</script>
      </Helmet>

      <Header transparent={true} />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1698435378315-3cf2e03473a4"
            alt="Personal tax preparation and financial documents"
            className="w-full h-full object-cover opacity-45 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/85 via-[#0F1820]/75 to-[#0F1820]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <FileText className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
            </div>
            <p className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-[#F2D09F] mb-4">
              Personal tax preparation. Personal attention.
            </p>
            <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
              Individual &amp; Family Tax Preparation in Northeast Ohio
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-6 font-light">
              You do not have to own a business to work with Forest City CPA. We help individuals, couples, families, and retirees prepare and file their annual income tax returns with care, clear communication, and attention to the details that matter.
            </p>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Whether you need help with your federal and Ohio returns or have a more involved tax situation, we would be glad to learn about your needs. Annual tax preparation can be the entire relationship.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                Schedule a conversation
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brand promise band */}
      <section className="bg-[#477956] py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="serif-heading text-2xl md:text-3xl text-white text-balance leading-snug">
            Absolute financial clarity, starting with the return you file every year.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who we help"
            subtitle="We welcome clients who simply need their personal tax returns prepared and filed, whether the return is straightforward or involves several income sources."
            align="center"
            className="!mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whoWeHelp.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#F9F6F0] p-8 border border-border/50 flex flex-col"
              >
                <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#477956]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F1820] mb-3">{item.title}</h3>
                <p className="text-[#0F1820]/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What we help with"
            subtitle="We prepare your federal Form 1040 and the state, municipal, and school district returns that apply to you. Additional returns and complexity affect scope and fees, which we confirm before starting."
            align="center"
            className="!mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-8">
            {whatWeHelpWith.map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base text-[#0F1820]/75 max-w-3xl mx-auto text-center leading-relaxed">
            Common situations include W-2 wages, retirement income, Social Security, interest and dividends, investment sales, dependents, education expenses, and self-employment income. We review the relevant information for the deductions and credits that apply to your return.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A clear, approachable process"
            subtitle="From the first conversation to filing, you will know what to expect at each step."
            align="center"
            className="!mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#F9F6F0] p-8 border border-border/50"
              >
                <span className="serif-heading text-4xl text-[#477956]/60 block mb-5">{s.step}</span>
                <h3 className="text-lg font-semibold text-[#0F1820] mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#0F1820]/80 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual-first service model */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-[#477956]" />
            </div>
            <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
              Convenient virtual service, with a local in-office option
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Forest City CPA is a virtual-first firm. We work with clients through phone and video calls and our secure online portal, making it convenient to share documents and get your taxes prepared without a trip to the office.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Prefer to meet in person? We also offer a local in-office option at a higher rate. Let us know your preference, and we'll confirm the options and fees before you decide how to proceed.
            </p>
          </div>
        </div>
      </section>

      {/* Personal attention */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#477956]" />
              </div>
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
                Personal attention and understandable answers.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We prepare each return carefully and treat every client with respect. When something on your return needs explaining, we answer in plain English so you understand what was filed and why.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                You can engage us for annual preparation alone. If additional planning would be useful, we can discuss it separately, on your terms, without pressure.
              </p>
              <div className="space-y-3">
                {[
                  'Careful preparation of every return',
                  'Respectful, responsive service',
                  'Plain-English explanations, not jargon',
                  'Annual preparation as a complete relationship',
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
              <h3 className="serif-heading text-3xl mb-6">Annual preparation, done right.</h3>
              <blockquote className="text-xl leading-relaxed text-white/90 italic mb-8 border-l-2 border-[#F2D09F] pl-6">
                You do not have to own a business to work with a CPA. A carefully prepared personal return is important work, and we are glad to do it.
              </blockquote>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="inline-block border-2 border-[#F2D09F] text-[#F2D09F] px-6 py-3 font-medium hover:bg-[#F2D09F] hover:text-[#0F1820] transition-colors">
                  Schedule a conversation
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local connection */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-[#477956]" />
            </div>
            <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
              Based in Northeast Ohio, serving clients across the state.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Forest City CPA is based in the Cleveland area and serves clients throughout Northeast Ohio, including Lorain County and the greater Cleveland area. Because our standard service is virtual, you can work with us from wherever you are in Ohio.
            </p>
            <p className="text-base text-[#0F1820]/75 leading-relaxed max-w-3xl">
              If you prefer to meet in person, a local in-office option is available at a higher rate. We will confirm the options and fees before you decide how to proceed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-spacing !pt-12 !pb-14 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Helpful FAQs"
            subtitle="A few common questions about individual and family tax preparation with Forest City CPA."
            align="center"
            className="!mb-10"
          />
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-[#0F1820] hover:text-[#477956] data-[state=open]:text-[#477956] transition-colors py-6 leading-snug">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-[#0F1820]/80 leading-relaxed pb-6 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0F1820] py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-4xl md:text-5xl text-white mb-6 leading-tight text-balance">
            Just need your annual tax returns prepared? We would be glad to talk.
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a conversation and we will learn about your needs, confirm the scope and fee, and get your returns prepared and filed.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
              Schedule a conversation
            </span>
          </a>
          <p className="mt-8 text-white/60 text-sm">
            <Link to="/cpa" className="text-[#F2D09F] hover:text-white transition-colors inline-flex items-center gap-1">
              Back to Forest City CPA <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      <FooterCTA description="Start with a conversation about your tax needs. If annual preparation is all you need, that is all we will do." />
      <Footer description="Personal tax preparation for individuals, families, and retirees. Federal and Ohio returns prepared with care and clear communication." />
    </>
  );
};

export default IndividualTaxPreparationPage;
