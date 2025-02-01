import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#fff350]/5 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fff350]/5 rounded-full blur-[160px] -z-10" />
      
      {/* Top border with gradient */}
      <div className="relative border-t border-[#fff350]/10">
        {/* Gradient overlay with negative z-index */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff350]/5 to-transparent -z-10" />
        
        {/* Content with positive z-index */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-4">
              <Link href="/" className="inline-block group">
                <Image
                  src="/logo.png"
                  alt="Single Player Tarkov"
                  width={140}
                  height={40}
                  className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-90"
                />
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                Experience Escape from Tarkov in a completely offline environment. 
                Customize your experience, progress at your own pace, and enjoy the game your way.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#fff350] font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="https://ligma.waffle-lord.net/SPTInstaller.exe" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Download
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://hub.sp-tarkov.com/" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Mod Hub
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://hub.sp-tarkov.com/faq/" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      FAQ
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://hub.sp-tarkov.com/doc/lexicon/?" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Documentation
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-[#fff350] font-semibold mb-4 text-sm uppercase tracking-wider">Community</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="https://discord.com/invite/Xn9msqQZan" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Discord
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/sp-tarkov" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      GitHub
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://hub.sp-tarkov.com/files/file/16-spt/#versions" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Latest Releases
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://hub.sp-tarkov.com/" 
                    className="group flex items-center gap-2 w-full"
                  >
                    <span className="h-px w-4 bg-[#fff350]/30 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 hover:text-[#fff350] text-sm transition-colors duration-300">
                      Community Forums
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#fff350]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-zinc-500 text-sm">
                © {currentYear} Single Player Tarkov. Not affiliated with Battlestate Games.
              </div>
              <div className="flex items-center gap-6">
                <Link 
                  href="https://hub.sp-tarkov.com/privacy-policy/" 
                  className="text-zinc-500 hover:text-[#fff350] text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="https://hub.sp-tarkov.com/terms-of-service/" 
                  className="text-zinc-500 hover:text-[#fff350] text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 