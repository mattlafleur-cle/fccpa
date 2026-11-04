import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Forest City do?",
    answer: "Forest City is a professional services firm built around three connected practice areas: artificial intelligence, CPA services, and advisory consulting. We help businesses, nonprofits, and leaders improve financial clarity, implement practical systems, and make better decisions."
  },
  {
    question: "Is Forest City CPA replacing Cleveland CPAs and More?",
    answer: "Yes. Forest City CPA is the next evolution of Cleveland CPAs and More. The name is changing to better reflect the broader direction of the firm, but the underlying commitment to responsive, practical, and trusted service remains the same."
  },
  {
    question: "Do you work with businesses outside Cleveland?",
    answer: "Yes. Forest City is rooted in Northeast Ohio, but we work with clients in other locations when the fit is right. Many services can be delivered remotely through secure cloud-based tools, video meetings, and shared systems."
  },
  {
    question: "What types of clients do you serve?",
    answer: "We primarily serve small businesses, nonprofit organizations, churches, professional service firms, and leaders who need clearer financial information, better systems, and practical guidance."
  },
  {
    question: "What is the difference between Forest City AI, Forest City CPA, and Forest City Consulting?",
    answer: "Forest City AI focuses on practical artificial intelligence training, workflow improvement, and implementation. Forest City CPA focuses on accounting, bookkeeping, tax, and fractional CFO services. Forest City Consulting focuses on strategy, operations, management consulting, and organizational improvement."
  },
  {
    question: "Do you offer one-time projects or ongoing support?",
    answer: "Both. Some clients engage Forest City for a focused project, assessment, cleanup, or implementation. Others work with us on an ongoing basis for monthly accounting, advisory, AI support, or strategic consulting."
  },
  {
    question: "How does a first consultation work?",
    answer: "The first step is a conversation to understand your organization, your current challenges, and what you are trying to build. From there, we determine whether Forest City is the right fit and recommend the most appropriate next step."
  }
];

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Forest City CPA, AI &amp; Consulting</title>
        <meta name="description" content="Answers to common questions about Forest City's CPA, tax, accounting, AI, and consulting services for Cleveland and Northeast Ohio organizations." />
        <link rel="canonical" href="https://forestcity.pro/faq" />
        <meta property="og:title" content="FAQ | Forest City CPA, AI & Consulting" />
        <meta property="og:description" content="Answers to common questions about Forest City's CPA, tax, accounting, AI, and consulting practices." />
        <meta property="og:url" content="https://forestcity.pro/faq" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Forest City CPA, AI & Consulting" />
        <meta name="twitter:description" content="Answers to common questions about Forest City's CPA, tax, accounting, AI, and consulting practices." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          url: 'https://forestcity.pro/faq',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        })}</script>
      </Helmet>
      
      <Header transparent={true} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2"
            alt="Abstract architectural lines showing clarity and structure"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/80 via-[#0F1820]/60 to-[#0F1820]/95"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <HelpCircle className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">FAQ</span>
            </div>
            <h1 className="serif-heading text-5xl md:text-6xl text-white mb-6 text-balance leading-tight">
              Questions before we begin.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              A simple overview of how Forest City works, who we serve, and how our three practice areas fit together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#F2D09F]/60 px-2 pb-2"
              >
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-[#0F1820] hover:text-[#477956] data-[state=open]:text-[#477956] transition-colors py-6 leading-snug">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-[#0F1820]/80 leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-[#477956] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[#F2D09F]">
              Ready to start the conversation?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Whether you need clearer numbers, smarter systems, or strategic guidance, Forest City can help you determine the right next step.
            </p>
            <Link to="/contact">
              <span className="px-8 py-4 bg-[#F2D09F] text-[#0F1820] hover:brightness-110 active:scale-[0.98] transition-all duration-200 inline-block font-semibold text-lg">
                Schedule a Conversation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FAQPage;