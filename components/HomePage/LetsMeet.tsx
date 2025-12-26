import Image from "next/image";

export default function LetsMeet() {
  return (
    <div className="w-[90%] mx-auto flex bg-white pt-24">
      {/* Left (4/5) */}
      <div className="w-3/4 relative bg-white p-8 flex flex-col justify-center overflow-hidden">
        {/* Background quote images */}
        <Image
          src="/images/open-quote.png"
          alt="quote open"
          width={150}
          height={150}
          className="absolute top-4 left-4  pointer-events-none"
        />
        <Image
          src="/images/close-quote.png"
          alt="quote close"
          width={150}
          height={150}
          className="absolute bottom-4 right-4  pointer-events-none"
        />

        {/* Content */}
        <div className="w-full justify-items-center px-15 pt-6 pb-18">
          <h2 className="text-5xl font-bold text-gray-900 relative z-10">
            Hãy gặp gỡ những thầy cô
          </h2>
          {/* <p className="text-2xl text-gray-600 mt-5 relative z-10 leading-8">
            We are passionate about innovative solutions and long-term
            partnerships. 
          </p> */}
          <p className="text-2xl text-gray-600 mt-5 relative z-10 leading-8">
            Chúng tôi rất quan tâm đến sự tiến bộ của mỗi em học sinh. Chúng tôi luôn cố gắng để các em có thể tiếp thu kiến thức tốt nhất và có những trải nghiệm quý giá trong quá trình học.
          </p>
        </div>
      </div>

      {/* Right (1/5) */}
      <div className="w-1/4 p-0 flex items-center justify-center group">
        <div className="border-[8px] border-blue-600 rounded-full overflow-hidden">
          <Image
            src="/images/teachers1.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 "
          />
        </div>
      </div>
    </div>
  );
}
