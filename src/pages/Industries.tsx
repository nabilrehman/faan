import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

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

const IndustryCard = ({ title, description, image, features, href }: { title: string, description: string, image: string, features: string[], href: string }) => (
  <a href={href} className="group flex flex-col bg-bg-secondary border border-border-default rounded-xl overflow-hidden hover:border-accent-blue hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1">
    <div className="h-48 w-full relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(88,166,255,0.15)_0%,transparent_100%)] z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">{title}</h3>
      <p className="text-text-secondary leading-relaxed mb-6">{description}</p>

      <div className="mt-auto space-y-3 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start text-sm text-text-muted">
            <span className="text-accent-green mr-2 mt-0.5">✓</span>
            {feature}
          </div>
        ))}
      </div>

      <div className="text-accent-blue font-medium flex items-center mt-auto">
        Explore solutions <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
      </div>
    </div>
  </a>
);

export const Industries = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[900px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-green" className="mb-6 mx-auto tracking-widest px-4 py-1">INDUSTRIES</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Built for the specifics <br /> of your sector.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl mb-12"
          >
            We combine deep Google Cloud expertise with specialized industry knowledge to solve your most complex data challenges.
          </motion.p>
        </div>
      </section>

      {/* 2. Industry Grid */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <IndustryCard
                title="Telecommunications"
                description="Modernize network analytics, reduce churn with ML prediction models, and personalize subscriber experiences at scale."
                image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                features={["Network log analytics via BigQuery", "Customer 360 & Next Best Action", "Gen AI for Call Center Ops"]}
                href="/industries/telecom"
              />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <IndustryCard
                title="Retail & CPG"
                description="Optimize supply chains, build dynamic pricing engines, and hyper-personalize the omnichannel shopper journey."
                image="https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800"
                features={["Demand forecasting with Vertex AI", "Real-time inventory dashboards", "Secure Data Clean Rooms"]}
                href="/industries/retail"
              />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <IndustryCard
                title="Financial Services"
                description="Detect fraud in real-time, automate regulatory reporting, and securely migrate highly sensitive workloads to GCP."
                image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
                features={["Risk modeling & stress testing", "Zero Trust cloud architecture", "Algorithmic trading platforms"]}
                href="/industries/finance"
              />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <IndustryCard
                title="Gaming"
                description="Ingest massive streams of telemetry data, predict player behavior, and architect low-latency multiplayer backends."
                image="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800"
                features={["Real-time event streaming", "Player matchmaking algorithms", "Serverless backend scaling"]}
                href="/industries/gaming"
              />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.5}>
              <IndustryCard
                title="Media & Entertainment"
                description="Accelerate content delivery, build intelligent recommendation engines, and analyze audience engagement metrics."
                image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800"
                features={["Video metadata extraction via AI", "Looker engagement dashboards", "Cloud CDN optimization"]}
                href="/industries/media"
              />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <IndustryCard
                title="Digital Natives / Startups"
                description="Build scalable, cloud-native MVPs fast. We help Series A-C startups establish enterprise-grade data foundations."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                features={["Rapid PoC development", "Modern Data Stack implementation", "FinOps & cost optimization"]}
                href="/industries/startups"
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="bg-bg-secondary py-32 border-t border-border-default text-center px-6">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-text-primary mb-6">Don't see your industry?</h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Our cloud and data expertise applies across verticals. Let's discuss your specific use case.
          </p>
          <Button variant="primary" size="lg" href="/contact">Schedule a Consultation</Button>
        </FadeInWhenVisible>
      </section>
    </div>
  );
};
