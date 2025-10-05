"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PRODUCTs & SERVICEs", href: "/products" },
  { label: "EVENTs", href: "/events" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full z-50 py-2">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        {/* Menu */}
        <ul className="flex space-x-14 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              // <li key={item.href} className="relative">
              //   <Link
              //     href={item.href}
              //     className={`text-gray-800 text-xl hover:text-green-600 transition ${
              //       isActive ? "text-green-600" : ""
              //     }`}
              //   >
              //     {item.label}
              //   </Link>

              //   {/* Active indicator (2 lines) */}
              //   {isActive && (
              //     <>
              //       <motion.span
              //         layoutId="top-indicator"
              //         className="absolute -top-2 left-0 right-0 h-[2px] bg-green-600"
              //         transition={{ type: "spring", stiffness: 300, damping: 20 }}
              //       />
              //       <motion.span
              //         layoutId="bottom-indicator"
              //         className="absolute -bottom-2 left-0 right-0 h-[2px] bg-green-600"
              //         transition={{ type: "spring", stiffness: 300, damping: 20 }}
              //       />
              //     </>
              //   )}
              // </li>
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-xl transition ${
                    isActive
                      ? "text-orange-400"
                      // : "text-blue-600 group-hover:text-orange-400"
                      : "text-blue-600 "
                  }`}
                >
                  {item.label}
                </Link>

                {/* Top hover indicator */}
                <span
                  className={`pointer-events-none absolute -top-2 left-0 right-0 h-[2px] bg-orange-400 
    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}
                />

                {/* Bottom hover indicator */}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 right-0 h-[2px] bg-orange-400
    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
