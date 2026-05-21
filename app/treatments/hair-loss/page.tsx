"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Sparkles,
  Star,
  Phone,
  Calendar,
  Eye,
  Filter,
} from "lucide-react";

import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

// Category data
const categories = [
  {
    id: "hair",
    title: "Hair Problems",
    bgColor: "bg-emerald-50",
    activeColor: "bg-emerald-500",
    textColor: "text-emerald-700",
  },
  {
    id: "skin",
    title: "Skin Problems",
    bgColor: "bg-rose-50",
    activeColor: "bg-rose-500",
    textColor: "text-rose-700",
  },
  {
    id: "mental",
    title: "Mental Health",
    bgColor: "bg-purple-50",
    activeColor: "bg-purple-500",
    textColor: "text-purple-700",
  },
  {
    id: "chronic",
    title: "Chronic Diseases",
    bgColor: "bg-orange-50",
    activeColor: "bg-orange-500",
    textColor: "text-orange-700",
  },
  {
    id: "women",
    title: "Women Issues",
    bgColor: "bg-pink-50",
    activeColor: "bg-pink-500",
    textColor: "text-pink-700",
  },
  {
    id: "acute",
    title: "Acute Problems",
    bgColor: "bg-yellow-50",
    activeColor: "bg-yellow-500",
    textColor: "text-yellow-700",
  },
];

// Before/After images with categories
const beforeAfterImages = [
  // Hair Problems
  {
    id: 1,
    category: "hair",
    title: "Hair Regrowth Treatment",
    before: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "hair",
    title: "Baldness Treatment",
    before: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "hair",
    title: "Alopecia Treatment",
    before: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop",
  },
  
  // Skin Problems
  {
    id: 4,
    category: "skin",
    title: "Acne/Pimples Treatment",
    before: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "skin",
    title: "Psoriasis Treatment",
    before: "https://images.unsplash.com/photo-1560869713-7d0a2943081e?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1560869713-7d0a2943081e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "skin",
    title: "Eczema Treatment",
    before: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
  },
  
  // Chronic Diseases
  {
    id: 7,
    category: "chronic",
    title: "Diabetes Management",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "chronic",
    title: "BP Treatment",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
  },
  
  // Women Issues
  {
    id: 9,
    category: "women",
    title: "PCOD Treatment",
    before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "women",
    title: "Menstrual Disorder",
    before: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  
  // Mental Health
  {
    id: 11,
    category: "mental",
    title: "Anxiety Relief",
    before: "https://images.unsplash.com/photo-1541199249251-7130f4d7e7a7?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1541199249251-7130f4d7e7a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "mental",
    title: "Stress Management",
    before: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  
  // Acute Problems
  {
    id: 13,
    category: "acute",
    title: "Migraine Treatment",
    before: "https://images.unsplash.com/photo-1559757147-3a5ab9f2c48c?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1559757147-3a5ab9f2c48c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    category: "acute",
    title: "Allergy Treatment",
    before: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HairLossTreatmentPage() {
  const [activeCategory, setActiveCategory] = useState("hair");

  const filteredImages = beforeAfterImages.filter(
    (item) => item.category === activeCategory
  );

  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <main className="overflow-hidden bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#6EDC8C]" />
            <span className="text-xs font-semibold text-white">Hair Loss Treatment</span>
          </div>

          <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            Advanced <span className="text-[#6EDC8C]">Hair Fall</span>
            <br />
            Treatment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
            Safe and natural homeopathy treatment for hair fall, dandruff,
            alopecia and baldness by Dr Rekha Saroha with 16+ years of
            experience.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 text-[#6EDC8C]" />
              <span className="text-xs font-medium text-white">No Side Effects</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-[#6EDC8C] text-[#6EDC8C]" />
              <span className="text-xs font-medium text-white">Trusted Treatment</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5 text-[#6EDC8C]" />
              <span className="text-xs font-medium text-white">16+ Years</span>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* CATEGORY FILTER SECTION */}
      <section className="py-8 md:py-10 bg-gradient-to-r from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-3 py-1 mb-3">
              <Filter className="h-3.5 w-3.5 text-[#6EDC8C]" />
              <span className="text-xs font-semibold text-[#0E2A5A] uppercase tracking-wide">Browse by Category</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#0E2A5A]">
              Before & After <span className="text-[#6EDC8C]">Treatment Results</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
              Select a category to view real patient results
            </p>
          </div>

          {/* Simple Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? `${category.activeColor} text-white shadow-md scale-105`
                      : `${category.bgColor} ${category.textColor} hover:shadow-md hover:scale-105`
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Active Category Indicator */}
          <div className="text-center mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${activeCategoryData?.bgColor} ${activeCategoryData?.textColor}`}>
              Showing: {activeCategoryData?.title}
            </span>
          </div>

          {/* Before & After Gallery - Clean Version */}
          {filteredImages.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before Image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.before}
                          alt={`Before ${item.title}`}
                          width={500}
                          height={400}
                          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                          unoptimized
                        />
                       
                      </div>

                      {/* After Image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.after}
                          alt={`After ${item.title}`}
                          width={500}
                          height={400}
                          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                          unoptimized
                        />
                       
                      </div>
                    </div>
                  </div>
                  
                 
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Eye className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No results found for this category.</p>
              <p className="text-sm text-gray-400 mt-1">Check back soon for more updates!</p>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
              <span className="text-xs text-gray-600">
                {filteredImages.length} treatment results
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-gradient-to-r from-[#0E2A5A] to-[#1E3A6E]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            Ready to Start Your Treatment Journey?
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            Book a consultation with Dr. Rekha Saroha today
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9911293060"
              className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C] px-5 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Call Now: 9911293060
            </a>
            <a
              href="https://superprofile.bio/bookings/drrekhasaroha"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}