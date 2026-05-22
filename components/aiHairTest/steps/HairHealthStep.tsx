"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function HairHealthStep({ formData, setFormData, onNext }: any) {
  const [step, setStep] = useState(1); // 1: Image Selection, 2: Family History, 3: Dandruff
  const [selectedImage, setSelectedImage] = useState<string | null>(formData.hairFallImage || null);

  const hairLossImages = [
    {
      id: 1,
      src: "/ai-hair-test/1.jpg",
      label: "Stage 1",
      description: "Minimal hair thinning",
    },
    {
      id: 2,
      src: "/ai-hair-test/2.jpg",
      label: "Stage 2",
      description: "Slight receding hairline",
    },
    {
      id: 3,
      src: "/ai-hair-test/3.jpg",
      label: "Stage 3",
      description: "Visible hair thinning",
    },
    {
      id: 4,
      src: "/ai-hair-test/4.jpg",
      label: "Stage 4",
      description: "Significant hair loss",
    },
    {
      id: 5,
      src: "/ai-hair-test/5.jpg",
      label: "Stage 5",
      description: "Advanced hair loss",
    },
    {
      id: 6,
      src: "/ai-hair-test/6.jpg",
      label: "Stage 6",
      description: "Severe hair loss",
    },
    {
      id: 7,
      src: "/ai-hair-test/coin-size-patch.jpg",
      label: "Coin Size Patch",
      description: "Small circular bald patches",
    },
    {
      id: 8,
      src: "/ai-hair-test/heavy-hair-fall.jpg",
      label: "Heavy Hair Fall",
      description: "Excessive hair fall, visible scalp",
    },
  ];

  const handleImageSelect = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setFormData({ ...formData, hairFallImage: imageSrc });
  };

  const handleNext = () => {
    // Validate current step
    if (step === 1 && !selectedImage) {
      alert("Please select an image that matches your hair condition");
      return;
    }

    if (step === 2 && !formData.familyHistory) {
      alert("Please select family history");
      return;
    }

    if (step === 3 && !formData.dandruff) {
      alert("Please select dandruff condition");
      return;
    }

    // Move to next internal step
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // All steps completed - move to next main section
    const updatedFormData = {
      ...formData,
      hairHealthCompleted: true,
    };
    
    setFormData(updatedFormData);

    // Call the parent's next function if provided
    if (onNext) {
      onNext();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Image Selection */}
      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-[#0E2A5A] md:text-2xl">
              Select Your Hair Condition
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Choose the image that best matches your current hair condition
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {hairLossImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => handleImageSelect(image.src)}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  selectedImage === image.src
                    ? "border-[#6EDC8C] bg-[#F8FBF4]"
                    : "border-gray-200 bg-[#F7F7F7] hover:border-[#6EDC8C]/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                        selectedImage === image.src
                          ? "border-[#7AA13B]"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedImage === image.src && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#7AA13B]" />
                      )}
                    </div>
                    <h3 className="text-base font-medium text-black">
                      {image.label}
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-[72px] w-auto object-contain"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Family History */}
      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-[#0E2A5A] md:text-2xl">
              Family History
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Understanding your family history helps us provide better insights
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <label className="mb-4 block text-base font-semibold text-[#0E2A5A]">
              Do you have a family history of hair fall?
            </label>
            <div className="grid gap-3">
              {[
                "Mother or anyone from mother's side",
                "Father or anyone from father's side",
                "Both",
                "None",
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({ ...formData, familyHistory: option })}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    formData.familyHistory === option
                      ? "border-[#6EDC8C] bg-[#0E2A5A] text-white"
                      : "border-gray-200 bg-white hover:border-[#6EDC8C]/50"
                  }`}
                >
                  <div className="font-medium">{option}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Dandruff */}
      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-[#0E2A5A] md:text-2xl">
              Scalp Condition
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Tell us about your dandruff and scalp health
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <label className="mb-4 block text-base font-semibold text-[#0E2A5A]">
              Do you have dandruff?
            </label>
            <div className="space-y-3">
              {[
                { value: "No", label: "No", description: "No visible flakes" },
                {
                  value: "Mild",
                  label: "Mild dandruff",
                  description: "Small white flakes"
                },
                {
                  value: "Heavy",
                  label: "Heavy dandruff",
                  description: "Sticky dandruff found in nails on scratching or visible on clothes"
                },
                {
                  value: "Psoriasis",
                  label: "Diagnosed with Psoriasis / Seborrheic Dermatitis",
                  description: "A skin condition that causes red, dry patches on your scalp"
                },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, dandruff: option.value })}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    formData.dandruff === option.value
                      ? "border-[#6EDC8C] bg-[#0E2A5A] text-white"
                      : "border-gray-200 bg-white hover:border-[#6EDC8C]/50"
                  }`}
                >
                  <div className="font-medium text-sm">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}

        <button
          onClick={handleNext}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0E2A5A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1A3A6E] hover:scale-[1.02] ${
            step === 1 ? "w-full" : ""
          }`}
        >
          {step === 3 ? (
            <>
              Complete Section
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}