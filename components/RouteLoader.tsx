"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import PageLoader from "./PageLoader";

export default function RouteLoader() {

  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // REMOVE LOADER FROM HOME PAGE
    if (pathname === "/") {
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);

  }, [pathname]);

  return loading ? <PageLoader /> : null;
}