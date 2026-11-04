import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const steps = [
  ['01', 'Review entity structure — S-Corp, LLC, Partnership'],
  ['02', 'Scan last 2 years returns for missed strategies'],
  ['03', 'Identify 2-3 immediate moves for this year'],
  ['04', 'Tell you exactly what planning would save — with math'],
];

const audience = [
  'Business owner / RE investor / W2 + side business',
  '$250K–$10M revenue',
  'Based in Ohio or remote OK',
  'Wants quarterly planning — not once-a-year filing',
];

const TaxStrategyDiagnosis = () => {
  return (
    <>
      <Helmet>
        <title>Free Tax Strategy Diagnosis | Forest City CPA Cleveland</title>
        <meta
          name="description"
          content="Find out if you are overpaying by 30-50% in 30 minutes. Free tax strategy diagnosis for Cleveland business owners — review entity structure, scan prior returns, and identify immediate tax-saving moves."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/tax-strategy-diagnosis" />
        <meta property="og:title" content="Free Tax Strategy Diagnosis | Forest City CPA Cleveland" />
        <meta property="og:description" content="Find out if you are overpaying by 30-50% in 30 minutes. Free tax strategy diagnosis for Cleveland business owners." />
        <meta property="og:url" content="https://forestcity.pro/cpa/tax-strategy-diagnosis" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Tax Strategy Diagnosis | Forest City CPA Cleveland" />
        <meta name="twitter:description" content="Find out if you are overpaying by 30-50% in 30 minutes. Free tax strategy diagnosis for Cleveland business owners." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>

      <Header />

      <main className="bg-white pt-24">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          {/* Left column */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#477956] mb-5">
              Free 30-Minute Diagnosis
            </span>
            <h1 className="serif-heading text-4xl md:text-5xl text-[#0F1820] mb-4 leading-tight">
              Free Tax Strategy Diagnosis
            </h1>
            <h2 className="text-lg md:text-xl text-[#0F1820]/70 mb-6 font-light leading-relaxed">
              Find out if you are overpaying by 30-50% in 30 minutes
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Most business owners we talk to are overpaying. Not because their CPA is bad, but because
              their CPA only does compliance.
            </p>

            <ol className="space-y-4 mb-8">
              {steps.map(([num, text]) => (
                <li key={num} className="flex gap-4">
                  <span className="font-semibold text-[#477956] flex-shrink-0 w-8">{num}</span>
                  <span className="text-sm text-[#0F1820]/80 leading-relaxed">{text}</span>
                </li>
              ))}
            </ol>

            <div className="border border-black/10 rounded-xl p-5 bg-black/[0.03] mb-8">
              <p className="text-sm text-[#0F1820]/80 leading-relaxed">
                <strong className="text-[#0F1820]">What to bring:</strong> Last year return PDF, YTD P&amp;L,
                5 minutes. Screen-share works.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-[#0F1820] mb-3">Who this is for</h3>
              <ul className="space-y-2">
                {audience.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#0F1820]/80">
                    <span className="w-1.5 h-1.5 bg-[#477956] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/cpa/financial-visibility"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#477956] hover:gap-2 transition-all"
            >
              Not ready? Take our Financial Visibility Check →
            </a>
          </div>

          {/* Right column */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-3xl border border-black/10 shadow-xl overflow-hidden">
              <div className="bg-[#0F1820] text-white p-6">
                <span className="block text-[10px] tracking-[0.18em] uppercase opacity-70 mb-2">
                  Book Your Diagnosis
                </span>
                <p className="text-lg font-medium mb-1">Choose a time — 30 minutes</p>
                <p className="text-[11px] opacity-50">Pick a time on Matt's calendar • Instant confirmation</p>
              </div>
              <div className="p-2">
                <div className="text-center py-4">
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                    <span className="inline-block bg-[#0F1820] text-white text-[11px] uppercase tracking-[0.18em] px-6 py-3 rounded-full hover:opacity-80 transition-opacity">
                      Choose a Time →
                    </span>
                  </a>
                  <p className="text-[10px] opacity-40 mt-3">
                    If it does not make sense to work together, we will tell you. No pitch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterCTA />
      <Footer />
    </>
  );
};

export default TaxStrategyDiagnosis;
