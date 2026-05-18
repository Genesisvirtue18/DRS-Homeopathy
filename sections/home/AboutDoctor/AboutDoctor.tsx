"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Play,
  Award,
  Phone,
  Calendar,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";

const videos = [
  {
    id: 1,
    embed:
      "https://www.youtube.com/embed/EhTOg_tsi78?si=h4UEz0ioV7GC3fSe&enablejsapi=1",
    thumbnail: "/yt-thumbnail-1.jpg",
    title: "Introduction to Homeopathy",
  },
  {
    id: 2,
    embed:
      "https://www.youtube.com/embed/ouWLQ86znIU?si=FkwiWgEoKyv5nf6q&enablejsapi=1",
    thumbnail: "/yt-thumbnail-2.jpg",
    title: "Treatment for Chronic Diseases",
  },
  {
    id: 3,
    embed:
      "https://www.youtube.com/embed/D1r8TJgZELA?si=Kj6LcuJ6Cg8vSiRg&enablejsapi=1",
    thumbnail: "/yt-thumbnail-3.jpg",
    title: "Patient Success Stories",
  },
];

export default function AboutDoctor() {
  const [activeVideo, setActiveVideo] = useState(videos[0].embed);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FBFF] to-white py-16 md:py-20">
      
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#6EDC8C]/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#0E2A5A]/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C]/20 to-[#6EDC8C]/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#6EDC8C]" />
            <span className="text-xs font-semibold text-[#0E2A5A]">16+ Years of Excellence</span>
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[3px] text-[#6EDC8C]">
            Welcome to our Homoeopathy Clinic
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0E2A5A] md:text-4xl">
            Meet{" "}
            <span className="text-[#6EDC8C]">Dr. Rekha Saroha</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          
          {/* LEFT - VIDEO SECTION */}
          <div className="space-y-4">
            {/* Main Video Player */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E2A5A] to-[#1E3A6E] p-2 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl bg-black">
                <iframe
                  src={activeVideo}
                  className="h-[280px] w-full md:h-[320px]"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="grid grid-cols-3 gap-3">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(video.embed);
                    setIsPlaying(false);
                  }}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    activeVideo === video.embed
                      ? "ring-2 ring-[#6EDC8C] ring-offset-2"
                      : "hover:scale-105"
                  }`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    
                    <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <Play className="ml-0.5 h-4 w-4 text-[#0E2A5A]" />
                    </div>

                    {activeVideo === video.embed && (
                      <div className="absolute bottom-2 left-2 rounded-full bg-[#6EDC8C] px-2 py-0.5 text-[10px] font-semibold text-[#0E2A5A]">
                        Playing
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - CONTENT SECTION */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Call for appointment */}
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-[#6EDC8C]" />
              <span className="text-gray-600">Call For Appointment:</span>
              <Link href="tel:9911293060" className="font-semibold text-[#0E2A5A] hover:text-[#6EDC8C] transition">
                9911293060
              </Link>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://6uyedz-fv.myshopify.com/pages/quiz"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E2A5A] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1E3A6E] shadow-md"
              >
                <ClipboardList className="h-4 w-4" />
                Take A Free Hair Test
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://6uyedz-fv.myshopify.com/collections/all"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E2A5A] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1E3A6E] shadow-md"
              >
                <ShoppingBag className="h-4 w-4" />
                Click To Order
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Qualification */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 px-3 py-1">
                <Award className="h-3.5 w-3.5 text-[#0E2A5A]" />
                <span className="text-xs font-semibold text-[#0E2A5A]">Gold Medalist</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#6EDC8C]/15 px-3 py-1">
                <Star className="h-3.5 w-3.5 text-[#6EDC8C]" />
                <span className="text-xs font-semibold text-[#0E2A5A]">BHMS, PGDEMS, MD</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-sm leading-relaxed text-gray-600">
              <p>
                "DRS Homeopathy, Dr. Rekha Saroha's BHMS (Gold Medalist), PGDEMS, MD (Paediatric) provide you Best homoeopathic treatment for all acute and chronic cases at DRS Homoeopathy Clinic. We are having 16 years of experience in field of homoeopathy. We provide you all the treatment both way online or offline."
              </p>
              <p>
                Tele consultation also available. Patient get treatment with a holistic approach and get a way to permanent cure with a safe and gentle way of healing. We deal with all diseases of our body, best Homoeopathy treatment for female disorders, hair and skin problems.
              </p>
            </div>

            {/* Stats - Compact Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="group rounded-xl bg-gradient-to-br from-white to-[#F8FBFF] p-3 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-[#0E2A5A] group-hover:text-[#6EDC8C] transition">10K+</h3>
                <p className="text-[11px] text-gray-500">Happy Patients</p>
              </div>
              <div className="group rounded-xl bg-gradient-to-br from-white to-[#F8FBFF] p-3 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-[#0E2A5A] group-hover:text-[#6EDC8C] transition">16+</h3>
                <p className="text-[11px] text-gray-500">Years Exp.</p>
              </div>
              <div className="group rounded-xl bg-gradient-to-br from-white to-[#F8FBFF] p-3 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-[#0E2A5A] group-hover:text-[#6EDC8C] transition">90%</h3>
                <p className="text-[11px] text-gray-500">Success Rate</p>
              </div>
            </div>

            {/* Main Booking Button */}
            <div className="pt-2">
              <Link
                href="https://superprofile.bio/bookings/drrekhasaroha"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0E2A5A] to-[#1E3A6E] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto md:px-6"
              >
                <Calendar className="h-4 w-4" />
                Book online Consultation and Clinic Appointment
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Badge */}
           
          </div>
        </div>
      </div>
    </section>
  );
}