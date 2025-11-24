// export default function TopBar() {
//   return (
//     <div id="topbar"  className="w-full bg-blue-600 py-1 px-6 flex justify-end space-x-4 text-sm">
//       <div className="text-white">Follow us on: </div>
//       <a href="#"><img src="/icons/facebook.png" className="w-5 h-5" /></a>
//       <a href="#"><img src="/icons/instagram.png" className="w-5 h-5" /></a>

//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="topbar"
      className="w-full bg-blue-600 py-0.5 px-[3%] flex justify-between items-center text-[14px]"
    >
      {/* Language Selector */}
      <div
        ref={dropdownRef}
        className="relative text-white cursor-pointer select-none"
      >
        <div
          className="flex items-center space-x-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>English</span>
          <span  className="text-[8px]">▼</span>
        </div>

        {open && (
          <div className="absolute left-0 mt-0.5 bg-white shadow-md rounded-md w-36 text-black z-100">
            <div className="flex items-center px-2 py-2 hover:bg-gray-300 cursor-pointer text-orange-600 text-base ">
              <img src="/icons/flag-vn.png" className="w-4 h-4 mr-2" />
              Tiếng Việt
            </div>
            <div className="flex items-center px-2 py-2 hover:bg-gray-300 cursor-pointer text-orange-600 text-base ">
              <img src="/icons/flag-tw.png" className="w-4 h-4 mr-2" />
              漢語
            </div>
            <div className="flex items-center px-2 py-2 hover:bg-gray-300 cursor-pointer text-orange-600 text-base ">
              <img src="/icons/flag-jp.png" className="w-4 h-4 mr-2" />
              日本語
            </div>
          </div>
        )}
      </div>

      {/* Social Media Section */}
      <div className="flex items-center space-x-2 text-white">
        <span>Follow us on:</span>
        <a href="#">
          <img src="/icons/facebook.png" className="w-4 h-4" />
        </a>
        <a href="#">
          <img src="/icons/instagram.png" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
