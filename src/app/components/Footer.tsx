import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/80" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Single Player Tarkov"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Experience Escape from Tarkov in a completely offline environment. 
              Customize your experience, progress at your own pace, and enjoy the game your way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-zinc-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://ligma.waffle-lord.net/SPTInstaller.exe" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Download
                </Link>
              </li>
              <li>
                <Link href="https://hub.sp-tarkov.com/" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Mod Hub
                </Link>
              </li>
              <li>
                <Link href="https://hub.sp-tarkov.com/faq/" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="https://docs.sp-tarkov.com" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-zinc-200 font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://discord.com/invite/Xn9msqQZan" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://github.com/sp-tarkov" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://hub.sp-tarkov.com/files/category/4-server-releases/" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Latest Releases
                </Link>
              </li>
              <li>
                <Link href="https://hub.sp-tarkov.com/community/" className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors duration-200">
                  Community Forums
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © {currentYear} Single Player Tarkov. Not affiliated with Battlestate Games.
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://hub.sp-tarkov.com/privacy-policy/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="https://hub.sp-tarkov.com/terms-of-service/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 