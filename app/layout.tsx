
// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// import FloatingButtons from "@/components/FloatingButtons";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: [
//     "100",
//     "200",
//     "300",
//     "400",
//     "500",
//     "600",
//     "700",
//     "800",
//     "900",
//   ],
// });

// export const metadata: Metadata = {
//   title: "DRS Homeopathy",
//   description: "Homeopathy Clinic",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={poppins.className}>
//         {children}

//         {/* Floating Buttons */}
//         <FloatingButtons />
//       </body>
//     </html>
//   );
// }

// "use client";

// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// import FloatingButtons from "@/components/FloatingButtons";
// import PageLoader from "@/components/PageLoader";

// import { useEffect, useState } from "react";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: [
//     "100",
//     "200",
//     "300",
//     "400",
//     "500",
//     "600",
//     "700",
//     "800",
//     "900",
//   ],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1800);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <html lang="en">
//       <body className={poppins.className}>

//         {loading && <PageLoader />}

//         {children}

//         {/* Floating Buttons */}
//         <FloatingButtons />

//       </body>
//     </html>
//   );
// }
"use client";

import { Poppins } from "next/font/google";

import "./globals.css";

import FloatingButtons from "@/components/FloatingButtons";
import RouteLoader from "@/components/RouteLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppins.className} overflow-x-hidden`}
      >

        {/* Route Transition Loader */}
        <RouteLoader />

        {/* Website Content */}
        {children}

        {/* Floating Buttons */}
        <FloatingButtons />

      </body>
    </html>
  );
}