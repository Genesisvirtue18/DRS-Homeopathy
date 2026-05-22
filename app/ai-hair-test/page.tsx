"use client";

import { useState } from "react";
import {
  ArrowRight,
  User,
  HeartPulse,
  Brain,
  ScanLine,
  Sparkles,
} from "lucide-react";

import AboutYouStep from "@/components/aiHairTest/steps/AboutYouStep";
import HairHealthStep from "@/components/aiHairTest/steps/HairHealthStep";
import InternalHealthStep from "@/components/aiHairTest/steps/InternalHealthStep";
import ScalpAssessmentStep from "@/components/aiHairTest/steps/ScalpAssessmentStep";
import Navbar from "@/sections/home/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";
import TestNavbar from "@/components/aiHairTest/shared/TestNavbar";

export default function AIHairTestPage() {
  const [step, setStep] = useState(1);
  const [aboutYouFieldIndex, setAboutYouFieldIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    gender: "",
    hairFallImage: "",
    familyHistory: "",
    dandruff: "",
    stress: "",
    sleep: "",
    thyroid: "",
    pcod: "",
    medications: "",
    scalpImages: {},
  });

  const steps = ["About You", "Hair Health", "Internal Health", "Scalp Assessment"];
  const progress = ((step - 1) / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
      // Reset About You field index when moving forward
      if (step + 1 === 2) {
        setAboutYouFieldIndex(0);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      // When going back to About You step, reset to the last field (gender)
      if (step - 1 === 1) {
        setAboutYouFieldIndex(3); // Set to gender field (index 3)
      }
    }
  };

  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    // Add your API call here
    alert("Analysis complete! Check console for results.");
  };

  // Check if current step is complete (for auto-advance hint only)
  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.name && formData.mobile && formData.age && formData.gender;
      case 2:
        return formData.hairFallImage && formData.familyHistory && formData.dandruff;
      case 3:
        return formData.stress && formData.sleep;
      case 4:
        return Object.keys(formData.scalpImages).length > 0;
      default:
        return false;
    }
  };

  return (
    <>
      <TestNavbar />
      <main className="min-h-screen bg-gradient-to-br from-[#F7FAFF] to-white px-4 py-8 pt-12 md:py-6 md:pt-14">
        <div className="mx-auto max-w-4xl">
          {/* Exit Button */}
          <div className="flex justify-end">
            <button className="text-sm font-medium text-[#0E2A5A] underline transition hover:text-[#6EDC8C]">
              Exit
            </button>
          </div>

          {/* Steps - Compact */}
          <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
            {steps.map((item, index) => {
              const current = index + 1;
              const isActive = step === current;
              const isCompleted = step > current;

              return (
                <div
                  key={item}
                  className={`relative rounded-xl border px-3 py-3 transition-all duration-300 ${
                    isActive
                      ? "border-[#6EDC8C] bg-[#0E2A5A] text-white shadow-md"
                      : isCompleted
                      ? "border-[#6EDC8C]/50 bg-[#6EDC8C]/10 text-[#0E2A5A]"
                      : "border-gray-200 bg-white text-[#0E2A5A]/60"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                      {current === 1 && <User className="h-3.5 w-3.5" />}
                      {current === 2 && <HeartPulse className="h-3.5 w-3.5" />}
                      {current === 3 && <Brain className="h-3.5 w-3.5" />}
                      {current === 4 && <ScanLine className="h-3.5 w-3.5" />}
                    </div>
                    <span className="text-xs font-semibold">{item}</span>
                  </div>
                  {isCompleted && (
                    <div className="absolute right-2 top-2">
                      <Sparkles className="h-3 w-3 text-[#6EDC8C]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Bar - Compact */}
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#6EDC8C] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-1 text-center text-xs font-medium text-[#0E2A5A]">
              Step {step} of {steps.length}
            </div>
          </div>

          {/* Form Card - Compact */}
          <div className="mx-auto mt-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
            {step === 1 && (
              <AboutYouStep 
                formData={formData} 
                setFormData={setFormData} 
                onNext={handleNext}
                initialFieldIndex={aboutYouFieldIndex}
                onFieldIndexChange={setAboutYouFieldIndex}
              />
            )}
            {step === 2 && (
              <HairHealthStep 
                formData={formData} 
                setFormData={setFormData}
                onNext={handleNext}
              />
            )}
            {step === 3 && (
              <InternalHealthStep 
                formData={formData} 
                setFormData={setFormData}
                onNext={handleNext}
              />
            )}
            {step === 4 && (
              <ScalpAssessmentStep 
                formData={formData} 
                setFormData={setFormData}
                onComplete={handleSubmit}
              />
            )}

            {/* Only Show Back Button */}
            {step > 1 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleBack}
                  className="rounded-full border border-gray-300 px-8 py-2.5 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
                >
                  ← Back to Previous Step
                </button>
              </div>
            )}
          </div>

          {/* Auto-advance Hint */}
          {!isStepComplete() && step < steps.length && (
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400 animate-pulse">
                Complete all questions to automatically continue →
              </p>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-6 text-center text-xs text-gray-400">
            AI-based assessment • Secure & Private • Results in under 2 minutes
          </div>
        </div>
      </main>
    </>
  );
}