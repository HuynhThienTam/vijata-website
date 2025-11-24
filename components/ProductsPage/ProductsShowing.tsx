// "use client";
// import React from "react";
// const courseList = [
//   {
//     title: "Chinese language courses",
//     text: "Always ready to help whenever needed. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
//   },
//   {
//     title: "Japanese language courses",
//     text: "Delivers consistent results every time. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
//   },
//   {
//     title: "Korean language courses",
//     text: "Keeps everything clear and transparent. lorem igiggih ygy hhhu, ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque?",
//   },
// ];
// const localColors = ["bg-green-400", "bg-pink-400", "bg-amber-400"];

// export default function ProductsShowing() {
//   return (
//     <div className="w-[90%] mx-auto  bg-white">
//       {courseList.map((m, idx) => {
//         const isLeft = idx % 2 === 1; // odd index => content left
//         return (
//           <div key={idx} className=" w-full relative flex overflow-hidden aspect-5/2">
//             <div className={`absolute w-[60%] top-0 ${isLeft?'right-0':'left-0'}  aspect-5/3 ${localColors[idx % localColors.length]}`}></div>
//             <div className={`absolute w-[50%] aspect-10/7  top-20 ${isLeft?'left-0':'right-0'}  `}>
//               <img
//                 src="/images/activity2.jpg"
//                 alt="product"
//                 className="w-full aspect-10/7 object-cover  pointer-events-none"
//               ></img>
//             </div>
//             {/* <div className="absolute top-50 right-[5%] bg-white shadow-lg rounded-xl p-6 w-[50%] z-10"></div> */}
//             <div className={`absolute top-36 ${isLeft?'right-[5%]':'left-[5%]'}  bg-white rounded-xl p-12 w-[50%] aspect-3/1 z-10`}>
//               <h3 className="text-3xl font-semibold">
//                 {m.title}
//               </h3>
//               <p className="text-base font-extralight text-gray-600 mt-6">
//                 {m.text}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

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

export default function ProductsShowing() {
  return (
    <div className="w-[90%] mx-auto  bg-white">
      <div className=" w-full relative flex overflow-hidden aspect-5/2">
        <div
          className={`absolute w-[60%] top-0 right-0  aspect-5/3 bg-yellow-500`}
        ></div>
        <div className={`absolute w-[50%] aspect-10/7  top-20 left-0  `}>
          <img
            src="/images/activity2.jpg"
            alt="product"
            className="w-full aspect-10/7 object-cover  pointer-events-none"
          ></img>
        </div>
        {/* <div className="absolute top-50 right-[5%] bg-white shadow-lg rounded-xl p-6 w-[50%] z-10"></div> */}
        <div
          className={`absolute top-36 right-[5%]  bg-white rounded-lg p-12 w-[50%] aspect-3/1 z-10`}
        >
          <h3 className="text-3xl font-semibold text-gray-700">Get support?</h3>
          <p className="text-base font-extralight text-gray-600 mt-6">
            A good personal statement is important for a successful application.
            Get help from our country ambassadors now.
          </p>
          <a
            href="#_"
            className="mt-5 relative inline-flex items-center px-6 py-1.5 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-md hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
           
            <span className="relative">Get Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
