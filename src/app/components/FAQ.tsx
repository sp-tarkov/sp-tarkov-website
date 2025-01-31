'use client';

import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 via-zinc-700/25 to-zinc-800/50 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
      
      <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-xl border border-zinc-700/50 group-hover:border-zinc-500/50 transition-all duration-300">
        <button
          onClick={onToggle}
          className="w-full text-left p-6 focus:outline-none"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
              {item.question}
            </h3>
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed">
            {item.answer}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Got questions? We've got answers. If you can't find what you're looking for,
              join our community Discord for more help.
            </p>
          </div>

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

          <div className="text-center mt-12">
            <a
              href="https://hub.sp-tarkov.com/faq/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
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