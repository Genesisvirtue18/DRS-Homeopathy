"use client";

import Image from "next/image";
import { Award, Users, Shield, CheckCircle, Star, Calendar, Clock } from "lucide-react";
import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO SECTION - Compact */}
      <section className="relative pt-36 overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] py-16">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Meet <span className="text-[#6EDC8C]">Dr. Rekha Saroha</span>
          </h1>
          <p className="mt-2 text-sm text-gray-300">BHMS (Gold Medalist) | PGDEMS | MD (Paediatric)</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-sm">
              <Star className="h-3 w-3 text-[#123B7A] fill-[#123B7A]" />
              <span className="text-xs text-white">Gold Medalist</span>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-sm">
              <Calendar className="h-3 w-3 text-[#123B7A]" />
              <span className="text-xs text-white">16+ Years</span>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-sm">
              <Shield className="h-3 w-3 text-[#123B7A]" />
              <span className="text-xs text-white">No Side Effects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Compact Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT - Images */}
            <div className="space-y-3">
              <div className="relative">
                <Image
                  src="/images/about-img.jpg"
                  alt="Dr Rekha Saroha"
                  width={500}
                  height={400}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="flex gap-3">
                <Image
                  src="/images/303430748_635847321578615_5305532966162121515_n.jpg"
                  alt="Certificate"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
                <div className="bg-[#F0F4F9] rounded-lg px-4 py-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-[#123B7A]" />
                  <div>
                    <p className="text-lg font-bold text-[#001E3C]">16+</p>
                    <p className="text-[10px] text-gray-500">Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Content */}
            <div>
              <h2 className="text-xl font-bold text-[#001E3C]">Dr. <span className="text-[#123B7A]">Rekha Saroha</span></h2>
              <div className="h-px w-10 bg-[#123B7A] my-2" />

              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  DRS Homeopathy provides best homoeopathic treatment for acute and chronic cases. Having 16+ years of experience, offering both online and offline consultation with tele consultation available.
                </p>
                <p>
                  Patient get treatment with holistic approach for permanent cure with safe and gentle healing. Specialized in female disorders, hair, skin problems, diet consultation and weight management.
                </p>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-[#001E3C] text-sm mb-2">Special Treatments:</p>
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
                      <CheckCircle className="h-3 w-3 text-[#123B7A]" />
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
      <section className="bg-[#F0F4F9] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-[#001E3C]">Most <span className="text-[#123B7A]">Treatments</span></h2>
            <div className="h-px w-8 bg-[#123B7A] mx-auto mt-1" />
            <p className="mt-2 text-xs text-gray-500 max-w-md mx-auto">Professional staff focused on your comfort and care</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              {[
                "Treatment Of Acne/Pimples",
                "Weight Loss Treatment",
                "Treatment of Headaches",
                "Treatment of Fever",
                "Treatment of Hair Fall",
                "Underweight Management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-lg shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#123B7A]" />
                  <span className="text-xs text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                "Back Pain Treatment",
                "Treatment of Pain",
                "Treatment of Hair Loss",
                "Cold & Allergy Treatment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-lg shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#123B7A]" />
                  <span className="text-xs text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - Compact Horizontal Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-[#001E3C]">Core <span className="text-[#123B7A]">Values</span></h2>
            <div className="h-px w-8 bg-[#123B7A] mx-auto mt-1" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123B7A]/10">
                <Award className="h-5 w-5 text-[#123B7A]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#001E3C]">16+ Years Experience</h3>
                <p className="text-xs text-gray-500">Trusted healthcare</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123B7A]/10">
                <Users className="h-5 w-5 text-[#123B7A]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#001E3C]">50,000+ Patients</h3>
                <p className="text-xs text-gray-500">Happy & satisfied</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123B7A]/10">
                <Shield className="h-5 w-5 text-[#123B7A]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#001E3C]">No Side Effects</h3>
                <p className="text-xs text-gray-500">Safe & natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}