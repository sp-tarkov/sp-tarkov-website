import React from 'react';
import Link from 'next/link';

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 rounded-xl transition-all duration-300 group-hover:scale-105 blur-xl group-hover:blur-2xl" />
    <div className="feature-item relative bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 rounded-xl p-6 transition-all duration-300 group-hover:translate-y-[-2px] border border-zinc-700/50 group-hover:border-zinc-600/50">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700/80 transition-colors duration-300">
            <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300 mb-2">
              {title}
            </h3>
            <p className="text-zinc-400 group-hover:text-zinc-300 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureList = () => (
  <div className="space-y-5">
    <FeatureItem
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      }
      title="Offline Solo Play"
      description="Experience all the maps, weapons, and quests of EFT without relying on official servers."
    />
    <FeatureItem
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      }
      title="Customizable Modding"
      description="Customize almost anything: from big updates that enhance AI, gear availability, and new weapons, to smaller quality-of-life tweaks."
    />
    <FeatureItem
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      }
      title="Stress-Free Raids"
      description="Train skills at your own pace, experiment with loadouts, or tackle quest lines without the pressure of competing players."
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <Link 
      href="https://ligma.waffle-lord.net/SPTInstaller.exe" 
      className="btn-primary group"
    >
      Download Installer
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </Link>
    <Link 
      href="https://hub.sp-tarkov.com/faq/" 
      className="btn-secondary group"
    >
      Read the FAQ
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/50">
              <span className="text-zinc-400 font-medium">
                Experience Tarkov Your Way
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-zinc-100">
                Single Player Tarkov
              </h1>
              <h2 className="text-2xl text-zinc-400">
                True Single Player Progression
              </h2>
            </div>
            
            <p className="text-lg text-zinc-300 leading-relaxed">
              Transform your Escape From Tarkov client into a fully offline experience&mdash;no more server downtime, cheaters, or forced PvP. Enjoy realistic raids, quest progression, and steady character development on your own terms.
            </p>

            <ActionButtons />
          </div>

          {/* Right Column - Features */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-medium mb-4">WHY CHOOSE SPT?</h3>
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 