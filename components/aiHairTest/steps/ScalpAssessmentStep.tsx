"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { UploadCloud, X, CheckCircle } from "lucide-react";

export default function ScalpAssessmentStep({ formData, setFormData, onComplete }: any) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    formData.scalpImage ? URL.createObjectURL(formData.scalpImage) : null
  );
  const [imageFile, setImageFile] = useState<File | null>(formData.scalpImage || null);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Please upload an image smaller than 5MB");
      return;
    }

    setImageFile(file);
    setUploadedImage(URL.createObjectURL(file));
    setFormData({ ...formData, scalpImage: file });
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setUploadedImage(null);
    setFormData({ ...formData, scalpImage: null });
  };

const handleSubmit = async () => {

  if (!imageFile) {
    alert("Please upload a scalp image");
    return;
  }

  try {

    // FINAL PAYLOAD
    const payload = {
      ...formData,
      scalpImage: uploadedImage,
    };

    // DEBUG FRONTEND DATA
    console.log("=================================");
    console.log("FRONTEND PAYLOAD");
    console.log(payload);
    console.log("=================================");

    // CALL AI API
    const response = await fetch(
      "/api/ai-hair-analysis",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      }
    );

    // DEBUG RESPONSE STATUS
    console.log("API STATUS:", response.status);

    const result = await response.json();

    // DEBUG AI RESULT
    console.log("=================================");
    console.log("AI RESULT");
    console.log(result);
    console.log("=================================");

    // CHECK API ERROR
    if (!response.ok) {

      console.log("API ERROR:");
      console.log(result);

      alert(result.error || "AI analysis failed");

      return;
    }

    // SAVE RESULT
    localStorage.setItem(
      "aiHairTestResult",
      JSON.stringify(result)
    );

    // REDIRECT
    router.push("/ai-hair-test/result");

  } catch (error) {

    console.log("=================================");
    console.log("FRONTEND ERROR");
    console.log(error);
    console.log("=================================");

    alert("AI analysis failed");
  }
};

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-[#0E2A5A] md:text-2xl">Scalp Assessment</h2>
        <p className="mt-1 text-xs text-gray-500">
          Upload a clear scalp image for accurate AI analysis
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
        {!uploadedImage ? (
          // Upload Area
          <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 transition-all hover:border-[#6EDC8C] hover:bg-[#6EDC8C]/5">
            <UploadCloud className="h-12 w-12 text-[#6EDC8C] transition-transform group-hover:scale-110" />
            <p className="mt-3 text-sm font-medium text-[#0E2A5A]">
              Click to upload scalp image
            </p>
            <p className="mt-1 text-xs text-gray-400">
              JPG, PNG or GIF (Max 5MB)
            </p>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </label>
        ) : (
          // Preview Area
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white">
              <img
                src={uploadedImage}
                alt="Scalp preview"
                className="h-auto max-h-64 w-full object-contain"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white transition-all hover:bg-red-600 hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#6EDC8C]/10 px-3 py-2">
              <CheckCircle className="h-4 w-4 text-[#6EDC8C]" />
              <span className="text-xs font-medium text-[#0E2A5A]">
                Image uploaded successfully
              </span>
            </div>
          </div>
        )}

        {/* Tips for good image */}
        
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!imageFile}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E2A5A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1A3A6E] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit & Get Analysis
      </button>
    </div>
  );
}