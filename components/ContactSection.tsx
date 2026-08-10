"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b1118] px-4 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5">
            {/* Category Tag */}
            <span className="text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
              Contact
            </span>

            {/* Headline */}
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-1.36px] text-textwhite sm:text-6xl lg:text-6xl">
              Drop us a line.
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="mt-6 max-w-md text-xs leading-relaxed text-graywhite sm:text-sm font-manrope">
              Artist submissions, media requests, vendor applications or partnership enquiries — we read everything and reply within two business days.
            </p>

            {/* Contact Details List */}
            <div className="mt-12 space-y-8">
              {/* General */}
              <div>
                <span className="block text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                  General
                </span>
                <a
                  href="mailto:granvilledjfest@gmail.com"
                  className="mt-1 inline-block text-sm font-extrabold text-textwhite transition-colors hover:text-blue sm:text-base"
                >
                  granvilledjfest@gmail.com
                </a>
              </div>

              {/* Partnerships */}
              <div>
                <span className="block text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                  Partnerships
                </span>
                <a
                  href="mailto:granvilledjfest@gmail.com"
                  className="mt-1 inline-block text-sm font-extrabold text-textwhite transition-colors hover:text-blue sm:text-base"
                >
                  granvilledjfest@gmail.com
                </a>
              </div>

              {/* Venue */}
              <div>
                <span className="block text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                  Venue
                </span>
                <p className="mt-1 text-sm font-extrabold text-textwhite sm:text-base">
                  1100 Block Granville Street, Vancouver, BC
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800/80 bg-[#141d26]/90 p-8 shadow-2xl backdrop-blur-md sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Top Row: Name & Email Inputs */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0]"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="General enquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0]"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you had in mind"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-[#0d141c] p-4 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0]"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] px-8 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}