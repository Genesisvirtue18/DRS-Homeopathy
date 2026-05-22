"use client";

import Link from "next/link";
import Image from "next/image";

export default function TestNavbar() {
  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        
        {/* LEFT - Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="DRS Homeopathy"
              width={140}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </div>
          <div className="hidden border-l border-gray-200 pl-3 sm:block">
            <p className="text-xs font-medium text-[#0E2A5A]">
              AI-Powered Hair Assessment
            </p>
            <p className="text-[10px] text-gray-400">
              Free & Confidential
            </p>
          </div>
        </Link>

        {/* RIGHT - Exit Button */}
        <Link
          href="/"
          className="group flex text-[#0E2A5A] items-center gap-1.5 rounded-full border-[1px] border-[#0E2A5A] bg-white px-5 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-[#6EDC8C] hover:bg-[#6EDC8C] hover:text-white hover:shadow-md md:px-6 md:py-2.5"
        >
          <span>Exit</span>
          <svg 
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

      </div>
    </header>
  );
}