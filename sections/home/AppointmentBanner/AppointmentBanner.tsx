"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppointmentBanner() {
  return (
    <section className="relative overflow-hidden py-5 md:py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* MAIN BANNER */}
        <div className="relative overflow-hidden rounded-2xl">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/content/banner-center-02.jpg"
              alt="Appointment Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#001E3C]/70" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:py-20">
            
            <div className="banner-center-text1 text-2xl font-semibold text-white md:text-3xl">
              Book Your Appointment Now!
            </div>
            
            <div className="banner-center-text4 mt-2 text-lg text-gray-200 md:text-xl">
              Choose The Right Procedure For You
            </div>

            {/* BUTTON */}
            <Link
              href="https://superprofile.bio/bookings/drrekhasaroha"
              target="_blank"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#001E3C] transition hover:scale-105 md:mt-8 md:px-8 md:py-3 md:text-base"
            >
              <span>Request an appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}