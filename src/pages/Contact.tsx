import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useToast } from '../components/ui/ToastProvider';
import { Phone, Mail } from 'lucide-react';

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

export const Contact = () => {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message) newErrors.message = 'Tell us about your business';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/nabilrehman8@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `FAAN.ai: New OpenClaw inquiry from ${formData.firstName}`,
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Company: formData.company,
          Message: formData.message,
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        addToast({
          type: 'success',
          title: 'Message Sent!',
          message: "We'll be in touch within 24 hours to schedule your call.",
          duration: 5000,
        });
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      addToast({
        type: 'error',
        title: 'Something went wrong',
        message: 'Please email us at hello@faan.ai instead.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <section className="relative pt-28 pb-20 px-4 bg-bg-primary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-6">
              FREE 15-MIN CALL
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
              Let's get your AI
              <br />
              <span className="text-accent-green">up and running.</span>
            </h1>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-md">
              Book a call and we'll map out exactly what OpenClaw can automate for your business. No sales pitch, just solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Phone size={18} className="text-accent-green" />
                </div>
                <span className="font-medium">15-minute discovery call</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Mail size={18} className="text-accent-green" />
                </div>
                <a href="mailto:hello@faan.ai" className="font-medium hover:text-accent-green transition-colors">
                  hello@faan.ai
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border-muted"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6">Tell us about your business</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">First name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-400' : 'border-border-default'} bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 transition-all`}
                    placeholder="Jane"
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Last name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-400' : 'border-border-default'} bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 transition-all`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-border-default'} bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 transition-all`}
                  placeholder="jane@company.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-text-primary mb-1.5">Company (optional)</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border-default bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-1.5">What does your business do?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400' : 'border-border-default'} bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 transition-all resize-y`}
                  placeholder="Tell us about your business and what tasks eat your time..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent-green hover:bg-accent-greenHover text-white font-bold rounded-xl green-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book My Free Call'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInWhenVisible>
            <p className="text-lg text-text-secondary">
              <span className="font-bold text-text-primary">Response time:</span> We typically respond within 4 hours during business hours.
              For urgent requests, email us directly at{' '}
              <a href="mailto:hello@faan.ai" className="text-accent-green font-semibold hover:underline">
                hello@faan.ai
              </a>
            </p>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};
