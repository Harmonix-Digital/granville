import React from 'react'
import Image from 'next/image'

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "2", label: "DAYS" },
  { value: "14+", label: "DJS" },
  { value: "7", label: "HOURS DAILY" },
  { value: "500+", label: "CAPACITY" },
];

const genres = [
  "HOUSE",
  "DISCO",
  "HIP-HOP",
  "TOP 40",
  "LATIN",
  "EDM",
  "THROWBACKS",
  "MELODIC TECH",
];

const SkyImage = () => {
  return (
    <section className="sky relative w-full overflow-hidden bg-[#0b1118] py-8 text-white sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:gap-12">
          
          {/* Vertical Text Accent (Hidden on mobile/tablet for clean flow) */}
          <div className="hidden flex-col items-center gap-4 text-sky-400/70 lg:flex lg:mb-28">
            <span 
              className="
                text-xs font-semibold tracking-[0.25em] uppercase 
                [writing-mode:vertical-lr] rotate-180 select-none
              "
            >
              Granville Street Corridor
            </span>
            <div className="h-16 w-[1px] bg-sky-400/40" />
          </div>

          {/* Main Skyline Graphic & Overlay Stats Box */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg sm:overflow-visible">
              {/* Skyline Image */}
              <Image 
                className="h-auto w-full rounded-lg object-cover shadow-cyan-glow" 
                src="/images/skyline.png" 
                width={1110} 
                height={768} 
                alt="Skyline image" 
                priority
              />
              
              {/* Spiral Accent Graphic (Hidden on mobile to prevent overflow) */}
              <Image 
                className="absolute -bottom-16 -left-12 opacity-45 hidden sm:block md:-left-24 lg:-left-30" 
                src="/images/spiral.png" 
                width={192} 
                height={30} 
                alt="Spiral bar" 
              />
              
              {/* Stats Grid Overlay (Static stack on mobile, absolute overlay on desktop) */}
              <div className="relative mt-4 w-full bg-[#1C272F]/95 backdrop-blur-md rounded-lg p-2 sm:p-4 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[80%] lg:rounded-none lg:rounded-tr-lg">
                <dl className="grid grid-cols-2 divide-x divide-y divide-slate-700/60 sm:grid-cols-4 sm:divide-y-0">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-end p-3 sm:p-4"
                    >
                      <dt className="order-2 mt-1.5 text-[10px] font-bold tracking-widest text-[#28A9E0] uppercase sm:text-xs">
                        {stat.label}
                      </dt>
                      <dd className="order-1 font-manrope text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Event Info Schedule Bar */}
            <div className="schedule_bar mt-8 flex flex-col gap-3 text-xs font-bold text-[#C6CCD0]/70 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-8 md:gap-10">
              <span>Dates / Sept 5–6, 2026</span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span>Time / 2:00 PM – 9:00 PM</span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span>Venue / 1100 Block Granville</span>
            </div>

          </div>
        </div>

      </div>

      {/* Infinite Genre Ticker Marquee Bar */}
      <div className="group relative mt-12 w-full overflow-hidden border-y border-sky-500/20 bg-[#1C272F] py-3.5 backdrop-blur-sm sm:mt-16">
        <div className="flex w-max">
          {/* Set 1 */}
          <div className="flex shrink-0 items-center justify-around gap-6 pl-6 animate-marquee group-hover:[animation-play-state:paused] sm:gap-8 sm:pl-8">
            {genres.map((genre, index) => (
              <React.Fragment key={index}>
                <span className="font-manrope text-xs font-extrabold tracking-wider text-[#38bdf8] sm:text-sm">
                  {genre}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]/60" />
              </React.Fragment>
            ))}
          </div>

          {/* Set 2 (Duplicate for smooth infinite seamless wrap) */}
          <div className="flex shrink-0 items-center justify-around gap-6 pl-6 animate-marquee group-hover:[animation-play-state:paused] sm:gap-8 sm:pl-8" aria-hidden="true">
            {genres.map((genre, index) => (
              <React.Fragment key={`dup-${index}`}>
                <span className="font-manrope text-xs font-extrabold tracking-wider text-[#38bdf8] sm:text-sm">
                  {genre}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]/60" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default SkyImage