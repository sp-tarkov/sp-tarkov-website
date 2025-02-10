'use client';

import React from 'react';
import Link from 'next/link';

const DiscordCTA = () => {
  return (
    <section className="relative py-24">
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-900/30 to-zinc-900/50 rounded-2xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff350]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#fff350]/20 to-transparent" />
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#fff350]/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#fff350]/10 rounded-full blur-[100px] -z-10" />
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 text-center">
              {/* Discord Icon */}
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-900/80 border border-[#fff350]/20">
                <svg className="w-8 h-8 text-[#fff350]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#fff350] via-yellow-100 to-[#fff350] bg-clip-text text-transparent animate-gradient">
                  Join Our Community
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Connect with thousands of SPT players, share your experiences, get help with mods, and stay updated with the latest developments.
              </p>
              
              {/* CTA Button */}
              <Link 
                href="https://discord.com/invite/Xn9msqQZan"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#fff350]/20 via-yellow-300/20 to-[#fff350]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Join Discord
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordCTA; 