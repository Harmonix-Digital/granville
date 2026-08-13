import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const exploreLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Lineup", href: "#lineup" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tickets", href: "#tickets" },
  { label: "Partners", href: "#partners" },
  { label: "Faq", href: "#faq" },
];

const followLinks: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/granvilledjfestival" },
  // { label: "TikTok", href: "https://tiktok.com" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592912770240" },
  // { label: "SoundCloud", href: "https://soundcloud.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/60 bg-[#0b1118] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Logo & Event Info (6 Cols) */}
          <div className="lg:col-span-4">
            {/* Logo Container with Vertical Divider Accent */}
            <div className="flex items-center gap-4">
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src="/images/footerLogo.svg"
                  alt="Granville DJ Festival Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="h-10 w-px bg-slate-800" />
            </div>

            {/* Description Text */}
            <p className="mt-8 max-w-sm text-xs leading-relaxed text-graywhite sm:text-sm font-manrope">
              An outdoor daytime DJ festival on the 1100 Block of Granville Street, Vancouver, BC. September 5–6, 2026 · 1:00 PM – 9:00 PM.
            </p>
          </div>

          {/* Right Columns: Nav Links (6 Cols total) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            
            {/* Explore Links */}
            <div>
              <span className="block text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                Explore
              </span>
              <ul className="mt-6 space-y-3.5">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-medium text-slate-300 transition-colors hover:text-white sm:text-sm font-manrope"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Links */}
            <div>
              <span className="block text-[11px] font-extrabold tracking-[2.53px] text-blue uppercase">
                Follow
              </span>
              <ul className="mt-6 space-y-3.5">
                {followLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-300 transition-colors hover:text-white sm:text-sm font-manrope"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Legal / Branding Bar */}
      <div className="border-t border-slate-800/60 bg-[#080d13] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row sm:px-8 lg:px-12">
          <p>© 2026 Granville DJ Music Festival. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-widest text-slate-400">
            Powered by Harmonix
          </p>
        </div>
      </div>
    </footer>
  );
}