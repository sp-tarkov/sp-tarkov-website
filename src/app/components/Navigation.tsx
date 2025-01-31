'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header role="banner" className="main-header">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="flex items-center">
          <Link href="/" title="Single Player Tarkov" className="flex items-center py-4">
            <Image
              src="/logo.png"
              alt="Single Player Tarkov Logo"
              width={180}
              height={40}
              priority
              className="h-[40px] w-auto"
            />
          </Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 p-2 text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className={`${
            isMenuOpen
              ? 'fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center lg:relative lg:bg-transparent lg:backdrop-blur-none'
              : 'hidden lg:block'
          } lg:relative lg:top-auto lg:right-auto lg:bottom-auto lg:left-auto`}
        >
          <ul className={`${
            isMenuOpen
              ? 'flex flex-col items-center gap-8 text-xl'
              : 'flex flex-row items-center gap-8'
          }`}>
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="https://ligma.waffle-lord.net/SPTInstaller.exe" className="nav-link">Download</Link></li>
            <li><Link href="https://discord.com/invite/Xn9msqQZan" className="nav-link">Community</Link></li>
            <li><Link href="https://hub.sp-tarkov.com/faq/" className="nav-link"><abbr title="Frequently Asked Questions">FAQ</abbr></Link></li>
            <li><Link href="https://hub.sp-tarkov.com/" className="nav-link">Mods</Link></li>
            <li><Link href="https://docs.sp-tarkov.com" className="nav-link">Documentation</Link></li>
            <li>
              <Link href="https://github.com/sp-tarkov" className="nav-link">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation; 