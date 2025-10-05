// components/Header.tsx
"use client";
import CompanyLogo from "./CompanyLogo";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.getElementById("topbar")?.offsetHeight || 0;
      if (window.scrollY >= topBarHeight) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div
        className={`${
          isShrunk ? "fixed top-0 " : "relative "
        } w-full z-50 bg-white`}
      >
        <CompanyLogo isShrunk={isShrunk} />
        <Navbar />
      </div>
      {/* Spacer giữ chỗ khi header là fixed */}
      <div className={`${isShrunk ? "h-[122px]" : "h-0"} bg-transparent`}></div>
      
    </div>
  );
}
