"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-800/50 bg-[#0b1118]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5">
        
        {/* Logo */}
        <Link href="/" className="logo shrink-0">
          <Image src="/images/logo.svg" alt="logo" width={84} height={38} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="font-sora text-sm font-semibold text-slate-300 flex items-center gap-7">
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#lineup" className="transition-colors hover:text-white">
                Lineup
              </a>
            </li>
            <li>
              <a href="#tickets" className="transition-colors hover:text-white">
                Tickets
              </a>
            </li>
            <li>
              <a href="#partners" className="transition-colors hover:text-white">
                Partners
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <Link href="#tickets">
                <button
                  type="button"
                  className="
                    rounded-full 
                    bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] 
                    px-6 py-2.5 
                    text-sm font-semibold text-slate-950 
                    shadow-md 
                    transition-all duration-200 ease-in-out 
                    hover:scale-105 
                    hover:brightness-110 
                    hover:shadow-lg hover:shadow-cyan-500/30 
                    active:scale-95
                    hover:cursor-pointer
                  "
                >
                  Get Tickets
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white focus:outline-none md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile Navigation" className="border-t border-slate-800/80 bg-[#0b1118] px-6 py-6 md:hidden">
          <ul className="font-sora flex flex-col gap-5 text-base font-semibold text-slate-200">
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#lineup" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                Lineup
              </a>
            </li>
            <li>
              <a href="#tickets" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                Tickets
              </a>
            </li>
            <li>
              <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                Partners
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-400">
                Contact
              </a>
            </li>
            <li className="pt-2">
              <Link href="#tickets" onClick={() => setMobileMenuOpen(false)}>
                <button
                  type="button"
                  className="
                    w-full
                    rounded-full 
                    bg-linear-to-r from-[#167FAF] via-[#28A9E0] to-[#69C9EE] 
                    py-3 
                    text-sm font-semibold text-slate-950 
                    shadow-md
                  "
                >
                  Get Tickets
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;