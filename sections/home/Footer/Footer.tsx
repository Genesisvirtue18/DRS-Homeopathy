"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Hair Loss Treatment", href: "/treatments/hair-loss" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },

];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001E3C] text-white">
      
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#123B7A]/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#2F5DA8]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* COLUMN 1 - Logo & Social */}
          <div className="lg:col-span-4">
            <div className="flex flex-col md:flex-row lg:flex-col gap-6">
              <div>
                <Image
                  src="/images/footer-logo.png"
                  alt="DRS Homeopathy"
                  width={200}
                  height={70}
                  className="h-auto bg-white w-48 rounded-lg p-2"
                />
                <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-md">
                  We are having 16 years of experience in field of homoeopathy. We provide u all the treatment both way online or offline.
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100054600572327"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:bg-[#123B7A] hover:border-[#123B7A] hover:scale-110"
                >
                  <FaFacebookF className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/dr.rekhasaroha/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:bg-[#123B7A] hover:border-[#123B7A] hover:scale-110"
                >
                  <FaInstagram className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:drshomeopathy@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:bg-[#123B7A] hover:border-[#123B7A] hover:scale-110"
                >
                  <Mail className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.youtube.com/@Drrekhasaroha"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:bg-[#123B7A] hover:border-[#123B7A] hover:scale-110"
                >
                  <FaYoutube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 2 - Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-[#123B7A]" />
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-gray-300 transition duration-300 hover:text-[#123B7A]"
                  >
                    <ArrowUpRight className="mr-2 h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Our Contacts */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold">Our Contacts</h3>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-[#123B7A]" />
            
            <ul className="mt-5 space-y-5">
              {/* Address 1 */}
              <li className="flex gap-3 group">
                <MapPin className="h-5 w-5 text-[#123B7A] flex-shrink-0 mt-0.5 transition group-hover:scale-110" />
                <div>
                  <p className="text-sm text-gray-300">
                    D-6/397, Sector 6 Rohini, Delhi
                    <br />
                    Near Vidhya Jain Public School, Gate No. 3
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/7kJTskskieTyh9qp8"
                    target="_blank"
                    className="mt-2 inline-flex items-center text-xs text-[#123B7A] hover:underline"
                  >
                    Get directions on the map →
                  </Link>
                </div>
              </li>

              {/* Address 2 */}
              <li className="flex gap-3 group">
                <MapPin className="h-5 w-5 text-[#123B7A] flex-shrink-0 mt-0.5 transition group-hover:scale-110" />
                <div>
                  <p className="text-sm text-gray-300">
                    Plot no -179, Pocket 19, Sector-24, Rohini, New Delhi, Delhi, 110085
                  </p>
                  <Link
                    href="https://g.co/kgs/osAzek"
                    target="_blank"
                    className="mt-2 inline-flex items-center text-xs text-[#123B7A] hover:underline"
                  >
                    Get directions on the map →
                  </Link>
                </div>
              </li>

              {/* Phone */}
              <li className="flex gap-3 group">
                <Phone className="h-5 w-5 text-[#123B7A] flex-shrink-0 transition group-hover:scale-110" />
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold">+91 9911293060</span>, <span className="font-semibold">+91 8882709593</span>
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 group">
                <Mail className="h-5 w-5 text-[#123B7A] flex-shrink-0 transition group-hover:scale-110" />
                <Link
                  href="mailto:drshomeopathy@gmail.com"
                  className="text-sm text-gray-300 transition hover:text-[#123B7A]"
                >
                  drshomeopathy@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-10 mb-8 overflow-hidden rounded-xl shadow-lg border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.259988113345!2d77.0929766!3d28.7176035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d113feb9c9%3A0x77927aebda79b77d!2sDRS%20homeopathy%20(Dr%20Rekha%20Saroha%20BHMS%20MD%2CHair%20and%20Skin%20expert)!5e0!3m2!1sen!2sin!4v1779077347057!5m2!1sen!2sin"
            className="h-[250px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* BOTTOM BAR - Clean & Impressive */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-400 md:flex-row md:w-full">
            <p>© 2026 DRS Homeopathy. All Rights Reserved.</p>
            
            <div className="flex items-center gap-2">
              <span>Developed By</span>
              <Link
                href="https://genesistvirtue.com"
                target="_blank"
                className="group relative font-semibold text-[#123B7A] transition-all duration-300 hover:text-[#123B7A]/80"
              >
                Genesis Virtue
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#123B7A] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Heart className="h-3 w-3 text-red-400/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}