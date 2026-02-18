import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { useToast } from '../components/ui/ToastProvider';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
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
    inquiryType: 'general',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format must be a valid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      addToast({
        type: 'success',
        title: 'Message Sent Successfully',
        message: "We've received your inquiry. An architect will be in touch within 24 hours.",
        duration: 5000
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        inquiryType: 'general',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border-default hero-gradient">
        <div className="max-w-[1280px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="status-green" className="mb-6 tracking-widest px-4 py-1 inline-flex">GET IN TOUCH</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
              Let's engineer <br /> your next phase.
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-xl mb-12">
              Whether you need strategic architectural guidance on GCP, a scalable data foundation, or a production-ready Generative AI system, our experts are ready to engage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-bold text-text-primary mb-2">Global Headquarters</h4>
                <p className="text-text-secondary leading-relaxed font-mono">
                  1201 3rd Ave, Suite 3400<br />
                  Seattle, WA 98101<br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-2">Direct Contact</h4>
                <p className="text-text-secondary leading-relaxed font-mono">
                  hello@faan.ai
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d1117] border border-border-default rounded-2xl p-8 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,166,255,0.05)_0%,transparent_70%)] rounded-2xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send an Inquiry</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First name"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <Input
                  label="Last name"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Work Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input
                  label="Company"
                  name="company"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">What can we help you with?</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-bg-primary text-text-primary border border-border-default rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="cloud">Cloud Architecture & Migration</option>
                  <option value="data">Data Engineering & Analytics</option>
                  <option value="ai">Generative AI & Machine Learning</option>
                  <option value="training">Training & Enablement</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <Textarea
                label="Project Details"
                name="message"
                placeholder="Tell us about the challenges you're facing or the goals you're trying to achieve."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Security Handshake...' : 'Submit Inquiry'}
              </Button>

              <p className="text-xs text-text-muted text-center mt-4">
                By submitting this form, you agree to our <a href="#" className="text-accent-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-accent-blue hover:underline">Terms of Service</a>.
              </p>
            </form>
          </motion.div>

        </div>
      </section>

      {/* 2. FAQ Section */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Frequently Asked Questions</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <div className="space-y-6">
              <div className="bg-bg-primary border border-border-default rounded-lg p-6">
                <h4 className="text-lg font-bold text-text-primary mb-2">Do you take on projects outside of Google Cloud?</h4>
                <p className="text-text-secondary">Our deepest expertise is within the Google Cloud ecosystem, but we regularly architect multi-cloud solutions utilizing AWS or Azure when a client maintains a hybrid footprint.</p>
              </div>
              <div className="bg-bg-primary border border-border-default rounded-lg p-6">
                <h4 className="text-lg font-bold text-text-primary mb-2">What is your typical engagement model?</h4>
                <p className="text-text-secondary">We operate on two primary models: specialized Time & Materials (T&M) team augmentation, and fixed-scope deliverables for discrete projects like database migrations or RAG deployments.</p>
              </div>
              <div className="bg-bg-primary border border-border-default rounded-lg p-6">
                <h4 className="text-lg font-bold text-text-primary mb-2">How quickly can you spin up a team?</h4>
                <p className="text-text-secondary">For established enterprise clients with MSAs in place, we can typically deploy a specialized pod of architects and engineers within 2-3 weeks.</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

    </div>
  );
};
