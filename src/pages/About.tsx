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

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[800px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-green" className="mb-6 mx-auto tracking-widest px-4 py-1">ABOUT FAAN</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Engineering <br /> the future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            We are a collective of specialized architects, data engineers, and AI researchers dedicated to pushing the boundaries of what's possible on Google Cloud.
          </motion.p>
        </div>
      </section>

      {/* 2. Story / Metrics Section */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Born in the Cloud</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Founded in 2018 by former Google engineers, FAAN was built with a singular focus: helping enterprises navigate the complexities of modern data architecture.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  We saw too many companies treating cloud migration as a simple lift-and-shift, missing out on the transformative power of cloud-native managed services, real-time analytics, and machine learning.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Today, we are a multi-time Google Cloud Partner of the Year, trusted by Fortune 500s and hyper-growth startups alike to build their most critical infrastructure.
                </p>
              </FadeInWhenVisible>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <FadeInWhenVisible delay={0.1}>
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold font-mono text-accent-green mb-2">150+</div>
                    <div className="text-text-muted font-medium">Cloud Certifications</div>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold font-mono text-accent-purple mb-2">50PB+</div>
                    <div className="text-text-muted font-medium">Data Migrated</div>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold font-mono text-accent-blue mb-2">99.99%</div>
                    <div className="text-text-muted font-medium">Uptime Engineered</div>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.4}>
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold font-mono text-text-primary mb-2">4</div>
                    <div className="text-text-muted font-medium">Global Offices</div>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">How We Operate</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-blue font-bold text-xl mb-4 font-mono">01.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Technical Ground Truth</h3>
                <p className="text-text-secondary leading-relaxed">We don't do 'fluff'. We validate our architectures with code, benchmarks, and rigorous testing before recommending them to clients.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-green font-bold text-xl mb-4 font-mono">02.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Enablement over Dependence</h3>
                <p className="text-text-secondary leading-relaxed">Our goal is to build your internal capabilities. We co-develop alongside your teams and provide deep technical training.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-purple font-bold text-xl mb-4 font-mono">03.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Security by Default</h3>
                <p className="text-text-secondary leading-relaxed">In an era of Gen AI, data governance is paramount. We bake zero-trust principles and tight IAM constraints into every layer.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-16 text-center">Leadership Team</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mike Ward", title: "Chief Executive Officer", initials: "MW", img: "/team/mike.jpg", color: "from-accent-blue to-accent-purple" },
              { name: "Doug Ward", title: "Chief Operating Officer", initials: "DW", img: "/team/doug.jpg", color: "from-accent-green to-accent-blue" },
              { name: "Anam Nabil", title: "Head of Sales", initials: "AN", img: "/team/anam.jpg", color: "from-accent-purple to-[#f78166]" },
              { name: "Nabil Rehman", title: "Advisor", initials: "NR", img: "/team/nabil.jpg", color: "from-[#f78166] to-accent-green" }
            ].map((leader, idx) => (
              <FadeInWhenVisible key={idx} delay={0.1 * idx}>
                <div className="group cursor-pointer">
                  <div className="w-full aspect-square bg-[#161b22] border border-border-default rounded-xl mb-4 overflow-hidden relative">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className={`hidden w-full h-full items-center justify-center bg-gradient-to-br ${leader.color} text-white text-4xl font-bold`}>
                      {leader.initials}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60"></div>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors">{leader.name}</h3>
                  <p className="text-sm text-text-muted">{leader.title}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-bg-secondary py-32 border-t border-border-default text-center px-6">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-text-primary mb-6">Join the team.</h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            We are always looking for passionate engineers, architects, and data scientists to solve complex problems.
          </p>
          <Button variant="primary" size="lg" href="/careers">View Open Roles</Button>
        </FadeInWhenVisible>
      </section>

    </div>
  );
};
