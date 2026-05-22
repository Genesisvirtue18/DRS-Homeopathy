"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

type Props = {
  formData: any;
  setFormData: any;
  onNext?: () => void;
  initialFieldIndex?: number;
  onFieldIndexChange?: (index: number) => void;
};

export default function AboutYouStep({ 
  formData, 
  setFormData, 
  onNext,
  initialFieldIndex = 0,
  onFieldIndexChange 
}: Props) {
  const [currentField, setCurrentField] = useState(initialFieldIndex);

  // Update parent when field index changes
  useEffect(() => {
    onFieldIndexChange?.(currentField);
  }, [currentField, onFieldIndexChange]);

  // Reset to initial field index when component mounts or initialFieldIndex changes
  useEffect(() => {
    setCurrentField(initialFieldIndex);
  }, [initialFieldIndex]);

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      validation: (value: string) => value.trim().length >= 2,
      errorMessage: "Please enter a valid name",
    },
    {
      name: "mobile",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your mobile number",
      validation: (value: string) => /^[6-9]\d{9}$/.test(value),
      errorMessage: "Please enter a valid 10-digit mobile number",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
      validation: (value: string) => {
        const age = parseInt(value);
        return !isNaN(age) && age >= 1 && age <= 120;
      },
      errorMessage: "Please enter a valid age (1-120)",
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      placeholder: "Select gender",
      options: ["Male", "Female", "Other"],
      validation: (value: string) => ["Male", "Female", "Other"].includes(value),
      errorMessage: "Please select your gender",
    },
  ];

  const currentFieldData = fields[currentField];
  const currentValue = formData[currentFieldData.name];
  const isValid = currentFieldData.validation(currentValue || "");
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (isValid) {
      if (currentField < fields.length - 1) {
        setCurrentField(currentField + 1);
        setShowError(false);
      } else {
        // All fields completed, move to next step
        onNext?.();
      }
    } else {
      setShowError(true);
    }
  };

  const handleBack = () => {
    if (currentField > 0) {
      setCurrentField(currentField - 1);
      setShowError(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid) {
      handleNext();
    }
  };

  const updateField = (value: string) => {
    setFormData({ ...formData, [currentFieldData.name]: value });
    setShowError(false);
  };

  return (
    <div className="space-y-8">
      {/* Current Field Input */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
        <label className="mb-1.5 block text-xs font-medium text-[#0E2A5A]">
          {currentFieldData.label}
        </label>

        {currentFieldData.type === "select" ? (
          <div className="grid grid-cols-3 gap-2">
            {currentFieldData.options?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => updateField(option)}
                className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                  currentValue === option
                    ? "border-[#6EDC8C] bg-[#0E2A5A] text-white"
                    : "border-gray-200 bg-white text-[#0E2A5A] hover:border-[#6EDC8C]/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type={currentFieldData.type}
            placeholder={currentFieldData.placeholder}
            value={currentValue || ""}
            onChange={(e) => updateField(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#6EDC8C] focus:ring-1 focus:ring-[#6EDC8C] ${
              showError ? "border-red-500 bg-red-50" : "border-gray-200"
            }`}
          />
        )}

        {/* Error Message */}
        {showError && (
          <p className="mt-2 text-xs text-red-500 animate-in fade-in">
            {currentFieldData.errorMessage}
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {/* Back Button - Only show if not on first field */}
        {currentField > 0 && (
          <button
            onClick={handleBack}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}
        
        {/* Next/Continue Button */}
        <button
          onClick={handleNext}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0E2A5A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1A3A6E] hover:scale-[1.02] ${
            currentField === 0 ? "w-full" : ""
          }`}
        >
          {currentField === fields.length - 1 ? (
            <>
              Continue
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

      {/* Progress Indicator */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          {currentValue && isValid ? "✓ " : ""}
          {currentField + 1} of {fields.length} completed
        </p>
      </div>
    </div>
  );
}