import React from "react";
import Image from "next/image";

interface InfoItem {
  id: string;
  title: string;
  description: string;
}

const infoItems: InfoItem[] = [
  {
    id: "01",
    title: "Dates",
    description: "Saturday, September 5 & Sunday, September 6, 2026.",
  },
  {
    id: "02",
    title: "Hours",
    description: "Saturday September 5th 2-9PM. Sunday September 6th 2-9PM.",
  },
  {
    id: "03",
    title: "Location",
    description: "1100 Block of Granville Street, Vancouver, BC.",
  },
  {
    id: "04",
    title: "Getting here",
    description: "Two blocks from Yaletown–Roundhouse Station. Transit strongly recommended.",
  },
  {
    id: "05",
    title: "Age & ID",
    description: "Fully licensed event 19+",
  },
  {
    id: "06",
    title: "Weather",
    description: "Rain or shine the festival is fully outdoors with shaded seating.",
  },
];

export default function EventInfoSection() {
  return (
    <section id="schedule" className="relative w-full bg-linear-to-b from-[#0A1016] via-[#16222B] to-[#12303F] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px]">04</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              Event Information
            </span>
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl w-62.5">
              <Image src="/images/bg04.png" height={176} width={208} alt="04 number" />
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-5xl lg:text-[54px] lg:leading-tight font-manrope">
            Everything You <br />
            Need <br />
            Before You Arrive.
          </h2>
        </div>

        {/* Info Grid Container */}
        <div className="overflow-hidden border border-slate-700 bg-[#1C272F]/80">
          <div className="grid grid-cols-1 divide-y divide-slate-700 sm:grid-cols-2 md:grid-cols-3 md:divide-y-0">
            {infoItems.map((item, index) => {
              // Grid border logic for continuous box lines across rows
              const isFirstRow = index < 3;
              const isRightCol = (index + 1) % 3 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex min-h-29.5 flex-col justify-center p-7 sm:p-4 ${
                    isFirstRow ? "md:border-b md:border-slate-700" : ""
                  } ${!isRightCol ? "md:border-r md:border-slate-700" : ""}`}
                >
                  {/* Top Row: Title & Index Number */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold tracking-[-.36px] text-textwhite sm:text-xl font-manrope">
                      {item.title}
                    </h3>
                    <span className="text-xs font-extrabold text-blue/25 tracking-[2.5px] ">
                      {item.id}
                    </span>
                  </div>

                  {/* Description Copy */}
                  <p className="mt-2 text-xs font-medium leading-relaxed text-gray/80 sm:text-sm font-manrope">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}