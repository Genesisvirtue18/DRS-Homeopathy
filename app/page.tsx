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


import Image from "next/image";
import OurVideos from "@/sections/home/OurVideos/OurVideos";
import AppointmentBanner from "@/sections/home/AppointmentBanner/AppointmentBanner";
import Footer from "@/sections/home/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Testimonials />
      <SpecializationPage />
      <HomeDeliveryBanner />
      <HowItWorks />
      <Services />
      <Treatments />
      <MostTreatments />
      <Achievements />
      <PatientTestimonials />
      <OurVideos />
      <AppointmentBanner />
      <Footer />










    </>
  );
}