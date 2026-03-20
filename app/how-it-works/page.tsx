"use client";

import Link from "next/link";
import Reveal from "../components/Reveal";
import GradientText from "../components/GradientText";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden pb-24 selection:bg-orange-200 selection:text-orange-900">
      
      {/* PAGE HERO */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-orange-200 text-orange-600 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            The Process
          </div>
        </Reveal>

        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-slate-900">
            How <GradientText>AnimalSathi</GradientText> Works
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            We connect compassionate citizens, dedicated volunteers, and verified NGOs to ensure injured and distressed animals receive help as quickly as possible.
          </p>
        </Reveal>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 relative z-10 py-12 md:py-20">
        
        {/* The Vertical Glowing Line (Desktop & Mobile) */}
        <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-100 via-orange-400 to-transparent -translate-x-1/2 rounded-full hidden sm:block opacity-50"></div>

        <div className="space-y-16 md:space-y-24 relative">
          
          <TimelineStep 
            step={1} 
            title="Report an Emergency" 
            text="Any citizen can instantly report an injured, abandoned, or distressed animal using the AnimalSathi mobile app. The report captures live GPS location, photos, and vital emergency details."
            align="left"
            svgIcon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            }
          />
          
          <TimelineStep 
            step={2} 
            title="Nearby Volunteers Alerted" 
            text="Verified volunteers near the incident location receive real-time push notifications. They view exact details on the map and quickly accept the request to provide immediate first aid or transport."
            align="right"
            svgIcon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            }
          />

          <TimelineStep 
            step={3} 
            title="NGOs & Rescuers Respond" 
            text="Partner NGOs and specialized rescue teams receive structured, verified information. This reduces confusion, improves on-ground coordination, and drastically speeds up rescue operations."
            align="left"
            svgIcon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            }
          />

          <TimelineStep 
            step={4} 
            title="Updates & Transparency" 
            text="Once the situation is resolved, volunteers or NGOs upload rescue updates with before-and-after images. This ensures complete transparency and builds trust within the community."
            align="right"
            svgIcon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
          />

          <TimelineStep 
            step={5} 
            title="Impact Tracking & Growth" 
            text="AnimalSathi tracks rescues, response times, and volunteer participation. This vital data helps optimize operations and demonstrate real-world impact to supporters and donors."
            align="left"
            svgIcon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            }
          />

        </div>
      </section>

      {/* BOTTOM CTA BANNER (Dark Premium Theme) */}
      <Reveal>
        <section className="px-6 mt-32 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-12 md:p-20 text-center border border-slate-800 relative overflow-hidden">
            
            {/* Dark Mode Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                Every Second Counts
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">
                A single report can <span className="text-orange-500">save a life.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Join AnimalSathi today. Be the voice for the voiceless and help us build a safer world for animals across India.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex justify-center items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download App
                </a>
                <Link
                  href="/volunteer-form"
                  className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex justify-center items-center gap-3"
                >
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}

/* ---------- TIMELINE STEP COMPONENT ---------- */

function TimelineStep({ 
  step, 
  title, 
  text, 
  align,
  svgIcon 
}: { 
  step: number; 
  title: string; 
  text: string; 
  align: "left" | "right";
  svgIcon: React.ReactNode;
}) {
  const isLeft = align === "left";

  return (
    <Reveal>
      <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        
        {/* Mobile-only step line connector */}
        <div className="absolute left-10 top-20 bottom-[-4rem] w-1 bg-orange-100 block md:hidden -translate-x-1/2 z-0"></div>

        {/* Number Badge (Center on Desktop, Left on Mobile) */}
        <div className="absolute left-10 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden sm:flex">
          <div className="w-16 h-16 bg-white border-[6px] border-orange-50 rounded-full flex items-center justify-center font-black text-2xl text-orange-500 shadow-xl shadow-orange-500/10 z-10 transition-transform hover:scale-110 duration-300">
            {step}
          </div>
        </div>

        {/* Content Card (Half width on desktop) */}
        <div className={`w-full md:w-1/2 relative z-10 pl-24 sm:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
          
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
            
            {/* Subtle internal gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Badge Overlay */}
            <div className="w-12 h-12 bg-orange-100 rounded-full flex sm:hidden items-center justify-center text-orange-600 font-black text-lg absolute left-6 top-8 shadow-sm">
              {step}
            </div>

            <div className="relative z-10">
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ${isLeft ? "md:ml-auto" : ""}`}>
                {svgIcon}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                {title}
              </h2>
              
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                {text}
              </p>
            </div>
            
          </div>
        </div>

        {/* Empty space for the other half of the timeline on desktop */}
        <div className="hidden md:block w-1/2"></div>

      </div>
    </Reveal>
  );
}