import React from "react";
import Image from "next/image";

interface ScheduleItem {
  time: string;
  details: string;
}

const saturdaySchedule: ScheduleItem[] = [
  { time: "2:00 PM", details: "Gates open · Kaya Reyes (Soulful House)" },
  { time: "3:00 PM", details: "DJ Northshore (Disco & Funk)" },
  { time: "4:00 PM", details: "Sable Kin (Afro House)" },
  { time: "6:00 PM", details: "Marcus Tide (Classic Hip-Hop)" },
  { time: "7:00 PM", details: "Ines Vela (Latin Grooves)" },
  { time: "8:00 PM", details: "Blue Hour — sunset closing set" },
];

const sundaySchedule: ScheduleItem[] = [
  { time: "2:00 PM", details: "Gates open · Ravi Sandhu (Bhangra / Global)" },
  { time: "3:00 PM", details: "Coast Collective (Nu-Disco)" },
  { time: "4:00 PM", details: "Jules Okonkwo (Afrobeats)" },
  { time: "6:00 PM", details: "Selector Mei (Throwbacks)" },
  { time: "7:00 PM", details: "Harbour Sound (Deep House)" },
  { time: "8:00 PM", details: "Granville All-Stars B2B finale" },
];

export default function LineupSection() {
  return (
    <section id="lineup" className="relative w-full bg-[#0b1118] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px]">02</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              The Lineup
            </span>
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl  w-61">
              <Image src="/images/bg02.png" height={176} width={244} alt="02 number" />
            </span>

          </div>


        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-5xl lg:text-5xl lg:leading-tight">
            DJ Line-Up & Set <br className="hidden sm:inline" />
            Times.
          </h2>
        </div>

        {/* Image Collage Grid */}
        <div className="mb-16 space-y-4">
          
          {/* Top Row Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* Main DJ Crowd Shot */}
            <div className="relative h-96 md:h-96 overflow-hidden  md:col-span-6">
              <div className="overflow-hidden h-full border border-slate-800 bg-[#1C272F]">
                <div className=" bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] px-6 py-7">
                  <h3 className="text-xs font-extrabold tracking-[1.4px] text-black uppercase font-manrope ">
                    Saturday, September 5
                  </h3>
                </div>
                <ul className="divide-y divide-slate-800/80">
                  {saturdaySchedule.map((item, index) => (
                    <li key={index} className="flex items-center gap-6 px-6 py-3.5 text-xs sm:text-sm">
                      <span className="w-20 shrink-0 font-extrabold  text-blue font-manrope">
                        {item.time}
                      </span>
                      <span className="font-semibold text-textwhite">
                        {item.details}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vertical Stage Shot */}
            <div className="relative h-92 overflow-hidden border border-slate-800 md:col-span-3 md:h-96">
              <Image
                src="/images/g2.png"
                alt="DJ performing on stage at night"
                fill
                className="object-cover"
              />
            </div>

            {/* Stacked Right Column */}
            <div className="grid grid-cols-1 gap-4 md:col-span-3">
              <div className="relative h-36 overflow-hidden  border border-slate-800 md:h-46">
                <Image
                  src="/images/g3.png"
                  alt="DJ setup close up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 overflow-hidden  border border-slate-800 md:h-46">
                <Image
                  src="/images/g4.png"
                  alt="Street festival night view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Middle Row Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="relative h-60 w-full md:h-80 overflow-hidden border border-slate-800 md:col-span-6">
              <Image
                src="/images/g6.png"
                alt="Outdoor festival stage"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-60 w-full md:h-80 overflow-hidden border border-slate-800 md:col-span-6">
              <Image
                src="/images/g5-new.png"
                alt="Female DJ performing"
                fill
                className=""
              />
            </div>

          </div>

          {/* Bottom Row Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            
            <div className="relative h-60 md:h-92 overflow-hidden border border-slate-800 md:col-span-6">
              <Image
                src="/images/g1.png"
                alt="DJ performance crowd view"
                fill
                className="object-cover"
              />
            </div>


            <div className="relative h-92 overflow-hidden border border-slate-800 md:col-span-6 ">
              <div className="overflow-hidden border border-slate-800 bg-[#1C272F]">
                <div className="bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] px-6 py-7">
                  <h3 className="text-xs font-extrabold tracking-[1.4px] text-black uppercase font-manrope ">
                    Sunday, September 6
                  </h3>
                </div>
                <ul className="divide-y divide-slate-800/80">
                  {sundaySchedule.map((item, index) => (
                    <li key={index} className="flex items-center gap-6 px-6 py-3.5 text-xs sm:text-sm">
                      <span className="w-20 shrink-0 font-bold font-manrope text-blue">
                        {item.time}
                      </span>
                      <span className="font-semibold text-graywhite">
                        {item.details}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>


        </div>


      </div>
    </section>
  );
}