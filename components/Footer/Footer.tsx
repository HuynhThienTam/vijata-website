import { GrLocation } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
export default function Footer() {
  const partners = [
    {
      name: "",
      logo: "/images/viethoa.jpg",
      url: "https://viethoa.edu.vn/public/vi",
    },
    { name: "", logo: "/images/vietsing.png", url: "https://vsvc.edu.vn/" },
    {
      name: "",
      logo: "/images/apra.png",
      url: "https://www.apra-friends.org/home",
    },
  ];
  return (
    <footer className="w-full bg-blue-600 text-white ">
      <div className="w-[90%] mx-auto flex gap-8 pt-12 pb-16">
        {/* Left Column: Logo + Name */}
        <div className="w-3/10 flex flex-col items-center ">
          <img
            src="/images/VIJATA.png"
            alt="Logo"
            className="w-40 h-auto mb-3"
          />
          <p className="text-sm font-semibold">Công ty TNHH Việt Nhật Đài</p>
        </div>

        {/* Middle Column: Contact Details */}
        <div className="w-1/4 flex flex-col gap-y-5">
          {/* Our contact details */}
          <h3 className="text-base font-semibold mb-3">Thông tin liên hệ:</h3>
          <div className="flex items-start gap-3">
            <GrLocation className="w-4 h-4 text-white " />
            <p className="text-sm font-medium pl-2">
              Số 1227, Đường Cách Mạng Tháng 8,<br />P.Thủ Dầu Một, TP.Hồ Chí Minh
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              <LuClock className="w-4 h-4 text-white" />
              <p className="text-sm font-medium pl-5">Thứ 2 -</p>
              <div className="flex-col ">
                <p className="text-sm font-medium ">Thứ 6: 8AM - 17PM</p>
                <p className="text-sm font-medium ">Thứ 7: 8AM - 12AM</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="w-4 h-4 text-white" />
            <p className="text-sm font-medium pl-2">truongthaohr@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <HiMiniDevicePhoneMobile className="w-4 h-4 text-white" />
            <p className="text-sm font-medium pl-2">0918 355 686</p>
          </div>
        </div>

        {/* Right Column: Partners */}
        <div className=" flex flex-col">
          <h3 className="text-base font-semibold mb-3">Các đối tác:</h3>
          <div className="flex gap-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <a
                  href={partner.url} // link tương ứng với ảnh
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className=" h-12 object-cover"
                  />
                </a>
                <p className="mt-2 text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="w-full text-center text-xs mt-6 border-t border-white/30 py-2">
        © {new Date().getFullYear()} VIJATA. All rights reserved.
      </div>
    </footer>
  );
}
