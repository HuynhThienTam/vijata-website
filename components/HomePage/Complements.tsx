"use client";
import React from "react";

const compliments = [
  {
    title: "Sự hỗ trợ tuyệt đối",
    text: "Sẵn sàng hỗ trợ khi học viên gặp khó khăn trong học tập.",
  },
  {
    title: "Chất lượng cao",
    text: "Đạt mục tiêu là kết quả học tập tốt nhất.",
  },
  {
    title: "Sự chia sẻ",
    text: "Luôn lắng nghe các nhu cầu của từng học viên.",
  },
  {
    title: "Đối tác tin cậy",
    text: "Chuyên môn và năng lực của đội ngũ giáo viên vững chãi.",
  },
  {
    title: "Suy nghĩ sáng tạo",
    text: "Mang đến những ý tưởng mới mẻ cho mọi bài học.",
  },
  {
    title: "Quy trình hiệu quả",
    text: "Tiết kiệm thời gian mà không giảm hiệu quả học tập.",
  },
];
// const compliments = [
//   {
//     title: "Excellent Support",
//     text: "Always ready to help whenever needed. lorem igiggih ygy hhhu",
//   },
//   {
//     title: "High Quality",
//     text: "Delivers consistent results every time. lorem igiggih ygy hhhu",
//   },
//   {
//     title: "Great Communication",
//     text: "Keeps everything clear and transparent. lorem igiggih ygy hhhu",
//   },
//   {
//     title: "Reliable Partner",
//     text: "Can always be trusted with key tasks. lorem igiggih ygy hhhu",
//   },
//   {
//     title: "Innovative Thinking",
//     text: "Brings fresh ideas to every project. lorem igiggih ygy hhhu",
//   },
//   {
//     title: "Efficient Workflow",
//     text: "Saves time without losing precision. lorem igiggih ygy hhhu",
//   },
// ];



export default function Complements() {
  return (
    <section className="w-[90%] mx-auto py-10 relative  ">
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
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {c.title}
            </h3>
            <p className="mt-3 text-gray-600 text-sm max-w-[75%]">{c.text}</p>

            {/* <span className="mt-auto block bg-amber-200" /> */}
          </article>
        ))}
      </div>
    </section>
  );
}
