"use client";

import { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, Star, Quote, Pause } from "lucide-react";

const testimonials = [
  { id: 1, video: "/videos/testimonials-1.mp4" },
  { id: 2, video: "/videos/testimonials-2.mp4" },
  { id: 3, video: "/videos/testimonials-3.mp4" },
  { id: 4, video: "/videos/testimonials-4.mp4" },
  { id: 5, video: "/videos/testimonials-5.mp4" },
  { id: 6, video: "/videos/tstimonials-6.mp4" },
  { id: 7, video: "/videos/testimonials-7.mp4" },
  { id: 8, video: "/videos/testimonials-8.mp4" },
  { id: 9, video: "/videos/testimonials-9.mp4" },
  { id: 10, video: "/videos/testimonials10.mp4" },
  { id: 11, video: "/videos/testimonials11.mp4" },
  { id: 12, video: "/videos/testimonials12.mp4" },
  { id: 13, video: "/videos/testimonials13.mp4" },
  { id: 14, video: "/videos/testimonials14.mp4" },
  { id: 15, video: "/videos/testimonials15.mp4" },
  { id: 16, video: "/videos/testimonials16.mp4" },
  { id: 17, video: "/videos/testimonials17.mp4" },
  { id: 18, video: "/videos/testimonials18.mp4" },
  { id: 19, video: "/videos/testimonials19.mp4" },
  { id: 20, video: "/videos/testimonials20.mp4" },
  { id: 21, video: "/videos/testimonials21.mp4" },
  { id: 22, video: "/videos/testimonials22.mp4" },
  { id: 23, video: "/videos/testimonials23.mp4" },
  { id: 24, video: "/videos/testimonials24.mp4" },
  { id: 25, video: "/videos/testimonials25.mp4" },
  { id: 26, video: "/videos/testimonials26.mp4" },
  { id: 27, video: "/videos/testimonials27.mp4" },
  { id: 28, video: "/videos/testimonials28.mp4" },
  { id: 29, video: "/videos/testimonials29.mp4" },
  { id: 30, video: "/videos/testimonials30.mp4" },
  { id: 31, video: "/videos/testimonials31.mp4" },
  { id: 32, video: "/videos/testimonials32.mp4" },
  { id: 33, video: "/videos/testimonials33.mp4" },
  { id: 34, video: "/videos/testimonials34.mp4" },
  { id: 35, video: "/videos/testimonials35.mp4" },
  { id: 36, video: "/videos/testimonials36.mp4" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const visibleVideos = testimonials.slice(currentIndex, currentIndex + 3);
  const totalSlides = Math.ceil(testimonials.length / 3);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0);
    }
    // Pause all videos when changing slides
    Object.values(videoRefs.current).forEach((ref) => {
      if (ref) {
        ref.pause();
      }
    });
    setPlayingId(null);
  };

  const prevSlide = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      setCurrentIndex(Math.floor((testimonials.length - 1) / 3) * 3);
    }
    Object.values(videoRefs.current).forEach((ref) => {
      if (ref) {
        ref.pause();
      }
    });
    setPlayingId(null);
  };

  const handleVideoPlay = (id: number) => {
    // Pause auto-scroll when user interacts with video
    setIsAutoPlaying(false);
    
    Object.keys(videoRefs.current).forEach((key) => {
      const videoId = parseInt(key);
      if (videoId !== id && videoRefs.current[videoId]) {
        videoRefs.current[videoId]?.pause();
      }
    });
    setPlayingId(playingId === id ? null : id);
    
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index * 3);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#F8FBFF] py-5 md:py-5">
      
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#6EDC8C]/5 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#0E2A5A]/5 blur-3xl animate-pulse delay-1000" />
      
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Section Header - Impressive Mobile Design */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C]/20 to-[#6EDC8C]/10 px-4 py-1.5 mb-3">
            <Star className="h-3.5 w-3.5 text-[#6EDC8C] fill-[#6EDC8C]" />
            <span className="text-xs font-semibold text-[#0E2A5A]">Patient Stories</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#0E2A5A] sm:text-3xl md:text-4xl">
            What Our <span className="text-[#6EDC8C] relative inline-block">
              Patients Say
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" fill="none">
                <path d="M2 2C30 1 70 1 98 2" stroke="#6EDC8C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#6EDC8C]"></div>
            <Quote className="h-4 w-4 text-[#6EDC8C]/50" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#6EDC8C]"></div>
          </div>
          
          <p className="mt-3 text-xs text-gray-500 sm:text-sm">Real stories from our happy patients</p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div className="relative px-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl text-[#0E2A5A] transition-all duration-300 hover:scale-110 hover:bg-[#0E2A5A] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl text-[#0E2A5A] transition-all duration-300 hover:scale-110 hover:bg-[#0E2A5A] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Video Grid */}
            <div className="grid grid-cols-3 gap-6">
              {visibleVideos.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  onMouseEnter={() => setHoveredId(testimonial.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-[#0E2A5A] to-[#1E3A6E]">
                    <video
                      ref={(el) => {
                        videoRefs.current[testimonial.id] = el;
                      }}
                      src={testimonial.video}
                      className="h-full w-full object-contain"
                      controls
                      onPlay={() => handleVideoPlay(testimonial.id)}
                      onPause={() => setPlayingId(null)}
                      playsInline
                    />

                    {/* Video Badge */}
                    <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
                      Testimonial {testimonial.id}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-xs text-gray-500">Verified Patient</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === idx
                      ? "w-8 h-2 bg-[#6EDC8C]"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Indicator */}
           
          </div>
        </div>

        {/* Mobile Design - Horizontal Scroll with Snap Points */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Mobile Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className="w-[280px] flex-shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="relative aspect-video bg-gradient-to-br from-[#0E2A5A] to-[#1E3A6E]">
                        <video
                          ref={(el) => {
                            videoRefs.current[testimonial.id] = el;
                          }}
                          src={testimonial.video}
                          className="h-full w-full object-contain"
                          controls
                          playsInline
                        />
                        <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white backdrop-blur-sm">
                          #{testimonial.id}
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-2.5 w-2.5 fill-[#6EDC8C] text-[#6EDC8C]" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">Verified Patient</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Hint */}
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                <div className="flex gap-1">
                  <div className="h-1 w-4 rounded-full bg-[#6EDC8C]"></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-[10px] text-gray-500">Swipe to see more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}