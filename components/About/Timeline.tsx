"use client";
import React, { useEffect, useRef, useState } from "react";

const COLOR_ACTIVE = "#FF9933";
const COLOR_INACTIVE = "#CCCCCC";

const milestones = [
  { year: "7/8/2024", text: "Thành lập công ty." },
  { year: "28/8/2024", text: "Mở lớp tiếng Hoa với 20 học viên đầu tiên." },
  { year: "1/10/2024", text: "Đối tác chính thức đầu tiên, Trường cao đẳng nghề Việt Nam- Singapore." },
  { year: "11/8/2025", text: "Đối tác chính thức với trường quốc tế Việt-Hoa." },
  { year: "29/11/2025", text: "Thành công tổ chức cuộc thi Robot quy mô lớn với đối tác APRA." },
];
// const milestones = [
//   { year: "7/8/2024", text: "Founded the company" },
//   { year: 2017, text: "Reached 100 clients" },
//   { year: 2019, text: "Expanded internationally" },
//   { year: 2021, text: "Launched new platform" },
//   { year: 2023, text: "Awarded Best Service Provider" },
// ];

export default function Timeline() {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(
    Array(milestones.length).fill(false)
  );

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, milestones.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // mark this one active
            setActive((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      {
        root: null,
        threshold: [0.5],
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full mx-auto bg-amber-50 py-12">
      <h2 className="text-4xl text-blue-600 font-bold text-center mb-16">
        Các mốc thời gian
      </h2>

      <div className="relative">
        {/* Center vertical base line */}
        {/* <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] bg-gray-200"
          aria-hidden
        /> */}

        {/* Items */}
        <div className="flex flex-col gap-0">
          {milestones.map((m, idx) => {
            const isLeft = idx % 2 === 1; // odd index => content left
            const isActive = active[idx];
            // const circleSize = 56; // px
            const circleSize = 96; // px
            const strokeWidth = 6;
            const radius = (circleSize - strokeWidth) / 2; // inner radius
            const circumference = 2 * Math.PI * radius;
            const dashOffset = isActive ? 0 : circumference;
            const isFinal = idx === milestones.length - 1;
            return (
              <div
                key={m.year}
                className="relative w-full flex items-center md:items-start"
              >
                {/* Left content (for even indexes this is placeholder) */}
                <div
                  // className={`hidden md:block md:w-1/2 px-4 ${
                  //   isLeft ?  "order-1 text-left":"order-3 text-right"
                  // }`}
                  className="hidden md:block md:w-1/2 px-4 order-1 text-right pt-4"
                >
                  {/* show content only if this side should contain it */}
                  {isLeft && (
                    <div
                      className={`inline-block max-w-[85%] ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      } transition-all duration-600`}
                    >
                      <h3
                        className={`text-xl font-semibold ${
                          isActive ? "text-[#FF9933]" : "text-gray-800"
                        }`}
                      >
                        {m.text.split(".")[0]}
                      </h3>
                      {/* <p
                        className={`mt-2 text-gray-600 text-sm ${
                          isActive ? "text-[#FF9933]" : ""
                        }`}
                      >
                        {m.text}
                      </p> */}
                    </div>
                  )}
                </div>

                {/* Center marker column */}
                <div className="w-[4px] md:w-[160px] flex justify-center relative z-10 order-2">
                  <div className="relative flex flex-col items-center">
                    {/* top connector (fill handled by prev item if needed) */}
                    {/* <div
                      className="hidden md:block w-[4px] bg-gray-200"
                      style={{
                        height: 24,
                      }}
                    /> */}
                    {/* SVG circle (progress ring) */}
                    <div
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      data-idx={idx}
                      className="relative"
                      aria-hidden
                    >
                      <svg
                        width={circleSize}
                        height={circleSize}
                        viewBox={`0 0 ${circleSize} ${circleSize}`}
                        className="block"
                      >
                        {/* background ring */}
                        <circle
                          cx={circleSize / 2}
                          cy={circleSize / 2}
                          r={radius}
                          fill="white"
                          stroke={COLOR_INACTIVE}
                          strokeWidth={strokeWidth}
                        />
                        {/* progress ring */}
                        <circle
                          cx={circleSize / 2}
                          cy={circleSize / 2}
                          r={radius}
                          fill="none"
                          stroke={COLOR_ACTIVE}
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={dashOffset}
                          style={{
                            transition: "stroke-dashoffset 900ms linear",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                          }}
                        />
                        {/* year text */}
                        <text
                          x="50%"
                          y="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          // fontSize="12"
                          fontSize={circleSize / 6}
                          fill={isActive ? COLOR_ACTIVE : "#6b6b6b"}
                          fontWeight="600"
                        >
                          {m.year}
                        </text>
                      </svg>
                    </div>

                    {/* connector down (the fill bar) */}
                    {/* Visible (md:block) for desktop, for mobile we use different spacing */}
                    {!isFinal && (
                      <div
                        className="hidden md:block w-[6px] bg-gray-200 overflow-hidden"
                        style={{
                          height: 80,
                        }}
                      >
                        <div
                          className="w-full bg-[#FF9933] origin-top"
                          style={{
                            height: isActive ? "100%" : "0%",
                            transition: "height 700ms linear",
                            transitionDelay: "900ms",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right content */}
                <div
                  // className={`hidden md:block md:w-1/2 px-4 ${
                  //   isLeft ? "order-1 text-left" : "order-3 text-right"
                  // }`}
                  className="hidden md:block md:w-1/2 px-4 order-3 text-left pt-4"
                >
                  {!isLeft && (
                    <div
                      className={`inline-block max-w-[85%] ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      } transition-all duration-600`}
                    >
                      <h3
                        className={`text-xl font-semibold ${
                          isActive ? "text-[#FF9933]" : "text-gray-800"
                        }`}
                      >
                        {m.text.split(".")[0]}
                      </h3>
                      {/* <p
                        className={`mt-2 text-gray-600 text-sm ${
                          isActive ? "text-[#FF9933]" : ""
                        }`}
                      >
                        {m.text}
                      </p> */}
                    </div>
                  )}
                </div>

                {/* MOBILE (stacked): show content below marker */}
                <div className="md:hidden w-full mt-4 px-4 text-left">
                  <div
                    className={`inline-block w-full ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    } transition-all duration-500`}
                  >
                    <h3
                      className={`text-lg font-semibold ${
                        isActive ? "text-[#FF9933]" : "text-gray-800"
                      }`}
                    >
                      {m.text.split(".")[0]}
                    </h3>
                    {/* <p
                      className={`mt-1 text-gray-600 text-sm ${
                        isActive ? "text-[#FF9933]" : ""
                      }`}
                    >
                      {m.text}
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
