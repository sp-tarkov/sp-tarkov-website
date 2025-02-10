import React from 'react';
import Link from 'next/link';

const FeatureItem = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => (
  <div className={`group relative flex items-start gap-6 ${index !== 2 ? 'mb-12' : ''}`}>
    {/* Icon container */}
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-[#fff350]/20 p-3 relative z-10">
        <div className="text-[#fff350]">
          {icon}
        </div>
      </div>
      {/* Connecting line */}
      {index !== 2 && (
        <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-[#fff350]/20 to-transparent -translate-x-1/2" />
      )}
    </div>

    {/* Content */}
    <div className="flex-1 pt-1">
      <div className="relative">
        {/* Number indicator */}
        <div className="absolute -left-10 top-1 text-xs font-mono text-[#fff350]/30">
          {(index + 1).toString().padStart(2, '0')}
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#fff350] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const FeatureList = () => {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Offline Solo Play",
      description: "Experience all the maps, weapons, and quests of EFT without relying on official servers."
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Customizable Modding",
      description: "Customize almost anything: from big updates that enhance AI, gear availability, and new weapons, to smaller quality-of-life tweaks."
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Stress-Free Raids",
      description: "Train skills at your own pace, experiment with loadouts, or tackle quest lines without the pressure of competing players."
    }
  ];

  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-900/50 rounded-2xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff350]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#fff350]/20 to-transparent" />
      
      {/* Content container */}
      <div className="relative p-8">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            index={index}
            {...feature}
          />
        ))}
      </div>
    </div>
  );
};

const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <Link 
      href="https://ligma.waffle-lord.net/SPTInstaller.exe" 
      className="btn-primary group relative overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#fff350]/20 via-yellow-300/20 to-[#fff350]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center gap-2">
        Download Installer
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </span>
    </Link>
    <Link 
      href="https://hub.sp-tarkov.com/faq/" 
      className="btn-secondary group relative overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#fff350]/10 via-yellow-300/10 to-[#fff350]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center gap-2">
        Read the FAQ
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center pt-8 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 relative">
            {/* Decorative gradient blur */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#fff350]/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-40 -right-20 w-72 h-72 bg-[#fff350]/10 rounded-full blur-[128px] -z-10" />
            
            {/* Badge */}
            <div className="relative inline-flex group">
              <div className="relative flex items-center gap-2.5 px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-[#fff350]/10 group-hover:border-[#fff350]/20 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff350] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fff350]/80"></span>
                </span>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Experience Tarkov Your Way
                </span>
              </div>
            </div>

            {/* Main Title Group */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="inline-block bg-gradient-to-r from-[#fff350] via-yellow-100 to-[#fff350] bg-clip-text text-transparent animate-gradient pb-2">
                  Single Player Tarkov
                </span>
              </h1>
              <h2 className="text-2xl bg-gradient-to-r from-[#fff350]/90 to-yellow-300/90 bg-clip-text text-transparent font-medium leading-relaxed">
                True Single Player Progression
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-zinc-300 leading-relaxed max-w-xl">
              Transform your <span className="text-[#fff350] font-medium">Escape From Tarkov</span> client into a fully offline experience&mdash;no more server downtime, cheaters, or forced PvP. Enjoy realistic raids, quest progression, and steady character development on your own terms.
            </p>

            {/* Action Buttons with enhanced spacing */}
            <div className="pt-4">
              <ActionButtons />
            </div>

            {/* Social Proof */}
            <div className="pt-8 flex items-center gap-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#fff350] to-yellow-300 bg-clip-text text-transparent">70K+</p>
                <p className="text-sm text-zinc-400">Active Users</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#fff350] to-yellow-300 bg-clip-text text-transparent">2000+</p>
                <p className="text-sm text-zinc-400">Available Mods</p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="relative lg:pl-12">
            {/* Decorative gradient blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fff350]/5 rounded-full blur-[100px] -z-10" />
            
            {/* Section Title */}
            <div className="relative z-10 mb-8">
              <div className="inline-flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-[#fff350] font-medium">
                  Why Choose SPT?
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-[#fff350]/30 to-transparent" />
              </div>
            </div>

            {/* Features */}
            <div className="relative">
              <FeatureList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 