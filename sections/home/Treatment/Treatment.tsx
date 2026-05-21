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
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
    <section ref={sectionRef} className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with animations */}
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-semibold text-[#0E2A5A] md:text-4xl transition-all duration-700 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Advanced Homeopathy Treatments
          </h2>
          <div className={`mx-auto mt-3 h-0.5 w-16 bg-[#6EDC8C] transition-all duration-700 delay-100 ${
            hasAnimated ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`mx-auto mt-4 max-w-2xl text-gray-600 transition-all duration-700 delay-200 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            With years of experience and backed by state-of-the-art technology, DRS Homeopathy is dedicated to helping you be your best self
          </p>
        </div>

        {/* Grid with card animations */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((item, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${hasAnimated ? index * 100 : 0}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#0E2A5A] transition-colors duration-300 group-hover:text-[#6EDC8C]">
                  {item.title}
                </h3>
                <div className="my-2 h-px w-8 bg-[#6EDC8C] transition-all duration-500 group-hover:w-12" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}