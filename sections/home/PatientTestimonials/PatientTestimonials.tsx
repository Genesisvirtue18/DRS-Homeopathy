"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Natasha Sharma",
    role: "",
    review:
      "Dr Rekha is very knowledgeable and humble. We are highly satisfied with her treatments.",
  },
  {
    name: "Sp Singh NCIPM",
    role: "",
    review:
      "Very knowledgeable and experienced homeopathic physician in their area. One of the best Doctor in North India. We always wish to her for bright and excellent future.",
  },
  {
    name: "Wilmer Stevenson",
    role: "Creative Manager",
    review:
      "You guys are all amazing! Everyone I have met at your office is kind, thoughtful, and listens to me. Everyone is so friendly from the time you walk in the door to the time you leave the office.",
  },
];

export default function PatientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-[#001E3C] to-[#123B7A]" />
              <span className="text-sm font-medium uppercase tracking-wider text-[#0B2C66]">
                What People Says
              </span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight text-[#001E3C] md:text-3xl lg:text-4xl">
              Patient
              <span className="block text-[#123B7A]">
                Testimonials
              </span>
            </h2>

            

            {/* Testimonial Card */}
            <div className="mt-8">
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 h-16 w-16 text-[#123B7A]/5" />
                
                <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-[#2F5DA8]/10">
                  
                  <p className="relative text-base leading-relaxed text-[#0B2C66] min-h-[120px] z-10">
                    "{testimonials[currentIndex].review}"
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#2F5DA8]/10 pt-5">
                    <div>
                      <h4 className="font-bold text-[#001E3C]">
                        {testimonials[currentIndex].name}
                      </h4>
                      {testimonials[currentIndex].role && (
                        <p className="text-xs text-[#123B7A] mt-1">
                          {testimonials[currentIndex].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          currentIndex === idx
                            ? "h-2 w-8 bg-[#123B7A]"
                            : "h-2 w-2 bg-[#2F5DA8]/30 hover:bg-[#2F5DA8]/50"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2F5DA8]/20 bg-white text-[#0B2C66] transition-all hover:bg-[#001E3C] hover:border-[#001E3C] hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2F5DA8]/20 bg-white text-[#0B2C66] transition-all hover:bg-[#001E3C] hover:border-[#001E3C] hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Images */}
          <div className="relative">
            <div className="relative flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-96 md:w-96">
                <Image
                  src="/images/content/single-testimonials-author-1-1.png"
                  alt="Patient Result"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001E3C]/30 to-transparent" />
              </div>

              {/* Before Card */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-2 shadow-xl border border-[#2F5DA8]/10 md:-bottom-8 md:-left-8">
                <div className="relative">
                  <Image
                    src="/images/content/single-testimonials-author-1-2.jpg"
                    alt="Before Treatment"
                    width={100}
                    height={100}
                    className="h-24 w-24 rounded-xl object-cover md:h-32 md:w-32"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#001E3C] px-2 py-0.5">
                    <span className="text-[10px] font-semibold text-white">BEFORE</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -right-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl border border-[#2F5DA8]/10 md:-right-8 md:top-12">
                <p className="text-2xl font-bold text-[#001E3C]">98%</p>
                <p className="text-[10px] text-[#2F5DA8]">Satisfaction</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-[#2F5DA8]/10" />
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border border-[#123B7A]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}