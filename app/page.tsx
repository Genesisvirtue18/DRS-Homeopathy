import type { Metadata } from "next";

import AboutDoctor from "@/sections/home/AboutDoctor/AboutDoctor";
import Achievements from "@/sections/home/Achievements/Achievements";
import Hero from "@/sections/home/Hero/Hero";
import HomeDeliveryBanner from "@/sections/home/HomeDeliveryBanner/HomeDeliveryBanner";
import HowItWorks from "@/sections/home/HowItWorks/HowItWorks";
import MostTreatments from "@/sections/home/MostTreatments/MostTreatments";
import Navbar from "@/sections/home/Navbar/Navbar";
import Services from "@/sections/home/Services/Services";
import SpecializationPage from "@/sections/home/Specialization/Specialization";
import Testimonials from "@/sections/home/Testimonial/Testimonial";
import Treatments from "@/sections/home/Treatment/Treatment";
import PatientTestimonials from "@/sections/home/PatientTestimonials/PatientTestimonials";
import OurVideos from "@/sections/home/OurVideos/OurVideos";
import AppointmentBanner from "@/sections/home/AppointmentBanner/AppointmentBanner";
import Footer from "@/sections/home/Footer/Footer";

export const metadata: Metadata = {
  title: "DRS Homeopathy Clinic | Best Homeopathy Doctor in Delhi",
  description:
    "DRS Homeopathy Clinic by Dr. Rekha Saroha provides effective homeopathic treatment for hair loss, kidney stone, allergy, BP, diabetes, migraine and chronic diseases in Delhi.",
  keywords: [
    "DRS Homeopathy",
    "Dr Rekha Saroha",
    "Best Homeopathy Doctor",
    "Homeopathy Clinic Delhi",
    "Hair Loss Treatment",
    "Kidney Stone Treatment",
    "Homeopathic Doctor",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecializationPage />
      <AboutDoctor />
      <Treatments />
      <OurVideos />
      <Testimonials />
      {/* <HomeDeliveryBanner /> */}
      <HowItWorks />
      <MostTreatments />
      <Achievements />
      <PatientTestimonials />
      <Services />
      <AppointmentBanner />
      <Footer />
    </>
  );
}