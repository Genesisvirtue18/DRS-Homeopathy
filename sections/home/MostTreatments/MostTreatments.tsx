"use client";

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
    title: "DIGESTIVE CARE",
    treatments: [
      "Acidity",
      "Constipation",
      "Hemorrhoids (Piles)",
      "Fissure",
      "Cirrhosis of Liver",
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
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-16 md:py-20">
      
      {/* Background Blurs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Same pattern as previous */}
        <div className="mb-12 text-center">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 px-3 py-1">
            <Sparkles className="h-3 w-3 text-[#0E2A5A]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0E2A5A]">
              Most Treatments
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A5A] md:text-3xl lg:text-4xl">
            Most{" "}              Treatments

            <span className="text-[#6EDC8C]">
            </span>
          </h2>

          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#6EDC8C]" />

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            Customer service is provided by a highly trained, professional staff who look after your comfort and care and are considerate of your time. Their focus is you.
          </p>
        </div>

        {/* GRID - Same card pattern as previous components */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {treatmentCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6EDC8C]/15 transition duration-300 group-hover:bg-[#0E2A5A]">
                  <Icon className="h-6 w-6 text-[#0E2A5A] transition duration-300 group-hover:text-[#6EDC8C]" />
                </div>

                {/* TITLE */}
                <h3 className="mt-3 text-base font-bold text-[#0E2A5A]">
                  {category.title}
                </h3>

                {/* DECORATIVE LINE */}
                <div className="my-2 h-px w-8 bg-[#6EDC8C] transition-all duration-300 group-hover:w-12" />

                {/* TREATMENT LIST */}
                <ul className="mt-3 space-y-1.5">
                  {category.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6EDC8C] flex-shrink-0" />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        {treatment}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}