import { FaRocket } from "react-icons/fa";

export default function BriefInfo() {
  return (
    <section className="w-[90%] flex flex-col items-center justify-start text-start mx-auto pt-6 leading-relaxed">
      {/* <h1 className="text-center font-bold text-3xl">What do you know about Vijata?</h1> */}
      <h2 className="text-blue-600 text-5xl font-bold text-center leading-tight">
        {/* <span className=" "> */}
        {/* <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500  bg-clip-text text-transparent inline-block "> */}
        Bạn biết những gì
        <br />
        về Vijata?{" "}
        <FaRocket className=" inline-block align-baseline ml-[5xl] pt-1 text-pink-400" />
        {/* </span> */}
      </h2>
      <p className="indent-8 pt-6 text-base text-gray-600 w-[65%]">
        Được thành lập vào ngày 2/11/2015, Công ty TNHH Việt Nhật Đài là nơi chuyên
        đào tạo, hợp tác đào tạo các ngoại ngữ Hoa, Anh,... cho người Việt và
        đào tạo tiếng Việt cho người nước ngoài. Ngoài ra công ty còn là nơi
        chuyên tư vấn du học và đào tạo nghề ngắn hạn.
        <br />
        <br />
        Với sứ mệnh mang tri thức đến với các bạn trẻ. Tập thể công ty Việt Nhật Đài 
        luôn hi vọng có thể giúp các bạn học viên trong việc nâng cao kiến thức,
        tăng cường sự tự tin. Từ đó mở ra cho các bạn các cơ hội nghề nghiệp trong tương lai.
      </p>
    </section>
  );
}
