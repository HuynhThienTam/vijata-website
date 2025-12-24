"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
export function EventCardDashBoard({ news }: { news: any }) {
  // const [imgSrc, setImgSrc] = useState(
  //   news.coverPhoto && news.coverPhoto.trim() !== ""
  //     ? news.coverPhoto
  //     : "/images/display1.jpg"
  // );
  // const imageSrc =
  // news.coverPhoto &&
  // typeof news.coverPhoto === "string" &&
  // news.coverPhoto.trim() !== ""
  //   ? news.coverPhoto
  //   : "/images/display1.jpg";
  //   console.log("coverPhoto:", news.coverPhoto);
  const imageSrc =
    news.coverPhoto &&
    (news.coverPhoto.startsWith("/") || news.coverPhoto.startsWith("http"))
      ? news.coverPhoto
      : "/images/default-image.png";
  return (
    <div
      className="w-full  md:max-lg:w-[160px]  rounded-md overflow-hidden"
      style={{
        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
      }}
    >
      {/* className="w-[300px] md:max-lg:w-[160px]" */}
      <div className="relative w-full h-[140px]  overflow-hidden">
        <Image
          src={imageSrc}
          // onError={() => setImgSrc("/images/display1.jpg")}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <Link
          href={`/events/${news.id}`}
          className="group flex-shrink-0 w-[320px] md:max-lg:w-[160px] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-blue-600 group-hover:text-gray-600 transition-colors duration-300 ">
            {news.title}
          </h3>
        </Link>
        <div className="flex justify-between gap-3">
          <div className=" mt-4 mb-3 rounded-sm inline-block bg-red-600 inset-shadow-sm inset-shadow-red-700/50  ">
            <p className="px-[6px] pt-[4px] pb-[6px] text-xs text-white ">
              {new Date(news.createdOn).toLocaleDateString("vi-VN")}
            </p>
          </div>
          <Link
          href={`/admin/dashboardadmin/editevent/${news.id}`}
          >
          <FaPen className="w-4 h-4 mt-4 text-pink-500 hover:text-pink-700" />
          </Link>
          
        </div>
      </div>
    </div>
  );
}
