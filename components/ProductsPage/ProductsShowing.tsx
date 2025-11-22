"use client";
import React from "react";
const courseList = [
  {
    title: "Chinese language courses",
    text: "Always ready to help whenever needed. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
  },
  {
    title: "Japanese language courses",
    text: "Delivers consistent results every time. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
  },
  {
    title: "Korean language courses",
    text: "Keeps everything clear and transparent. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
  },
];
const localColors = ["bg-green-400", "bg-pink-400", "bg-amber-400"];

export default function ProductsShowing() {
  return (
    <div className="w-[90%] mx-auto  bg-white">
      {courseList.map((m, idx) => {
        const isLeft = idx % 2 === 1; // odd index => content left
        return (
          <div key={idx} className=" w-full relative flex overflow-hidden aspect-5/2">
            <div className={`absolute w-[60%] top-0 ${isLeft?'right-0':'left-0'}  aspect-5/3 ${localColors[idx % localColors.length]}`}></div>
            <div className={`absolute w-[50%] aspect-10/7  top-20 ${isLeft?'left-0':'right-0'}  `}>
              <img
                src="/images/activity2.jpg"
                alt="product"
                className="w-full aspect-10/7 object-cover  pointer-events-none"
              ></img>
            </div>
            {/* <div className="absolute top-50 right-[5%] bg-white shadow-lg rounded-xl p-6 w-[50%] z-10"></div> */}
            <div className={`absolute top-50 ${isLeft?'right-[5%]':'left-[5%]'}  bg-white rounded-xl p-16 w-[50%] aspect-3/1 z-10`}>
              <h3 className="text-4xl font-semibold">
                {m.title}
              </h3>
              <p className="text-xl font-extralight text-gray-600 mt-9">
                {m.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
