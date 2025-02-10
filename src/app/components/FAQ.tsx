'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DiscordCTA from './DiscordCTA';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="group relative">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-[#fff350]/5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
      
      {/* Card container */}
      <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-[#fff350]/10 group-hover:border-[#fff350]/20 transition-all duration-300">
        <button
          onClick={onToggle}
          className="w-full text-left p-6 focus:outline-none"
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-[#fff350] transition-colors duration-300">
              {item.question}
            </h3>
            <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-zinc-900/80 border border-[#fff350]/20 group-hover:border-[#fff350]/40 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-[#fff350]/70 group-hover:text-[#fff350]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What is Single Player Tarkov?",
      answer: "Single Player Tarkov (SPT) is a modified version of Escape From Tarkov that allows you to play the game entirely offline. It includes all the features of the original game, including progression, quests, and the full gameplay experience, but in a single-player environment."
    },
    {
      question: "Is SPT legal to use?",
      answer: "SPT is a separate project that requires a legitimate copy of Escape From Tarkov to function. We do not distribute any copyrighted game files, and users must own an official copy of the game to use SPT."
    },
    {
      question: "How do I install SPT?",
      answer: "Installation is straightforward: First, download the SPT installer from our website. Run the installer and follow the setup wizard. The installer will guide you through the process of setting up your offline server and client. Make sure you have a legitimate copy of Escape From Tarkov installed before starting."
    },
    {
      question: "Can I use mods with SPT?",
      answer: "Yes! SPT has extensive mod support. Our community has created hundreds of mods that can enhance your gameplay experience, from new weapons and items to AI improvements and quality-of-life features. You can find mods on our hub website."
    },
    {
      question: "Will my progress carry over to the official game?",
      answer: "No, SPT is completely separate from the official Escape From Tarkov servers. Your progress in SPT is stored locally and won't affect or transfer to your official EFT account."
    }
  ];

  return (
    <section className="relative py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#fff350]/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-[#fff350]/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#fff350]/5 rounded-full blur-[128px] -z-10" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="text-sm uppercase tracking-wider text-[#fff350] font-medium">FAQ</span>
              <div className="h-px w-12 bg-gradient-to-r from-[#fff350]/30 to-transparent" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#fff350] via-yellow-100 to-[#fff350] bg-clip-text text-transparent animate-gradient">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for,
              join our community Discord for more help.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQAccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* View Full FAQ Link */}
          <div className="text-center mt-12">
            <a
              href="https://hub.sp-tarkov.com/faq/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900/80 border border-[#fff350]/10 hover:border-[#fff350]/20 text-[#fff350]/70 hover:text-[#fff350] transition-all duration-300"
            >
              View Full FAQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 