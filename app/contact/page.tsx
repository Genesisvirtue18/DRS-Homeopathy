"use client";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Sparkles,
    ArrowRight,
    Building2,
    Headphones,
    Clock3,
    Globe,
    MessageCircle,
    Heart,
} from "lucide-react";

import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";

export default function ContactPage() {
    return (
        <main className="overflow-hidden bg-white">

            <Navbar />

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#001E3C] via-[#0B2C66] to-[#001E3C] pt-40 pb-20 lg:pt-44">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
                        <Sparkles className="h-3.5 w-3.5 text-[#123B7A]" />
                        <span className="text-xs font-semibold text-white">Contact Us</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        Get In <span className="text-[#6EDC8C]">Touch</span>
                    </h1>
                    <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-300">
                        Connect with DRS Homeopathy for personalized consultation and expert healthcare support.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full">
                        <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* INFO CARDS */}
            <section className="relative -mt-8 z-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Location Card */}
                        <div className="group bg-white rounded-xl p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="bg-[#123B7A]/10 rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-[#123B7A] transition">
                                <Building2 className="h-5 w-5 text-[#123B7A] group-hover:text-white transition" />
                            </div>
                            <h3 className="mt-3 font-semibold text-[#001E3C] text-sm">Visit Us</h3>
                            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                D-6/127, Sector 6 Rd, Pocket 6, Sector 6D, Rohini, New Delhi - 110085
                            </p>
                            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                Plot no -179, Pocket 19, Sector-24, Rohini, New Delhi - 110085
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="group bg-white rounded-xl p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="bg-[#123B7A]/10 rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-[#123B7A] transition">
                                <Headphones className="h-5 w-5 text-[#123B7A] group-hover:text-white transition" />
                            </div>
                            <h3 className="mt-3 font-semibold text-[#001E3C] text-sm">Call Us</h3>
                            <div className="mt-1 space-y-1">
                                <a
                                    href="tel:+919911293060"
                                    className="block text-xs text-gray-500 hover:text-[#123B7A] transition"
                                >
                                    +91 9911293060
                                </a>
                                <a
                                    href="tel:+918882709593"
                                    className="block text-xs text-gray-500 hover:text-[#123B7A] transition"
                                >
                                    +91 8882709593
                                </a>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group bg-white rounded-xl p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="bg-[#123B7A]/10 rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-[#123B7A] transition">
                                <Globe className="h-5 w-5 text-[#123B7A] group-hover:text-white transition" />
                            </div>
                            <h3 className="mt-3 font-semibold text-[#001E3C] text-sm">Email Us</h3>
                            <a
                                href="mailto:drshomeopathy@gmail.com"
                                className="mt-1 text-xs text-gray-500 break-all hover:text-[#123B7A] transition block"
                            >
                                drshomeopathy@gmail.com
                            </a>
                        </div>

                        {/* Timing Card */}
                        <div className="group bg-white rounded-xl p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="bg-[#123B7A]/10 rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-[#123B7A] transition">
                                <Clock3 className="h-5 w-5 text-[#123B7A] group-hover:text-white transition" />
                            </div>
                            <h3 className="mt-3 font-semibold text-[#001E3C] text-sm">Working Hours</h3>
                            <p className="mt-1 text-xs text-gray-500">
                                Mon - Sat: 10:30 AM - 1:00 PM
                                <br />
                                5:00 PM - 7:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT & FORM SECTION */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">

                        {/* LEFT SIDE - Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-[#001E3C]">Get In Touch With Us</h2>
                                <div className="w-10 h-px bg-[#123B7A] mt-2" />
                                <p className="mt-3 text-sm text-gray-600">
                                    For general questions, please send us a message and we'll get right back to you. You can also call us directly to speak with us.
                                </p>
                            </div>

                            {/* Clinic Locations */}
                            <div>
                                <h3 className="font-semibold text-[#001E3C] text-sm mb-3 flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-[#123B7A]" />
                                    Our Clinics
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <MapPin className="h-4 w-4 text-[#123B7A] mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-600">
                                                D-6/127, Sector 6 Rd, Pocket 6, Sector 6D, Rohini, New Delhi - 110085
                                            </p>
                                            <a
                                                href="https://maps.app.goo.gl/7kJTskskieTyh9qp8"
                                                target="_blank"
                                                className="text-xs text-[#123B7A] hover:underline mt-1 inline-block"
                                            >
                                                Get Directions →
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <MapPin className="h-4 w-4 text-[#123B7A] mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-600">
                                                Plot no -179, Pocket 19, Sector-24, Rohini, New Delhi - 110085
                                            </p>
                                            <a
                                                href="https://g.co/kgs/osAzek"
                                                target="_blank"
                                                className="text-xs text-[#123B7A] hover:underline mt-1 inline-block"
                                            >
                                                Get Directions →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h3 className="font-semibold text-[#001E3C] text-sm mb-3 flex items-center gap-2">
                                    <Headphones className="h-4 w-4 text-[#123B7A]" />
                                    Reach Us
                                </h3>
                                <div className="space-y-2">
                                    <a href="tel:+919911293060" className="flex gap-2 items-center group hover:translate-x-1 transition">
                                        <Phone className="h-4 w-4 text-[#123B7A]" />
                                        <span className="text-xs text-gray-600 group-hover:text-[#123B7A] transition">+91 9911293060</span>
                                    </a>
                                    <a href="tel:+918882709593" className="flex gap-2 items-center group hover:translate-x-1 transition">
                                        <Phone className="h-4 w-4 text-[#123B7A]" />
                                        <span className="text-xs text-gray-600 group-hover:text-[#123B7A] transition">+91 8882709593</span>
                                    </a>
                                    <a href="mailto:drshomeopathy@gmail.com" className="flex gap-2 items-center group hover:translate-x-1 transition">
                                        <Mail className="h-4 w-4 text-[#123B7A]" />
                                        <span className="text-xs text-gray-600 group-hover:text-[#123B7A] transition break-all">drshomeopathy@gmail.com</span>
                                    </a>
                                </div>
                            </div>

                            {/* Working Time */}
                            <div>
                                <h3 className="font-semibold text-[#001E3C] text-sm mb-3 flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-[#123B7A]" />
                                    Schedule
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-600">
                                        <span className="font-medium">Monday - Saturday:</span><br />
                                        10:30 AM to 1:00 PM<br />
                                        5:00 PM to 7:00 PM
                                    </p>
                                </div>
                            </div>

                            {/* Social Connect */}
                            <div>
                                <h3 className="font-semibold text-[#001E3C] text-sm mb-3 flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-[#123B7A]" />
                                    Follow Us
                                </h3>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100054600572327"
                                        target="_blank"
                                        className="bg-[#001E3C] text-white rounded-full p-2 transition hover:scale-110 hover:bg-[#123B7A]"
                                    >
                                        <FaFacebookF className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/dr.rekhasaroha/?igshid=YmMyMTA2M2Y%3D"
                                        target="_blank"
                                        className="bg-[#001E3C] text-white rounded-full p-2 transition hover:scale-110 hover:bg-[#123B7A]"
                                    >
                                        <FaInstagram className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@Drrekhasaroha"
                                        target="_blank"
                                        className="bg-[#001E3C] text-white rounded-full p-2 transition hover:scale-110 hover:bg-[#123B7A]"
                                    >
                                        <FaYoutube className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="mailto:drshomeopathy@gmail.com"
                                        className="bg-[#001E3C] text-white rounded-full p-2 transition hover:scale-110 hover:bg-[#123B7A]"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE - Form - Height Reduced */}
                        <div className="bg-[#F0F4F9] rounded-xl p-6 shadow-lg h-fit">
                            <div className="flex items-center gap-2 mb-4">
                                <Send className="h-5 w-5 text-[#123B7A]" />
                                <h3 className="font-semibold text-[#001E3C]">Send us a Message</h3>
                            </div>

                            <form className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#123B7A] transition text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address *"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#123B7A] transition text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#123B7A] transition text-sm"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={3}
                                        placeholder="Your Message *"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#123B7A] transition text-sm resize-none"
                                    />
                                </div>
                                <button className="w-full bg-[#001E3C] text-white py-2 rounded-lg font-semibold text-sm transition hover:bg-[#123B7A] hover:scale-[1.02] inline-flex items-center justify-center gap-2">
                                    Send Message
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.259988113345!2d77.0929766!3d28.7176035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d113feb9c9%3A0x77927aebda79b77d!2sDRS%20homeopathy%20(Dr%20Rekha%20Saroha%20BHMS%20MD%2CHair%20and%20Skin%20expert)!5e0!3m2!1sen!2sin!4v1779077347057!5m2!1sen!2sin"
                            className="h-[350px] w-full border-0"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}