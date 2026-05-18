"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/slider/slide-01.jpg",
    title: "Dr.Rekha Saroha",
    name: "DRS Homoeopathy Clinic",
    experience:
      "DRS Homeopathy, Dr.Rekha Saroha's BHMS(Gold Medalist), PGDEMS, MD(Paediatric) provide you Best homoeopathic treatment for all acute and chronic cases at DRS Homoeopathy Clinic.",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    showContent: true,
  },
  {
    id: 2,
    image: "/slider/slide-02.jpg",
    title: "We Provide",
    name: "Dr.Rekha Saroha's BHMS (GOLD Medalist, PGDEMS)",
    experience: "16 years of experience in field of homoeopathy",
    // ctaText: "Contact Us",
    // ctaLink: "/contact",
    showContent: true,
  },
  {
    id: 3,
    image: "/slider/slide4.jpg",
    showContent: false,
  },
  {
    id: 4,
    image: "/slider/slide5.jpg",
    showContent: false,
  },
  {
    id: 5,
    image: "/slider/slide6.jpg",
    showContent: false,
  },
];
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[48vh] min-h-[360px] w-full overflow-hidden md:h-screen">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
            backgroundSize: window.innerWidth < 768 ? "contain" : "cover",
            backgroundPosition:
              currentSlide === 0
                ? "72% center"
                : "center center",
          }}
        />

      </div>

      {/* Content - Only shown on first slide */}
      {currentSlideData.showContent && (
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 pt-14 text-center md:px-6 md:pt-0">          {/* Small decorative line above title */}
          <div className="mb-2 md:mb-3">
            <div className="mx-auto h-0.5 w-8 rounded-full bg-[#6EDC8C] md:w-12" />
          </div>

          {/* Title */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#6EDC8C] md:text-sm">
              {currentSlideData.title}
            </p>
          </div>

          {/* Name - Responsive text for mobile */}
          <div className="mt-2 md:mt-3">
            <h1 className="max-w-[95%] text-sm font-semibold leading-tight text-white md:max-w-full md:text-2xl lg:text-3xl xl:text-4xl">
              {currentSlideData.name}
            </h1>
          </div>

          {/* Experience */}
          <div className="mt-3 md:mt-4">
            <p className="mx-auto max-w-5xl rounded-2xl bg-black/50 px-4 py-3 text-center text-xs font-medium leading-relaxed text-white backdrop-blur-sm md:px-6 md:py-4 md:text-sm">              {currentSlideData.experience}
            </p>
          </div>

          {/* Button */}
          {currentSlideData.ctaText && (
            <div className="mt-5 hidden sm:block md:mt-8">
              <Link
                href={currentSlideData.ctaLink || "/"}
                className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#001E3C] md:px-7 md:py-3 md:text-base"    >
                <span>{currentSlideData.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Navigation Controls - Larger touch targets for mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/60 active:scale-95 md:left-6 md:p-2.5"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/60 active:scale-95 md:right-6 md:p-2.5"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {/* Dots - Better spacing for mobile */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-6 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${currentSlide === index
              ? "h-1.5 w-6 rounded-full bg-[#6EDC8C] md:w-6"
              : ":h-2 w-2 rounded-full bg-[#001E3C]/40 hover:bg-[#001E3C]/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      {currentSlide === 0 && (
        <div className="absolute bottom-4 right-3 z-20 text-xs text-white/50 md:bottom-6 md:right-6 md:text-xs">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      )}
    </section>
  );
}