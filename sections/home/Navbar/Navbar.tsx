"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronRight,
  Sparkles,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=100054600572327",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dr.rekhasaroha/?igshid=YmMyMTA2M2Y%3D",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@Drrekhasaroha",
    label: "YouTube",
  },
  {
    icon: IoMdMail,
    href: "mailto:drshomeopathy@gmail.com",
    label: "Email",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add animation keyframes to document head
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-pulse-slow {
        animation: pulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/98 shadow-2xl backdrop-blur-md"
          : "bg-white shadow-lg"
      }`}
    >
      {/* COMPACT TOP BAR */}
      <div className="hidden bg-gradient-to-r from-[#001E3C] via-[#0B2C66] to-[#001E3C] lg:block relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236EDC8C' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 relative">
          <div className="flex items-center gap-6 text-xs text-white">
            <a href="tel:+919911293060" className="flex items-center gap-1.5 group cursor-pointer transition-all hover:translate-x-0.5">
              <Phone size={12} className="text-[#6EDC8C] group-hover:rotate-12 transition" />
              <span>+91 9911293060</span>
            </a>
            <div className="flex items-center gap-1.5 group cursor-pointer transition-all hover:translate-x-0.5">
              <MapPin size={12} className="text-[#6EDC8C] group-hover:scale-110 transition" />
              <span>Rohini, Delhi</span>
            </div>
            <a href="mailto:drshomeopathy@gmail.com" className="flex items-center gap-1.5 group cursor-pointer transition-all hover:translate-x-0.5">
              <Mail size={12} className="text-[#6EDC8C] group-hover:-rotate-12 transition" />
              <span>drshomeopathy@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target={social.label === "Email" ? "_self" : "_blank"}
                  rel={social.label === "Email" ? "" : "noopener noreferrer"}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-full bg-[#6EDC8C] opacity-0 blur-md transition-opacity group-hover:opacity-30"></div>
                  <social.icon
                    size={14}
                    className="text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-[#6EDC8C]"
                  />
                </Link>
              ))}
            </div>

            {/* Success Rate Badge */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] opacity-60 blur-sm group-hover:opacity-100 transition duration-200"></div>
              <div className="relative rounded-full bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] px-4 py-1">
                <p className="flex items-center gap-1.5 text-xs font-bold text-[#001E3C]">
                  <Sparkles size={12} className="animate-pulse" />
                  90% Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPACT MAIN NAVBAR */}
      <nav
        className={`mx-auto flex h-15 max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        {/* LOGO with animation */}
        <Link href="/" className="group relative flex items-center">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#6EDC8C]/20 to-transparent opacity-0 blur-xl group-hover:opacity-100 transition duration-500"></div>
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="DRS Homeopathy"
              width={180}
              height={60}
              className="h-auto w-auto transition-all duration-300 group-hover:scale-105"
              priority
            />
          </div>
          {/* Brand Tagline */}
          <div className="hidden ml-3 pl-3 border-l border-gray-200 lg:block">
            <p className="text-xs text-gray-500 leading-tight">Trusted Homeopathy</p>
            <p className="text-xs font-semibold text-[#001E3C]">Since 2010</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[15px] font-semibold text-[#001E3C] transition-all duration-300 hover:text-[#6EDC8C]"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT BUTTONS - Compact */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919911293060"
            className="group relative overflow-hidden rounded-full border border-[#001E3C] px-4 py-2 text-sm font-semibold text-[#001E3C] transition-all duration-300 hover:border-[#6EDC8C] hover:text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#001E3C] to-[#1E3A6E] -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative flex items-center gap-1.5">
              <Phone size={14} className="transition-transform group-hover:scale-110" />
              Call Now
            </span>
          </a>

          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] px-5 py-2 text-sm font-semibold text-[#001E3C] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#6EDC8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-1.5">
              <Calendar size={14} className="transition-transform group-hover:rotate-12" />
              Book Now
              <ArrowRight size={14} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#001E3C] to-[#1E3A6E] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
            {open ? (
              <X className="h-4 w-4 text-white" />
            ) : (
              <Menu className="h-4 w-4 text-white" />
            )}
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex-1 px-6 py-6">
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group relative block transform overflow-hidden rounded-lg px-4 py-3 text-base font-semibold text-[#001E3C] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6EDC8C]/10 hover:to-transparent hover:pl-6"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                    animation: open ? "slideIn 0.3s ease-out forwards" : "none",
                  }}
                >
                  {item.name}
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" size={16} />
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+919911293060"
                className="group relative w-full overflow-hidden rounded-full border border-[#001E3C] py-3 text-sm font-semibold text-[#001E3C] transition-all duration-300 hover:border-[#6EDC8C] hover:text-white block text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#001E3C] to-[#1E3A6E] -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <Phone size={16} />
                  Call Now
                </span>
              </a>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#6EDC8C] to-[#4CAF50] py-3 text-sm font-semibold text-[#001E3C] shadow-lg transition-all duration-300 hover:scale-[1.02] block text-center"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <Calendar size={16} />
                  Book Appointment
                </span>
              </Link>
            </div>

            {/* Contact & Social */}
            <div className="mt-8 space-y-4">
              <div className="space-y-2 rounded-xl bg-gradient-to-br from-[#001E3C]/5 to-transparent p-4">
                <a href="tel:+919911293060" className="flex items-center gap-2 text-sm text-[#001E3C]/80 hover:text-[#6EDC8C] transition">
                  <Phone size={12} className="text-[#6EDC8C]" />
                  <span>+91 9911293060</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-[#001E3C]/80">
                  <MapPin size={12} className="text-[#6EDC8C]" />
                  <span>Rohini, Delhi</span>
                </div>
                <a href="mailto:drshomeopathy@gmail.com" className="flex items-center gap-2 text-sm text-[#001E3C]/80 hover:text-[#6EDC8C] transition">
                  <Mail size={12} className="text-[#6EDC8C]" />
                  <span>drshomeopathy@gmail.com</span>
                </a>
              </div>

              {/* Social Icons Mobile */}
              <div className="flex justify-center gap-4 pt-2">
                {socialLinks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target={social.label === "Email" ? "_self" : "_blank"}
                    rel={social.label === "Email" ? "" : "noopener noreferrer"}
                    className="transform rounded-full bg-gradient-to-br from-[#001E3C] to-[#1E3A6E] p-2 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6EDC8C]/20 to-transparent px-4 py-2">
              <Sparkles size={14} className="text-[#6EDC8C] animate-pulse" />
              <span className="text-xs font-semibold text-[#001E3C]">Trusted by 10,000+ Patients</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}