import React from "react";
import Image from "next/image";

const onSiteFeatures = [
  "Festival DJ stage",
  "Open dance area",
  "Partner bars",
  "Food vendors",
  "Seating & shade",
  "Entrance / exit",
  "Security station",
  "Emergency exits",
];

export default function AboutFestivalSection() {
  return (
    <section id="about" className="relative w-full bg-[#0b1118] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px] ">01</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              About The Festival
            </span>
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl">
              {/* 01 */}
              <Image src="/images/bg01.png" height={176} width={208} alt="01 number" />
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between space-y-8 lg:col-span-7">
              {/* Main Headline */}
              <h2 className="text-3xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-5xl lg:text-5xl lg:leading-tight">
                We&apos;re <br className="hidden sm:inline" />
                transforming the <br className="hidden sm:inline" />
                1100 block of <br className="hidden sm:inline" />
                Granville Street.
              </h2>           
          </div>
        </div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 mt-14">
          
          {/* Left Column: Heading, Paragraphs & Specs Box */}
          <div className="flex flex-col lg:col-span-7">

              {/* Body Text */}
              <div className="space-y-4 text-lg leading-relaxed text-graywhite sm:text-base">
                <p>
                  The 1100 block of Granville Street turns into the ultimate outdoor
                  party! Get ready to dance as Vancouver&apos;s DJ talent takes the spot
                  light. Festival-caliber staging, sound & visuals that will blow your mind.
                </p>
                <p>
                  The entire site is fully licensed, featuring multiple bars to keep the drinks
                  flowing alongside an amazing lineup of local food vendors serving up delicious
                  eats. Looking to elevate your experience? Escape to the Suntail Tequila Garden
                  VIP area with private bars, seating and washrooms.
                </p>
              </div>


              {/* Festival Specs Card */}
              <div className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-800 bg-[#141d26]/90 p-6 backdrop-blur-sm sm:grid-cols-2 mt-10">
                
                <div>
                  <span className="text-[11px] font-bold tracking-[2.53px] text-graywhite uppercase">
                    Format
                  </span>
                  <p className="mt-1  font-bold font-manrope leading-snug tracking-[-.32px] text-textwhite">
                    Outdoor daytime festival & block party
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-[2.53px] text-graywhite uppercase">
                    Footprint
                  </span>
                  <p className="mt-1  font-bold font-manrope leading-snug tracking-[-.32px] text-textwhite">
                    ≈7,040 sq ft street activation
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-[2.53px] text-graywhite uppercase">
                    Capacity
                  </span>
                  <p className="mt-1  font-bold font-manrope leading-snug tracking-[-.32px] text-textwhite">
                    500+
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-[2.53px] text-graywhite uppercase">
                    Sound
                  </span>
                  <p className="mt-1  font-bold font-manrope leading-snug tracking-[-.32px] text-textwhite">
                    Multi-genre, all-local DJs
                  </p>
                </div>

              </div>
          </div>

          {/* Right Column: Image & On Site List */}
          <div className="space-y-10 lg:col-span-5">
            
            <div className="relative overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/images/about-2.png"
                alt="Festival stage placeholder"
                width={570}
                height={380}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* On Site Feature Checklist */}
            <div className="border border-slate-800 bg-[#1C272F] p-6">
              <h3 className="mb-4 text-[12px] font-bold tracking-[2.53px] text-blue uppercase">
                On Site
              </h3>

              <ul className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2">
                {onSiteFeatures.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 font-semibold text-textwhite">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}