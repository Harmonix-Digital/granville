"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Is Granville DJ Festival an all-ages event?",
    answer: "No, the event is 19+",
  },
  {
    id: 2,
    question: "What kind of music will be played?",
    answer:
      "We have an all star roster of Vancouver's best DJs playing the best Hip Hop, Dance, Top 40, Latin, House & EDM",
  },
  {
    id: 3,
    question: "Where exactly is the festival held?",
    answer:
      "The 1100 Block of Granville Street. There will be a 7000 square foot outdoor party. The bars, clubs & restaurants in the block will be open for party goers too! It's full outdoor / indoor block party!",
  },
  {
    id: 4,
    question: "Do I need a ticket in advance?",
    answer:
      "It's always smart to register in advance, it's free so why not! You can also purchase a VIP ticket to skip lines and have access to the Suntail Tequila Garden VIP section.",
  },
  {
    id: 5,
    question: "Is there seating and food on site?",
    answer: "Yes, there's seating and food vendors.",
  },
  {
    id: 6,
    question: "What happens if it rains?",
    answer: "We will have tents up and the party goes on!",
  },
  {
    id: 7,
    question: "Is the site accessible?",
    answer: "Yes it is.",
  },
];

export default function FaqNewsletterSection() {
  // Only the first FAQ item is open by default ([1])
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleAccordion = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section id="faq" className="relative w-full bg-[#0b1118] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px]">07</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              FAQ
            </span>
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl">
              <Image src="/images/bg07.png" height={176} width={208} alt="07 number" />
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-6xl lg:text-7xl">
            GOOD QUESTIONS.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="mb-24 space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="overflow-hidden border border-slate-800/80 bg-[#141d26]/90 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-bold text-textwhite sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-blue transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="text-xl font-light">+</span>
                  </span>
                </button>

                {/* Animated Answer Collapse Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-800/50 px-6 pb-6 pt-3">
                      <p className="text-xs leading-relaxed text-graywhite sm:text-sm font-manrope">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter / Stay in the Loop Section */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
            Stay in the loop
          </span>

          <h3 className="mt-3 text-3xl font-extrabold text-textwhite sm:text-5xl">
            First to know, first through the gate.
          </h3>

          <p className="mt-4 max-w-md text-xs leading-relaxed text-graywhite sm:text-sm font-manrope">
            Lineup drops, set times and early-bird ticket windows — a handful of emails a year, nothing more.
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="you@email.com"
              required
              className="w-full rounded-full border border-slate-800 bg-[#141d26] px-6 py-3.5 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-sky-500 sm:w-72"
            />
            <button
              type="submit"
              className="w-full shrink-0 rounded-full bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] px-8 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 sm:w-auto"
            >
              Join the list
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}