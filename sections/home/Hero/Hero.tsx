"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/slider/slide-01.jpg",
    title: "We Provide",
    name: "Dr. Rekha Saroha's BHMS (Gold Medalist, PGDEMS)",
    experience: "16 years of experience in field of homoeopathy",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    showContent: true,
  },
  {
    id: 2,
    image: "/slider/slide-02.jpg",
    showContent: false,
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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setImageLoaded(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setImageLoaded(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={`Slide ${currentSlide + 1}`}
          fill
          priority
          className={`object-cover object-center transition-all duration-[8000ms] ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{
            animation: imageLoaded ? "kenburns 20s ease-in-out infinite" : "none",
          }}
          onLoad={() => setImageLoaded(true)}
        />
          </div>

      {/* Content */}
      {currentSlideData.showContent && (
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          {/* Small decorative line above title */}
          <div
            className="animate-fadeInUp mb-3"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <div className="mx-auto h-0.5 w-12 bg-[#6EDC8C] rounded-full"></div>
          </div>

          {/* Title with better styling */}
          <div
            className="animate-fadeInDown"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[#6EDC8C] sm:text-base">
              {currentSlideData.title}
            </p>
          </div>

          {/* Name with better typography */}
          <div
            className="animate-fadeInDown mt-3"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <h1 className="text-2xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {currentSlideData.name}
            </h1>
          </div>

          {/* Experience with highlight */}
          <div
            className="animate-fadeInUp mt-4"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <p className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white/90 sm:text-base">
              {currentSlideData.experience}
            </p>
          </div>

          {/* Button with improved design */}
          <div
            className="animate-fadeInUp mt-8"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <Link
href={currentSlideData.ctaLink || "/"}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] px-7 py-3 font-semibold text-[#0E2A5A] transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-9 md:py-3.5"
            >
              <span className="text-sm md:text-base">{currentSlideData.ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Navigation Controls - Sleeker design */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:scale-110 md:left-6 md:p-2.5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:scale-110 md:right-6 md:p-2.5"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </>
      )}

      {/* Dots - Cleaner design */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 h-1 rounded-full bg-[#6EDC8C]"
                  : "w-1.5 h-1 rounded-full bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter - Optional subtle addition */}
      {slides.length > 1 && currentSlideData.showContent && (
        <div className="absolute bottom-6 right-6 z-20 text-xs text-white/40">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}