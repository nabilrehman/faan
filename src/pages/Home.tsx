import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, MessageCircle, Clock, Check, X as XIcon, Zap, ArrowRight } from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}
    >
      {children}
    </motion.div>
  );
};

const USE_CASES = [
  'Read & summarize email',
  'Draft replies and follow-ups',
  'Manage your calendar',
  'Research prospects & competitors',
  'Write social media posts',
  'Follow up with leads automatically',
  'Prepare meeting briefs',
  'Track deadlines & reminders',
  'Find best prices online',
  'Draft contracts & proposals',
  'Monitor news & alerts',
  'Manage subscriptions',
  'Generate reports',
  'Update your CRM',
  'Answer customer questions',
  'Schedule appointments',
];

const FAQ_ITEMS = [
  {
    q: 'Do I need to be technical?',
    a: 'No. You text your AI like you\'d text an assistant. We handle all the technical setup and maintenance.',
  },
  {
    q: 'How much does the AI itself cost?',
    a: 'The AI model (Claude/GPT) costs $10-80/month depending on usage. We configure cost controls so you never get a surprise bill.',
  },
  {
    q: 'Is my data safe?',
    a: 'Your OpenClaw runs on YOUR hardware or YOUR private server. Nobody else has access. We harden security as part of setup.',
  },
  {
    q: 'How is this different from ChatGPT?',
    a: 'ChatGPT answers questions. OpenClaw DOES things \u2014 sends emails, manages your calendar, follows up with clients, browses the web.',
  },
  {
    q: 'How is this different from SimpleClaw or other wrappers?',
    a: 'Wrappers give you a raw, generic deploy. We customize OpenClaw for YOUR specific business \u2014 your workflows, your tools, your use cases. Plus ongoing management.',
  },
  {
    q: 'What if I don\'t like it?',
    a: 'If we can\'t get your AI working to your satisfaction within the first week, full refund.',
  },
  {
    q: 'Can I cancel the monthly plan?',
    a: 'Yes, anytime. No contracts. Your OpenClaw setup is yours to keep.',
  },
];

const DIY_STEPS = [
  { task: 'Research setup guides', time: '4 hours' },
  { task: 'Configure VPS & SSH', time: '2 hours' },
  { task: 'Install OpenClaw', time: '1 hour' },
  { task: 'Set up API keys & models', time: '1 hour' },
  { task: 'Connect messaging', time: '1 hour' },
  { task: 'Security hardening', time: '2 hours' },
  { task: 'Build custom skills', time: '5+ hours' },
  { task: 'Debug when things break', time: '\u221e' },
];

export const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">

      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16 bg-bg-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-8">
              Trusted by 300+ enterprise customers across 20+ industries
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary mb-6 leading-[1.05] tracking-tight"
          >
            We Set Up{' '}
            <span className="text-accent-green">OpenClaw</span>
            <br />
            For Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            You've seen the hype. You want the AI assistant. You don't want to fight with terminals and API keys. We handle everything &mdash; you just text your AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold text-lg rounded-full green-glow transition-all duration-200"
            >
              <Phone size={20} />
              Book a Free Call
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-border-default hover:border-accent-green text-text-primary font-bold text-lg rounded-full transition-all duration-200"
            >
              See Pricing
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 2: PAIN POINTS ========== */}
      <section className="py-20 md:py-28 px-4 bg-bg-sage">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-4">
              Sound Familiar?
            </h2>
            <p className="text-center text-text-muted mb-14 text-lg">Every one of these is fixable. We know because we fix them every week.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '😵',
                text: 'You opened the GitHub page, saw "npm install", and closed the tab.',
              },
              {
                emoji: '😬',
                text: 'You tried a hosted wrapper but it\'s janky and your data feels unsafe.',
              },
              {
                emoji: '🔥',
                text: 'You got it running but crons misfire, costs spiral, and it sends weird messages.',
              },
            ].map((card, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-muted card-hover h-full">
                  <div className="text-5xl mb-6">{card.emoji}</div>
                  <p className="text-lg font-semibold text-text-primary leading-relaxed">{card.text}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.3}>
            <p className="text-center mt-12 text-2xl font-bold text-accent-green">
              We fix all of this. In 48 hours.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ========== SECTION 3: USE CASES MARQUEE ========== */}
      <section className="py-20 md:py-28 px-4 bg-bg-primary overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-4">
              One Assistant. Your Whole Business.
            </h2>
            <p className="text-center text-text-muted text-lg">
              Tell it what to do in plain English. Via WhatsApp, Telegram, or Slack.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Marquee row 1 */}
        <div className="relative fade-mask-x mb-4">
          <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...USE_CASES, ...USE_CASES].map((uc, i) => (
              <span
                key={i}
                className="inline-flex items-center px-5 py-3 mx-2 bg-white border border-border-muted rounded-full text-sm font-medium text-text-primary shadow-sm hover:border-accent-green hover:shadow-md transition-all cursor-default"
              >
                {uc}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee row 2 (reverse) */}
        <div className="relative fade-mask-x">
          <div
            className="flex whitespace-nowrap"
            style={{
              width: 'max-content',
              animation: 'marquee 35s linear infinite reverse',
            }}
          >
            {[...USE_CASES.slice().reverse(), ...USE_CASES.slice().reverse()].map((uc, i) => (
              <span
                key={i}
                className="inline-flex items-center px-5 py-3 mx-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-800 shadow-sm hover:border-accent-green hover:shadow-md transition-all cursor-default"
              >
                {uc}
              </span>
            ))}
          </div>
        </div>

        <FadeInWhenVisible delay={0.2}>
          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: MessageCircle, label: 'WhatsApp' },
              { icon: MessageCircle, label: 'Telegram' },
              { icon: MessageCircle, label: 'Slack' },
            ].map((ch, i) => (
              <div key={i} className="flex items-center gap-2 text-text-muted text-sm font-medium">
                <ch.icon size={18} className="text-accent-green" />
                {ch.label}
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      {/* ========== SECTION 4: HOW IT WORKS ========== */}
      <section id="how-it-works" className="py-20 md:py-28 px-4 bg-bg-amber">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-4">
              Up and Running in 48 Hours
            </h2>
            <p className="text-center text-text-muted mb-16 text-lg">Three steps. That's it.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-accent-green/20 via-accent-green to-accent-green/20 rounded-full z-0" />

            {[
              {
                step: '1',
                title: 'Book a Call',
                subtitle: '15 minutes',
                desc: 'Tell us about your business and what eats your time. We\'ll map out exactly what your AI can do.',
                icon: Phone,
                color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
              },
              {
                step: '2',
                title: 'We Build It',
                subtitle: '24-48 hours',
                desc: 'OpenClaw deployed, secured, and customized for YOUR workflows. Connected to your messaging app of choice.',
                icon: Zap,
                color: 'bg-amber-100 text-amber-700 border-amber-200',
              },
              {
                step: '3',
                title: 'You Text Your AI',
                subtitle: 'Forever after',
                desc: 'Just message it like you\'d message an assistant. We handle monitoring, updates, and optimization.',
                icon: MessageCircle,
                color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
              },
            ].map((s, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.15}>
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-border-muted text-center card-hover">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} border flex items-center justify-center mx-auto mb-6`}>
                    <s.icon size={28} />
                  </div>
                  <div className="text-accent-green font-black text-sm font-mono mb-2">STEP {s.step}</div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1">{s.title}</h3>
                  <p className="text-sm font-semibold text-accent-green mb-4">{s.subtitle}</p>
                  <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: PRICING ========== */}
      <section id="pricing" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-4">
              Simple Pricing. No Surprises.
            </h2>
            <p className="text-center text-text-muted mb-16 text-lg">Pick the plan that fits. Upgrade or cancel anytime.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Setup & Launch */}
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-bg-primary rounded-3xl p-8 md:p-10 border-2 border-border-default shadow-sm h-full flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-4">ONE-TIME</span>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Setup & Launch</h3>
                  <div className="text-4xl font-black text-text-primary">
                    $1,500 <span className="text-lg font-normal text-text-muted">- $3,000</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'OpenClaw installed on your Mac, VPS, or cloud',
                    'Connected to WhatsApp, Telegram, or Slack',
                    'AI model configured (Claude, GPT, or Gemini)',
                    '5 custom skills for your business',
                    'Security hardening & cost controls',
                    '1-hour training call',
                    '7 days post-launch support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <Check size={18} className="text-accent-green mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm font-semibold text-accent-green mb-6">
                  <Clock size={16} />
                  Delivery: 48 hours
                </div>

                <a
                  href="/contact"
                  className="block w-full text-center py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold rounded-xl green-glow transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </FadeInWhenVisible>

            {/* Managed Operations */}
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-text-primary rounded-3xl p-8 md:p-10 border-2 border-text-primary shadow-lg h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent-green text-white text-xs font-bold rounded-bl-xl">
                  POPULAR
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs font-bold rounded-full mb-4">MONTHLY</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Managed Operations</h3>
                  <div className="text-4xl font-black text-white">
                    $500 <span className="text-lg font-normal text-gray-400">- $1,500/mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Everything in Setup & Launch included',
                    'Ongoing monitoring & optimization',
                    'Cost management (no surprise API bills)',
                    '2 new skills/automations per month',
                    'Custom automation builds for your workflows',
                    'Priority support via Telegram/Slack',
                    'Monthly strategy call',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-emerald-400 text-sm font-semibold mb-6">
                  Your AI gets smarter every month
                </p>

                <a
                  href="/contact"
                  className="block w-full text-center py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold rounded-xl green-glow transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: DIY VS FAAN ========== */}
      <section className="py-20 md:py-28 px-4 bg-bg-sage">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-16">
              DIY vs FAAN
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* DIY Column */}
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border-muted shadow-sm">
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span> Do It Yourself
                </h3>
                <ul className="space-y-4">
                  {DIY_STEPS.map((step, i) => (
                    <li key={i} className="flex items-center justify-between text-text-secondary border-b border-border-muted pb-3 last:border-0">
                      <span className="flex items-center gap-2">
                        <XIcon size={14} className="text-red-400" />
                        {step.task}
                      </span>
                      <span className="font-mono text-sm font-bold text-text-muted">{step.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t-2 border-red-200">
                  <p className="text-lg font-bold text-red-500">Total: 16+ hours</p>
                  <p className="text-sm text-text-muted">(If non-technical, multiply by 10)</p>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* FAAN Column */}
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-sm">
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> With FAAN
                </h3>
                <ul className="space-y-4">
                  {[
                    'Book a 15-minute call',
                    'We handle everything',
                    'You text your AI in 48 hours',
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-primary font-medium text-lg py-3">
                      <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-4 border-t-2 border-emerald-300">
                  <p className="text-lg font-bold text-accent-green">Total: 15 minutes of your time</p>
                </div>
                <a
                  href="/contact"
                  className="mt-6 block w-full text-center py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold rounded-xl green-glow transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: ABOUT ========== */}
      <section className="py-20 md:py-28 px-4 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-emerald-200 shadow-lg">
                  <img
                    src="/branding/nabil-founder.png"
                    alt="Nabil - Founder of FAAN"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                  Built by Someone Who Runs OpenClaw Every Day
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  I'm Nabil. I've spent 10+ years helping 300+ enterprises build cloud infrastructure. Now I set up and manage OpenClaw for businesses that want the power of AI agents without the headache. I use OpenClaw myself daily &mdash; I know every bug, every fix, every shortcut.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ========== SECTION 8: FAQ ========== */}
      <section id="faq" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary mb-14">
              Frequently Asked Questions
            </h2>
          </FadeInWhenVisible>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.05}>
                <div className="bg-bg-primary rounded-xl border border-border-muted overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bg-secondary transition-colors"
                  >
                    <span className="text-lg font-semibold text-text-primary pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-text-muted flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-text-secondary leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: FINAL CTA ========== */}
      <section className="py-20 md:py-28 px-4 bg-text-primary relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Stop Googling Setup Guides.
              <br />
              <span className="text-accent-green">Let Us Handle It.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 15-minute call. We'll tell you exactly what OpenClaw can do for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold text-lg rounded-full green-glow transition-all duration-200"
              >
                <Phone size={20} />
                Book a Free Call
              </a>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              or email{' '}
              <a href="mailto:hello@faan.ai" className="text-accent-green hover:underline">
                hello@faan.ai
              </a>
            </p>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};
