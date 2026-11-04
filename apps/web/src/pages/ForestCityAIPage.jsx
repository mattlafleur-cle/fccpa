import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Layers, Cpu, Code2, GraduationCap, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const ForestCityAIPage = () => {
  const services = [
    {
      title: "Practical AI Implementation",
      description: "We move past the hype to integrate functional, secure AI tools that solve real operational bottlenecks in your organization.",
      icon: Cpu
    },
    {
      title: "AI Strategy & Roadmap",
      description: "Developing comprehensive plans for AI adoption aligned with your business objectives, data readiness, and security requirements.",
      icon: Brain
    },
    {
      title: "Workflow Automation",
      description: "Connecting AI capabilities to your existing software stack to reduce manual data entry and accelerate routine processes.",
      icon: Layers
    },
    {
      title: "Custom Development",
      description: "Building tailored AI applications, retrieval-augmented generation (RAG) systems, and secure internal knowledge bases.",
      icon: Code2
    },
    {
      title: "Executive Education",
      description: "Training leadership and teams on AI literacy, prompt engineering, and risk management to build internal capabilities.",
      icon: GraduationCap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Forest City AI | Practical AI Implementation &amp; Strategy</title>
        <meta name="description" content="Forest City AI delivers practical AI implementation, strategy, workflow automation, and executive education for Cleveland and Northeast Ohio organizations ready to modernize." />
        <link rel="canonical" href="https://forestcity.pro/ai" />
        <meta property="og:title" content="Forest City AI | Practical AI Implementation & Strategy" />
        <meta property="og:description" content="Practical AI implementation, strategy, workflow automation, and executive education for organizations ready to modernize." />
        <meta property="og:url" content="https://forestcity.pro/ai" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest City AI | Practical AI Implementation & Strategy" />
        <meta name="twitter:description" content="Practical AI implementation, strategy, workflow automation, and executive education for organizations ready to modernize." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>
      
      <Header transparent={true} />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0F1820]">
          <img
            src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
            alt="Abstract technology representation"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1820]/80 via-[#0F1820]/70 to-[#0F1820]/95"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <Brain className="w-4 h-4 text-[#F2D09F]" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Forest City AI</span>
            </div>
            <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight">
              Intelligence applied.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
              We cut through the noise of artificial intelligence to deliver practical implementation, strategic planning, and measurable workflow improvements.
            </p>
            <Link to="/contact">
              <span className="px-8 py-4 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 inline-block font-medium text-lg">
                Schedule a Consultation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Capabilities"
            subtitle="We don't sell theoretical transformations. We build intelligent systems that work for your team today."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col border-t border-border pt-8"
              >
                <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-[#477956]" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-[#0F1820]">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Forest City AI */}
      <section className="section-spacing bg-[#F9FAFB] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-6 text-balance leading-tight">
                Beyond the hype cycle.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Many organizations know they need AI but don't know where to start. We act as your trusted guide, evaluating your technical infrastructure, operational bottlenecks, and team readiness.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our approach emphasizes data security, ROI, and user adoption. An intelligent system is only valuable if your team actually uses it to make better decisions or reclaim lost hours.
              </p>
              <ul className="space-y-4">
                {[
                  "Agnostic approach to LLM providers (OpenAI, Anthropic, Google)",
                  "Strict adherence to data privacy and compliance",
                  "Focus on measurable operational efficiency"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1 text-[#477956]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="text-[#0F1820] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12 shadow-xl border border-border/50">
              <h3 className="text-2xl font-semibold mb-8 border-b border-border pb-4">Use Cases</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-[#0F1820] mb-2">Automated RFP Responses</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Vector database integration to draft highly accurate proposals based on your historical company data in minutes instead of days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#0F1820] mb-2">Internal Knowledge Assistants</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Secure conversational interfaces trained exclusively on your standard operating procedures, HR policies, and technical documentation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#0F1820] mb-2">Financial Data Extraction</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Computer vision and LLMs deployed to automatically structure messy invoice and receipt data directly into your ERP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ForestCityAIPage;