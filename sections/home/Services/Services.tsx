// "use client";

// import {
//   Pill,
//   Stethoscope,
//   ShieldPlus,
//   Building2,
//   Baby,
//   Sparkles,
// } from "lucide-react";

// const services = [
//   {
//     icon: Pill,
//     title: "Biochemic Homeopathy",
//   },
//   {
//     icon: Stethoscope,
//     title: "Classical Homeopathy",
//   },
//   {
//     icon: ShieldPlus,
//     title: "Combination Homeopathy",
//   },
//   {
//     icon: Building2,
//     title: "Government Homeopath",
//   },
//   {
//     icon: Baby,
//     title: "Pediatric Homeopath",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F7F5] to-white py-8 md:py-10">
      
//       {/* Background Glow - Compact */}
//       <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
//       <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         {/* HEADER - More Compact */}
//         <div className="mb-6 text-center md:mb-8">
//           <div className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-[#6EDC8C]/15 px-2.5 py-0.5">
//             <Sparkles className="h-2.5 w-2.5 text-[#0E2A5A]" />
//             <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0E2A5A]">
//               Our Services
//             </span>
//           </div>

//           <h2 className="text-xl font-semibold tracking-tight text-[#0E2A5A] md:text-2xl lg:text-3xl">
//             Advanced{" "}
//             <span className="text-[#6EDC8C]">
//               Homeopathy Services
//             </span>
//           </h2>

//           <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

//           <p className="mx-auto mt-2 max-w-md text-xs text-gray-600">
//             Personalized treatments for safe, natural and long-lasting healing
//           </p>
//         </div>

//         {/* SERVICES GRID - Compact Cards */}
//         <div className="grid gap-3 mt-5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
//               >
                
//                 {/* Hover Gradient - Subtle */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A5A] to-[#123B7A] opacity-0 transition duration-300 group-hover:opacity-100" />

//                 {/* CONTENT */}
//                 <div className="relative z-10 flex flex-col items-center text-center">
                  
//                   {/* ICON - Smaller */}
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 transition-all duration-300 group-hover:bg-white/20">
//                     <Icon className="h-5 w-5 text-[#0E2A5A] transition duration-300 group-hover:text-[#6EDC8C]" />
//                   </div>

//                   {/* TITLE - Smaller */}
//                   <h3 className="mt-2 text-[11px] font-bold text-[#0E2A5A] transition duration-300 group-hover:text-white">
//                     {service.title}
//                   </h3>

//                   {/* Decorative Line */}
//                   <div className="mt-1.5 h-0.5 w-4 rounded-full bg-[#6EDC8C]/50 transition-all duration-300 group-hover:w-8 group-hover:bg-white/50" />
//                 </div>

//                 {/* Decorative Circle - Smaller */}
//                 <div className="absolute -right-6 -top-6 h-14 w-14 rounded-full border border-[#6EDC8C]/5 transition duration-300 group-hover:border-white/10" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Pill,
  Stethoscope,
  ShieldPlus,
  Building2,
  Baby,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Biochemic Homeopathy",
  },
  {
    icon: Stethoscope,
    title: "Classical Homeopathy",
  },
  {
    icon: ShieldPlus,
    title: "Combination Homeopathy",
  },
  {
    icon: Building2,
    title: "Government Homeopath",
  },
  {
    icon: Baby,
    title: "Pediatric Homeopath",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F7F5] to-white py-8 md:py-10">
      
      {/* Background Glow - Compact */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - More Compact */}
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-[#6EDC8C]/15 px-2.5 py-0.5">
            <Sparkles className="h-2.5 w-2.5 text-[#0E2A5A]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0E2A5A]">
              Our Services
            </span>
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A5A] md:text-2xl lg:text-3xl">
            Advanced{" "}
            <span className="text-[#6EDC8C]">
              Homeopathy Services
            </span>
          </h2>

          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

          <p className="mx-auto mt-2 max-w-md text-xs text-gray-600">
            Personalized treatments for safe, natural and long-lasting healing
          </p>
        </div>

        {/* SERVICES - Horizontal scroll on mobile, Grid on desktop */}
        <div className="relative">
          {/* Scrollable container for mobile */}
          <div className="flex gap-3 overflow-x-auto scroll-smooth pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0"
               style={{
                 scrollbarWidth: 'thin',
                 msOverflowStyle: 'auto',
               }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 4px;
              }
              div::-webkit-scrollbar-track {
                background: #e5e7eb;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb {
                background: #6edc8c;
                border-radius: 10px;
              }
            `}</style>

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative w-[180px] flex-shrink-0 overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:w-auto"
                >
                  {/* Hover Gradient - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A5A] to-[#123B7A] opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* ICON - Smaller */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 transition-all duration-300 group-hover:bg-white/20">
                      <Icon className="h-5 w-5 text-[#0E2A5A] transition duration-300 group-hover:text-[#6EDC8C]" />
                    </div>

                    {/* TITLE - Smaller */}
                    <h3 className="mt-2 text-[11px] font-bold text-[#0E2A5A] transition duration-300 group-hover:text-white whitespace-nowrap">
                      {service.title}
                    </h3>

                    {/* Decorative Line */}
                    <div className="mt-1.5 h-0.5 w-4 rounded-full bg-[#6EDC8C]/50 transition-all duration-300 group-hover:w-8 group-hover:bg-white/50" />
                  </div>

                  {/* Decorative Circle - Smaller */}
                  <div className="absolute -right-6 -top-6 h-14 w-14 rounded-full border border-[#6EDC8C]/5 transition duration-300 group-hover:border-white/10" />
                </div>
              );
            })}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="mt-3 block text-center md:hidden">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
              <div className="flex gap-1">
                <div className="h-1 w-3 rounded-full bg-[#6EDC8C]"></div>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              </div>
              <span className="text-[9px] text-gray-500">Swipe to see more →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}