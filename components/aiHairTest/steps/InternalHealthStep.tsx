"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function InternalHealthStep({ formData, setFormData, onNext }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const questions = [
    {
      id: "sleep",
      question: "How well do you sleep?",
      type: "single",
      options: [
        "Very peacefully for 6-8 hours",
        "Disturbed sleep (wake up multiple times at night)",
        "Difficulty falling asleep"
      ]
    },
    {
      id: "stress",
      question: "How stressed are you?",
      type: "single",
      options: [
        "None",
        "Low",
        "Moderate (work, family etc)",
        "High (Loss of close one, separation, home, illness)"
      ]
    },
    {
      id: "constipation",
      question: "Do you have problems passing stool / motions? (कब्ज़)",
      type: "single",
      options: [
        "No / Once in a while",
        "Yes (less than 3 stools / motions per week)",
        "Unable to pass stool / motions properly or feel unsatisfied after passing",
        "Suffering from Irritable Bowel Syndrome"
      ]
    },
    {
      id: "gas",
      question: "Do you have Gas, Acidity or Bloating?",
      type: "single",
      options: [
        "No",
        "Sometimes (1-2 times a week or when I eat out)",
        "Often (3+ times a week)"
      ]
    },
    {
      id: "energy",
      question: "How are your energy levels during the day?",
      type: "single",
      options: [
        "Always high / Normal energy levels throughout the day",
        "Low when I wake up, then gradually increase",
        "Very low in the afternoon",
        "Low by evening/night",
        "Always low"
      ]
    },
    {
      id: "supplements",
      question: "Are you currently taking any supplements or vitamins for hair?",
      type: "single",
      options: ["Yes", "No"]
    }
  ];

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  // Load saved answer when question changes
  useEffect(() => {
    const savedAnswer = formData[currentQ.id];
    if (savedAnswer) {
      setSelectedOption(savedAnswer);
    } else {
      setSelectedOption("");
    }
  }, [currentQuestion, currentQ.id, formData]);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    // Save immediately when selected to persist data
    setFormData({ ...formData, [currentQ.id]: value });
  };

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }

    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions completed - move to next step
      if (onNext) {
        onNext();
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Progress percentage
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[#6EDC8C] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-[#0E2A5A] md:text-2xl">
            Internal Health
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Understanding your lifestyle and health conditions
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
          <label className="mb-4 block text-base font-semibold text-[#0E2A5A]">
            {currentQ.question}
          </label>

          <div className="grid gap-3">
            {currentQ.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleOptionSelect(option)}
                className={`w-full rounded-xl border p-4 text-left transition-all hover:scale-[1.01] ${
                  selectedOption === option
                    ? "border-[#6EDC8C] bg-[#0E2A5A] text-white"
                    : "border-gray-200 bg-white hover:border-[#6EDC8C]/50"
                }`}
              >
                <div className="font-medium text-sm">{option}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {currentQuestion > 0 && (
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
          className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E2A5A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1A3A6E] hover:scale-[1.02] ${
            currentQuestion > 0 ? "flex-1" : "w-full"
          }`}
        >
          {isLastQuestion ? (
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