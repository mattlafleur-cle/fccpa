import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import pb from '@/lib/pocketbaseClient.js';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const whoThisIsFor = [
  'Business owners whose bank or bonding agent asked for reviewed financial statements',
  'Nonprofit boards and finance committees that need an independent review for lenders, grantors, or governance',
  'Organizations that do not need a full audit, but do need a CPA\u2019s limited assurance report',
  'Teams whose books are close enough to review, or who need a cleanup first',
];

const whatAReviewProvides = [
  {
    title: 'Limited assurance.',
    text: 'The CPA report states that the CPA is not aware of any material modifications that should be made for the statements to conform with the applicable financial reporting framework (often GAAP).',
  },
  {
    title: 'Independence.',
    text: 'The CPA must be independent of the organization.',
  },
  {
    title: 'Procedures.',
    text: 'Work centers on inquiries of management and analytical procedures applied to the financial statements. It does not include testing internal controls the way an audit does, or verifying balances with third parties as a matter of course.',
  },
  {
    title: 'Your responsibility.',
    text: 'Management remains responsible for the financial statements and for the underlying books and records.',
  },
];

const whatYouReceive = [
  'Reviewed financial statements, including required disclosures',
  'An independent accountant\u2019s review report',
  'A clear list of questions and findings raised during the engagement',
  'A conversation about what the numbers mean for your next lender, board, or planning conversation',
];

const processSteps = [
  {
    step: '01',
    title: 'Clarity Call.',
    text: 'Confirm what the lender or stakeholder actually asked for, and whether a review is the right level of service.',
  },
  {
    step: '02',
    title: 'Scope and proposal.',
    text: 'We look at your reporting framework, period, and readiness of the books, then send a written proposal.',
  },
  {
    step: '03',
    title: 'Information request.',
    text: 'Trial balance, statements, support for significant accounts, and answers to targeted questions.',
  },
  {
    step: '04',
    title: 'Inquiries and analytics.',
    text: 'We perform the review procedures and raise items that need attention.',
  },
  {
    step: '05',
    title: 'Report.',
    text: 'You receive the review report and the statements ready for the party that requested them.',
  },
];

const whyForestCity = [
  {
    title: 'Direct CPA access.',
    text: 'You work with Matt LaFleur, CPA, not a rotating junior team you never meet.',
  },
  {
    title: 'Absolute financial clarity.',
    text: 'The same standard as the rest of the firm: numbers you can explain to a lender or a board.',
  },
  {
    title: 'Nonprofit and business fluency.',
    text: 'Experience with ministries, nonprofits, and business owners across Cleveland and Northeast Ohio.',
  },
  {
    title: 'Cleanup when needed.',
    text: 'If the books are not review-ready, we can scope',
  },
  {
    title: 'Licensed CPA in Ohio and California; RamseyTrusted tax professional; 14+ years of accounting and financial leadership.',
    text: 'Meet Matt LaFleur, CPA.',
  },
];

const faqs = [
  {
    q: 'What is the difference between a review and an audit?',
    a: 'An audit provides reasonable assurance and includes testing of evidence and consideration of internal control. A review provides limited assurance and is based mainly on inquiries and analytical procedures. If your lender or regulator specifically requires an audit, a review will not substitute. We can help you read the requirement and point you in the right direction.',
  },
  {
    q: 'Will my bank accept a review?',
    a: 'Many lenders accept reviewed financial statements when that is what the covenant or commitment letter asks for. Bring the exact language. We confirm whether a review meets the request before we start. We do not guarantee that every bank will accept a review.',
  },
  {
    q: 'Do my books need to be perfect first?',
    a: 'They need to be complete enough for a review. If they are not, we will say so and can discuss cleanup before the review begins.',
  },
  {
    q: 'Do you review both businesses and nonprofits?',
    a: 'Yes. The reporting framework can differ, but the need is the same: an independent CPA report your stakeholders can rely on at the review level.',
  },
  {
    q: 'Where do you work?',
    a: 'Forest City CPA is Cleveland-based and serves clients across Northeast Ohio, Ohio, the Midwest, and remotely nationwide. Engagements are typically remote with scheduled calls.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a Clarity Call or send the short inquiry form on this page. Thirty minutes, no cost, no pitch. If we are not the right fit, we will say so.',
  },
];

const ReviewServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organizationName: '',
    organizationType: 'Business',
    requestedBy: '',
    deadline: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await pb.collection('review_inquiries').create(formData, { $autoCancel: false });
      toast.success('Inquiry sent.', {
        description: 'A member of our team will be in touch shortly.',
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organizationName: '',
        organizationType: 'Business',
        requestedBy: '',
        deadline: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Submission failed.', {
        description: 'Please try again or contact us directly via phone or email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Financial Statement Reviews',
    serviceType: 'Independent CPA Financial Statement Reviews',
    description:
      'Independent CPA financial statement reviews providing limited assurance for lenders and stakeholders. Serving Cleveland, Northeast Ohio, Ohio, the Midwest, and clients nationwide.',
    provider: {
      '@type': 'AccountingService',
      name: 'Forest City CPA',
      telephone: '+1-216-550-4689',
      email: 'hello@forestcity.pro',
      areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Ohio', 'Midwest', 'United States (remote)'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cleveland',
        addressRegion: 'OH',
        addressCountry: 'US',
      },
    },
    url: 'https://forestcity.pro/cpa/review-services',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forestcity.pro/' },
      { '@type': 'ListItem', position: 2, name: 'Forest City CPA', item: 'https://forestcity.pro/cpa' },
      { '@type': 'ListItem', position: 3, name: 'Financial Statement Reviews', item: 'https://forestcity.pro/cpa/review-services' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Reviewed Financial Statements | Forest City CPA Ohio</title>
        <meta
          name="description"
          content="Independent CPA financial statement reviews for lenders and stakeholders. Limited assurance for Cleveland, Northeast Ohio, Ohio, and Midwest clients."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/review-services" />
        <meta property="og:title" content="Reviewed Financial Statements | Forest City CPA Ohio" />
        <meta property="og:description" content="Independent CPA financial statement reviews for lenders and stakeholders. Limited assurance for Cleveland, Northeast Ohio, Ohio, and Midwest clients." />
        <meta property="og:url" content="https://forestcity.pro/cpa/review-services" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reviewed Financial Statements | Forest City CPA Ohio" />
        <meta name="twitter:description" content="Independent CPA financial statement reviews for lenders and stakeholders. Limited assurance for Cleveland, Northeast Ohio, Ohio, and Midwest clients." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header transparent={true} />
      <Toaster position="top-center" />

      {/* HERO */}
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
              <FileCheck className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA &middot; Financial Statement Reviews</span>
            </div>
            <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
              Your lender needs reviewed financial statements. We can help.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              An independent CPA review gives your bank, board, or other stakeholders limited assurance on your financial statements, without the scope of an audit. Forest City CPA serves organizations across the Cleveland area, Northeast Ohio, Ohio, and the Midwest, with remote work available nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="inline-block px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                  Book a Clarity Call
                </span>
              </a>
              <a href="#inquiry">
                <span className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0F1820] active:scale-[0.98] transition-all duration-200 font-medium text-lg">
                  Prefer to write first?
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section-spacing !pt-14 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-6 text-balance">Who this is for</h2>
          <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-8 max-w-3xl">
            A review engagement fits when someone outside your organization needs more confidence in the numbers than internal reports alone provide.
          </p>
          <ul className="space-y-4">
            {whoThisIsFor.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">
                  {item === 'Teams whose books are close enough to review, or who need a cleanup first' ? (
                    <>
                      Teams whose books are close enough to review, or who need a{' '}
                      <Link to="/cpa/financial-health" className="text-[#477956] font-medium hover:underline underline-offset-4">
                        cleanup first
                      </Link>
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT A REVIEW PROVIDES */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-6 text-balance">What a review actually provides</h2>
          <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-10 max-w-3xl">
            A financial statement review is an independent CPA engagement under AICPA standards (SSARS). It is not bookkeeping, and it is not an audit.
          </p>
          <div className="space-y-8">
            {whatAReviewProvides.map((item, i) => (
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

      {/* WHAT YOU RECEIVE */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-8 text-balance">What you receive</h2>
          <ul className="space-y-4">
            {whatYouReceive.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#0F1820]/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-10 text-balance">How an engagement works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
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
        </div>
      </section>

      {/* WHY FOREST CITY CPA */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-10 text-balance">Why Forest City CPA</h2>
          <div className="space-y-8">
            {whyForestCity.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-5 border-l-2 border-[#477956]/40 pl-6"
              >
                <div>
                  {i === whyForestCity.length - 1 ? (
                    <>
                      <h3 className="text-lg font-semibold text-[#0F1820] mb-2">{item.title}</h3>
                      <p className="text-[#0F1820]/80 leading-relaxed">
                        <Link to="/cpa/about" className="text-[#477956] font-medium hover:underline underline-offset-4">
                          {item.text}
                        </Link>
                      </p>
                    </>
                  ) : i === 3 ? (
                    <>
                      <h3 className="text-lg font-semibold text-[#0F1820] mb-2">{item.title}</h3>
                      <p className="text-[#0F1820]/80 leading-relaxed">
                        {item.text}{' '}
                        <Link to="/cpa/financial-health" className="text-[#477956] font-medium hover:underline underline-offset-4">
                          cleanup first
                        </Link>
                        .
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-[#0F1820] mb-2">{item.title}</h3>
                      <p className="text-[#0F1820]/80 leading-relaxed">{item.text}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES AND TIMING */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-[#F9F6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-8 text-balance">Fees and timing</h2>
          <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-6">
            Review fees depend on the size and complexity of the statements, the reporting framework, and how ready the books are. We quote after a short scoping conversation. We do not publish a menu price here.
          </p>
          <p className="text-lg text-[#0F1820]/80 leading-relaxed">
            Timing depends on your deadline, how complete the records are, and how quickly questions get answered. Bring any lender or board deadline to the Clarity Call so we can be honest about capacity.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section className="section-spacing !pt-12 !pb-12 md:!pt-16 md:!pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-10 text-balance">Questions before we start</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0F1820]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#0F1820]/80 leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <FooterCTA description="Thirty minutes, no cost, no pitch. Bring the lender letter or board request if you have it. If we are not the right fit, we will say so." />

      {/* INQUIRY FORM */}
      <section id="inquiry" className="section-spacing !pt-14 !pb-14 md:!pt-16 md:!pb-16 bg-[#FAFAFA] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-6 text-balance">Prefer to write first?</h2>
              <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-10 max-w-md">
                Send a few details and we will get back to you. If a lender or board has asked for reviewed statements, include what they asked for and any deadline.
              </p>
              <div className="space-y-3">
                <p className="text-xl text-[#0F1820]">Cleveland, Ohio</p>
                <a href="tel:+12165504689" className="block text-xl font-medium text-[#0F1820] hover:text-[#477956] transition-colors">
                  (216) 550-4689
                </a>
                <a href="mailto:hello@forestcity.pro" className="block text-xl font-medium text-[#477956] hover:underline">
                  hello@forestcity.pro
                </a>
              </div>
              <p className="mt-8 text-sm text-[#0F1820]/60">
                <Link to="/cpa" className="text-[#477956] hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Back to Forest City CPA <ArrowRight className="w-4 h-4" />
                </Link>
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-lg border border-border/40">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#0F1820] mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationName" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Organization name
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Organization type
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors appearance-none"
                    >
                      <option value="Business">Business</option>
                      <option value="Nonprofit or ministry">Nonprofit or ministry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="requestedBy" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Who asked for the review?
                    </label>
                    <input
                      type="text"
                      id="requestedBy"
                      name="requestedBy"
                      value={formData.requestedBy}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                      placeholder="Lender, board, grantor, other"
                    />
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Deadline if any
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                      placeholder="e.g. End of next month"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F1820] mb-2">
                    Anything we should know
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors resize-none"
                    placeholder="Tell us a bit about your situation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0F1820] text-white hover:bg-[#477956] active:scale-[0.99] transition-all duration-300 font-medium flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send inquiry'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewServicesPage;
