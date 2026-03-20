"use client";

import Link from "next/link";
// Ensure relative paths match your directory structure
import Reveal from "../components/Reveal";
import GradientText from "../components/GradientText";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24 overflow-hidden">
      
      {/* PITCH HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-300/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-8 shadow-md">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Seed Round Open
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Investing in <GradientText>Infrastructure</GradientText> <br className="hidden md:block"/> for Compassion.
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          AnimalSathi is building India’s first structured, tech-enabled animal emergency response ecosystem. Scalable, transparent, and driven by data.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="mailto:investors@animalsathi.com" className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:-translate-y-1">
            Request Pitch Deck
          </a>
          <a href="#roadmap" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 transition shadow-sm">
            View Roadmap
          </a>
        </div>
      </section>

      {/* PROBLEM VS SOLUTION (SIDE-BY-SIDE) */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Problem */}
            <div className="bg-red-50/50 border border-red-100 rounded-[2rem] p-8 md:p-12">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-6">❌</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem</h2>
              <ul className="space-y-4">
                <ProblemItem text="No centralized, tech-driven platform for emergency reporting." />
                <ProblemItem text="NGOs rely on fragmented WhatsApp chats and incomplete data." />
                <ProblemItem text="High mortality due to delayed rescues and poor coordination." />
                <ProblemItem text="Zero data accountability or measurable impact for donors/CSR." />
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-green-50/50 border border-green-100 rounded-[2rem] p-8 md:p-12 shadow-lg shadow-green-100/50">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-6">✅</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solution</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                A unified platform connecting citizens, volunteers, and verified NGOs. 
              </p>
              <ul className="space-y-4">
                <SolutionItem text="SOS alerts with live GPS, media, and algorithmic urgency." />
                <SolutionItem text="Automated dispatch to the nearest verified responders." />
                <SolutionItem text="End-to-end transparent workflows with photo verification." />
                <SolutionItem text="Real-time data dashboards for NGOs and Government bodies." />
              </ul>
            </div>

          </div>
        </section>
      </Reveal>

      {/* MARKET OPPORTUNITY & BUSINESS MODEL */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div>
              <SectionBadge text="The Market" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                A Massive, Underserved Sector
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                India has over <strong className="text-orange-600">30+ million stray animals</strong> and thousands of NGOs operating entirely offline. Government bodies, CSR initiatives, and institutional donors are actively seeking transparent, data-driven platforms to deploy capital effectively.
              </p>
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-center gap-6">
                <div className="text-5xl">📈</div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide">TAM (India)</div>
                  <div className="text-2xl font-black text-slate-800">$1.2B+ <span className="text-sm font-normal text-slate-500">Pet & Welfare Ecosystem</span></div>
                </div>
              </div>
            </div>

            <div>
              <SectionBadge text="Revenue Model" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                Sustainable Unit Economics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RevenueCard icon="🏢" title="B2B SaaS" desc="SaaS subscriptions for NGOs to access advanced rescue management tools." />
                <RevenueCard icon="🤝" title="CSR Partnerships" desc="Platform fees for executing sponsored rescue & vaccination campaigns." />
                <RevenueCard icon="📊" title="Data Licensing" desc="City-level dashboard licensing for municipal corporations." />
                <RevenueCard icon="💳" title="Fintech / Tips" desc="Transaction fees on transparent, milestone-based donations." />
              </div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* PRODUCT ROADMAP */}
      <Reveal>
        <section id="roadmap" className="max-w-6xl mx-auto px-6 mb-32 pt-10">
          <div className="text-center mb-16">
            <SectionBadge text="Execution" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Product Roadmap</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-1 bg-slate-200 z-0"></div>

            <RoadmapCard
              phase="Phase 1"
              status="Live"
              title="Foundation"
              points={["Public SOS reporting app", "Volunteer onboarding", "Basic NGO workflows", "Live rescue tracking"]}
            />
            <RoadmapCard
              phase="Phase 2"
              status="In Progress"
              title="Ecosystem Tools"
              points={["Advanced NGO SaaS dashboards", "City-wise data analytics", "Donor transparency portals", "Admin moderation system"]}
            />
            <RoadmapCard
              phase="Phase 3"
              status="Upcoming"
              title="Scale & Tech"
              points={["AI-based urgency detection", "Municipal govt. partnerships", "Pan-India expansion", "Veterinary telehealth integration"]}
            />
          </div>
        </section>
      </Reveal>

      {/* IMPACT VISION CTA */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-slate-900 to-slate-900 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let's create impact at scale.
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                AnimalSathi aims to save thousands of lives annually while creating the largest verified animal welfare dataset in India.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <a
                  href="mailto:investors@animalsathi.com"
                  className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg"
                >
                  ✉️ Contact Founders
                </a>
                <a
                  href="/deck.pdf" 
                  target="_blank"
                  className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 transition"
                >
                  📊 Download Deck
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
      {text}
    </div>
  );
}

function ProblemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
      <span className="text-slate-700">{text}</span>
    </li>
  );
}

function SolutionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
      <span className="text-slate-800 font-medium">{text}</span>
    </li>
  );
}

function RevenueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function RoadmapCard({ phase, status, title, points }: { phase: string; status: string; title: string; points: string[] }) {
  const isLive = status === "Live";
  const isInProgress = status === "In Progress";
  
  return (
    <div className="relative z-10 pt-4 md:pt-0">
      {/* Node on the timeline */}
      <div className={`hidden md:flex w-8 h-8 rounded-full border-4 border-white absolute -top-4 left-6 items-center justify-center shadow-md ${isLive ? 'bg-green-500' : isInProgress ? 'bg-orange-500' : 'bg-slate-300'}`}>
      </div>

      <div className={`bg-white border ${isLive || isInProgress ? 'border-orange-200 shadow-xl' : 'border-slate-200 shadow-sm'} rounded-[2rem] p-8 h-full`}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-slate-400 font-bold text-sm tracking-wider uppercase">{phase}</span>
          <span className={`text-xs font-bold px-2 py-1 rounded-md ${isLive ? 'bg-green-100 text-green-700' : isInProgress ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
        
        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
              <span className="text-orange-400 mt-0.5 flex-shrink-0">■</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}