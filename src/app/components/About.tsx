import React from 'react';

const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className="relative bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 rounded-xl p-6 border border-zinc-700/50 group-hover:border-zinc-600/50">
      <div className="text-3xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-1">
        {number}
      </div>
      <div className="text-sm text-zinc-400 group-hover:text-zinc-300">
        {label}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => (
  <div className="group relative">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 via-zinc-700/25 to-zinc-800/50 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-gradient" />
    
    {/* Card container */}
    <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-xl border border-zinc-700/50 group-hover:border-zinc-500/50 transition-all duration-500">
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          {/* Icon container with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-zinc-500/20 blur-lg group-hover:blur-xl transition-all duration-500 rounded-full" />
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-700 group-hover:from-zinc-700 group-hover:to-zinc-600 transition-colors duration-500 border border-zinc-700/50 group-hover:border-zinc-500/50">
              <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500">
                {feature.icon}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors duration-500">
              {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats and Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-zinc-100">
                Experience Tarkov,{' '}
                <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Your Way
                </span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                SPT-AKI is more than just an offline mode - it's a complete reimagining of how Escape from Tarkov can be played. Our dedicated community has created a rich ecosystem of mods and enhancements that let you tailor every aspect of your experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard number="500+" label="Active Mods" />
              <StatCard number="50k+" label="Community Members" />
              <StatCard number="100%" label="Free & Open Source" />
              <StatCard number="24/7" label="Available Offline" />
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 via-zinc-900/30 to-transparent blur-2xl -z-10" />
            <div className="grid gap-6">
              {[
                {
                  title: "Complete Progression",
                  description: "Level up, complete quests, and progress through the game exactly as you would online.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Mod Support",
                  description: "Extensive modding capabilities allow you to customize everything from AI behavior to item stats.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  )
                },
                {
                  title: "Active Community",
                  description: "Join our thriving community of players and modders, sharing experiences and creations.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Regular Updates",
                  description: "Constant updates ensure compatibility with the latest version of Escape from Tarkov.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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