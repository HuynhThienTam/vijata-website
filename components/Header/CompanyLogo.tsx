"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// const CompanyLogo = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`  top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/images/VIJATA.png"
//             alt="Logo"
//             width={isScrolled ? 60 : 100}
//             height={isScrolled ? 30 : 50}
//             className="transition-all"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompanyLogo;
type Props = {
  isShrunk?: boolean;
};
const CompanyLogo = ({ isShrunk }: Props) => {
  return (
    <div
      className={`  top-0 w-full z-50 transition-all duration-300 ${
        // isShrunk ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        isShrunk ? "bg-transparent  py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/VIJATA.png"
            alt="Logo"
            width={isShrunk ? 60 : 100}
            height={isShrunk ? 30 : 50}
            className="transition-all"
          />
        </Link>
      </div>
    </div>
  );
};

export default CompanyLogo;
