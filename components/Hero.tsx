import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="hero_section relative w-full bg-[#0b1118] px-4 pt-28 pb-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Title Graphic */}
        <div className="relative w-full max-w-3xl">
          <Image
            src="/images/HeroText.svg"
            width={761}
            height={342}
            alt="Granville DJ Festival - The Ultimate Summer Sendoff"
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Content Block: Offset Right on Desktop */}
        <div className="mt-8 flex flex-col justify-end gap-10 lg:flex-row lg:gap-14">
          
          {/* Middle Paragraph & Dates Column */}
          <div className="max-w-[468px]">
            <p className="font-manrope text-sm font-normal leading-6 text-slate-300">
              Get ready to turn up the volume this Labor Day long weekend
              at the Granville DJ Festival! Taking over the iconic 1100 Block
              of Granville Street on Saturday, September 5th and Sunday,
              September 6th, from 2:00 PM to 9:00 PM, this high-energy
              street festival brings together 16 of Vancouver’s top DJs for an
              unforgettable outdoor party. Join us as we celebrate our city’s
              premier local talent and bring the community together for The
              Ultimate Summer Sendoff.
            </p>

            <p className="my-5 text-xs font-bold tracking-[0.35px] uppercase text-[#28A9E0]">
              FREE registration and VIP tickets available.
            </p>

            {/* Event Time Badges */}
            <div className="flex items-center gap-4">
              <span className="flex h-6 items-center justify-center bg-[#28A9E0] px-2.5 text-[11px] font-bold uppercase tracking-[1.2px] text-slate-950">
                Sept 5-6
              </span>
              <p className="text-xs font-bold text-[#28A9E0]">
                2PM-9PM
              </p>
            </div>
          </div>

          {/* Right Action Buttons Column */}
          <div className="flex flex-col gap-3 sm:w-[220px]">
            {/* Primary Button */}
            <Link href="https://www.eventbrite.ca/e/granville-dj-festival-saturday-september-5th-sunday-september-6th-tickets-1997096193475?aff=oddtdtcreator" className="w-full" target='_blank'>
              <button
                type="button"
                className="w-full bg-[#28A9E0] py-4 text-center text-xs font-extrabold uppercase tracking-[0.8px] text-slate-950 transition-all hover:brightness-110 active:scale-95"
              >
                Get tickets now
              </button>
            </Link>

            {/* Secondary Outline Button */}
            <Link href="#lineup" className="w-full">
              <button
                type="button"
                className="w-full border border-slate-700/80 bg-transparent py-4 text-center text-[11px] font-bold uppercase tracking-[0.8px] text-slate-300 transition-all hover:border-[#28A9E0] hover:text-[#28A9E0] active:scale-95"
              >
                View DJ Line Up
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero