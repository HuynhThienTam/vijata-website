
import { GrLocation } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
export default function Footer() {
  const partners = [
    { name: "", logo: "/images/viethoa.jpg" },
    { name: "", logo: "/images/vietsing.png" },
    // { name: "", logo: "/images/partner-bf.png" },
  ];
  return (
    <footer className="w-full bg-blue-600 text-white ">
      <div className="w-[90%] mx-auto flex gap-8 pt-16 pb-20">
        {/* Left Column: Logo + Name */}
        <div className="w-3/10 flex flex-col items-center ">
          <img
            src="/images/VIJATA.png"
            alt="Logo"
            className="w-52 h-auto mb-3"
          />
          <p className="text-lg font-semibold">VIJATA Academy</p>
        </div>

        {/* Middle Column: Contact Details */}
        <div className="w-1/4 flex flex-col gap-y-7">
          <h3 className="text-2xl font-semibold mb-3">Our contact details:</h3>
          <div className="flex items-center gap-3">
            <GrLocation className="w-4 h-4 text-white"/>
             <p className="text-base font-semibold pl-2">123 Example Street, Hanoi</p>
          </div>
          <div className="flex items-center gap-3">
            <LuClock className="w-4 h-4 text-white"/>
             <p className="text-base font-semibold pl-2">Mon - Fri: 8AM - 6PM</p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="w-4 h-4 text-white"/>
            <p className="text-base font-semibold pl-2">info@vijata.com</p>
          </div>
          <div className="flex items-center gap-3">
            <HiMiniDevicePhoneMobile className="w-4 h-4 text-white"/>
            <p className="text-base font-semibold pl-2">0123 456 789</p>
          </div>
        </div>

        {/* Right Column: Partners */}
        <div className=" flex flex-col">
          <h3 className="text-xl font-semibold mb-3">Our Partners:</h3>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className=" h-16 object-cover"
                />
                <p className="mt-2 text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="w-full text-center text-sm mt-8 border-t border-white/30 py-4">
        © {new Date().getFullYear()} VIJATA Academy. All rights reserved.
      </div>
    </footer>
  );
}
