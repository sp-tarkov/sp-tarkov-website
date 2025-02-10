import React from 'react';

const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-[#fff350]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-[#fff350]/10 group-hover:border-[#fff350]/20 transition-all duration-300">
      <div className="text-3xl font-bold bg-gradient-to-r from-[#fff350] to-yellow-200 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
        {label}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => (
  <div className="group relative">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-[#fff350]/5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
    
    {/* Card container */}
    <div className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-[#fff350]/10 group-hover:border-[#fff350]/20 transition-all duration-300">
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#fff350]/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/80 border border-[#fff350]/20 group-hover:border-[#fff350]/40 transition-all duration-300">
              <div className="text-[#fff350]/70 group-hover:text-[#fff350] transition-colors duration-300">
                {feature.icon}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-[#fff350] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="relative py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#fff350]/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-[#fff350]/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#fff350]/5 rounded-full blur-[128px] -z-10" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats and Info */}
          <div className="space-y-12">
            {/* Section Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-[#fff350] font-medium">About SPT-AKI</span>
                <div className="h-px w-12 bg-gradient-to-r from-[#fff350]/30 to-transparent" />
              </div>
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#fff350] via-yellow-100 to-[#fff350] bg-clip-text text-transparent animate-gradient">
                  Experience Tarkov,{' '}
                </span>
                <span className="text-white">
                  Your Way
                </span>
              </h2>
              <p className="text-zinc-300 leading-relaxed max-w-xl">
                SPT-AKI is more than just an offline mode - it's a complete reimagining of how Escape from Tarkov can be played. Our dedicated community has created a rich ecosystem of mods and enhancements that let you tailor every aspect of your experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="2000+" label="Active Mods" />
              <StatCard number="70K+" label="Community Members" />
              <StatCard number="100%" label="Free & Open Source" />
              <StatCard number="24/7" label="Available Offline" />
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fff350]/5 rounded-full blur-[100px] -z-10" />
            
            {/* Features list */}
            <div className="grid gap-6">
              {[
                {
                  title: "Complete Progression",
                  description: "Level up, complete quests, and progress through the game exactly as you would online.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Mod Support",
                  description: "Extensive modding capabilities allow you to customize everything from AI behavior to item stats.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  )
                },
                {
                  title: "Active Community",
                  description: "Join our thriving community of players and modders, sharing experiences and creations.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Regular Updates",
                  description: "Constant updates ensure compatibility with the latest version of Escape from Tarkov.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 