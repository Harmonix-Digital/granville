"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Data:",data)

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out. Your message has been sent successfully.",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "General enquiry",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0b1118] px-4 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
              Contact
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-[-1.36px] text-textwhite sm:text-6xl lg:text-6xl">
              Drop us a line.
            </h2>

            <p className="mt-6 max-w-md text-xs leading-relaxed text-graywhite font-manrope sm:text-sm">
              Artist submissions, media requests, vendor applications or
              partnership enquiries — we read everything and reply within two
              business days.
            </p>

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

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800/80 bg-[#141d26]/90 p-8 shadow-2xl backdrop-blur-md sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      required
                      disabled={isSubmitting}
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      required
                      disabled={isSubmitting}
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="General enquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-[#0d141c] px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us what you had in mind"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-[#0d141c] p-4 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-[#28A9E0] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Status Message */}
                {status.type && (
                  <div
                    role="alert"
                    className={
                      status.type === "success"
                        ? "rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                        : "rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    }
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] px-8 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950"
                          aria-hidden="true"
                        />

                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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