"use client";

import {
  Pill,
  Stethoscope,
  ShieldPlus,
  Building2,
  Baby,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Biochemic Homeopathy",
    description:
      "Natural healing approach that helps the body recover and balance itself safely and effectively.",
  },
  {
    icon: Stethoscope,
    title: "Classical Homeopathy",
    description:
      "Safe and trusted homeopathic treatments with personalized care and no harmful side effects.",
  },
  {
    icon: ShieldPlus,
    title: "Combination Homeopathy",
    description:
      "Advanced homeopathic solutions for respiratory infections and chronic health conditions.",
  },
  {
    icon: Building2,
    title: "Government Homeopath",
    description:
      "Professional and trusted medical standards focused on quality homeopathic healthcare.",
  },
  {
    icon: Baby,
    title: "Pediatric Homeopath",
    description:
      "Specialized treatment for children including allergies, asthma, eczema and immunity care.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F7F5] to-white py-12 md:py-16">
      
      {/* Background Glow - Compact */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Compact */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-2 inline-flex items-center rounded-full bg-[#6EDC8C]/15 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0E2A5A]">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A5A] md:text-3xl lg:text-4xl">
            Advanced{" "}
            <span className="text-[#6EDC8C]">
              Homeopathy Services
            </span>
          </h2>

          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            Personalized treatments for safe, natural and long-lasting healing
          </p>
        </div>

        {/* SERVICES GRID - Compact */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                
                {/* Hover Gradient - Subtle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A5A] to-[#123B7A] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="relative z-10">
                  
                  {/* ICON - Compact */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6EDC8C]/15 transition-all duration-300 group-hover:bg-white/20">
                    <Icon className="h-6 w-6 text-[#0E2A5A] transition duration-300 group-hover:text-[#6EDC8C]" />
                  </div>

                  {/* TITLE - Smaller */}
                  <h3 className="mt-3 text-base font-bold text-[#0E2A5A] transition duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION - Compact */}
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 transition duration-300 group-hover:text-gray-200">
                    {service.description}
                  </p>

                  {/* BUTTON - Compact */}
                
                </div>

                {/* Decorative Circle - Smaller */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-[#6EDC8C]/5 transition duration-300 group-hover:border-white/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}