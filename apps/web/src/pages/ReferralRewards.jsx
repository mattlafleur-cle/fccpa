import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FooterCTA from '../components/FooterCTA.jsx';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

const steps = [
  { num: '01', text: 'Submit their name below.' },
  { num: '02', text: 'We reach out: "Your friend thought you might be overpaying — free diagnosis."' },
  { num: '03', text: 'If they become a client — you get the reward.' },
];

const rewards = [
  'Option A — Guardians Club Suite for 2 + Marble Room dinner',
  'Option B — $500 flight credit',
  'Option C — $500 off your next planning cycle',
];

const ReferralRewards = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    referralName: '',
    referralBusiness: '',
    referralEmail: '',
    why: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Referral submission:', form);
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-[#0F1820] focus:outline-none focus:border-[#477956] transition-colors';

  return (
    <>
      <Helmet>
        <title>Referral Rewards | Forest City CPA</title>
        <meta
          name="description"
          content="Refer a Cleveland business owner who is probably overpaying. If they become a client, you choose a reward — Guardians suite night, flight credit, or planning discount."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/referral-rewards" />
        <meta property="og:title" content="Referral Rewards | Forest City CPA" />
        <meta property="og:description" content="Refer a Cleveland business owner who is probably overpaying. If they become a client, you choose a reward — Guardians suite night, flight credit, or planning discount." />
        <meta property="og:url" content="https://forestcity.pro/cpa/referral-rewards" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Referral Rewards | Forest City CPA" />
        <meta name="twitter:description" content="Refer a Cleveland business owner who is probably overpaying. If they become a client, you choose a reward." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>

      <Header />

      <main className="bg-white pt-24">
        <div className="max-w-[1280px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#0F1820]/40 mb-5">
              Referral Rewards
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1820] leading-[0.95] mb-6">
              A Simple Introduction Could Turn Into Your Next Guardians Suite Night.
            </h1>
            <p className="text-[15px] text-[#0F1820]/70 leading-relaxed max-w-[480px] mb-10">
              Our best clients come from referrals. If you know a Cleveland business owner who is probably
              overpaying, introduce us. If they become a client, you win.
            </p>

            <div className="mb-10">
              <h3 className="font-semibold text-[#0F1820] mb-5">How it works</h3>
              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F1820] text-white text-[13px] font-semibold flex items-center justify-center">
                      {s.num}
                    </span>
                    <span className="text-sm text-[#0F1820]/80 leading-relaxed pt-1">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/[0.03] border border-black/10 rounded-2xl p-5 mb-6">
              <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0F1820]/50 mb-3">
                Choose after first paid engagement
              </span>
              <ul className="space-y-2">
                {rewards.map((r) => (
                  <li key={r} className="text-[13px] text-[#0F1820]/80 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#477956] rounded-full mt-1.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] text-[#0F1820]/40 leading-relaxed">
              Ohio business owners only. One reward per closed referral. $250K+ revenue qualification.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl border border-black/10 shadow-xl p-8 lg:sticky lg:top-24">
            <h3 className="text-xl font-medium text-[#0F1820] mb-6">Refer a Business Owner</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#477956]/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-[#477956]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-[#0F1820]">Thanks – we will reach out in 24h</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">Your Name *</label>
                    <input
                      name="yourName"
                      required
                      value={form.yourName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">Your Email *</label>
                    <input
                      name="yourEmail"
                      type="email"
                      required
                      value={form.yourEmail}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">Referral Name</label>
                  <input
                    name="referralName"
                    value={form.referralName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">
                    Referral Business Name
                  </label>
                  <input
                    name="referralBusiness"
                    value={form.referralBusiness}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">Referral Email *</label>
                  <input
                    name="referralEmail"
                    type="email"
                    required
                    value={form.referralEmail}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F1820]/70 mb-1.5">
                    Why they might be a fit
                  </label>
                  <textarea
                    name="why"
                    value={form.why}
                    onChange={handleChange}
                    rows={4}
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F1820] text-white text-[11px] uppercase tracking-[0.18em] py-4 rounded-full hover:opacity-80 transition-opacity"
                >
                  Submit Referral →
                </button>
                <p className="text-[10px] text-[#0F1820]/40 text-center">
                  Reward issued after first paid engagement.
                </p>
              </form>
            )}
            <div className="mt-6 pt-6 border-t border-black/10 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#477956] hover:underline"
              >
                See availability →
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterCTA />
      <Footer />
    </>
  );
};

export default ReferralRewards;
