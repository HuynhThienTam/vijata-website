import Complements from "@/components/HomePage/Complements";
import DisplayImages from "@/components/HomePage/DisplayImages";
import Feeling from "@/components/HomePage/Feeling";
import LetsMeet from "@/components/HomePage/LetsMeet";
import VideoShowcase from "@/components/HomePage/VideoShowcase";
import React from "react";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <VideoShowcase />
      <LetsMeet/>
      <Complements/>
      <div className="py-18"/>
      <Feeling/>
      <DisplayImages/>
    </div>
  );
};

export default HomePage;
