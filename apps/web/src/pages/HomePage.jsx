import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Calculator, TrendingUp, Target, Users, Lightbulb, BarChart3, FileText, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PracticeCard from '../components/PracticeCard.jsx';
import CTAButton from '../components/CTAButton.jsx';
const HomePage = () => {
  const practices = [{
    icon: Brain,
    title: 'Forest City AI',
    description: 'Practical AI implementation, strategic planning, workflow automation, training, and executive education. We help organizations adopt AI thoughtfully and effectively.',
    to: '/ai'
  }, {
    icon: Calculator,
    title: 'Forest City CPA',
    description: 'Comprehensive accounting services including bookkeeping, tax preparation, fractional CFO support, and financial reporting. Clear numbers, trusted guidance.',
    to: '/cpa'
  }, {
    icon: TrendingUp,
    title: 'Forest City Consulting',
    description: 'Management consulting focused on business strategy, operations improvement, leadership development, and organizational effectiveness. Practical solutions that work.',
    to: '/consulting'
  }];
  const whyForestCity = [{
    icon: Target,
    title: 'Practical over theoretical',
    description: 'We focus on solutions that work in the real world, not just on paper.'
  }, {
    icon: Users,
    title: 'Trusted relationships',
    description: 'Long-term partnerships built on transparency and mutual respect.'
  }, {
    icon: Lightbulb,
    title: 'Modern technology',
    description: 'We embrace innovation while maintaining proven fundamentals.'
  }, {
    icon: BarChart3,
    title: 'Measurable results',
    description: 'Clear metrics and accountability in everything we do.'
  }];
  return <>
      <Helmet>
        <title>Forest City | Cleveland CPA, Tax Preparation, AI &amp; Consulting</title>
        <meta name="description" content="Forest City helps Cleveland and Northeast Ohio organizations build something that lasts through CPA services, tax preparation, bookkeeping, AI implementation, and strategic consulting. Virtual-first, with a local in-office option." />
        <link rel="canonical" href="https://forestcity.pro/" />
        <meta property="og:title" content="Forest City | Cleveland CPA, Tax Preparation, AI & Consulting" />
        <meta property="og:description" content="Forest City helps Cleveland and Northeast Ohio organizations build something that lasts through CPA services, tax preparation, bookkeeping, AI implementation, and strategic consulting." />
        <meta property="og:url" content="https://forestcity.pro/" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest City | Cleveland CPA, Tax Preparation, AI & Consulting" />
        <meta name="twitter:description" content="Forest City helps Cleveland and Northeast Ohio organizations build something that lasts through CPA services, tax preparation, bookkeeping, AI implementation, and strategic consulting." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://forestcity.pro/#organization',
          name: 'Forest City',
          alternateName: 'Forest City CPA',
          url: 'https://forestcity.pro/',
          logo: 'https://forestcity.pro/favicon.png',
          description: 'Forest City combines practical AI implementation, technical accounting expertise, and strategic consulting to deliver clarity, stewardship, and valuable execution for the long term. Based in Cleveland, Ohio and serving Northeast Ohio and clients nationwide.',
          email: 'hello@forestcity.pro',
          telephone: '+1-216-550-4689',
          areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Lorain County', 'Ohio', 'United States'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cleveland',
            addressRegion: 'OH',
            addressCountry: 'US',
          },
          sameAs: ['https://www.linkedin.com/in/mattlafleurcleveland/'],
        })}</script>
      </Helmet>
      
      <Header transparent={true} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1702396341404-159617692947" alt="Cleveland architecture and forest landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/80 via-[#0F1820]/70 to-[#0F1820]/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-8 md:py-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="serif-heading text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 text-balance leading-tight">
              Helping organizations build something that lasts.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              We combine practical AI implementation, technical accounting expertise, and strategic consulting to deliver clarity, stewardship, and valuable execution for the long term.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <CTAButton variant="primary" href="#explore">
                Explore Forest City
              </CTAButton>
              <CTAButton variant="secondary" href="/contact">
                Schedule a Conversation
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/80 mb-6 sm:mb-8">
                Forest City is built on the belief that clarity, stewardship, and practical execution matter more than complexity. We help individuals and teams make better decisions through intelligent systems, sound financial practices, and strategic thinking designed for the long term.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
                Our three practice areas work independently and together to serve organizations that value substance over flash.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Three Practice Cards */}
      <section id="explore" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our practices" subtitle="Three distinct areas of expertise, unified by a commitment to practical solutions and long-term thinking." align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {practices.map((practice, index) => <PracticeCard key={practice.title} icon={practice.icon} title={practice.title} description={practice.description} index={index} to={practice.to} />)}
          </div>
        </div>
      </section>
      
      {/* Why Forest City Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Forest City" subtitle="We believe in doing work that matters, building relationships that last, and delivering results you can measure." align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {whyForestCity.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#477956]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      
      {/* Individual Tax Preparation Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F1820] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                  <FileText className="w-4 h-4 text-[#F2D09F]" />
                  <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City CPA</span>
                </div>
                <h2 className="serif-heading text-3xl sm:text-4xl md:text-5xl text-white mb-6 text-balance leading-tight">
                  Personal tax preparation. Personal attention.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6">
                  You do not have to own a business to work with Forest City CPA. We help individuals, couples, families, and retirees prepare and file their annual income tax returns with care and clear communication.
                </p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
                  Whether your return is straightforward or involves several income sources, annual tax preparation can be the entire relationship.
                </p>
                <Link
                  to="/individual-tax-preparation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 font-medium text-lg"
                >
                  Individual &amp; family tax preparation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white/5 border border-white/15 p-8 lg:p-10"
              >
                <h3 className="serif-heading text-2xl text-[#F2D09F] mb-5">What we prepare</h3>
                <ul className="space-y-3">
                  {[
                    'Federal Form 1040 preparation and filing',
                    'Applicable state income tax returns',
                    'Ohio municipal and school district returns',
                    'Retirement, investment, and self-employment income',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-[#477956] rounded-full flex-shrink-0 mt-2.5" />
                      <span className="text-white/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F1820] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
              Financial clarity. Intelligent systems. Better decisions.
            </motion.h2>
          </div>
        </div>
      </section>
      
      {/* Cleveland Heritage Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1501683567677-568cfd15361c" alt="Cleveland architecture showcasing the city's industrial heritage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1820]/95 via-[#0F1820]/85 to-[#0F1820]/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="serif-heading text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8 text-balance leading-tight">
                The Forest City Heritage
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-lg text-white/90 leading-relaxed">
                <p>
                  Cleveland earned the nickname "Forest City" in the mid-1800s, a recognition of its tree-lined streets and commitment to thoughtful growth. The name reflected a city that valued both progress and preservation, industry and environment, ambition and stewardship.
                </p>
                <p>
                  Those same principles guide our work. We believe in building systems that grow sustainably, making decisions that account for the long term, and combining modern tools with timeless fundamentals. Like the city that inspired our name, we value craftsmanship, resilience, and community.
                </p>
                <p>
                  Forest City represents more than a location. It represents an approach: practical, grounded, and built to last.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Let's talk" subtitle="Whether you're looking to implement AI, improve your financial operations, or develop a strategic plan, we're here to help." align="center" />
            
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <div>
                <p className="text-base sm:text-lg text-muted-foreground mb-2">Email</p>
                <a href="mailto:hello@forestcity.pro" className="text-lg sm:text-xl font-medium text-[#477956] hover:underline">
                  hello@forestcity.pro
                </a>
              </div>
              <div>
                <p className="text-base sm:text-lg text-muted-foreground mb-2">Phone</p>
                <a href="tel:+12165504689" className="text-lg sm:text-xl font-medium text-[#477956] hover:underline">
                  (216) 550-4689
                </a>
              </div>
              <div>
                <p className="text-base sm:text-lg text-muted-foreground mb-2">Location</p>
                <p className="text-lg sm:text-xl font-medium">Cleveland, Ohio</p>
              </div>
            </div>
            
            <CTAButton variant="primary" href="/contact">
              Schedule a Consultation
            </CTAButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </>;
};
export default HomePage;