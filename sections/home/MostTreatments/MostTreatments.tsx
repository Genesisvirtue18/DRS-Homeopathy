"use client";

import { useState } from "react";
import {
  Baby,
  HeartPulse,
  Sparkles,
  Activity,
  Stethoscope,
  Shield,
  Droplets,
  Wind,
  Leaf,
} from "lucide-react";

const treatmentCategories = [
  {
    icon: Baby,
    title: "PEDIATRICS",
    treatments: [
      "Wheat Allergy",
      "Constipation",
      "Immunity and Allergy",
      "Diarrhea",
      "ADHD",
      "Autism",
      "Bed Wetting",
      "Behavioral Problems",
    ],
  },
  {
    icon: HeartPulse,
    title: "JOINT & MUSCLE",
    treatments: [
      "Osteoporosis Treatment",
      "Rheumatoid Arthritis",
      "Gout",
      "Cervical Spondylosis",
      "Back Pain",
      "Sciatica",
    ],
  },
  {
    icon: Shield,
    title: "SKIN AND HAIR",
    treatments: [
      "Psoriasis",
      "Vitilgo",
      "Acne & Scar",
      "Warts Treatment",
      "Blemishes Treatment",
      "Keloids Treatment",
      "Skin Allergy",
      "Eczema",
      "Lichen Planus",
      "Brittle Nails",
      "Alopecia Treatment",
      "Hairfall",
      "Greying of Hair",
      "Dandruff",
      "Seborrheic dermatitis",
    ],
  },
  {
    icon: Wind,
    title: "ALLERGIES",
    treatments: ["Food", "Immunity", "Respiratory", "Seasonal", "Wheat"],
  },
  {
    icon: Activity,
    title: "HORMONAL ISSUES",
    treatments: [
      "Low Libido",
      "Infertility",
      "Menopause",
      "Mood Swings",
      "PCOD",
      "Thyroid",
    ],
  },
  {
    icon: Droplets,
    title: "GIT",
    treatments: [
      "Acidity",
      "Constipation",
      "Hemorrhoids (Piles) Treatment",
      "Fissure Treatment",
      "Cirrhosis of Liver Treatment",
      "Fatty Liver",
      "Diarrhea",
    ],
  },
  {
    icon: Stethoscope,
    title: "FEMALE DISORDERS",
    treatments: [
      "Irregular Menses",
      "Pcod/Pcos",
      "Urinary Tract Infections (UTI)",
      "Thyroid",
      "Facial Hair",
      "Depression",
      "Infertility",
      "Leucorrhoea",
      "Menopause",
      "Mood Swings",
    ],
  },
  {
    icon: Leaf,
    title: "LIFESTYLE DISORDERS",
    treatments: [
      "Hypertension",
      "Diabetes",
      "Obesity",
      "Fatty Liver",
      "Uric Acid",
      "Immunity and Allergy",
    ],
  },
];

export default function MostTreatments() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeTreatments = treatmentCategories[activeCategory];
  const Icon = activeTreatments.icon;

  return (
<section className="relative overflow-hidden bg-[#F7FAFF] pt-10 pb-20 md:pt-14 md:pb-24">      {/* Background Blurs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER - Compact */}
        <div className="mb-8 mt-8 text-center">
          <div className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-[#6EDC8C]/15 px-2.5 py-0.5">
            <Sparkles className="h-2.5 w-2.5 text-[#0E2A5A]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0E2A5A]">
             We Treat
            </span>
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-[#0E2A5A] md:text-2xl lg:text-3xl">
            We <span className="text-[#6EDC8C]">Treat</span>
          </h2>

          <div className="mx-auto mt-1.5 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

          <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-600">
            Customer service is provided by a highly trained, professional staff who look after
            your comfort and care and are considerate of your time. Their focus is you.
          </p>
        </div>

        {/* Category Tabs - Compact */}
        <div className="mb-5 overflow-x-auto pb-1">
          <div className="flex gap-1.5 min-w-max">
            {treatmentCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isActive = activeCategory === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-300 ${
                    isActive
                      ? "bg-[#0E2A5A] text-white shadow-md"
                      : "bg-white text-[#0E2A5A] hover:bg-[#6EDC8C]/20"
                  }`}
                >
                  <CategoryIcon className="h-3.5 w-3.5" />
                  <span className="text-xs font-semibold whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content - Compact Card Design */}
        <div className="rounded-xl mt-5  bg-white p-4 shadow-md transition-all duration-300 md:p-5">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6EDC8C]/20 to-[#0E2A5A]/10">
                <Icon className="h-5 w-5 text-[#0E2A5A]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0E2A5A]">{activeTreatments.title}</h3>
                <div className="mt-0.5 h-0.5 w-8 rounded-full bg-[#6EDC8C]" />
              </div>
            </div>
            <div className="rounded-full bg-[#6EDC8C]/15 px-2.5 py-0.5">
              <span className="text-xs font-semibold text-[#0E2A5A]">
                {activeTreatments.treatments.length}
              </span>
            </div>
          </div>

          {/* Treatments Grid - Compact */}
          <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {activeTreatments.treatments.map((treatment, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-1.5 rounded-lg bg-[#F7FAFF] px-2 py-1.5 transition-all duration-300 hover:bg-[#6EDC8C]/10"
              >
                <span className="h-1 w-1 rounded-full bg-[#6EDC8C] transition-all duration-300 group-hover:scale-125" />
                <span className="text-[11px] font-medium text-gray-700 group-hover:text-[#0E2A5A]">
                  {treatment}
                </span>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}