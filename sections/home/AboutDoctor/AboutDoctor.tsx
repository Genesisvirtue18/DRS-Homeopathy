// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Play,
//   Award,
//   Phone,
//   Calendar,
//   ArrowRight,
//   Star,
//   Sparkles,
//   ShoppingBag,
//   ClipboardList,
// } from "lucide-react";

// const videos = [
//   {
//     id: 1,
//     embed:
//       "https://www.youtube.com/embed/EhTOg_tsi78?si=h4UEz0ioV7GC3fSe&enablejsapi=1",
//     thumbnail: "/yt-thumbnail-1.jpg",
//     title: "Introduction to Homeopathy",
//   },
//   {
//     id: 2,
//     embed:
//       "https://www.youtube.com/embed/ouWLQ86znIU?si=FkwiWgEoKyv5nf6q&enablejsapi=1",
//     thumbnail: "/yt-thumbnail-2.jpg",
//     title: "Treatment for Chronic Diseases",
//   },
//   {
//     id: 3,
//     embed:
//       "https://www.youtube.com/embed/D1r8TJgZELA?si=Kj6LcuJ6Cg8vSiRg&enablejsapi=1",
//     thumbnail: "/yt-thumbnail-3.jpg",
//     title: "Patient Success Stories",
//   },
// ];

// export default function AboutDoctor() {
//   const [activeVideo, setActiveVideo] = useState(videos[0].embed);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FBFF] to-white pt-2 pb-6 md:pt-4 md:pb-10">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <Image
//           src="/images/about-doctor-bgimage.png"
//           alt="Background pattern"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
      
//       {/* Background Decorations */}
//       <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#6EDC8C]/5 blur-3xl z-0" />
//       <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#0E2A5A]/5 blur-3xl z-0" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="mb-3 md:mb-6 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C]/20 to-[#6EDC8C]/10 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-sm">
//             <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#6EDC8C]" />
//             <span className="text-[11px] md:text-xs font-semibold text-[#0E2A5A]">16+ Years of Excellence</span>
//           </div>
//           <p className="mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] text-[#6EDC8C]">
//             Welcome to our Homoeopathy Clinic
//           </p>
//           <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0E2A5A]">
//             Meet{" "}
//             <span className="text-[#6EDC8C] font-semibold">Dr. Rekha Saroha</span>
//           </h2>
//         </div>

//         {/* Doctor Image + Content Row */}
//         <div className="mt-5 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
//           {/* LEFT - DOCTOR IMAGE */}
//           <div className="relative group h-full">
//             {/* Main Image */}
//             <div className="relative h-full w-full">
//               <div className="h-full overflow-hidden rounded-md">
//                 <Image
//                   src="/images/about-img.jpg"
//                   alt="Dr. Rekha Saroha"
//                   width={900}
//                   height={900}
//                   priority
//                   className="h-full w-full object-cover rounded-2xl shadow-xl"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT - CONTENT SECTION */}
//           <div className="flex flex-col justify-between h-full">
//             <div className="space-y-4 md:space-y-5">
//               {/* Call for appointment */}
//               <div className="flex items-center gap-2 text-xs md:text-sm">
//                 <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#6EDC8C]" />
//                 <span className="text-gray-600">Call For Appointment:</span>
//                 <Link href="tel:9911293060" className="font-semibold text-[#0E2A5A] hover:text-[#6EDC8C] transition">
//                   9911293060
//                 </Link>
//               </div>

//               {/* Action Buttons Row */}
//               <div className="flex flex-row flex-wrap gap-3">
//                 <Link
//                   href="https://6uyedz-fv.myshopify.com/pages/quiz"
//                   target="_blank"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0E2A5A] bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-[#0E2A5A] hover:text-white hover:scale-105 shadow-sm"
//                 >
//                   <ClipboardList className="h-4 w-4" />
//                   Take A Free Hair Test
//                   <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
//                 </Link>
//                 <Link
//                   href="https://6uyedz-fv.myshopify.com/collections/all"
//                   target="_blank"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0E2A5A] bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-[#0E2A5A] hover:text-white hover:scale-105 shadow-sm"
//                 >
//                   <ShoppingBag className="h-4 w-4" />
//                   Click To Order
//                   <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
//                 </Link>
//               </div>

//               {/* Qualification badges */}
//               <div className="flex flex-wrap gap-2 pt-1">
//                 <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 backdrop-blur-sm px-2.5 py-1 md:px-3">
//                   <Award className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#0E2A5A]" />
//                   <span className="text-[10px] md:text-xs font-semibold text-[#0E2A5A]">Gold Medalist</span>
//                 </div>
//                 <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 backdrop-blur-sm px-2.5 py-1 md:px-3">
//                   <Star className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#6EDC8C]" />
//                   <span className="text-[10px] md:text-xs font-semibold text-[#0E2A5A]">BHMS, PGDEMS, MD</span>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-gray-700 bg-white/40 backdrop-blur-sm p-4 rounded-xl">
//                 <p>
//                   &quot;DRS Homeopathy, Dr. Rekha Saroha&apos;s BHMS (Gold Medalist), PGDEMS, MD (Paediatric) provide you Best homoeopathic treatment for all acute and chronic cases at DRS Homoeopathy Clinic. We are having 16 years of experience in field of homoeopathy. We provide you all the treatment both way online or offline.&quot;
//                 </p>
//                 <p>
//                   Tele consultation also available. Patient get treatment with a holistic approach and get a way to permanent cure with a safe and gentle way of healing. We deal with all diseases of our body, best Homoeopathy treatment for female disorders, hair and skin problems.
//                 </p>
//               </div>
//             </div>

//             {/* Main Booking Button */}
//             <div className="pt-5 md:pt-6 mt-2 md:mt-5">
//               <Link
//                 href="https://superprofile.bio/bookings/drrekhasaroha"
//                 target="_blank"
//                 className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#1E3A6E] px-4 py-3 md:py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto md:px-6"
//               >
//                 <Calendar className="h-4 w-4" />
//                 <span className="text-center">Book online Consultation and Clinic Appointment</span>
//                 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Video Section */}
//         <div className="mt-8 md:mt-10">
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//             {videos.map((video) => (
//               <div
//                 key={video.id}
//                 className="overflow-hidden rounded-md bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
//               >
//                 <div className="aspect-video overflow-hidden bg-black">
//                   <iframe
//                     src={video.embed}
//                     title={video.title}
//                     className="h-full w-full"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Award,
  Phone,
  Calendar,
  ArrowRight,
  Star,
  Sparkles,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";

const videos = [
  {
    id: 1,
    embed:
      "https://www.youtube.com/embed/EhTOg_tsi78?si=h4UEz0ioV7GC3fSe&enablejsapi=1",
    thumbnail: "/yt-thumbnail-1.jpg",
    title: "Introduction to Homeopathy",
  },
  {
    id: 2,
    embed:
      "https://www.youtube.com/embed/ouWLQ86znIU?si=FkwiWgEoKyv5nf6q&enablejsapi=1",
    thumbnail: "/yt-thumbnail-2.jpg",
    title: "Treatment for Chronic Diseases",
  },
  {
    id: 3,
    embed:
      "https://www.youtube.com/embed/D1r8TJgZELA?si=Kj6LcuJ6Cg8vSiRg&enablejsapi=1",
    thumbnail: "/yt-thumbnail-3.jpg",
    title: "Patient Success Stories",
  },
];

export default function AboutDoctor() {
  const [activeVideo, setActiveVideo] = useState(videos[0].embed);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animated
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Slightly offset trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FBFF] to-white pt-2 pb-6 md:pt-4 md:pb-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/about-doctor-bgimage.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#6EDC8C]/5 blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#0E2A5A]/5 blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header with scroll animation */}
        <div className="mb-3 md:mb-6 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C]/20 to-[#6EDC8C]/10 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-sm transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#6EDC8C]" />
            <span className="text-[11px] md:text-xs font-semibold text-[#0E2A5A]">16+ Years of Excellence</span>
          </div>
          
          <p className={`mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] text-[#6EDC8C] transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Welcome to our Homoeopathy Clinic
          </p>
          
          <h2 className={`mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0E2A5A] transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Meet{" "}
            <span className="text-[#6EDC8C] font-semibold">Dr. Rekha Saroha</span>
          </h2>
        </div>

        {/* Doctor Image + Content Row */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* LEFT - DOCTOR IMAGE */}
          <div className={`relative group h-full transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            {/* Main Image */}
            <div className="relative h-full w-full">
              <div className="h-full overflow-hidden rounded-md">
                <Image
                  src="/images/about-img.jpg"
                  alt="Dr. Rekha Saroha"
                  width={900}
                  height={900}
                  priority
                  className="h-full w-full object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT SECTION */}
          <div className={`flex flex-col justify-between h-full transition-all duration-700 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="space-y-4 md:space-y-5">
              {/* Call for appointment */}
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#6EDC8C]" />
                <span className="text-gray-600">Call For Appointment:</span>
                <Link href="tel:9911293060" className="font-semibold text-[#0E2A5A] hover:text-[#6EDC8C] transition">
                  9911293060
                </Link>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-row flex-wrap gap-3">
                <Link
                  href="https://6uyedz-fv.myshopify.com/pages/quiz"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0E2A5A] bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-[#0E2A5A] hover:text-white hover:scale-105 shadow-sm"
                >
                  <ClipboardList className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Take A Free Hair Test
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://6uyedz-fv.myshopify.com/collections/all"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0E2A5A] bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-[#0E2A5A] hover:text-white hover:scale-105 shadow-sm"
                >
                  <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Click To Order
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Qualification badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 backdrop-blur-sm px-2.5 py-1 md:px-3 transition-all duration-300 hover:scale-105">
                  <Award className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#0E2A5A]" />
                  <span className="text-[10px] md:text-xs font-semibold text-[#0E2A5A]">Gold Medalist</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 backdrop-blur-sm px-2.5 py-1 md:px-3 transition-all duration-300 hover:scale-105">
                  <Star className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#6EDC8C]" />
                  <span className="text-[10px] md:text-xs font-semibold text-[#0E2A5A]">BHMS, PGDEMS, MD</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-gray-700 bg-white/40 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 hover:shadow-md">
                <p>
                  &quot;DRS Homeopathy, Dr. Rekha Saroha&apos;s BHMS (Gold Medalist), PGDEMS, MD (Paediatric) provide you Best homoeopathic treatment for all acute and chronic cases at DRS Homoeopathy Clinic. We are having 16 years of experience in field of homoeopathy. We provide you all the treatment both way online or offline.&quot;
                </p>
                <p>
                  Tele consultation also available. Patient get treatment with a holistic approach and get a way to permanent cure with a safe and gentle way of healing. We deal with all diseases of our body, best Homoeopathy treatment for female disorders, hair and skin problems.
                </p>
              </div>
            </div>

            {/* Main Booking Button */}
            <div className="pt-5 md:pt-6 mt-2 md:mt-5">
              <Link
                href="https://superprofile.bio/bookings/drrekhasaroha"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#1E3A6E] px-4 py-3 md:py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto md:px-6"
              >
                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-center">Book online Consultation and Clinic Appointment</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Video Section with scroll animation */}
        <div className={`mt-8 md:mt-10 transition-all duration-700 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-md bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden bg-black">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}