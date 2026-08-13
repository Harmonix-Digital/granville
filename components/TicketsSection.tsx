'use client'
import React from "react";
import Image from "next/image";
import { useTickets } from "./TicketProvider";

export default function TicketsSection() {
  const { openTickets } = useTickets();
  return (
    <section id="tickets" className="relative w-full bg-[#0b1118] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Bar */}
        <div className="relative mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold text-darkblue tracking-[3.6px]">03</span>
            <div className="h-px w-12 bg-[#38bdf8]/40 sm:w-20" />
          </div>

          <div className="relative flex items-center">
            <span className="text-xs font-bold tracking-widest text-blue uppercase">
              Tickets & Registration
            </span>
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 -z-0 select-none text-7xl font-extrabold text-white/4 sm:text-8xl w-61">
              <Image src="/images/bg03.png" height={176} width={208} alt="03 number" />
            </span>
          </div>
        </div>

        {/* Section Headline & Top Notice */}
        <div className="mb-12 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="text-3xl font-extrabold uppercase tracking-[-1.36px] text-textwhite sm:text-5xl lg:text-[54px]">
            Pass Options
          </h2>
          <p className="max-w-md text-xs font-medium text-slate-400 sm:text-sm ">
            Capacity is capped at roughly 530 guests per day. Early-bird pricing holds until August 1, 2026.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* CARD 1: FREE REGISTRATION */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#141d26] p-6 shadow-xl sm:p-8">
            {/* Ticket Edge Cutout Notches */}
            <div className="absolute -left-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />
            <div className="absolute -right-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[12px] font-bold tracking-[3.56px] font-manrope text-blue uppercase ">
                    No Cost
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold leading-tight tracking-[-.53px] text-textwhite sm:text-3xl">
                    FREE <br /> Registration
                  </h3>
                </div>
                <div className="text-right flex items-center justify-end flex-row gap-4.5">
                  <span className="text-xs font-bold text-slate-400">CAD $</span>
                  <span className="block text-4xl font-extrabold text-textwhite sm:text-5xl">
                    0
                  </span>
                </div>
              </div>

              {/* Bullet List */}
              <ul className="mt-8 space-y-3 text-xs leading-relaxed text-[#C5CCD1BF] sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>Pick Friday or Saturday.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>Free entry to the Granville DJ Festival main area.</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Dashed Ticket Divider Line */}
              <div className="my-8 border-t border-dashed border-slate-700/60" />

              {/* Bottom Vertical Bar Accent */}
              <div className="mb-6 h-8 w-1 bg-slate-700/50" />

              {/* Action Button */}
              <button
                type="button"
                onClick={openTickets}
                className="w-full rounded-full bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] py-3.5 text-sm font-extrabold text-slate-950 shadow-md transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 cursor-pointer"
              >
                Register &rarr;
              </button>
            </div>
          </div>

          {/* CARD 2: SINGLE DAY VIP PASS (Cyan Featured Card) */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#38bdf8] to-[#0284c7] p-6 text-slate-950 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.35)] sm:p-8">
            {/* Top Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#38bdf8] px-4 py-1 border border-slate-950/10 shadow-sm">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-950 uppercase">
                Great Value
              </span>
            </div>

            {/* Ticket Edge Cutout Notches */}
            <div className="absolute -left-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />
            <div className="absolute -right-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between pt-2">
                <div>
                  <span className="text-[11px] font-bold tracking-[3.56px] font-manrope text-slate-800 uppercase">
                    Pick A Day
                  </span>
                  <h3 className="mt-1 text-2xl tracking-[-.53px] font-extrabold leading-tight text-slate-950 sm:text-3xl">
                    Single Day <br /> VIP Pass
                  </h3>
                </div>
                <div className="text-right flex items-center justify-end flex-row gap-4.5">
                  <span className="text-xs font-bold text-slate-800">CAD $</span>
                  <span className="block text-4xl font-extrabold font-manrope text-slate-950 sm:text-5xl">
                    20
                  </span>
                </div>
              </div>

              {/* Bullet List */}
              <ul className="mt-8 space-y-3 text-xs font-medium leading-relaxed text-slate-950 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Pick Saturday or Sunday.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Gives you VIP entry so no waiting in line.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Access to the Suntail Tequila Garden VIP section with separate bars, seating and washrooms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Unlimited re-entry and VIP access to the participating bars & clubs on Granville.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>VIP entry to the afterparties at all the participating bars & clubs.</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Dashed Ticket Divider Line */}
              <div className="my-8 border-t border-dashed border-slate-900/30" />

              {/* Action Button */}
              <button
                type="button"
                onClick={openTickets}
                className="w-full rounded-full bg-[#0c141d] py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-slate-900 active:scale-95 cursor-pointer"
              >
                Buy VIP Pass &rarr;
              </button>
            </div>
          </div>

          {/* CARD 3: WEEKEND VIP PASS (Silver/Metallic Card) */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#9aa1a9] p-6 text-slate-950 shadow-xl sm:p-8">
            {/* Top Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-slate-300 px-4 py-1 shadow-sm">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-900 uppercase">
                Best Value
              </span>
            </div>

            {/* Ticket Edge Cutout Notches */}
            <div className="absolute -left-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />
            <div className="absolute -right-3 top-[52%] h-6 w-6 -translate-y-1/2 rounded-full bg-[#0b1118]" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between pt-2">
                <div>
                  <span className="text-[11px] font-bold tracking-[3.56px] font-manrope text-slate-800 uppercase">
                    Both Days
                  </span>
                  <h3 className="mt-1 text-2xl tracking-[-.53px] font-extrabold leading-tight text-slate-950 sm:text-3xl">
                    Weekend VIP <br /> Pass
                  </h3>
                </div>
                <div className="text-right flex items-center justify-end flex-row gap-4.5">
                  <span className="text-xs font-bold text-slate-800">CAD $</span>
                  <span className="block text-4xl font-extrabold font-manrope text-slate-950 sm:text-5xl">
                    35
                  </span>
                </div>
              </div>
              

              {/* Bullet List */}
              <ul className="mt-8 space-y-3 text-xs font-medium leading-relaxed text-slate-950 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Good for both Saturday & Sunday.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Gives you VIP entry so no waiting in line.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Gives you access to the Suntail Tequila Garden VIP section with separate bars, seating and washrooms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>Unlimited re-entry and VIP access to the participating bars & clubs on Granville.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                  <span>VIP entry to the afterparties at all the participating bars & clubs.</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Dashed Ticket Divider Line */}
              <div className="my-8 border-t border-dashed border-slate-900/30" />

              {/* Bottom Vertical Bar Accent */}
              <div className="mb-6 h-8 w-1 bg-slate-800/40" />

              {/* Action Button */}
              <button
                type="button"
                onClick={openTickets}
                className="w-full rounded-full bg-gradient-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] py-3.5 text-sm font-extrabold text-slate-950 shadow-md transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 cursor-pointer"
              >
                Buy Weekend VIP Pass &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}