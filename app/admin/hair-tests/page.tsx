
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Phone,
  User,
  Brain,
  Moon,
  Activity,
  ArrowUpDown,
} from "lucide-react";
import TestNavbar from "@/components/aiHairTest/shared/TestNavbar";

interface HairTest {
  _id: string;
  name: string;
  mobile: string;
  age: number;
  gender: string;
  hairFallImage: string;
  scalpImage: string;
  familyHistory: string;
  dandruff: string;
  stress: string;
  sleep: string;
  constipation: string;
  gas: string;
  energy: string;
  supplements: string;
  createdAt: string;
}

export default function HairTestsPage() {
  const [tests, setTests] = useState<HairTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get-hair-tests");
        const data = await res.json();
        setTests(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const sortedTests = [...tests].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7FAFF]">
        <div className="text-center">
          <Image
            src="/images/loader.png"
            alt="Loading"
            width={80}
            height={80}
            className="h-auto w-20 animate-spin"
          />
          <p className="mt-4 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7FAFF] ">
                <TestNavbar />
        
      <div className="mx-auto mt-5 max-w-7xl px-4">
        {/* HEADER WITH FILTER */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#0E2A5A]">Hair Test Users</h1>
            <p className="text-xs text-gray-500">Total: {tests.length} submissions</p>
          </div>
          
          <button
            onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
            className="flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-[#0E2A5A] shadow-sm border border-gray-200 hover:bg-gray-50 transition"
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            {sortOrder === "newest" ? "Newest First" : "Oldest First"}
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-4 lg:grid-cols-2">
          {sortedTests.map((item) => (
            <div key={item._id} className="rounded-2xl bg-white p-4 shadow-sm">
              {/* TOP SECTION - COMPACT */}
              <div className="flex gap-3">
                {/* IMAGES - SMALLER */}
                <div className="flex gap-2">
                  <div>
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                      <Image
                        src={item.scalpImage || "/images/no-image.png"}
                        alt="Scalp"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                      <Image
                        src={item.hairFallImage || "/images/no-image.png"}
                        alt="Hair Stage"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* USER INFO - COMPACT */}
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-[#0E2A5A]">{item.name}</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {item.mobile}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {item.age}y • {item.gender}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* HEALTH DATA - COMPACT GRID */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <p className="text-xs font-semibold text-[#0E2A5A]">Do you have a family history of hair fall?</p>
                  <p className="mt-0.5 text-xs text-gray-600 line-clamp-1">{item.familyHistory}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <p className="text-xs font-semibold text-[#0E2A5A]">Do you have dandruff?</p>
                  <p className="mt-0.5 text-xs text-gray-600">{item.dandruff}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-[#6EDC8C]" />
                    <p className="text-xs font-semibold text-[#0E2A5A]">How stressed are you?</p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-600">{item.stress}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <div className="flex items-center gap-1">
                    <Moon className="h-3 w-3 text-[#6EDC8C]" />
                    <p className="text-xs font-semibold text-[#0E2A5A]">How well do you sleep?</p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-600">{item.sleep}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <div className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-[#6EDC8C]" />
                    <p className="text-xs font-semibold text-[#0E2A5A]">How are your energy levels during the day?</p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-600">{item.energy}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <p className="text-xs font-semibold text-[#0E2A5A]">Do you have problems passing stool / motions? (कब्ज़)</p>
                  <p className="mt-0.5 text-xs text-gray-600">{item.constipation}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <p className="text-xs font-semibold text-[#0E2A5A]">Do you have Gas, Acidity or Bloating?</p>
                  <p className="mt-0.5 text-xs text-gray-600">{item.gas}</p>
                </div>

                <div className="rounded-xl bg-[#F7FAFF] p-2">
                  <p className="text-xs font-semibold text-[#0E2A5A]">Are you currently taking any supplements or vitamins for hair?</p>
                  <p className="mt-0.5 text-xs text-gray-600 line-clamp-1">{item.supplements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {tests.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500">No hair test data found.</p>
          </div>
        )}
      </div>
    </section>
  );
}