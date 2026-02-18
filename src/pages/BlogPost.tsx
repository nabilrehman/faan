import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { QuoteBlock } from '../components/ui/Blocks';
import { Link } from 'react-router-dom';

export const BlogPost = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Article Header */}
      <section className="bg-[#0d1117] pt-24 pb-16 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="mb-8">
            <Breadcrumb items={[
              { label: 'The Hub', href: '/hub' },
              { label: 'Generative AI', href: '/hub' },
              { label: 'Architecting for Agentic Workflows' }
            ]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="status-purple" className="mb-6">Generative AI</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 tracking-tight leading-[1.15]">
              Architecting for Agentic Workflows on Google Cloud
            </h1>

            <div className="flex items-center justify-center space-x-4 text-sm text-text-muted mt-8">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border border-border-default mr-3"
                />
                <span className="font-semibold text-text-secondary hover:text-accent-blue cursor-pointer transition-colors">Dr. Alex Chen</span>
              </div>
              <span>•</span>
              <span className="font-mono">Oct 12, 2025</span>
              <span>•</span>
              <span className="font-mono">8 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Image */}
      <div className="w-full max-w-[1000px] mx-auto px-6 -mt-8 relative z-10 mb-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
          alt="Abstract tech visualization"
          className="w-full aspect-[2/1] object-cover rounded-xl border border-border-default shadow-2xl mix-blend-luminosity opacity-80"
        />
      </div>

      {/* 3. Article Body */}
      <article className="max-w-[720px] mx-auto px-6 pb-24 rich-text-content">

        <p className="text-xl text-text-secondary leading-relaxed mb-10 font-medium">
          The conversation around Generative AI has shifted. We are no longer solely focused on single-turn chat interfaces responding to direct questions. Enterprise AI is moving rapidly toward <strong className="text-text-primary">Agentic Workflows</strong>—systems where LLMs autonomously execute multi-step logic, make API calls, and interact with complex environments to achieve a high-level goal.
        </p>

        <h2 className="text-3xl font-bold text-text-primary mt-12 mb-6">What makes a system 'Agentic'?</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          An agentic system differs from standard RAG (Retrieval-Augmented Generation) in its ability to loop and reason. Instead of taking an input and statically generating an output, an agent interprets the prompt, devises a plan, retrieves data, evaluates if it has enough information, and if not, executes subsequent tools until the condition is met.
        </p>

        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          To build this on Google Cloud, we need three core components: a highly capable reasoning engine (Gemini 1.5 Pro/Flash), a secure execution environment, and robust data grounding points.
        </p>

        <QuoteBlock author="Internal Engineering Guidelines" title="AI Center of Excellence" company="FAAN">
          Never give an agent full write-access to a production database. Always enforce 'human-in-the-loop' validation boundaries for destructive actions, restricting the agent to proposal generation.
        </QuoteBlock>

        <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">The Reference Architecture</h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          Here is a standard pattern we deploy for our clients looking to automate internal compliance checks against large corporate datasets.
        </p>

        {/* Code Block */}
        <div className="bg-[#161b22] border border-border-default rounded-lg p-0 mb-10 overflow-hidden shadow-lg">
          <div className="flex items-center px-4 py-3 border-b border-border-default bg-[#0d1117]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
              <div className="w-3 h-3 rounded-full bg-[#d29922]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2dba4e]"></div>
            </div>
            <div className="ml-4 text-xs font-mono text-text-muted">agent_router.py</div>
          </div>
          <div className="p-6 overflow-x-auto text-sm font-mono text-text-secondary leading-relaxed">
            <pre><code><span className="text-[#bc8cff]">import</span> vertexai{'\n'}
              <span className="text-[#bc8cff]">from</span> vertexai.preview.generative_models <span className="text-[#bc8cff]">import</span> GenerativeModel, Tool{'\n'}
              {'\n'}
              <span className="text-[#8b949e]"># Initialize tools tied to BigQuery Datasets</span>{'\n'}
              bq_query_tool = Tool.from_google_search_retrieval(google_search_retrieval=...) {'\n'}
              {'\n'}
              <span className="text-[#8b949e]"># Define execution boundaries</span>{'\n'}
              model = GenerativeModel({'\n'}
              <span className="text-[#c9d1d9] bg-[#0d1117] px-1 ring-1 ring-border-default rounded">"gemini-1.5-pro-preview-0409"</span>,{'\n'}
              tools=[bq_query_tool],{'\n'}
              system_instruction=[{'\n'}
              <span className="text-[#58a6ff]">"You are an AI data analyst."</span>,{'\n'}
              <span className="text-[#58a6ff]">"Your role is to query internal BigQuery tables."</span>,{'\n'}
              <span className="text-[#58a6ff]">"You may NOT execute INSERT, DROP, or DELETE statements."</span>{'\n'}
              ]{'\n'}
              ){'\n'}
              {'\n'}
              response = model.generate_content(<span className="text-[#58a6ff]">"Find the total usage by product ID 45X in Q3."</span>)</code></pre>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">Overcoming Latency in Agent Loops</h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          A common pitfall in agent architecture is <code className="bg-[#161b22] px-2 py-1 rounded border border-border-default text-text-primary text-sm font-mono">Loop Latency</code>. Because the agent must wait for the LLM to process and return a tool call, execute the tool, and then pass the results back to the LLM, the Time To First Token (TTFT) for the end user can be high.
        </p>

        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          To mitigate this, we rely heavily on <strong>Semantic Caching</strong> using Memorystore for Redis and parallel tool execution where dependencies allow.
        </p>

        {/* 4. Author Bio Block */}
        <div className="bg-[#161b22] border border-border-default rounded-xl p-8 mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Dr. Alex Chen"
            className="w-20 h-20 rounded-full border-2 border-border-muted"
          />
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-text-primary mb-1">Dr. Alex Chen</h4>
            <p className="text-sm font-medium text-accent-blue mb-3">Head of AI Architecture, FAAN</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Alex leads the Generative AI practice at FAAN, specializing in large-scale model orchestration and enterprise RAG systems. Before joining FAAN, he spent 6 years at Google Brain.
            </p>
          </div>
        </div>
      </article>

      {/* 5. Related Articles Grid */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* Hardcoded related cards matching the Hub component */}
            <a href="/hub/article-6" className="flex flex-col h-full bg-bg-primary border border-border-default rounded-xl transition-all duration-300 hover:border-accent-blue hover:-translate-y-1 hover:shadow-lg group overflow-hidden">
              <div className="pt-[50%] w-full relative overflow-hidden border-b border-border-default">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" alt="Related" className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Badge variant="status-purple" className="mb-4 self-start">Generative AI</Badge>
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">Preventing Hallucinations in RAG Systems</h3>
                <p className="text-text-secondary line-clamp-2">A technical review of prompt boundary constraints and context retrieval methods.</p>
              </div>
            </a>

            <a href="/hub/article-3" className="flex flex-col h-full bg-bg-primary border border-border-default rounded-xl transition-all duration-300 hover:border-accent-blue hover:-translate-y-1 hover:shadow-lg group overflow-hidden">
              <div className="pt-[50%] w-full relative overflow-hidden border-b border-border-default">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Related" className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Badge variant="status-blue" className="mb-4 self-start bg-accent-blue/10 text-accent-blue">Cloud Architecture</Badge>
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">Implementing Zero Trust Security</h3>
                <p className="text-text-secondary line-clamp-2">Best practices for configuring VPC Service Controls, BeyondCorp, and IAM.</p>
              </div>
            </a>

            <a href="/hub/article-2" className="flex flex-col h-full bg-bg-primary border border-border-default rounded-xl transition-all duration-300 hover:border-accent-blue hover:-translate-y-1 hover:shadow-lg group overflow-hidden">
              <div className="pt-[50%] w-full relative overflow-hidden border-b border-border-default">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="Related" className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Badge variant="status-green" className="mb-4 self-start">Data Engineering</Badge>
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">Migrating Teradata to BigQuery</h3>
                <p className="text-text-secondary line-clamp-2">Learn the technical frameworks needed to ensure a zero-downtime migration.</p>
              </div>
            </a>

          </div>
          <div className="text-center">
            <Link to="/hub" className="text-accent-blue hover:text-[#79b8ff] font-medium transition-colors">← Back to The Hub</Link>
          </div>
        </div>
      </section>

    </div>
  );
};
