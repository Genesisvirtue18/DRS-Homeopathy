"use client";

import Link from "next/link";
import { Phone, Truck } from "lucide-react";

export default function HomeDeliveryBanner() {
    return (
        <section className="bg-gradient-to-r from-[#0E2A5A] to-[#1E3A6E] py-6 md:py-8">
            <div className="mx-auto max-w-7xl px-4 text-center">

                {/* Icon */}
                <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6EDC8C]/20">
                        <Truck className="h-6 w-6 text-[#6EDC8C]" />
                    </div>
                </div>

                {/* Text */}
                <p className="text-sm text-white/90 md:text-base">
                    <span className="font-bold text-[#6EDC8C]">Note -</span>
                    अब आप हमसे भारत के किसी भी कोने में online consultation द्वारा होम्योपैथिक दवाईयां मंगा सकते है
                </p>

                {/* Heading */}
                <h3 className="mt-3 text-lg font-semibold text-white md:text-xl">
                    Home Delivery Available
                </h3>

                {/* Button at bottom */}
                <div className="mt-4">
                    <Link
                        href="tel:09911293060"
                        className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#0E2A5A] hover:shadow-2xl md:min-w-[220px] md:px-10 md:py-3 md:text-base"
                    >
                        <Phone className="h-4 w-4 md:h-5 md:w-5" />

                        <span>Call Now</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}