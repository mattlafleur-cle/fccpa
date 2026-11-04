import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { Loader2 } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import pb from '@/lib/pocketbaseClient.js';
const ContactPage = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'Other',
    message: ''
  });

  // Pre-populate practice area based on referrer/intent if we want, 
  // but let's just do it simply based on the state or hash if provided.
  useEffect(() => {
    if (location.state?.practice) {
      setFormData(prev => ({
        ...prev,
        practiceArea: location.state.practice
      }));
    }
  }, [location]);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await pb.collection('inquiries').create(formData, {
        $autoCancel: false
      });
      toast.success('Inquiry submitted successfully.', {
        description: 'A member of our team will be in touch shortly.'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        practiceArea: 'Other',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Submission failed.', {
        description: 'Please try again or contact us directly via phone or email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <Helmet>
        <title>Contact Forest City | CPA, Tax &amp; Consulting in Cleveland, OH</title>
        <meta name="description" content="Contact Forest City for CPA services, tax preparation, bookkeeping, AI implementation, or strategic consulting. Serving Cleveland, Lorain County, and Northeast Ohio. Virtual-first with a local in-office option." />
        <link rel="canonical" href="https://forestcity.pro/contact" />
        <meta property="og:title" content="Contact Forest City | CPA, Tax & Consulting in Cleveland, OH" />
        <meta property="og:description" content="Get in touch with Forest City for CPA services, tax preparation, AI implementation, or strategic consulting in Cleveland and Northeast Ohio." />
        <meta property="og:url" content="https://forestcity.pro/contact" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Forest City | CPA, Tax & Consulting in Cleveland, OH" />
        <meta name="twitter:description" content="Get in touch with Forest City for CPA services, tax preparation, AI implementation, or strategic consulting in Cleveland and Northeast Ohio." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: 'https://forestcity.pro/contact',
          name: 'Contact Forest City',
          description: 'Contact Forest City for CPA services, tax preparation, bookkeeping, AI implementation, or strategic consulting.',
          mainEntity: {
            '@type': 'Organization',
            '@id': 'https://forestcity.pro/#organization',
            name: 'Forest City',
            email: 'hello@forestcity.pro',
            telephone: '+1-216-550-4689',
            areaServed: ['Cleveland, Ohio', 'Northeast Ohio', 'Lorain County', 'Ohio', 'United States'],
          },
        })}</script>
      </Helmet>
      
      <Header />
      <Toaster position="top-center" />
      
      <main className="min-h-screen pt-32 pb-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <SectionHeading title="Start a conversation." subtitle="Whether you're looking to implement intelligent systems, gain financial clarity, or rethink your organizational strategy, we are ready to assist." />
              
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Direct Contact</h3>
                  <a href="mailto:hello@forestcity.pro" className="block text-2xl font-medium text-[#477956] hover:underline mb-1">
                    hello@forestcity.pro
                  </a>
                  <a href="tel:+12165504689" className="block text-2xl font-medium text-[#0F1820] hover:text-[#477956] transition-colors">
                    (216) 550-4689
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</h3>
                  <p className="text-xl text-[#0F1820]">Cleveland, Ohio</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-lg border border-border/40 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#0F1820] mb-2">
                    Full Name
                  </label>
                  <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors" placeholder="Jane Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0F1820] mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-sm font-medium text-[#0F1820] mb-2">
                    Area of Interest
                  </label>
                  <select id="practiceArea" name="practiceArea" required value={formData.practiceArea} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors appearance-none">
                    <option value="Forest City AI">Forest City AI</option>
                    <option value="Forest City CPA">Forest City CPA</option>
                    <option value="Forest City Consulting">Forest City Consulting</option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F1820] mb-2">
                    How can we help?
                  </label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors resize-none" placeholder="Tell us a bit about your current situation..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#0F1820] text-white hover:bg-[#477956] active:scale-[0.99] transition-all duration-300 font-medium flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </> : 'Submit Inquiry'}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </>;
};
export default ContactPage;