import type { Metadata } from "next";

import Image from "next/image";
import { Sparkles, Shield, CheckCircle, ArrowRight, Heart, Users, Clock, Award } from "lucide-react";
import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

const treatments = [
  {
    title: "Treatment Of Acne/Pimples",
    image: "/images/content/services-01.jpg",
    desc: "Maintaining your skin properly in the humid climate of Chennai is a challenge that one has to fight every day.",
  },
  {
    title: "Weight Loss Treatment",
    image: "/images/content/services-02.jpg",
    desc: "Natural dietary supplement which is known to primarily melt off body weight and helps to stay in shape in a short period.",
  },
  {
    title: "Treatment of Headaches",
    image: "/images/content/services-03.jpg",
    desc: "Headache is the symptom of pain anywhere in the region of the head or neck. It occurs in migraines, tension-type headaches, and cluster headaches.",
  },
  {
    title: "Treatment of Hair Fall",
    image: "/images/content/services-05.jpg",
    desc: "We are involved in offering Hair Fall Ayurvedic Treatment Service. These ayurvedic treatment services are offered as per the client's needs.",
  },
  {
    title: "Back Pain Treatment",
    image: "/images/content/services-06.jpg",
    desc: "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
  },
  {
    title: "Treatment & Management of Cold",
    image: "/images/content/services-07.jpg",
    desc: "Normally patients will feel much better in one or two days. They will feel relaxed and their mind becomes more peaceful.",
  },
  {
    title: "Treatment of Fever",
    image: "/images/content/services-04.jpg",
    desc: "The provided service is performed by our highly experienced professionals using superior grade tools and latest technology.",
  },
  {
    title: "Management of Underweight & Malabsorption Disorder",
    image: "/images/content/services-08.jpg",
    desc: "The doctors have expertise in the management of the full spectrum of gastrointestinal, liver and pancreatico-biliary diseases.",
  },
];

const specialties = [
  {
    title: "Biochemic Homeopathy",
    desc: "It allows the body to make adjustments to heal itself almost naturally. It basically relies on the body's mechanism to heal itself.",
  },
  {
    title: "Classical Homeopathy",
    desc: "India is known as the land of homoeopathy. The branch of treatment has gained popularity worldwide as it's a safe treatment option with no side-effects.",
  },
  {
    title: "Combination Homeopathy",
    desc: "Upper respiratory tract infections (URTI) are very common and associated with considerable healthcare costs. We evaluated the clinical benefit of a homeopathic add-on therapy.",
  },
  {
    title: "Government Homeopath",
    desc: "Our mission at the clinic is to develop the best world standards in homeopathic practice and make it accessible to their patients.",
  },
  {
    title: "Pediatric Homeopath",
    desc: "Homeopathy is used to treat many common acute and chronic pediatric problems, including asthma, allergies, colic, croup, eczema etc.",
  },
];

const mostTreatments = {
  left: [
    "Treatment Of Acne/Pimples",
    "Weight Loss Treatment",
    "Treatment of Headaches",
    "Treatment of Fever",
    "Treatment of Hair Fall",
    "Management of Underweight & Malabsorption Disorder",
  ],
  right: [
    "Back Pain Treatment",
    "Treatment of Pain",
    "Treatment of Hair Loss",
    "Treatment & Management of Cold",
  ],
};

export const metadata: Metadata = {
  title:
    "DRS Homoeopathy Services | Best Homoeopathy Treatment in Delhi",

  description:
    "We are having 16 years of experience in field of homoeopathy. We provide all treatment both online and offline for hair loss, migraine, kidney stone, weight loss, PCOD and chronic diseases.",

  keywords: [
    "Homeopathy Services",
    "Best Homoeopathy Treatment Delhi",
    "Hair Loss Treatment",
    "Kidney Stone Treatment",
    "Migraine Treatment",
    "PCOD Treatment",
    "Weight Loss Homeopathy",
    "DRS Homoeopathy",
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION - Modern & Compact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#6EDC8C]" />
            <span className="text-xs font-semibold text-white">Our Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Advanced <span className="text-[#6EDC8C]">Homeopathy</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-300">
            With years of experience and backed by state-of-the-art technology, DRS Homeopathy is dedicated to helping you be your best self.
          </p>
        </div>

        {/* Wave Bottom */}
         <div className="absolute bottom-[-1px] left-0 right-0 overflow-hidden leading-none">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    className="block h-[82px] w-full"
  >          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* TREATMENTS GRID SECTION */}
<section className="relative z-10 -mt-[2px] bg-white py-12 md:py-16">     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Shield className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Our Treatments</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A5A]">Our <span className="text-[#6EDC8C]">Treatments</span></h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#0E2A5A] text-sm leading-tight line-clamp-2 min-h-[2.5rem]">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-[#6EDC8C]/40 my-2" />
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOST TREATMENTS SECTION - Clean & Minimal */}
      <section className="bg-[#F0F4F9] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-3">
                <Heart className="h-3 w-3 text-[#6EDC8C]" />
                <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Most Treatments</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#0E2A5A]">Comprehensive <span className="text-[#6EDC8C]">Care</span></h2>
              <div className="h-0.5 w-10 bg-[#6EDC8C] mt-1.5 mb-3" />
              <p className="text-sm text-gray-600">Customer service is provided by a highly trained, professional staff who look after your comfort and care and are considerate of your time. Their focus is you.</p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <div className="space-y-2">
                  {mostTreatments.left.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#6EDC8C]" />
                      <span className="text-xs text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {mostTreatments.right.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#6EDC8C]" />
                      <span className="text-xs text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image with Stats Card */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/content/banner-right.jpg"
                  alt="DRS Homeopathy Treatment"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-3 flex items-center gap-2">
                <div className="bg-[#6EDC8C]/15 rounded-full p-1.5">
                  <Users className="h-5 w-5 text-[#6EDC8C]" />
                </div>
                
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-md p-2.5">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#6EDC8C]" />
                  <span className="text-xs font-semibold text-[#0E2A5A]">16+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES SECTION - Modern Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Award className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#0E2A5A]">
                Our Expertise
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A5A]">
              Homeopathy{" "}
              <span className="text-[#6EDC8C]">
                Specialties
              </span>
            </h2>
            <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-[#6EDC8C]" />
          </div>

          {/* GRID */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-[#6EDC8C]/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* TOP LINE */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

                {/* ICON */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 transition-all duration-300 group-hover:bg-[#6EDC8C]">
                  <Shield className="h-5 w-5 text-[#0E2A5A] transition-all duration-300 group-hover:text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold leading-6 text-[#0E2A5C]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1.5 text-xs leading-5 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}