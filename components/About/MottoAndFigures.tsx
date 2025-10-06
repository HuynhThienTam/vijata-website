export default function MottoAndFigures() {
  return (
    <section className="w-full pt-12">
      {/* Top Section - Background Image with Overlay */}
      <div
        className="relative w-full h-90 bg-cover bg-center flex flex-col items-center justify-start text-white"
        style={{ backgroundImage: "url('/images/motto-bg.png')" }} // bạn thay ảnh nhé
      >
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

        <h2 className="relative text-5xl font-mono font-medium pt-20">VIJATA'S MOTTO</h2>
        <p className="relative text-xl mt-2 max-w-[60%] text-center pt-2">
          <span className="text-lg align-bottom">&laquo; &nbsp;</span>
          Inspiring lifelong learning through dedication and innovation.
          <span className="text-lg align-bottom">&nbsp; &raquo;</span>
        </p>
      </div>

      {/* Bottom Stats Section */}
      <div className="w-full  box-decoration-slice bg-linear-to-r from-blue-600 via-purple-500 to-pink-500">
        <div className="w-[80%] mx-auto pt-10 flex justify-evenly text-center pb-12">
            <div>
          <p className="text-6xl font-extralight text-gray-200">150+</p>
          <p className="text-gray-200 font-bold  pt-5 text-[1.375rem]">Members</p>
        </div>
        <div>
          <p className="text-6xl font-extralight text-gray-200">10+</p>
          <p className="text-gray-200 font-bold  pt-5 text-[1.375rem]">Years of Experience</p>
        </div>
        <div>
          <p className="text-6xl font-extralight text-gray-200">500+</p>
          <p className="text-gray-200 font-bold  pt-5 text-[1.375rem]">Satisfied Clients</p>
        </div>
        <div>
          <p className="text-6xl font-extralight text-gray-200">120</p>
          <p className="text-gray-200 font-bold pt-5 text-[1.375rem]">Classes</p>
        </div>
        </div>
      </div>
    </section>
  );
}
