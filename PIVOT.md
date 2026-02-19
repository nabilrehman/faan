# FAAN.ai Pivot — OpenClaw Setup & Managed Operations

## BRAND
- Name: FAAN
- Tagline: "We Set Up & Run OpenClaw For Your Business"
- Dark theme (keep existing), keep green accent
- Tone: Direct, no-BS, founder-to-founder but accessible to non-technical people

## TARGET AUDIENCE
- Tier 2: People who want OpenClaw but can't/won't set it up (non-technical professionals, small businesses, solopreneurs)
- Tier 3: Power users who need custom automations, optimization, ongoing management

## SITE STRUCTURE — SINGLE PAGE (like SimpleClaw)
All content on Home.tsx. Remove all other pages except Contact. Remove Services, Work/case studies, About as separate pages — fold key content into the single page.

### SECTION 1: HERO
- H1: "We Set Up OpenClaw For Your Business"
- Sub: "You've seen the hype. You want the AI assistant. You don't want to fight with terminals and API keys. We handle everything — you just text your AI."
- CTA1: "Book a Free Call" → /contact (or Calendly link)  
- CTA2: "See Pricing" → scroll to pricing section
- Small trust line: "Trusted by 300+ enterprise customers across 20+ industries"

### SECTION 2: PAIN POINT
- Header: "Sound Familiar?"
- 3 cards:
  - "You opened the GitHub page, saw 'npm install', and closed the tab"
  - "You tried a hosted wrapper but it's janky and your data feels unsafe"  
  - "You got it running but crons misfire, costs spiral, and it sends weird messages"
- Sub: "We fix all of this. In 48 hours."

### SECTION 3: WHAT YOUR AI CAN DO
- Header: "One Assistant. Your Whole Business."
- Tag cloud / pill buttons (like SimpleClaw's use case section):
  - Read & summarize email
  - Draft replies and follow-ups
  - Manage your calendar
  - Research prospects & competitors
  - Write social media posts
  - Follow up with leads automatically
  - Prepare meeting briefs
  - Track deadlines & reminders
  - Find best prices online
  - Draft contracts & proposals
  - Monitor news & alerts
  - Manage subscriptions
  - Generate reports
  - Update your CRM
  - Answer customer questions
  - Schedule appointments
- Sub: "Tell it what to do in plain English. Via WhatsApp, Telegram, or Slack."

### SECTION 4: HOW IT WORKS
- Header: "Up and Running in 48 Hours"
- 3 steps:
  1. "Book a Call (15 min)" — Tell us about your business and what eats your time
  2. "We Build It (24-48 hours)" — OpenClaw deployed, secured, customized for YOUR workflows
  3. "You Text Your AI" — Just message it like you'd message an assistant. We handle the rest.

### SECTION 5: PRICING
- Header: "Simple Pricing. No Surprises."
- 2 tiers (cards side by side):

**Setup & Launch — $1,500 - $3,000 (one-time)**
- OpenClaw installed on your Mac, VPS, or cloud
- Connected to WhatsApp, Telegram, or Slack
- AI model configured (Claude, GPT, or Gemini)
- 5 custom skills for your business
- Security hardening & cost controls
- 1-hour training call
- 7 days post-launch support
- "Delivery: 48 hours"
- CTA: "Book a Call"

**Managed Operations — $500 - $1,500/month**
- Everything in Setup & Launch included
- Ongoing monitoring & optimization
- Cost management (no surprise API bills)
- 2 new skills/automations per month
- Custom automation builds for your workflows
- Priority support via Telegram/Slack
- Monthly strategy call
- "Your AI gets smarter every month"
- CTA: "Book a Call"

### SECTION 6: COMPARISON TABLE
- Header: "DIY vs FAAN"
- Left column "Do It Yourself":
  - Research setup guides: 4 hours
  - Configure VPS & SSH: 2 hours
  - Install OpenClaw: 1 hour
  - Set up API keys & models: 1 hour
  - Connect messaging: 1 hour
  - Security hardening: 2 hours
  - Build custom skills: 5+ hours
  - Debug when things break: ∞
  - Total: 16+ hours (if non-technical, multiply by 10)
- Right column "With FAAN":
  - Book a 15-min call
  - We handle everything
  - You text your AI in 48 hours
  - Total: 15 minutes of your time

### SECTION 7: ABOUT (brief, on-page)
- Header: "Built by Someone Who Runs OpenClaw Every Day"
- Short bio: "I'm Nabil. I've spent 10+ years helping 300+ enterprises build cloud infrastructure. Now I set up and manage OpenClaw for businesses that want the power of AI agents without the headache. I use OpenClaw myself daily — I know every bug, every fix, every shortcut."
- Photo (use existing nabil-founder.png)

### SECTION 8: FAQ
- "Do I need to be technical?" → No. You text your AI like you'd text an assistant.
- "How much does the AI itself cost?" → The AI model (Claude/GPT) costs $10-80/month depending on usage. We configure cost controls so you never get a surprise bill.
- "Is my data safe?" → Your OpenClaw runs on YOUR hardware or YOUR private server. Nobody else has access. We harden security as part of setup.
- "How is this different from ChatGPT?" → ChatGPT answers questions. OpenClaw DOES things — sends emails, manages your calendar, follows up with clients, browses the web.
- "How is this different from SimpleClaw or other wrappers?" → Wrappers give you a raw, generic deploy. We customize OpenClaw for YOUR specific business — your workflows, your tools, your use cases. Plus ongoing management.
- "What if I don't like it?" → If we can't get your AI working to your satisfaction within the first week, full refund.
- "Can I cancel the monthly plan?" → Yes, anytime. No contracts. Your OpenClaw setup is yours to keep.

### SECTION 9: FINAL CTA
- Header: "Stop Googling Setup Guides. Let Us Handle It."
- Sub: "Book a free 15-minute call. We'll tell you exactly what OpenClaw can do for your business."
- CTA: "Book a Free Call"
- Secondary: "or email hello@faan.ai"

## NAVBAR
- Logo: FAAN
- Links: How It Works | Pricing | FAQ | Contact
- CTA button: "Book a Call"
- (all scroll-to-section anchors, not separate pages)

## FOOTER
- Minimal: © 2026 FAAN · hello@faan.ai
- No social links unless real profiles exist
- No SOC 2, no fake badges

## TECHNICAL NOTES
- Keep dark theme, green accent
- Keep existing Tailwind + React + Vite setup  
- Make it a single-page site with smooth scroll to sections
- Remove all old pages (Services, Industries, Partners, Work, About as separate pages)
- Keep Contact page for the form (wire to Formsubmit.co → nabilrehman8@gmail.com)
- Mobile responsive (most traffic will be mobile from Twitter/Reddit links)
