"use client";

import Image from "next/image";
import { MessageCircle, CreditCard, Package, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Talk With Expert",
    image: "/images/customer-service.png",
    icon: MessageCircle,
    description:
      "Connect with our experienced homeopathy expert for personalized consultation.",
  },
  {
    id: "02",
    title: "Payment",
    image: "/images/payment.png",
    icon: CreditCard,
    description:
      "Secure and easy payment process for consultation and medicine booking.",
  },
  {
    id: "03",
    title: "Courier Medicine",
    image: "/images/delivery.png",
    icon: Package,
    description:
      "Medicines delivered safely to your doorstep across India.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] to-white py-12 md:py-16">
      
      {/* Background Blurs - Compact */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6EDC8C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0E2A5A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Semibold heading */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-2 inline-flex items-center rounded-full bg-[#6EDC8C]/15 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0E2A5A]">
              Simple Process
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A5A] md:text-3xl lg:text-4xl">
            How It{" "}
            <span className="text-[#6EDC8C]">
              Works?
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
            Get expert care in three simple steps
          </p>
        </div>

        {/* COMPACT STEPS - Ultra compact grid */}
        <div className="relative grid gap-4 sm:gap-5 md:grid-cols-3">
          
          {/* Minimal Connector Line */}
          <div className="absolute left-1/2 top-20 hidden h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6EDC8C]/30 to-transparent md:block" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Step Number - Subtle background */}
              <div className="absolute right-3 top-3 text-4xl font-black text-[#0E2A5A]/5">
                {step.id}
              </div>

              {/* Icon Circle - Compact */}
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0E2A5A] to-[#1B3F6E] shadow-md">
                <step.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>

              {/* Small Image */}
              <div className="relative mt-3 flex justify-center">
                <div className="rounded-lg bg-[#F7FAFF] p-2">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>

              {/* Content - Tight spacing */}
              <div className="mt-3">
                <h3 className="text-base font-bold text-[#0E2A5A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="mt-3 flex items-center justify-center gap-0.5 text-[10px] font-medium text-[#6EDC8C] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>Step {step.id}</span>
                <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-[#6EDC8C]/40" />
            </div>
          ))}
        </div>

        {/* Trust Badge - Compact */}
       
      </div>
    </section>
  );
}