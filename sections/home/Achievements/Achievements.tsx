"use client";

import { useEffect, useState, useRef } from "react";
import {
  Award,
  Smile,
  Users,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    endNumber: 14,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Providing trusted and advanced homeopathic healthcare services.",
  },
  {
    icon: Smile,
    endNumber: 98,
    suffix: "%",
    title: "Happy Patients",
    description:
      "Thousands of satisfied patients with successful treatment outcomes.",
  },
  {
    icon: Users,
    endNumber: 5,
    suffix: "+",
    title: "Specialists",
    description:
      "Experienced professionals dedicated to personalized patient care.",
  },
  {
    icon: HeartPulse,
    endNumber: 27,
    suffix: "+",
    title: "Our Treatments",
    description:
      "Comprehensive treatments for chronic and lifestyle health issues.",
  },
];

export default function Achievements() {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          achievements.forEach((item, index) => {
            let start = 0;
            const end = item.endNumber;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#0E2A5A] via-[#123B7A] to-[#0E2A5A] py-12 md:py-16"
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#6EDC8C]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#6EDC8C]/5 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%236EDC8C%27%20fill-opacity=%270.03%27%3E%3Cpath%20d=%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Compact */}
        <div className="mb-8 text-center md:mb-10">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#6EDC8C]/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-[#6EDC8C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Our Achievements
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
            What Have We{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#6EDC8C]">Achieved</span>
              <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#6EDC8C]/40 rounded-full" />
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs text-blue-100">
            Delivering trusted homeopathic care with years of expertise, successful treatments and patient satisfaction.
          </p>
        </div>

        {/* STATS GRID - More Compact */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6EDC8C]/10"
              >
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6EDC8C]/0 via-[#6EDC8C]/20 to-[#6EDC8C]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Floating Number Background */}
                <div className="absolute right-3 top-3 text-5xl font-black text-white/5">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#6EDC8C]/20 to-[#6EDC8C]/5 transition-all duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-[#6EDC8C]" strokeWidth={1.5} />
                </div>

                {/* Animated Number */}
                <h3 className="mt-3 text-3xl font-bold text-white">
                  {counts[index]}
                  {item.suffix}
                </h3>

                {/* Decorative Line */}
                <div className="mx-auto mt-2 h-px w-8 bg-gradient-to-r from-transparent via-[#6EDC8C] to-transparent transition-all duration-300 group-hover:w-12" />

                {/* Title */}
                <h4 className="mt-3 text-sm font-semibold text-white">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-1 text-[11px] text-blue-100/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}