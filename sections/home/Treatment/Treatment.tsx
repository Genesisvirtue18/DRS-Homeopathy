"use client";

import Image from "next/image";

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
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-[#0E2A5A] md:text-4xl">
            Advanced Homeopathy Treatments
            </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-[#6EDC8C]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            With years of experience and backed by state-of-the-art technology, DRS Homeopathy is dedicated to helping you be your best self
          </p>
        </div>

        {/* Simple Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <div className="h-48 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#0E2A5A]">{item.title}</h3>
                <div className="my-2 h-px w-8 bg-[#6EDC8C]" />
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}