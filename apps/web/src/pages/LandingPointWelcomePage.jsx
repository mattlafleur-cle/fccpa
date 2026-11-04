import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, ArrowRight, BadgeCheck, ShieldCheck,
  MapPin, Users, HeartHandshake, Building2, FileText, Handshake
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';
const MATT_HEADSHOT = 'https://horizons-cdn.hostinger.com/c6c1f45b-a6a0-4e8e-989b-cbba6e4f2541/3c207db40910814d3a53ce68bc3a16f5.png';

const nextSteps = [
  {
    step: '01',
    title: 'Connect with Matt',
    text: 'Email your questions or schedule a conversation so we can learn what you need.',
    icon: Mail,
  },
  {
    step: '02',
    title: 'Confirm the services and fees',
    text: 'We’ll discuss your situation and confirm the proposed work and fees before you decide whether to engage us.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Coordinate records and onboarding',
    text: 'If you choose to work with us, we’ll explain the next steps for getting started, including any authorization needed to request historical records.',
    icon: Handshake,
  },
];

const faqs = [
  {
    question: 'Do I have to switch to Forest City CPA?',
    answer:
      'No. You choose whom you engage for your tax preparation. Being introduced to Forest City CPA does not by itself establish an engagement — you are welcome to ask questions and decide what is right for you.',
  },
  {
    question: 'Can you help if I only need my annual personal tax returns prepared?',
    answer:
      'Yes. Annual individual and family tax preparation is welcome here, without requiring any other services. If all you need is your federal and state returns prepared and filed each year, that can be the entire relationship.',
  },
  {
    question: 'Will my fees stay the same?',
    answer:
      'We won’t promise that. Forest City CPA will discuss the work your situation requires and confirm its fees before you decide whether to proceed, so you know what to expect up front.',
  },
  {
    question: 'Have my records already been transferred?',
    answer:
      'We can’t make a blanket claim about that. Please contact Matt to confirm the status of your specific records and to understand any authorization that may be needed to request them.',
  },
  {
    question: 'How will I provide tax documents?',
    answer:
      'We will provide clear instructions for submitting your documents through our designated secure process. We’ll walk you through it step by step when the time comes.',
  },
  {
    question: 'Can we work together remotely?',
    answer:
      'Yes. We coordinate communication and document collection remotely, so you can work with us from wherever you are. You do not need to visit an office in person.',
  },
];

const LandingPointWelcomePage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome, Landing Point Clients | Forest City CPA</title>
        <meta name="description" content="A personal welcome from Matt LaFleur, CPA, for clients introduced through Landing Point Financial Group. Learn who we are and your next steps — at your own pace." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://forestcity.pro/landing-point-welcome" />
        <meta property="og:title" content="Welcome, Landing Point Clients | Forest City CPA" />
        <meta property="og:description" content="A personal welcome from Matt LaFleur, CPA, for clients introduced through Landing Point Financial Group." />
        <meta property="og:url" content="https://forestcity.pro/landing-point-welcome" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header transparent={true} />

      <main className="bg-[#0F1820]">
        {/* ── Personal Welcome Hero ── */}
        <section className="relative flex items-center overflow-hidden pt-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820] via-[#0F1820] to-[#0B1218]" />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #477956 0, transparent 45%), radial-gradient(circle at 80% 70%, #F2D09F 0, transparent 40%)' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-6">
                Forest City CPA · Welcome
              </span>
              <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight text-balance">
                A personal welcome to Landing Point clients
              </h1>
              <div className="space-y-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                <p>
                  Hi, I’m Matt LaFleur, CPA, owner of Forest City CPA. If you’ve been introduced to our firm through Landing Point Financial Group, I’m glad you’re here.
                </p>
                <p>
                  Choosing someone to handle your taxes is personal. You should feel comfortable with the people you work with and have a chance to ask questions before deciding how to move forward.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                    Schedule a conversation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
                <a href="mailto:hello@forestcity.pro">
                  <span className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium text-lg hover:bg-white/5 active:scale-[0.98] transition-all duration-200">
                    <Mail className="w-5 h-5" />
                    Email Matt
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why the transition? ── */}
        <section className="py-12 md:py-16 bg-[#0B1218]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight text-balance">
                Why the transition?
              </h2>
              <div className="space-y-5 text-white/75 text-lg leading-relaxed">
                <p>
                  This transition gives Landing Point Financial Group room to focus on its priorities and gives Forest City CPA the opportunity to welcome additional tax clients and grow our practice through relationships built on personal attention and careful work.
                </p>
                <p>
                  We’re excited about that opportunity, and we know your trust is something we need to earn. Our goal is to make the transition straightforward, answer your questions, and help you feel comfortable deciding whether we’re the right fit for you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Welcome Video ── */}
        <section className="py-12 md:py-16 bg-[#0B1218]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full overflow-hidden border border-white/10 shadow-2xl" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/FjFYwVi1Q7g"
                  title="A welcome message from Matt LaFleur, CPA."
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-center text-white/60 text-sm">
                A brief introduction from Matt.{' '}
                <a
                  href="https://www.youtube.com/watch?v=FjFYwVi1Q7g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2D09F] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Watch Matt’s welcome message on YouTube.
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── We know relationships matter ── */}
        <section className="py-12 md:py-16 bg-[#0F1820]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#F2D09F] mb-5">
                We know relationships matter
              </span>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight text-balance">
                We respect the trust you’ve already placed.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                If you’ve worked with the same tax professional for years, a change like this can bring questions. We respect the trust you’ve placed in that relationship. Our goal is to introduce ourselves, explain how we can help, and give you the information you need to make a comfortable decision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Meet Matt and Forest City CPA ── */}
        <section className="py-12 md:py-16 bg-[#F9F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="aspect-[4/5] w-full bg-[#0F1820] relative overflow-hidden">
                  <img
                    src={MATT_HEADSHOT}
                    alt="Matt LaFleur, CPA"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1820]/80 via-transparent to-[#0F1820]/5 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-5 sm:px-8 sm:py-6">
                    <span className="block serif-heading text-2xl text-white leading-snug">
                      Matt LaFleur, CPA
                    </span>
                    <span className="mt-1 block text-xs font-medium tracking-[0.16em] uppercase text-[#F2D09F]">
                      Owner, Forest City CPA
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:w-1/2"
              >
                <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#477956] mb-5">
                  Meet Matt and Forest City CPA
                </span>
                <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
                  A CPA focused on careful work and clear answers.
                </h2>
                <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-5">
                  Matt LaFleur is a CPA and the owner of Forest City CPA. The firm serves individuals, families, small businesses, and nonprofits — providing tax preparation, accounting, and financial guidance that turn complex numbers into confident decisions.
                </p>
                <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-8">
                  Matt is based in Northeast Ohio, and clients can work with the firm remotely from wherever they are. The approach emphasizes careful work, clear communication, and understandable answers — with the goal of <span className="font-semibold text-[#477956]">absolute financial clarity</span>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: BadgeCheck, text: 'Active CPA' },
                    { icon: ShieldCheck, text: 'RamseyTrusted tax professional' },
                    { icon: MapPin, text: 'Based in Northeast Ohio' },
                    { icon: Users, text: 'Remote service available' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[#477956] flex-shrink-0" />
                      <span className="text-[#0F1820] font-medium text-sm md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/cpa/about"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#477956] hover:gap-2 transition-all"
                  >
                    Learn more about Matt and Forest City CPA
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Reassure annual tax clients ── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-[#477956]/10 flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-7 h-7 text-[#477956]" />
              </div>
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#477956] mb-5">
                Annual tax preparation
              </span>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[#0F1820] mb-8 leading-tight text-balance">
                Just need your annual tax returns prepared? We’d be glad to help.
              </h2>
              <p className="text-lg text-[#0F1820]/80 leading-relaxed mb-6">
                You don’t need to own a business or need ongoing financial advice to work with us. Preparing annual income tax returns for individuals, couples, families, and retirees is an important part of our practice.
              </p>
              <p className="text-lg text-[#0F1820]/80 leading-relaxed">
                If all you need is help preparing and filing your federal and state income tax returns each year, that can be the entire relationship. We’ll discuss any additional filings your situation requires and confirm the scope and fees before moving forward.
              </p>

              <div className="mt-10">
                <Link
                  to="/individual-tax-preparation"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#477956] text-[#477956] font-medium text-lg hover:bg-[#477956] hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  Learn about individual tax preparation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── What happens next ── */}
        <section className="py-12 md:py-16 bg-[#F9F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#477956] mb-4">
                What happens next?
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] text-balance leading-tight">
                Three simple steps, at your pace.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white p-8 border border-border/50 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="serif-heading text-4xl text-[#477956]/60">{s.step}</span>
                    <div className="w-11 h-11 bg-[#477956]/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-[#477956]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F1820] mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#0F1820]/80 leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-[#477956] mb-4">
                Frequently asked questions
              </span>
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] text-balance leading-tight">
                Questions you may have.
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#F9F6F0] border border-border/50 px-6"
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

        {/* ── Closing CTA ── */}
        <section className="relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#0F1820]">
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #477956 0, transparent 50%)' }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="serif-heading text-4xl md:text-5xl text-white mb-6 leading-tight text-balance">
                Whenever you’re ready, we’re here.
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
                There’s no pressure to decide right away. Reach out when you’re ready to ask a question or schedule a conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center gap-2 px-10 py-4 bg-[#477956] text-white font-medium text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                    Schedule a conversation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
                <a href="mailto:hello@forestcity.pro">
                  <span className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white font-medium text-lg hover:bg-white/5 active:scale-[0.98] transition-all duration-200">
                    <Mail className="w-5 h-5" />
                    hello@forestcity.pro
                  </span>
                </a>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
                <a href="tel:+12165504689" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#F2D09F]" />
                  (216) 550-4689
                </a>
                <span className="hidden sm:block w-px h-5 bg-white/20" />
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F2D09F]" />
                  Cleveland, Ohio · Remote nationwide
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer description="Forest City CPA provides accounting, tax preparation, and financial guidance for individuals, families, small businesses, and nonprofits." />
    </>
  );
};

export default LandingPointWelcomePage;
