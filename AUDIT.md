# FAAN.AI — Full Site Audit & Recommendations

*Reviewed: Feb 18, 2026*
*Goal: Reposition as "The AI Agent Implementation Partner on Google Cloud"*

---

## 1. HOMEPAGE (faan.ai/)

### Header/Nav
- ✅ Logo + brand looks clean
- ✅ "Let's Talk →" CTA is prominent
- ⚠️ "Services" dropdown — simplify to match new positioning
- **Change:** Rename nav items: Services → "What We Build" | Industries → cut or merge into About | Our Work → "Results" | Partners → cut (empty page)

### Hero Section
- ❌ **"Your AI and Data Partner for the Agentic AI Era"** — generic, every GCP partner says this
- ❌ **"We help enterprises transform with Google Cloud, AI, and data—from strategy to production"** — vague
- ✅ "Google Cloud Partner" badge — keep
- **New hero copy:**
  - H1: **"We Build Production AI Agents on Google Cloud"**
  - Sub: **"Custom AI agents deployed on Vertex AI & Gemini. From concept to production in 6 weeks. Fixed price."**
  - CTA 1: **"Book a Discovery Call"** (not "Start Your AI Journey" — too fluffy)
  - CTA 2: **"See a Live Demo"** (link to a recorded demo or interactive demo)

### Trust Logos (Swedbank, Maersk, reMarkable, etc.)
- ⚠️ **CRITICAL:** Are these FAAN clients or your Google CE engagements? If they're from your Google work, you CANNOT use them as FAAN clients — that's misrepresentation. Either:
  - Remove them entirely
  - Replace with "Technologies we work with" (Google Cloud, Vertex AI, BigQuery logos)
  - Or add disclaimer: "Companies our team has supported"

### "Built for Enterprises Ready to Lead with AI" Section
- ❌ Generic copy — reads like a template
- **Replace with:** "How It Works" — a simple 3-step process:
  1. **Discovery (Week 1)** — We map your workflows and identify agent opportunities
  2. **Build & Test (Weeks 2-5)** — We build your custom AI agent on Vertex AI
  3. **Deploy & Support (Week 6+)** — Production deployment + ongoing maintenance

### Service Cards
- ❌ **Cloud Foundations & Security** — the terminal code snippet visual is cool but the content is generic
- ❌ **Modern Data Stack** — "Eliminate silos with BigQuery and dbt" — every data consultant says this
- ❌ **Production-Grade AI & MLOps** — closest to the new positioning but still vague
- **Replace with 3 specific offerings:**
  1. **AI Agent Development** — "Custom autonomous agents built on Vertex AI Agent Engine & Gemini. Handle customer support, document processing, internal workflows."
  2. **AI-Ready Data Foundations** — "Your agents need clean data. We build the BigQuery + data pipeline foundation that powers intelligent automation."
  3. **Agent Ops & Maintenance** — "Production monitoring, retraining, scaling. We keep your agents performing."

### Stats Section (700+, 200+, 20+, 95%)
- ❌ **Remove or rework.** These numbers are not credible for a new company. A prospect who does 2 minutes of research will see FAAN is new and lose trust.
- **Replace with outcome metrics:**
  - "6 weeks average deployment time"
  - "40% reduction in manual workflows"
  - "$2.4M average operational savings"
  - (Use metrics from your case studies, even if illustrative)

### Case Study Preview
- ⚠️ Shows Healthcare MLOps case — this is decent but should lead with an AI agent story
- **Change:** Lead with your most "agent-like" case study

### Final CTA
- ❌ "Ready to Transform with AI?" — template language
- ✅ **"Ready to deploy your first AI agent?"** + "Book a Discovery Call"

---

## 2. SERVICES PAGE (faan.ai/services)

### Current State
- ❌ **BROKEN/EMPTY** — just shows "End-to-End Transformation" header with tabs (Cloud Foundations, Modern Data Stack, AI + Machine Learning, Training) but NO CONTENT below the tabs. The entire page body is empty.
- This is a major problem — it's a primary nav link leading to an empty page.

### Recommended Fix
- **Option A:** Remove the landing page entirely. Have "Services" dropdown link directly to individual service pages.
- **Option B:** Build it out with the 3 new service pillars:
  1. AI Agent Development (hero offering)
  2. AI-Ready Data Foundations
  3. Agent Ops & Maintenance
  - Each with: short description, key deliverables, "typical engagement" details, CTA

---

## 3. SERVICE SUB-PAGES

### Generative AI / Cloud Architecture (faan.ai/services/cloud-architecture)
- ⚠️ **Both /services/cloud-architecture and /services/data-analytics show identical content** — the Generative AI Development page. This is a bug.
- The Gen AI page itself is actually the BEST page on the site:
  - ✅ Good hero with terminal animation
  - ✅ "Harnessing the Power of LLMs" — solid technical copy
  - ✅ RAG, Model Tuning, Agentic Workflows — right topics
  - ✅ 30% stat with context
  - ✅ FAQ section
  - ✅ Related success stories
  - ✅ "Ready to build?" CTA with email capture
- **Changes needed:**
  - Fix routing so each service page shows unique content
  - Rename to "AI Agent Development" to match new positioning
  - Move "Agentic Workflows" from a bullet to the HERO — that's your main thing
  - Add pricing indicator: "Typical engagement: $40-60K" or "Starting at $40K"

---

## 4. INDUSTRIES PAGE (faan.ai/industries)

### Current State
- ❌ **EMPTY** — just header "Built for the specifics of your sector" and nothing else. No industries listed.

### Recommendation
- **Cut this page entirely** from the nav for now. An empty page hurts credibility.
- When you have 3+ clients in a vertical, THEN build industry pages.
- OR: quickly populate with 3-4 industries you know well from Google CE work:
  - Healthcare / Financial Services / Retail / Telecom
  - Each with: 2-3 bullet points on AI agent use cases specific to that industry

---

## 5. OUR WORK / CASE STUDIES (faan.ai/work)

### Current State
- ✅ **Best structured page on the site.** 6 case studies with filter tabs (All/Cloud/Data/AI).
- ✅ Good case study cards with tags, descriptions, and "Read case study →"
- ✅ Individual case study pages are well-built (Challenge → Solution → Architecture → CTA)

### Case Studies Listed:
1. Migrating core banking workloads to Google Cloud — Cloud Migration, Security
2. Building a generative AI assistant for wealth advisors — Gen AI, Vertex AI
3. Modernizing legacy data for real-time analytics — Data Analytics, BigQuery, Looker
4. 50% faster deployment with MLOps infrastructure — AI, MLOps, Google Cloud
5. Serverless multiplayer backend on Spanner — Cloud Spanner, Gaming
6. Dynamic pricing engine using active ML models — Machine Learning, BigQuery

### Issues
- ⚠️ **Are these real?** The detail level (client quotes with names, specific metrics) suggests they might be fabricated. "Sarah Jenkins, VP of Claims Operations, Humeros" — is Humeros a real company? If these are fictional, a prospect will Google it and you're done.
- ⚠️ **The gaming/Spanner case study is off-brand** — doesn't fit the AI agent positioning at all
- **Recommendations:**
  - If fictional: rewrite as "Solution Blueprints" or "Reference Architectures" instead of case studies. Be honest about what they are.
  - If based on real work: anonymize properly ("Top 10 US Bank" instead of fake company names)
  - Reorder to lead with AI/agent-related work
  - Cut the gaming/Spanner one — it dilutes focus
  - Add an AI agent-specific case study (even if it's a demo project you build yourself)

---

## 6. PARTNERS PAGE (faan.ai/partners)

### Current State
- ❌ **EMPTY** — just "Powered by the best in the industry" header and nothing else.

### Recommendation
- **Cut from nav entirely.** An empty page is worse than no page.
- When ready, add: Google Cloud Partner badge, technology partners (dbt, Looker, LangChain, etc.)
- This is low priority — nobody buys consulting because of a partners page

---

## 7. ABOUT PAGE (faan.ai/about)

### Current State
- ❌ **EMPTY** — "Engineering the future. We are a collective of specialized architects, data engineers, and AI researchers dedicated to pushing the boundaries of what's possible on Google Cloud." And nothing else.

### This is a BIG miss
- People buy consulting from PEOPLE. They want to see who they're working with.
- **Must add:**
  - Your photo + bio (founder story — Google CE background, years of experience, certifications)
  - Team section (even if it's just you + contractors, present it professionally)
  - "Why FAAN" — your unfair advantage (insider Google Cloud expertise)
  - Company values / approach (keep it short, 3-4 bullets)
  - Google Cloud certifications / badges

---

## 8. CONTACT PAGE (faan.ai/contact)

### Current State
- ✅ **Best-designed page** — clean form with all right fields (name, email, company, inquiry type, project details)
- ✅ Physical address (Seattle) and contact info
- ⚠️ Phone number (206) 555-0199 — **this is a FAKE 555 number.** Fix this immediately. Either use a real number or remove it.
- ⚠️ Email: support@faan.cloud — is this active? Should be hello@faan.ai for brand consistency

### Changes
- Fix the phone number (get a real Google Voice number if needed)
- Change email to @faan.ai domain
- Add: "Typical response time: within 24 hours"
- Consider adding Calendly embed for direct booking

---

## 9. FOOTER (all pages)

- ⚠️ **SOC 2 Type II badge** — do you have this certification? If not, REMOVE. This is a compliance claim that can get you in legal trouble.
- ❌ **LinkedIn/Twitter/YouTube links all go to "#"** — dead links. Either set up the profiles or remove the icons.
- ❌ **"Documentation" link** — goes nowhere useful. Remove.
- ❌ **"Careers" link** — not needed yet. Remove.
- ✅ Newsletter signup — keep but make sure it actually works

---

## 10. GLOBAL ISSUES

### Credibility Risks (fix these FIRST)
1. **Fake phone number (555-0199)** — instant credibility killer
2. **SOC 2 badge without certification** — potential legal issue
3. **Possibly fictional case studies with fake company names** — verify or reframe
4. **Client logos that may not be FAAN clients** — clarify or remove
5. **Empty pages (Industries, Partners, About, Services)** — remove from nav until built

### Content Strategy
- **Add a Blog** — 3 technical posts to start:
  1. "How to Build a Production AI Agent on Vertex AI in 2026"
  2. "RAG vs Fine-Tuning: When to Use Each on Google Cloud"
  3. "The Enterprise AI Agent Architecture Guide (BigQuery + Gemini)"
- These drive SEO, establish expertise, and give you LinkedIn content

### Design
- ✅ Dark theme is premium and differentiating
- ✅ Typography is clean
- ⚠️ Service card visuals (terminal, charts) are decent but could be sharper
- ❌ Case study images look like stock photos — replace with custom graphics or architecture diagrams

---

## PRIORITY ORDER (what to fix first)

### P0 — Fix Today (credibility blockers)
1. Remove fake phone number
2. Remove SOC 2 badge (unless certified)
3. Remove empty pages from nav (Industries, Partners)
4. Fix dead social links
5. Fix duplicate service pages (cloud-architecture = data-analytics)

### P1 — This Week (repositioning)
6. Rewrite hero copy for AI agent positioning
7. Build out About page with your story/photo
8. Reframe case studies as "Solution Blueprints" if fictional
9. Rename services to match new positioning
10. Add "How It Works" section to homepage

### P2 — This Month (growth)
11. Write 3 blog posts
12. Build a live demo of an AI agent
13. Set up real LinkedIn/Twitter profiles and link them
14. Add Calendly to contact page
15. Populate Industries page with 3 verticals

---

*Send me the GitHub repo and I'll implement all of this.*
