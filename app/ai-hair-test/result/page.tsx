// "use client";

// import { useEffect, useState } from "react";

// import Image from "next/image";

// import {
//   TrendingUp,
//   Clock,
//   AlertTriangle,
//   Sparkles,
// } from "lucide-react";

// export default function AIHairTestResultPage() {

//   const [report, setReport] = useState<any>(null);

//   useEffect(() => {

//     const stored =
//       localStorage.getItem("aiHairTestResult");

//     if (stored) {

//       const parsed = JSON.parse(stored);

//       setReport(parsed);
//     }

//   }, []);

//   // LOADING
//   if (!report) {

//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-50">

//         <div className="text-center">

//           <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#6EDC8C]/30 border-t-[#39A96B]" />

//           <p className="mt-4 text-sm text-gray-500">
//             Generating AI Hair Analysis...
//           </p>

//         </div>

//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 py-8">

//       <div className="mx-auto max-w-3xl px-4">

//         {/* MAIN CARD */}
//         <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

//           {/* TOP BAR */}
//           <div className="h-1 bg-gradient-to-r from-[#6EDC8C] to-[#39A96B]" />

//           <div className="p-5 md:p-6">

//             {/* HEADER */}
//             <div className="flex items-start justify-between">

//               <div>

//                 <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
//                   Assessment Report
//                 </p>

//                 <h1 className="mt-2 text-2xl font-bold text-gray-800">
//                   {report.name || "User"},
//                 </h1>

//                 <p className="mt-1 text-sm text-gray-500">
//                   You are currently on
//                 </p>

//                 <p className="text-base font-semibold text-gray-800">
//                   {report.stage || "Hair Fall Detected"}
//                 </p>

//                 {/* TIMELINE */}
//                 <div className="mt-4 flex items-center gap-2">

//                   <Clock className="h-3.5 w-3.5 text-gray-400" />

//                   <p className="text-xs text-gray-500">
//                     Results in
//                   </p>

//                   <p className="text-sm font-semibold text-gray-800">
//                     {report.timeline || "3-6 Months"}
//                   </p>

//                 </div>

//               </div>

//               {/* IMAGE */}
//               <div className="hidden sm:block">

//                 <div className="rounded-lg border border-gray-200 bg-gray-50 p-1.5">

//                   <Image
//                     src="/ai-hair-test/1.jpg"
//                     alt="Hair Stage"
//                     width={70}
//                     height={70}
//                     className="rounded-md object-cover"
//                   />

//                 </div>

//               </div>

//             </div>

//             {/* SCORE */}
//             <div className="mt-6">

//               <div className="mb-1.5 flex justify-between text-xs">

//                 <span className="text-gray-600">
//                   Hair Regrowth Possibility
//                 </span>

//                 <span className="font-semibold text-gray-800">
//                   {report.regrowthChance || 75}%
//                 </span>

//               </div>

//               <div className="h-2 overflow-hidden rounded-full bg-gray-200">

//                 <div
//                   className="h-full rounded-full bg-[#39A96B] transition-all"
//                   style={{
//                     width: `${report.regrowthChance || 75}%`,
//                   }}
//                 />

//               </div>

//             </div>

//             {/* SUMMARY */}
//             <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">

//               <div className="flex items-start gap-2">

//                 <Sparkles className="mt-0.5 h-4 w-4 text-[#39A96B]" />

//                 <p className="text-sm leading-relaxed text-gray-700">
//                   {report.summary ||
//                     "AI analysis summary not available."}
//                 </p>

//               </div>

//             </div>

//             {/* RISK */}
//             <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4">

//               <div className="flex items-center gap-2">

//                 <AlertTriangle className="h-4 w-4 text-orange-500" />

//                 <p className="text-sm font-medium text-orange-700">
//                   Hair Fall Risk:{" "}
//                   {report.risk || "Moderate"}
//                 </p>

//               </div>

//             </div>

//             {/* ROOT CAUSES */}
//             <div className="mt-6">

//               <h2 className="text-lg font-semibold text-gray-800">
//                 Root Causes
//               </h2>

//               <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">

//                 {report.rootCauses?.map(
//                   (cause: string, index: number) => (

//                     <div
//                       key={index}
//                       className="flex flex-col items-center rounded-lg border border-[#6EDC8C] bg-[#F8FBF4] p-3"
//                     >

//                       <TrendingUp className="h-5 w-5 text-[#39A96B]" />

//                       <span className="mt-1.5 text-center text-xs font-medium text-gray-800">
//                         {cause}
//                       </span>

//                       <span className="mt-1 text-[9px] font-medium text-[#39A96B]">
//                         Active
//                       </span>

//                     </div>
//                   )
//                 )}

//               </div>

//             </div>

//             {/* RECOMMENDATIONS */}
//             <div className="mt-6">

//               <h2 className="text-lg font-semibold text-gray-800">
//                 AI Recommendations
//               </h2>

//               <div className="mt-3 space-y-2">

//                 {report.recommendations?.map(
//                   (item: string, index: number) => (

//                     <div
//                       key={index}
//                       className="rounded-lg border border-gray-100 bg-gray-50 p-3"
//                     >

//                       <p className="text-xs leading-relaxed text-gray-700">
//                         ✓ {item}
//                       </p>

//                     </div>
//                   )
//                 )}

//               </div>

//             </div>

//             {/* BUTTON */}
//             {/* <button className="mt-6 w-full rounded-lg bg-[#0E2A5A] py-3 text-sm font-semibold text-white transition hover:bg-[#1A3A6E]">

//               Get Personalized Treatment Plan →

//             </button> */}

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  TrendingUp,
  Clock,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

import TestNavbar from "@/components/aiHairTest/shared/TestNavbar";

export default function AIHairTestResultPage() {

  const [report, setReport] = useState<any>(null);

  useEffect(() => {

    const stored =
      localStorage.getItem("aiHairTestResult");

    if (stored) {

      const parsed = JSON.parse(stored);

      setReport(parsed);
    }

  }, []);

  // LOADING
  if (!report) {

    return (
      <>
        <TestNavbar />
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#6EDC8C]/30 border-t-[#39A96B]" />
            <p className="mt-4 text-sm text-gray-500">
              Generating AI Hair Analysis...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TestNavbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4">
          {/* MAIN CARD */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            {/* TOP BAR */}
            <div className="h-1 bg-gradient-to-r from-[#6EDC8C] to-[#39A96B]" />

            <div className="p-5 md:p-6">
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Assessment Report
                  </p>
                  <h1 className="mt-2 text-2xl font-bold text-gray-800">
                    {report.name || "User"},
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    You are currently on
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {report.stage || "Hair Fall Detected"}
                  </p>
                  {/* TIMELINE */}
                  <div className="mt-4 flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-gray-400" />
                    <p className="text-xs text-gray-500">
                      Results in
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {report.timeline || "3-6 Months"}
                    </p>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="hidden sm:block">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-1.5">
                    <Image
                      src="/ai-hair-test/1.jpg"
                      alt="Hair Stage"
                      width={70}
                      height={70}
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* SCORE */}
              <div className="mt-6">
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-gray-600">
                    Hair Regrowth Possibility
                  </span>
                  <span className="font-semibold text-gray-800">
                    {report.regrowthChance || 75}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#39A96B] transition-all"
                    style={{
                      width: `${report.regrowthChance || 75}%`,
                    }}
                  />
                </div>
              </div>

              {/* SUMMARY */}
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-[#39A96B]" />
                  <p className="text-sm leading-relaxed text-gray-700">
                    {report.summary ||
                      "AI analysis summary not available."}
                  </p>
                </div>
              </div>

              {/* RISK */}
              <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <p className="text-sm font-medium text-orange-700">
                    Hair Fall Risk:{" "}
                    {report.risk || "Moderate"}
                  </p>
                </div>
              </div>

              {/* ROOT CAUSES */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Root Causes
                </h2>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {report.rootCauses?.map(
                    (cause: string, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center rounded-lg border border-[#6EDC8C] bg-[#F8FBF4] p-3"
                      >
                        <TrendingUp className="h-5 w-5 text-[#39A96B]" />
                        <span className="mt-1.5 text-center text-xs font-medium text-gray-800">
                          {cause}
                        </span>
                        <span className="mt-1 text-[9px] font-medium text-[#39A96B]">
                          Active
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* RECOMMENDATIONS */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  AI Recommendations
                </h2>
                <div className="mt-3 space-y-2">
                  {report.recommendations?.map(
                    (item: string, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                      >
                        <p className="text-xs leading-relaxed text-gray-700">
                          ✓ {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}