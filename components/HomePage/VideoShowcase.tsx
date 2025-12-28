"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  {
    src: "https://www.youtube.com/embed/stU4IqG8MZc",
    title: "Cuộc thi Robot APRA hợp tác với ViJaTa tổ chức",
    subtitle: "Một sân chơi bổ ích, sáng tạo!",
    date: "29/12/2025 ",
  },
  // {
  //   src: "/videos/video1.mp4",
  //   title: "Giáo viên tiếng Hoa và học sinh trên lớp",
  //   subtitle: "Urban beauty",
  //   author: "Emily Chen",
  // },
  // {
  //   src: "/videos/video3.mp4",
  //   title: "Ocean Life",
  //   subtitle: "Underwater wonders",
  //   author: "Alex Kim",
  // },
];

export default function VideoShowcase() {
  const [index, setIndex] = useState(0);

  const nextVideo = () => setIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="flex w-full items-stretch  bg-blue-600">
      {/* Left Video Section - 5/8 width */}
      <div className="w-5/8 relative" style={{ aspectRatio: "16 / 9" }}>
        {/* <video
          key={videos[index].src}
          src={videos[index].src}
          controls
          className="w-full h-full object-cover"
        /> */}
        <iframe
          src="https://www.youtube.com/embed/stU4IqG8MZc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute inset-0"
        />

        {/* Left Arrow */}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600/50 hover:bg-blue-400/50  text-white p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600/50 hover:bg-blue-400/50 text-white p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="w-3/8 flex flex-col pr-6 text-center h-auto relative  bg-center  bg-[url('/images/bg.svg')] bg-cover bg-no-repeat">
        {/* Overlay màu xanh trong suốt */}
        <div className="absolute inset-0 bg-blue-500/50"></div>

        {/* Content phải có relative + z-index để nổi lên trên lớp mờ */}
        <div className="relative z-10 flex-grow-[5] flex flex-col justify-center">
          <h2 className="text-6xl font-semibold text-white">
            {videos[index].title}
          </h2>
          <p className="text-xl font-thin mt-6 text-gray-100">
            {videos[index].subtitle}
          </p>
        </div>

        <div className="relative z-10 flex-grow-[1] flex items-end justify-center mb-6">
          <p className="text-2xl text-gray-300">{videos[index].date}</p>
        </div>
      </div>
    </div>
  );
}
