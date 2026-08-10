import React from "react";
import Image from "next/image";

interface SponsorLogo {
  name: string;
  src: string;
}

const sponsors: SponsorLogo[] = [
  { name: "Cabana", src: "/images/sponsors/p1.png" },
  { name: "Aura", src: "/images/sponsors/p2.png" },
  { name: "Downtown Van", src: "/images/sponsors/p3.png" },
  { name: "Andonis Vancouver", src: "/images/sponsors/p4.png" },
  { name: "The Pawn Shop", src: "/images/sponsors/p5.png" },
  { name: "Suntail Drink Co.", src: "/images/sponsors/p6.png" },
];

export default function SponsorsSection() {
  return (
    <section id="partners" className="relative w-full bg-[#141D24]/80 px-4 py-16 text-white sm:px-8 lg:px-12 ">
      <div className="mx-auto max-w-7xl">
        <div className="sec_logo flex justify-center pb-10">
          <Image src="/images/logo.svg" height={126} width={224} alt="logo" />
        </div>
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px]">05</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              Sponsors & Partners
            </span>
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl">
              <Image src="/images/bg05.png" height={176} width={208} alt="05 number" />
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-5xl lg:text-[54px] lg:leading-tight font-manrope ">
            Participating <br />
            Venues, Partners & <br />
            Sponsors
          </h2>
        </div>

        {/* Sponsor Grid using 1px border gap trick */}
        <div className="mb-12 overflow-hidden border border-slate-800 bg-slate-800/60">
          <div className="grid grid-cols-1 gap-[1px] sm:grid-cols-2 md:grid-cols-3">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex h-36 items-center justify-center bg-[#141d26]/80 p-6 transition-colors duration-200 hover:bg-[#18232f]"
              >
                <div className="relative h-12 w-44">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
                    className="object-contain brightness-0 invert opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner Callout Box */}
        <div className="relative overflow-hidden rounded-xl border border-sky-500/20 bg-linear-to-b from-[#0A1016] via-[#16222B] to-[#12303F] p-8 shadow-2xl sm:p-10">
          {/* Subtle Glow Overlay */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Info Column */}
            <div className="max-w-2xl">
              <span className="text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                Become a Partner
              </span>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-textwhite sm:text-3xl">
                Put your brand on Granville Street.
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-gray sm:text-sm font-manrope">
                Stage naming, bar activations, vendor placement and on-street branding packages are available for 2026. We work with local businesses first, and we keep the block commercial-light and clean.
              </p>
            </div>

            {/* Right Action Buttons Column */}
            <div className="flex flex-col gap-3.5 sm:w-80 sm:shrink-0">
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] py-3.5 text-xs font-extrabold text-slate-950 shadow-lg transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 cursor-pointer"
              >
                Request the partner deck
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-slate-700 bg-[#0f1721]/80 py-3.5 text-xs font-extrabold text-textwhite shadow-md backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/80 active:scale-95 cursor-pointer"
              >
                Talk to the team
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}