"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MapPin, ShoppingBag, X, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(true); // Open by default

  // Google Maps URL for the clinic location
  const mapsUrl = "https://www.google.com/maps/place/DRS+homeopathy+(Dr+Rekha+Saroha+BHMS+MD,Hair+and+Skin+expert)/@28.7176035,77.0929766,15z/data=!4m6!3m5!1s0x390d01d113feb9c9:0x77927aebda79b77d!8m2!3d28.7176035!4d77.0929766!16s%2Fg%2F11r7nzmthy?entry=ttu";

  const buttons = [
    {
      id: "shop",
      icon: ShoppingBag,
      label: "Shop Now",
      href: "https://shop.vagabornglobal.com/",
      hoverClass: "group-hover:scale-110",
    },
    {
      id: "call",
      icon: Phone,
      label: "Call Now",
      href: "tel:+919911293060",
      hoverClass: "group-hover:rotate-12",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/919911293060",
      hoverClass: "group-hover:scale-110",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Find Us",
      href: mapsUrl,
      hoverClass: "group-hover:-translate-y-1",
    },
  ];

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      
      {/* Expanded Menu - Shows when open */}
      {isOpen && (
        <div className="flex flex-col gap-4 animate-fadeInUp">
          {buttons.map((button) => (
            <Link
              key={button.id}
              href={button.href}
              target={button.id === "call" ? undefined : "_blank"}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0E2A5A] text-white shadow-xl transition-all duration-300 hover:scale-110"
            >
              <button.icon className={`h-6 w-6 transition-transform ${button.hoverClass}`} />
            </Link>
          ))}
        </div>
      )}

      {/* Main Toggle Button - Same design as other buttons */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0E2A5A] text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
        ) : (
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        )}
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}