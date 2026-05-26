import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Shield, CheckCircle, Star, Calendar, Clock, Sparkles, Heart } from "lucide-react";
import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

export const metadata: Metadata = {
  title:
    "About Dr Rekha Saroha | Best Homoeopathy Doctor in Delhi | Gold Medalist",
    
  description:
    "We are having 16 years of experience in field of homoeopathy. We provide all treatments both online and offline by Dr Rekha Saroha at DRS Homoeopathy Clinic.",

  keywords: [
    "Dr Rekha Saroha",
    "DRS Homoeopathy",
    "Best Homoeopathy Doctor Delhi",
    "Gold Medalist Homeopathy Doctor",
    "Homeopathy Clinic Delhi",
    "Online Homeopathy Consultation",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION - Modern & Compact (Matching Services Page) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#6EDC8C]" />
            <span className="text-xs font-semibold text-white">Meet Your Doctor</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Dr. <span className="text-[#6EDC8C]">Rekha Saroha</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-300">
            BHMS (Gold Medalist) | PGDEMS | MD (Paediatric) • 16+ Years of Excellence in Homeopathy
          </p>
          
          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1">
              <Star className="h-3 w-3 text-[#6EDC8C] fill-[#6EDC8C]" />
              <span className="text-[11px] font-medium text-white">Gold Medalist</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1">
              <Calendar className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[11px] font-medium text-white">16+ Years</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1">
              <Shield className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[11px] font-medium text-white">No Side Effects</span>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-[-1px] left-0 right-0 overflow-hidden leading-none">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    className="block h-[82px] w-full"
  >
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION - Compact Grid */}
<section className="relative z-10 -mt-[2px] bg-white py-12 md:py-16">     
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            
            {/* LEFT - Images */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/drrekha.jpeg"
                  alt="Dr Rekha Saroha"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-3">
                <Image
                  src="/images/303430748_635847321578615_5305532966162121515_n.jpg"
                  alt="Certificate"
                  width={90}
                  height={90}
                  className="rounded-lg shadow-md object-cover"
                />
                <div className="bg-gradient-to-br from-[#F0F4F9] to-white rounded-lg px-4 py-2 flex items-center gap-3 shadow-md flex-1">
                  <div className="bg-[#6EDC8C]/20 rounded-full p-1.5">
                    <Award className="h-5 w-5 text-[#0E2A5A]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#0E2A5A]">16+</p>
                    <p className="text-[10px] text-gray-500">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Content */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/10 px-3 py-1 mb-2">
                  <Heart className="h-3 w-3 text-[#6EDC8C]" />
                  <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">About Doctor</span>
                </div>
                <h2 className="text-xl font-bold text-[#0E2A5A]">Dr. <span className="text-[#6EDC8C]">Rekha Saroha</span></h2>
                <div className="h-0.5 w-10 bg-[#6EDC8C] mt-1.5" />
              </div>

              <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <p>
                  DRS Homeopathy provides best homoeopathic treatment for acute and chronic cases. Having 16+ years of experience, offering both online and offline consultation with tele consultation available.
                </p>
                <p>
                  Patient get treatment with holistic approach for permanent cure with safe and gentle healing. Specialized in female disorders, hair, skin problems, diet consultation and weight management.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0E2A5A] text-sm mb-2">Special Treatments:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    "Hair loss & dandruff",
                    "Obesity (Fat to fit)",
                    "Kidney stone",
                    "Migraine",
                    "PCOD & Menstruation",
                    "IBS & Acidity"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="h-3 w-3 text-[#6EDC8C]" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOST TREATMENTS SECTION - Compact Cards */}
      <section className="bg-[#F0F4F9] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Shield className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Our Expertise</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0E2A5A]">Most <span className="text-[#6EDC8C]">Treatments</span></h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
            <p className="mt-2 text-xs text-gray-500 max-w-md mx-auto">Professional staff focused on your comfort and care</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2.5">
              {[
                "Treatment Of Acne/Pimples",
                "Weight Loss Treatment",
                "Treatment of Headaches",
                "Treatment of Fever",
                "Treatment of Hair Fall",
                "Underweight Management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6EDC8C]" />
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2.5">
              {[
                "Back Pain Treatment",
                "Treatment of Pain",
                "Treatment of Hair Loss",
                "Cold & Allergy Treatment",
                "Kidney Stone Treatment",
                "PCOD Treatment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6EDC8C]" />
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - Compact Horizontal Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Award className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0E2A5A]">Core <span className="text-[#6EDC8C]">Values</span></h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="group flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 group-hover:bg-[#6EDC8C] transition-all duration-300">
                <Award className="h-5 w-5 text-[#0E2A5A] group-hover:text-white transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0E2A5A]">16+ Years Experience</h3>
                <p className="text-[10px] text-gray-500">Trusted healthcare</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 group-hover:bg-[#6EDC8C] transition-all duration-300">
                <Users className="h-5 w-5 text-[#0E2A5A] group-hover:text-white transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0E2A5A]">50,000+ Patients</h3>
                <p className="text-[10px] text-gray-500">Happy & satisfied</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6EDC8C]/15 group-hover:bg-[#6EDC8C] transition-all duration-300">
                <Shield className="h-5 w-5 text-[#0E2A5A] group-hover:text-white transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0E2A5A]">No Side Effects</h3>
                <p className="text-[10px] text-gray-500">Safe & natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}