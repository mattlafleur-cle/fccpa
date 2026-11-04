import React, { useState, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Circle,
  HelpCircle,
  Mail,
  Loader2,
  AlertCircle,
  ShieldCheck,
  TrendingUp,
  Wallet,
  LayoutDashboard,
  Lock,
  Compass,
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { submitForm } from '@/lib/submitForm.js';
import { trackEvent } from '@/lib/analytics.js';

const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';
const MATT_PHOTO =
  'https://horizons-cdn.hostinger.com/c6c1f45b-a6a0-4e8e-989b-cbba6e4f2541/3c207db40910814d3a53ce68bc3a16f5.png';

// ── Assessment definition ──────────────────────────────────────────────
const STEPS = [
  {
    name: 'Reporting',
    icon: LayoutDashboard,
    questions: [
      'Are your books up to date and your monthly reports ready within 10 days after month end?',
      'Do your financial reports clearly show how your organization is performing?',
    ],
  },
  {
    name: 'Cash',
    icon: Wallet,
    questions: [
      'Do you know how much cash is available after accounting for upcoming bills and any restricted funds?',
      'Do you have a cash forecast showing expected money coming in and going out over the next 90 days?',
    ],
  },
  {
    name: 'Systems',
    icon: LayoutDashboard,
    questions: [
      'Do your accounting, payroll, and banking systems work together reliably?',
      'Do routine transactions flow into your books without repeated manual data entry?',
    ],
  },
  {
    name: 'Controls',
    icon: Lock,
    questions: [
      'Are there clear rules for who can approve spending and payments?',
      'Does someone other than the person making payments review them?',
    ],
  },
  {
    name: 'Decisions',
    icon: Compass,
    questions: [
      'Do you regularly use your financial reports to decide what to change or prioritize?',
      'Do you review your budget and financial plan on a regular schedule?',
    ],
  },
];

// Tie-break priority order for surfacing gaps.
const CATEGORY_PRIORITY = ['Cash', 'Reporting', 'Controls', 'Systems', 'Decisions'];

const RECOMMENDATIONS = {
  Reporting: 'Establish a monthly closing checklist and a consistent reporting date.',
  Cash: 'Build a weekly cash forecast showing expected receipts, payments, and available cash.',
  Systems: 'Map how transactions move between systems and identify repeated manual entry.',
  Controls:
    'Document spending approvals and establish an independent payment review appropriate to the organization’s size.',
  Decisions:
    'Schedule a monthly financial review covering results, budget differences, and upcoming decisions.',
};

// Why a recommendation follows from the visitor's specific answers.
const WHY = {
  Reporting: (missed) =>
    missed.includes(0)
      ? missed.includes(1)
        ? 'Your books are not closing on time and the reports are not clearly showing performance, so a fixed close routine and reporting date are the place to start.'
        : 'Your books are not closing within 10 days, so a monthly closing checklist and consistent date will make reporting reliable.'
      : 'Your reports are not clearly showing performance, so defining a consistent reporting format and date will make them more useful.',
  Cash: (missed) =>
    missed.includes(0)
      ? missed.includes(1)
        ? 'You are unsure of available cash and have no 90-day forecast, so a weekly cash forecast is the single most useful next step.'
        : 'You cannot confirm available cash after bills and restricted funds, so a forecast that separates available from committed cash comes first.'
      : 'You do not have a 90-day cash forecast, so building one will turn uncertainty into a plan.',
  Systems: (missed) =>
    missed.includes(0)
      ? missed.includes(1)
        ? 'Your systems do not connect reliably and transactions require manual re-entry, so mapping the flow first will show exactly where to fix it.'
        : 'Your accounting, payroll, and banking systems do not connect reliably, so mapping the handoffs will reveal the weak points.'
      : 'Routine transactions still require manual data entry, so identifying those steps will show where automation or integration helps most.',
  Controls: (missed) =>
    missed.includes(0)
      ? missed.includes(1)
        ? 'Spending approvals are unclear and payments are not independently reviewed, so documenting both is the priority.'
        : 'There are no clear rules for who can approve spending, so documenting approvals is the first control to put in place.'
      : 'Payments are not reviewed by someone other than the person making them, so an independent review is the gap to close.',
  Decisions: (missed) =>
    missed.includes(0)
      ? missed.includes(1)
        ? 'Reports are not driving decisions and the budget is not reviewed on a schedule, so a monthly review ritual ties both together.'
        : 'You are not regularly using reports to decide what to change, so a scheduled review will connect the numbers to action.'
      : 'Your budget and financial plan are not reviewed on a regular schedule, so putting a recurring review on the calendar is the fix.',
};

const ANSWER_VALUE = { yes: 1, no: 0, unsure: 0 };
const ANSWER_LABEL = { yes: 'Yes', no: 'No', unsure: 'Not sure' };

// ── Scoring helpers ────────────────────────────────────────────────────
function computeResults(answers) {
  // answers: { questionIndex: 'yes' | 'no' | 'unsure' }
  const categoryScores = STEPS.map((step, sIdx) => {
    const qIndices = [sIdx * 2, sIdx * 2 + 1];
    let score = 0;
    qIndices.forEach((qi) => {
      score += ANSWER_VALUE[answers[qi]] ?? 0;
    });
    return { name: step.name, score, total: 2 };
  });

  const totalScore = categoryScores.reduce((sum, c) => sum + c.score, 0);

  // Strengths: categories where both answers are "yes".
  const strengths = categoryScores
    .filter((c) => c.score === 2)
    .map((c) => c.name);

  // Priorities: categories with any gap, ranked by gap size then tie-break order.
  const priorities = categoryScores
    .map((c) => ({
      ...c,
      gap: c.total - c.score,
      order: CATEGORY_PRIORITY.indexOf(c.name),
    }))
    .filter((c) => c.gap > 0)
    .sort((a, b) => {
      if (b.gap !== a.gap) return b.gap - a.gap;
      return a.order - b.order;
    })
    .slice(0, 3)
    .map((c) => {
      const sIdx = STEPS.findIndex((s) => s.name === c.name);
      const missed = [sIdx * 2, sIdx * 2 + 1].filter(
        (qi) => answers[qi] !== 'yes',
      );
      return {
        category: c.name,
        recommendation: RECOMMENDATIONS[c.name],
        why: WHY[c.name](missed),
      };
    });

  let label;
  if (totalScore <= 4) label = 'Build the foundation';
  else if (totalScore <= 7) label = 'Close the gaps';
  else label = 'Strengthen your decision-making';

  const allYes = totalScore === 10;

  return { categoryScores, totalScore, strengths, priorities, label, allYes };
}

// ── Sample scorecard (illustrative) ────────────────────────────────────
const SAMPLE = {
  totalScore: 7,
  label: 'Close the gaps',
  categories: [
    { name: 'Reporting', score: 2 },
    { name: 'Cash', score: 1 },
    { name: 'Systems', score: 2 },
    { name: 'Controls', score: 1 },
    { name: 'Decisions', score: 1 },
  ],
  priority: 'Cash',
  nextStep:
    'Build a weekly cash forecast showing expected receipts, payments, and available cash.',
};

// ── Small presentational pieces ───────────────────────────────────────
function CategoryDots({ score, total = 2 }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i < score ? 'bg-[#477956]' : 'bg-[#E2DDD2]'
          }`}
        />
      ))}
    </div>
  );
}

function SampleScorecard() {
  return (
    <div className="relative">
      <div className="absolute -top-3 left-6 z-10">
        <span className="inline-block bg-[#F2D09F] text-[#0F1820] text-[11px] font-semibold tracking-[0.16em] uppercase px-3 py-1">
          Sample results
        </span>
      </div>
      <div className="bg-white border border-[#E5E0D6] shadow-[0_18px_40px_-12px_rgba(15,24,32,0.25)] p-7 sm:p-8">
        <div className="flex items-end justify-between mb-1">
          <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#7a8a82]">
            Visibility score
          </span>
          <span className="text-xs text-[#7a8a82]">illustrative</span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="serif-heading text-5xl text-[#477956] leading-none">
            {SAMPLE.totalScore}
          </span>
          <span className="text-lg text-[#0F1820]/50 font-medium">/ 10</span>
        </div>
        <p className="text-sm font-semibold text-[#0F1820] mb-6">
          {SAMPLE.label}
        </p>

        <div className="space-y-3 mb-6">
          {SAMPLE.categories.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-sm text-[#0F1820]/80">{c.name}</span>
              <CategoryDots score={c.score} />
            </div>
          ))}
        </div>

        <div className="border-t border-[#E5E0D6] pt-5">
          <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#7a8a82] block mb-2">
            Practical next step
          </span>
          <p className="text-sm text-[#0F1820] leading-relaxed">
            <span className="font-semibold text-[#477956]">
              {SAMPLE.priority}:
            </span>{' '}
            {SAMPLE.nextStep}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Answer button ──────────────────────────────────────────────────────
function AnswerButton({ value, selected, onClick, questionId }) {
  const Icon = value === 'yes' ? CheckCircle2 : value === 'no' ? Circle : HelpCircle;
  const selectedClasses =
    value === 'yes'
      ? 'bg-[#477956] border-[#477956] text-white'
      : value === 'no'
        ? 'bg-[#0F1820] border-[#0F1820] text-white'
        : 'bg-[#7a8a82] border-[#7a8a82] text-white';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`${ANSWER_LABEL[value]} — question ${questionId}`}
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 border-2 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#477956] focus-visible:ring-offset-2 ${
        selected
          ? selectedClasses
          : 'border-[#E2DDD2] text-[#0F1820]/75 hover:border-[#477956] hover:text-[#0F1820] bg-white'
      }`}
    >
      <Icon className="w-4 h-4" />
      {ANSWER_LABEL[value]}
    </button>
  );
}

// ── Main page ──────────────────────────────────────────────────────────
const FinancialVisibilityCheckPage = () => {
  const [stage, setStage] = useState('intro'); // 'intro' | 'assessment' | 'results'
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const assessmentRef = useRef(null);
  const resultsRef = useRef(null);

  // Email capture state
  const [emailForm, setEmailForm] = useState({
    email: '',
    organization: '',
    concern: '',
  });
  const [emailStatus, setEmailStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const results = useMemo(() => computeResults(answers), [answers]);

  const startAssessment = () => {
    setStage('assessment');
    setStep(0);
    trackEvent('assessment_started', { source: 'financial-visibility-check' });
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const setAnswer = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const currentStep = STEPS[step];
  const qIndices = [step * 2, step * 2 + 1];
  const bothAnswered = qIndices.every((qi) => answers[qi]);
  const isLastStep = step === STEPS.length - 1;

  const goNext = () => {
    if (isLastStep) {
      setStage('results');
      trackEvent('assessment_completed', {
        total_score: results.totalScore,
        label: results.label,
      });
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step === 0) {
      setStage('intro');
    } else {
      setStep((s) => s - 1);
    }
  };

  const retake = () => {
    setAnswers({});
    setStep(0);
    setStage('intro');
    setEmailStatus('idle');
    setEmailForm({ email: '', organization: '', concern: '' });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleBookingClick = () => {
    trackEvent('booking_link_clicked', {
      source: 'financial-visibility-check',
      total_score: results.totalScore,
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!emailForm.email) return;
    setEmailStatus('sending');
    try {
      const payload = {
        email: emailForm.email,
        organization: emailForm.organization || '',
        concern: emailForm.concern || '',
        totalScore: results.totalScore,
        categoryScores: results.categoryScores,
        answers: STEPS.flatMap((s, sIdx) =>
          [sIdx * 2, sIdx * 2 + 1].map((qi) => ({
            step: s.name,
            question: s.questions[qi - sIdx * 2],
            answer: ANSWER_LABEL[answers[qi]] || 'Unanswered',
          })),
        ),
        priorities: results.priorities,
        sourcePage: 'https://forestcity.pro/cpa/financial-visibility-check',
      };
      await submitForm('scorecard', payload);
      setEmailStatus('success');
      trackEvent('scorecard_requested', { total_score: results.totalScore });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('scorecard request failed', err);
      setEmailStatus('error');
    }
  };

  const progressPct = Math.round(((step + (bothAnswered ? 1 : 0)) / STEPS.length) * 100);

  return (
    <>
      <Helmet>
        <title>Financial Visibility Health Check | Forest City CPA | Cleveland, OH</title>
        <meta
          name="description"
          content="A free ten-question self-assessment of your financial visibility across reporting, cash, systems, controls, and decisions. Three minutes, no email required to see your score."
        />
        <link rel="canonical" href="https://forestcity.pro/cpa/financial-visibility-check" />
        <meta property="og:title" content="Financial Visibility Health Check | Forest City CPA | Cleveland, OH" />
        <meta property="og:description" content="A free ten-question self-assessment of your financial visibility across reporting, cash, systems, controls, and decisions. Three minutes, no email required to see your score." />
        <meta property="og:url" content="https://forestcity.pro/cpa/financial-visibility-check" />
        <meta property="og:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forest City" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Visibility Health Check | Forest City CPA | Cleveland, OH" />
        <meta name="twitter:description" content="A free ten-question self-assessment of your financial visibility. Three minutes, no email required to see your score." />
        <meta name="twitter:image" content="https://images.hostinger.com/bfbcf0d3-e93d-4653-8768-ac03ef471e80.png" />
      </Helmet>

      <Header transparent={true} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16 bg-[#0F1820]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1820] via-[#0F1820] to-[#13202b]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #477956 0, transparent 45%), radial-gradient(circle at 85% 75%, #F2D09F 0, transparent 40%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-7 backdrop-blur-sm border border-white/15">
                <ClipboardCheck className="w-4 h-4 text-[#F2D09F]" />
                <span className="text-white text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase">
                  Forest City CPA | Absolute Financial Clarity
                </span>
              </div>

              <h1 className="serif-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-white mb-6 text-balance">
                Do your numbers give you clarity or more questions?
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-4 max-w-xl">
                Find the gaps in your reporting, cash planning, and financial systems that make decisions harder than they need to be.
              </p>
              <p className="text-base text-white/65 leading-relaxed mb-8 max-w-xl">
                Answer 10 quick questions to get your financial visibility score and practical next steps.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                <button
                  type="button"
                  onClick={startAssessment}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#477956] text-white font-medium text-base hover:brightness-110 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D09F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1820]"
                >
                  Check my financial visibility
                  <ArrowRight className="w-5 h-5" />
                </button>
                <span className="text-sm text-white/55">
                  About three minutes. Free. No email required.
                </span>
              </div>
            </motion.div>

            {/* Sample scorecard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:pl-6"
            >
              <SampleScorecard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Assessment ── */}
      <section
        ref={assessmentRef}
        className="bg-[#F9F6F0] py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {stage === 'assessment' && (
              <motion.div
                key="assessment"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* Title + progress */}
                <div className="text-center mb-8">
                  <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-2">
                    Financial Visibility Check
                  </h2>
                  <p className="text-sm text-[#0F1820]/60">
                    Step {step + 1} of {STEPS.length}
                  </p>
                </div>

                <div className="w-full h-2 bg-[#E5E0D6] rounded-full overflow-hidden mb-10">
                  <motion.div
                    className="h-full bg-[#477956] rounded-full"
                    initial={false}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Step heading */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#477956]/12 flex items-center justify-center">
                    {React.createElement(currentStep.icon, {
                      className: 'w-5 h-5 text-[#477956]',
                    })}
                  </div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#477956]">
                    {currentStep.name}
                  </h3>
                </div>

                {/* Questions */}
                <div className="space-y-8">
                  {currentStep.questions.map((q, i) => {
                    const qi = qIndices[i];
                    return (
                      <div key={qi} className="bg-white border border-[#E5E0D6] p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(15,24,32,0.08)]">
                        <p className="text-base sm:text-lg text-[#0F1820] leading-relaxed mb-5">
                          <span className="text-[#477956] font-semibold mr-2">
                            {qi + 1}.
                          </span>
                          {q}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          {['yes', 'no', 'unsure'].map((val) => (
                            <AnswerButton
                              key={val}
                              value={val}
                              questionId={qi + 1}
                              selected={answers[qi] === val}
                              onClick={() => setAnswer(qi, val)}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Nav */}
                <div className="flex items-center justify-between mt-10 gap-4">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#0F1820]/70 hover:text-[#0F1820] transition-colors focus:outline-none focus-visible:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!bothAnswered}
                    className={`inline-flex items-center gap-2 px-8 py-3.5 font-medium text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#477956] focus-visible:ring-offset-2 ${
                      bothAnswered
                        ? 'bg-[#477956] text-white hover:brightness-110 active:scale-[0.98]'
                        : 'bg-[#E2DDD2] text-[#0F1820]/40 cursor-not-allowed'
                    }`}
                  >
                    {isLastStep ? 'See my results' : 'Continue'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {stage === 'results' && (
              <motion.div
                key="results"
                ref={resultsRef}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="scroll-mt-24"
              >
                <ResultsView
                  results={results}
                  answers={answers}
                  onRetake={retake}
                  onBookingClick={handleBookingClick}
                  emailForm={emailForm}
                  setEmailForm={setEmailForm}
                  emailStatus={emailStatus}
                  onEmailSubmit={handleEmailSubmit}
                />
              </motion.div>
            )}

            {stage === 'intro' && (
              <motion.div
                key="intro-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <p className="text-[#0F1820]/60">
                  Press “Check my financial visibility” above to begin.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Meet Matt ── */}
      {stage === 'results' && (
        <section className="bg-white py-12 md:py-16 border-t border-[#E5E0D6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2">
                <div className="aspect-[4/5] w-full max-w-xs mx-auto bg-[#0F1820] relative overflow-hidden">
                  <img
                    src={MATT_PHOTO}
                    alt="Matt LaFleur, CPA"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1820]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-3">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#477956] mb-3">
                  Meet Matt
                </span>
                <h2 className="serif-heading text-3xl md:text-4xl text-[#0F1820] mb-4 leading-tight">
                  Matt LaFleur, CPA
                </h2>
                <p className="text-[#0F1820]/75 text-lg leading-relaxed mb-6">
                  Matt helps business owners and nonprofit leaders turn their financial information into clearer decisions through accounting, cash planning, and ongoing financial guidance.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#0F1820]/70">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#477956]" /> Active CPA — Ohio &amp; California
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#477956]" /> 14+ years experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

// ── Results view ───────────────────────────────────────────────────────
function ResultsView({
  results,
  onRetake,
  onBookingClick,
  emailForm,
  setEmailForm,
  emailStatus,
  onEmailSubmit,
}) {
  const { totalScore, categoryScores, strengths, priorities, label, allYes } = results;

  return (
    <div>
      {/* Score header */}
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0F1820]/50 mb-3">
          Your financial visibility score
        </p>
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="serif-heading text-6xl md:text-7xl text-[#477956] leading-none">
            {totalScore}
          </span>
          <span className="text-2xl text-[#0F1820]/40 font-medium">/ 10</span>
        </div>
        <p className="text-lg font-semibold text-[#0F1820]">{label}</p>
        <p className="text-sm text-[#0F1820]/55 mt-3 max-w-xl mx-auto leading-relaxed">
          This is a brief self-assessment based on your answers. It is not a review of your books or a comprehensive evaluation of financial health.
        </p>
      </div>

      {/* Category breakdown */}
      <div className="bg-white border border-[#E5E0D6] p-6 sm:p-8 mb-8 shadow-[0_2px_10px_-4px_rgba(15,24,32,0.08)]">
        <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0F1820]/50 mb-5">
          Category breakdown
        </h3>
        <div className="space-y-4">
          {categoryScores.map((c) => (
            <div key={c.name} className="flex items-center justify-between gap-4">
              <span className="text-sm sm:text-base text-[#0F1820]/85">{c.name}</span>
              <div className="flex items-center gap-3">
                <CategoryDots score={c.score} />
                <span className="text-sm text-[#0F1820]/50 w-8 text-right">
                  {c.score}/2
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#477956] mb-4">
            Strengths
          </h3>
          <ul className="space-y-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-[#0F1820]/85">
                <CheckCircle2 className="w-5 h-5 text-[#477956] flex-shrink-0 mt-0.5" />
                <span>
                  Strong <strong>{s}</strong> — both areas are in place.
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Priorities */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0F1820]/50 mb-4">
          {priorities.length > 0 ? 'Priorities to address' : 'Keep refining'}
        </h3>

        {priorities.length > 0 ? (
          <div className="space-y-5">
            {priorities.map((p, i) => (
              <div
                key={p.category}
                className="bg-white border-l-4 border-[#477956] border-y border-r border-[#E5E0D6] p-5 sm:p-6"
              >
                <p className="font-semibold text-[#0F1820] mb-1">
                  {i + 1}. {p.category}
                </p>
                <p className="text-[#0F1820]/85 leading-relaxed mb-2">
                  {p.recommendation}
                </p>
                <p className="text-sm text-[#0F1820]/55 leading-relaxed">
                  {p.why}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E5E0D6] p-5 sm:p-6">
            {allYes ? (
              <p className="text-[#0F1820]/85 leading-relaxed">
                You answered yes across the board — a strong foundation. As the organization grows, keep reviewing forecast accuracy, how useful your reports actually are, and whether your systems and controls still fit your size.
              </p>
            ) : (
              <p className="text-[#0F1820]/85 leading-relaxed">
                No major gaps surfaced in your answers. Keep reviewing forecast accuracy, reporting usefulness, and changing needs as the organization grows.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Booking CTA */}
      <div className="bg-[#0F1820] p-7 sm:p-9 text-center mb-8">
        <h3 className="serif-heading text-2xl md:text-3xl text-white mb-3 leading-tight">
          Review my results with Matt
        </h3>
        <p className="text-white/75 leading-relaxed mb-6 max-w-xl mx-auto">
          Book a free 15-minute conversation with Matt LaFleur, CPA. We’ll discuss your results, identify a priority, and decide whether additional support would be useful.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          onClick={onBookingClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#477956] text-white font-medium text-base hover:brightness-110 active:scale-[0.98] transition-all duration-200"
        >
          Review my results with Matt
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-7 pt-7 border-t border-white/10 text-left">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#F2D09F] mb-3 text-center">
            Support we can provide
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#477956] flex-shrink-0 mt-0.5" />
              <span>Reliable monthly accounting and reporting.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#477956] flex-shrink-0 mt-0.5" />
              <span>Cash forecasting and financial planning.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#477956] flex-shrink-0 mt-0.5" />
              <span>Ongoing financial guidance and fractional CFO support.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email capture */}
      <div className="bg-white border border-[#E5E0D6] p-6 sm:p-8 mb-8">
        {emailStatus !== 'success' ? (
          <form onSubmit={onEmailSubmit}>
            <h3 className="serif-heading text-xl text-[#0F1820] mb-1">
              Email my scorecard and action steps
            </h3>
            <p className="text-sm text-[#0F1820]/60 mb-5">
              Receive a copy of your results and recommended next steps.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="sc-email" className="block text-sm font-medium text-[#0F1820] mb-1.5">
                  Email address <span className="text-[#477956]">*</span>
                </label>
                <input
                  id="sc-email"
                  type="email"
                  required
                  value={emailForm.email}
                  onChange={(e) => setEmailForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-[#E2DDD2] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                  placeholder="you@example.com"
                  disabled={emailStatus === 'sending'}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sc-org" className="block text-sm font-medium text-[#0F1820] mb-1.5">
                    Organization name <span className="text-[#0F1820]/40 font-normal">(optional)</span>
                  </label>
                  <input
                    id="sc-org"
                    type="text"
                    value={emailForm.organization}
                    onChange={(e) => setEmailForm((p) => ({ ...p, organization: e.target.value }))}
                    className="w-full px-4 py-3 border border-[#E2DDD2] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                    placeholder="Your organization"
                    disabled={emailStatus === 'sending'}
                  />
                </div>
                <div>
                  <label htmlFor="sc-concern" className="block text-sm font-medium text-[#0F1820] mb-1.5">
                    Biggest financial concern <span className="text-[#0F1820]/40 font-normal">(optional)</span>
                  </label>
                  <input
                    id="sc-concern"
                    type="text"
                    value={emailForm.concern}
                    onChange={(e) => setEmailForm((p) => ({ ...p, concern: e.target.value }))}
                    className="w-full px-4 py-3 border border-[#E2DDD2] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#477956] text-[#0F1820] transition-colors"
                    placeholder="What's on your mind?"
                    disabled={emailStatus === 'sending'}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-[#0F1820]/45 mt-3 mb-5">
              We’ll send your results only. Requesting the scorecard does not subscribe you to marketing.
            </p>

            {emailStatus === 'error' && (
              <div className="flex items-start gap-2 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  We couldn’t send your scorecard. Your results are still on screen — please try again, or book a call and we’ll review them together.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={emailStatus === 'sending'}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#477956] text-[#477956] font-medium hover:bg-[#477956] hover:text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {emailStatus === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Email my scorecard
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-4">
            <CheckCircle2 className="w-10 h-10 text-[#477956] mx-auto mb-3" />
            <p className="text-lg font-semibold text-[#0F1820] mb-1">
              Your scorecard is on the way.
            </p>
            <p className="text-sm text-[#0F1820]/60">
              Check your inbox for your results and recommended next steps.
            </p>
          </div>
        )}
      </div>

      {/* Retake */}
      <div className="text-center">
        <button
          type="button"
          onClick={onRetake}
          className="text-sm text-[#477956] hover:underline underline-offset-4 font-medium"
        >
          Retake the assessment
        </button>
      </div>
    </div>
  );
}

export default FinancialVisibilityCheckPage;
