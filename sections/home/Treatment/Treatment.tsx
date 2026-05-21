// "use client";

// import Image from "next/image";

// const treatments = [
//   {
//     title: "Treatment Of Acne/Pimples",
//     image: "/images/content/services-01.jpg",
//     description:
//       "Maintaining your skin properly in the humid climate of Chennai is a challenge that one has to fight every day.",
//   },
//   {
//     title: "Weight Loss Treatment",
//     image: "/images/content/services-02.jpg",
//     description:
//       "Natural dietary supplement which is known to primarily melt off body weight and helps to stay in shape in a short period.",
//   },
//   {
//     title: "Treatment of Headaches",
//     image: "/images/content/services-03.jpg",
//     description:
//       "Headache is the symptom of pain anywhere in the region of the head or neck. It occurs in migraines, tension-type headaches, and cluster headaches.",
//   },
//   {
//     title: "Treatment of Hair Fall",
//     image: "/images/content/services-05.jpg",
//     description:
//       "We are involved in offering Hair Fall Homeopathy Treatment Service. These Homeopathy treatment services are offered as per the patient's needs.",
//   },
//   {
//     title: "Back Pain Treatment",
//     image: "/images/content/services-06.jpg",
//     description:
//       "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
//   },
//   {
//     title: "Treatment & Management of Cold",
//     image: "/images/content/services-07.jpg",
//     description:
//       "Normally patients will feel much better in one or two days. They will feel relaxed and their mind becomes more peaceful.",
//   },
//   {
//     title: "Treatment of Fever",
//     image: "/images/content/services-04.jpg",
//     description:
//       "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
//   },
//   {
//     title: "Management of Underweight & Malabsorption Disorder",
//     image: "/images/content/services-08.jpg",
//     description:
//       "The doctors have expertise in the management of the full spectrum of gastrointestinal, liver and pancreatico-biliary diseases.",
//   },
// ];

// export default function Treatments() {
//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         {/* Simple Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-semibold text-[#0E2A5A] md:text-4xl">
//             Advanced Homeopathy Treatments
//             </h2>
//           <div className="mx-auto mt-3 h-0.5 w-16 bg-[#6EDC8C]" />
//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             With years of experience and backed by state-of-the-art technology, DRS Homeopathy is dedicated to helping you be your best self
//           </p>
//         </div>

//         {/* Simple Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {treatments.map((item, index) => (
//             <div key={index} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
//               <div className="h-48 overflow-hidden bg-gray-100">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={500}
//                   height={300}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-[#0E2A5A]">{item.title}</h3>
//                 <div className="my-2 h-px w-8 bg-[#6EDC8C]" />
//                 <p className="text-sm text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const treatments = [
  {
    title: "Treatment Of Acne/Pimples",
    image: "/images/content/services-01.jpg",
    description:
      "Maintaining your skin properly in the humid climate of Chennai is a challenge that one has to fight every day.",
  },
  {
    title: "Weight Loss Treatment",
    image: "/images/content/services-02.jpg",
    description:
      "Natural dietary supplement which is known to primarily melt off body weight and helps to stay in shape in a short period.",
  },
  {
    title: "Treatment of Headaches",
    image: "/images/content/services-03.jpg",
    description:
      "Headache is the symptom of pain anywhere in the region of the head or neck. It occurs in migraines, tension-type headaches, and cluster headaches.",
  },
  {
    title: "Treatment of Hair Fall",
    image: "/images/content/services-05.jpg",
    description:
      "We are involved in offering Hair Fall Homeopathy Treatment Service. These Homeopathy treatment services are offered as per the patient's needs.",
  },
  {
    title: "Back Pain Treatment",
    image: "/images/content/services-06.jpg",
    description:
      "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
  },
  {
    title: "Treatment & Management of Cold",
    image: "/images/content/services-07.jpg",
    description:
      "Normally patients will feel much better in one or two days. They will feel relaxed and their mind becomes more peaceful.",
  },
  {
    title: "Treatment of Fever",
    image: "/images/content/services-04.jpg",
    description:
      "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
  },
  {
    title: "Management of Underweight & Malabsorption Disorder",
    image: "/images/content/services-08.jpg",
    description:
      "The doctors have expertise in the management of the full spectrum of gastrointestinal, liver and pancreatico-biliary diseases.",
  },
];

export default function Treatments() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Trigger cards one by one for better visual effect
            treatments.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleCards((prev: number[]) => [...prev, idx]);
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with scroll animations */}
        <div className="mb-8 md:mb-12 text-center">
          <div className={`transition-all duration-700 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/10 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-[#0E2A5A]">Our Services</span>
            </div>
          </div>
          
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0E2A5A] transition-all duration-700 delay-100 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Advanced <span className="text-[#6EDC8C]">Homeopathy</span> Treatments
          </h2>
          
          <div className={`mx-auto mt-3 h-0.5 w-16 bg-[#6EDC8C] transition-all duration-700 delay-200 ${
            hasAnimated ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          
          <p className={`mx-auto mt-4 max-w-2xl text-sm md:text-base text-gray-600 transition-all duration-700 delay-300 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            With years of experience and backed by state-of-the-art technology, DRS Homeopathy is dedicated to helping you be your best self
          </p>
        </div>

        {/* Grid with scroll-triggered card animations */}
        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((item, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${visibleCards.includes(index) ? 0 : 0}ms`,
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="relative h-48 md:h-52 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-[#6EDC8C]/90 backdrop-blur-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0">
                  <span className="text-[10px] font-bold text-[#0E2A5A]">0{index + 1}</span>
                </div>
              </div>
              
              <div className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-semibold text-[#0E2A5A] transition-colors duration-300 group-hover:text-[#6EDC8C] line-clamp-2">
                  {item.title}
                </h3>
                <div className="my-2 h-px w-8 bg-[#6EDC8C] transition-all duration-500 group-hover:w-12" />
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
              
              </div>
            </div>
          ))}
        </div>
        
        {/* Animation Status Indicator */}
        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2">
            <div className="flex gap-1">
              <div className="h-1.5 w-4 rounded-full bg-[#6EDC8C]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-xs text-gray-500">Treatments loaded</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .line-clamp-2 {
            -webkit-line-clamp: 2;
          }
          .line-clamp-3 {
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
    </section>
  );
}