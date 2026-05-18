import type { Metadata } from "next";
import Image from "next/image";
import {
  Shield,
  Sparkles,
  Star,
  Phone,
  ArrowRight,
  Calendar,
  Eye,
} from "lucide-react";

import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

export const metadata: Metadata = {
  title:
    "Hair Loss Treatment | Best Hair Fall Homeopathy Treatment in Delhi",

  description:
    "Get advanced homeopathy hair loss treatment by Dr Rekha Saroha at DRS Homeopathy Clinic. Safe and natural treatment for hair fall, dandruff, alopecia and baldness.",

  keywords: [
    "Hair Loss Treatment",
    "Hair Fall Treatment",
    "Hair Regrowth Treatment",
    "Best Hair Doctor Delhi",
    "Homeopathy Hair Treatment",
    "Alopecia Treatment",
    "Baldness Treatment",
    "Dr Rekha Saroha",
    "DRS Homeopathy",
  ],
};

const beforeAfterImages = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    before: "https://images.unsplash.com/photo-1560869713-7d0a2943081e?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1560869713-7d0a2943081e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    before: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HairLossTreatmentPage() {
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

      {/* BEFORE & AFTER GALLERY SECTION - Only Images */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/15 px-2.5 py-1 mb-2">
              <Eye className="h-3 w-3 text-[#6EDC8C]" />
              <span className="text-[10px] font-semibold text-[#0E2A5A] uppercase tracking-wide">Real Results</span>
            </div>
<h2 className="text-2xl font-semibold text-[#0E2A5A]">
  Before & After <span className="text-[#6EDC8C]">Hair Regrowth</span> Results
</h2>
            <div className="h-0.5 w-10 bg-[#6EDC8C] mx-auto mt-1.5" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beforeAfterImages.map((item, idx) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Before Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.before}
                        alt={`Before Treatment ${idx + 1}`}
                        width={500}
                        height={400}
                        className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          BEFORE
                        </span>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.after}
                        alt={`After Treatment ${idx + 1}`}
                        width={500}
                        height={400}
                        className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-[#6EDC8C] text-[#0E2A5A] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          AFTER
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-2">
                      <Eye className="h-5 w-5 text-[#0E2A5A]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
         
        </div>
      </section>

      {/* CTA SECTION - Simplified */}
     
      <Footer />
    </main>
  );
}