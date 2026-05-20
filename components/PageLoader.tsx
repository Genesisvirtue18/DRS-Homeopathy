"use client";

import Image from "next/image";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-md">

      <div className="relative flex items-center justify-center">

        {/* Glow Effect */}
        <div className="absolute h-28 w-28 rounded-full bg-[#8BC53F]/30 blur-2xl animate-pulse" />

        {/* Outer Ring */}
        <div className="absolute h-32 w-32 rounded-full border-2 border-[#0E2A5A]/20 border-t-[#0E2A5A] animate-spin" />

        {/* Logo */}
        <div className="relative animate-logo-spin">
          <Image
            src="/images/loader.png"
            alt="Loader"
            width={95}
            height={95}
            priority
            className="drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
}