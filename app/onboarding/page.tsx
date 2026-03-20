"use client";

import Link from "next/link";
// Make sure these paths match your directory structure
import ParallaxHero from "../components/ParallaxHero";
import Reveal from "../components/Reveal";
import GradientText from "../components/GradientText";

export default function NGOOnboardingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24 overflow-hidden">
      
      {/* HERO SECTION */}
      <ParallaxHero>
        <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center max-w-5xl mx-auto flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-8 shadow-md">
            <span>For Organizations</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Partner your NGO with <br className="hidden md:block"/> <GradientText>AnimalSathi</GradientText> 🏥
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Gain access to India's first structured, location-based emergency feed. Improve your rescue coordination, dispatch volunteers faster, and prove your impact to donors with verified data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-lg hover:-translate-y-1 hover:shadow-orange-600/30">
              Apply for Partnership
            </button>
            <a href="#benefits" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-slate-300 hover:bg-slate-50 transition shadow-sm">
              Explore Tools
            </a>
          </div>
        </section>
      </ParallaxHero>

      {/* CORE BENEFITS FOR NGOS */}
      <Reveal>
        <section id="benefits" className="max-w-6xl mx-auto px-6 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Why Partner With Us?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We provide the digital infrastructure so you can focus on what matters most: saving lives.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon="📡"
              title="Centralized SOS Feed"
              desc="No more chaotic WhatsApp groups. Get structured emergency alerts with exact GPS locations, photos, and urgency algorithms."
            />
            <BenefitCard 
              icon="🦸‍♀️"
              title="Volunteer Dispatch"
              desc="Instantly assign verified local volunteers to scout locations, provide first aid, or assist your team with transport."
            />
            <BenefitCard 
              icon="📊"
              title="Verified Impact Data"
              desc="Generate automated reports with before-and-after photo evidence. Perfect for CSR compliance and donor transparency."
            />
          </div>
        </section>
      </Reveal>

      {/* ADMIN DASHBOARD PREVIEW */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 text-3xl mb-6">
                💻
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Enterprise-Grade Admin Access
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Verified NGO partners receive exclusive access to the AnimalSathi Admin Portal. Track ongoing rescues across your city, manage your assigned volunteers, and update the status of cases in real-time.
              </p>
              
              <ul className="space-y-4 mb-8">
                <CheckItem text="Role-based permissions for your staff" />
                <CheckItem text="Filter SOS alerts by radius and severity" />
                <CheckItem text="Direct communication with first responders" />
              </ul>
            </div>

            <div className="w-full md:w-1/2 relative">
              {/* Decorative Mockup Placeholder */}
              <div className="aspect-video bg-slate-900 rounded-2xl shadow-2xl border-4 border-slate-800 overflow-hidden relative flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-600 font-mono text-sm mt-8">
                  [ Admin Dashboard Interface Preview ]
                </div>
              </div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* THE ONBOARDING PROCESS */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">The Verification Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">To ensure trust and safety within our ecosystem, every NGO undergoes a strict vetting process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StepCard step="01" title="Apply Online" text="Submit your organization's details through our secure partner form." />
            <StepCard step="02" title="Document Check" text="Our team verifies your registration, 80G/12A, and past track record." />
            <StepCard step="03" title="Admin Setup" text="Receive your dedicated admin accounts and platform training." />
            <StepCard step="04" title="Start Rescuing" text="Access the live SOS feed and coordinate with volunteers instantly." />
          </div>
        </section>
      </Reveal>

      {/* BOTTOM CTA */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to scale your impact?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join the fastest-growing network of animal welfare organizations in India. Together, we are stronger.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <button className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:-translate-y-1">
                  Begin NGO Application
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-slate-800 border border-slate-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 transition"
                >
                  Talk to our Team
                </Link>
              </div>
            </div>

          </div>
        </section>
      </Reveal>

    </main>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

function BenefitCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-orange-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
        ✓
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}

function StepCard({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:border-orange-200 transition-colors relative group overflow-hidden">
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-4xl font-black text-orange-200 mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {step}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}