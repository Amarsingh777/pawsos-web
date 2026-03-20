"use client";

import Link from "next/link";
// Make sure to use ../ if this is in app/impact/page.tsx
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import GradientText from "../components/GradientText";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24 overflow-hidden">
      
      {/* PAGE HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
          <span>Our Mission</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Measurable <GradientText>Impact</GradientText> 🐾
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          AnimalSathi is building India’s first transparent, data-driven animal rescue ecosystem. Every SOS, rescue, and volunteer action contributes to real-world change.
        </p>
      </section>

      {/* CORE STATS (DASHBOARD STYLE) */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-32 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard icon="🚨" value={1200} suffix="+" label="SOS Alerts Raised" />
            <StatCard icon="🐕" value={870} suffix="+" label="Animals Rescued" />
            <StatCard icon="📍" value={18} suffix="" label="Cities Covered" />
            <StatCard icon="🤝" value={450} suffix="+" label="Active Volunteers" />
          </div>
        </section>
      </Reveal>

      {/* TWO-COLUMN LAYOUT FOR COMMUNITY & TRANSPARENCY */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left Column: Community */}
            <div>
              <SectionHeading icon="🤝" title="Community Strength" />
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe that technology alone cannot save lives. It requires a dedicated network of compassionate humans working together.
              </p>
              <div className="space-y-6">
                <InfoCard
                  icon="🏢"
                  title="Verified NGO Partners"
                  text="We collaborate exclusively with verified local NGOs to ensure professional rescue, medical treatment, and rehabilitation with full operational transparency."
                />
                <InfoCard
                  icon="🦸‍♀️"
                  title="First-Responder Volunteers"
                  text="Our active volunteers act as crucial first responders, location scouts, and on-ground rescue coordinators, drastically reducing response times."
                />
              </div>
            </div>

            {/* Right Column: Transparency */}
            <div>
              <SectionHeading icon="🔍" title="Transparency & Trust" />
              <p className="text-slate-600 mb-8 leading-relaxed">
                In the rescue ecosystem, trust is everything. We mandate strict verification protocols to ensure every donation of time and resources is honored.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCheck title="Photo Verification" desc="Mandatory before-and-after rescue images." />
                <FeatureCheck title="Live Status Tracking" desc="Real-time updates for every SOS case raised." />
                <FeatureCheck title="Role-Based Access" desc="Strict permissions for users, volunteers, & NGOs." />
                <FeatureCheck title="Data-Driven Reports" desc="Transparent impact metrics for partners & donors." />
              </div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* CITY REACH (MODERN TAGS) */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6 mb-32 text-center">
          <SectionHeading icon="📍" title="Our Growing Footprint" center />
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            We are rapidly expanding our network to ensure no animal is left behind, no matter where they are.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Delhi NCR", "Mumbai", "Bengaluru", "Pune", "Jaipur", "Chandigarh", "Lucknow"].map((city, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium shadow-sm hover:border-orange-400 hover:text-orange-600 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {city}
              </div>
            ))}
            <div className="bg-orange-100/50 border border-orange-200 text-orange-600 px-6 py-3 rounded-full font-semibold border-dashed">
              + Expanding rapidly...
            </div>
          </div>
        </section>
      </Reveal>

      {/* THE FUTURE (WIDE CARD) */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/20">
                🌱
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Scaling Impact
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
                Our long-term vision is to create India’s largest verified animal emergency dataset. By mapping incident hotspots and response times, we are enabling smarter rescues, advocating for better city policies, and fostering nationwide collaboration between citizens, NGOs, and government authorities.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* BOTTOM CTA */}
      <Reveal>
        <section className="text-center px-6">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white px-10 py-8 rounded-2xl border border-slate-100 shadow-xl">
              <p className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                Impact is not just numbers.
              </p>
              <p className="text-xl md:text-2xl font-black text-orange-600">
                It’s every life saved, together. ❤️
              </p>
              <Link
                href="/onboarding"
                className="mt-8 inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors shadow-md"
              >
                Join the Network
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

function SectionHeading({ icon, title, center = false }: { icon: string; title: string; center?: boolean }) {
  return (
    <div className={`mb-6 ${center ? "flex flex-col items-center" : "flex items-center gap-3"}`}>
      {center ? (
        <div className="text-4xl mb-4">{icon}</div>
      ) : (
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl text-orange-600">
          {icon}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function StatCard({ icon, value, suffix, label }: { icon: string; value: number; suffix: string; label: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tighter flex justify-center items-center">
        <Counter value={value} />{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-3xl mt-1">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCheck({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
          ✓
        </div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
      </div>
      <p className="text-slate-500 text-xs leading-relaxed pl-8">{desc}</p>
    </div>
  );
}