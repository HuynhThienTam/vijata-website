"use client";
import Image from "next/image";
import React from "react";
const displayImages = [
  "/images/display1.jpg",
  "/images/display2.jpg",
  "/images/robot.JPG",
  "/images/display4.jpg",
  "/images/display5.jpg",
  "/images/display6.jpg",
  "/images/display7.jpg",
  "/images/display8.jpg",
];

export default function DisplayImages() {
  return (
    <div className="w-full  aspect-[20/6]  mt-12 grid grid-cols-20 gap-2 p-2 bg-gray-200">
      <div className="col-span-7 relative ">
        <Image
          src="/images/writingontheboard.png"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-3 relative ">
        <Image
          src="/images/busarriving.jpg"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-5 relative ">
        <Image
          src="/images/robot.JPG"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-5 row-span-2 relative ">
        <Image
          src="/images/taipei101.jpg"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-4  relative ">
        <Image
          src="/images/shufawriting.png"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-4  relative ">
        <Image
          src="/svgs/turtle.svg"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
      <div className="col-span-7  relative ">
        <Image
          src="/images/redpapershufa.png"
          alt="aaa"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
}
