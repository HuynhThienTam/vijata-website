"use client";
import React from "react";

const compliments = [
  {
    title: "Excellent Support",
    text: "Always ready to help whenever needed. lorem igiggih ygy hhhu",
  },
  {
    title: "High Quality",
    text: "Delivers consistent results every time. lorem igiggih ygy hhhu",
  },
  {
    title: "Great Communication",
    text: "Keeps everything clear and transparent. lorem igiggih ygy hhhu",
  },
  {
    title: "Reliable Partner",
    text: "Can always be trusted with key tasks. lorem igiggih ygy hhhu",
  },
  {
    title: "Innovative Thinking",
    text: "Brings fresh ideas to every project. lorem igiggih ygy hhhu",
  },
  {
    title: "Efficient Workflow",
    text: "Saves time without losing precision. lorem igiggih ygy hhhu",
  },
];



export default function Complements() {
  return (
    <section className="w-[90%] mx-auto py-12 relative  ">
      {/* Background PNG cho toàn bộ grid */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
               bg-no-repeat opacity-5 pointer-events-none "
        style={{
          backgroundImage: "url('/images/wreath.png')",
          width: "120%", // vượt ra ngoài section
          height: "200%", // cao hơn để lấn xuống dưới
          backgroundSize: "30%",
          backgroundPosition: "center ",
        }}
      />

      <div className="grid grid-cols-3 gap-2 relative ">
        {compliments.map((c, idx) => (
          <article
            key={idx}
            className="relative p-8 min-h-[120px] flex flex-col items-center text-center"
          >
            {/* Background PNG */}
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"
              style={{ backgroundImage: "url('/images/wreath.png')" }}
            />

            {/* Text Content */}
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              {c.title}
            </h3>
            <p className="mt-3 text-gray-600 text-lg max-w-[75%]">{c.text}</p>

            {/* <span className="mt-auto block bg-amber-200" /> */}
          </article>
        ))}
      </div>
    </section>
  );
}
