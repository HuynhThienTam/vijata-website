export default function NotableActivities() {
  const activities = [
    { title: "Tham quan công ty Kim Xương", text: "Ngày 9/6/2025, công ty TNHH Việt Nhật Đài đã tổ chức một buổi tham quan cho các sinh viên đang học tại trường cao đẳng nghề Việt Nam- Singapore ở xưởng sản xuất của công ty Kim Xương. Đây là một buổi tham quan cho các bạn tìm hiểu về các công việc, môi trường làm việc của ngành học mình đang theo học. Tại đây các bạn sinh viên đã được giới thiệu về dây truyền công nghiệp sản xuất giày da, một trong những mặc hàng xuất khẩu chủ lực của địa phương.", image: "/images/activity1.jpg" },
    { title: "APRA International Final 2025", text: "Sáng ngày 29/11/2025, tại trung tâm triễn lãm Expo thành phố mới Bình Dương, APRA Association cùng với trường đại học RMIT và công ty Vijita đã tổ chức cuộc thi chế tạo robot dành cho các bạn học sinh tiểu học đến từ: Việt Nam, Hong Kong, Đài Loan, Thái Lan, Malaysia. Cuộc thi, quy tụ gần 300 học sinh tham dự, đã tạo ra sân chơi bổ ích cho các bạn nhỏ thể hiện sáng tạo, học hỏi và có các trải nghiệm giao lưu với bạn bè quốc tế.", image: "/images/activity2.jpg" },
    // { title: "Environmental Campaign", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity3.jpg" },
    // { title: "Student Festival", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity4.jpg" },
  ];

  return (
    <section className="w-[90%] mx-auto pb-20 pt-40">
      <h2 className="text-4xl font-bold text-rose-600 text-center mb-20">Các hoạt động</h2>
      <div className="flex flex-col gap-12">
        {activities.map((a, idx) => {
          const isEven = idx % 2 === 0; // 0-based index → 0,2,4 là even

          return (
            <div
              key={idx}
              className={`flex flex-col  items-center gap-12 py-4 ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Ảnh */}
              <div className="w-full md:w-3/7">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-auto rounded-3xl shadow-lg object-cover"
                />
              </div>

              {/* Nội dung */}
              <div className="w-full md:w-4/7 ">
                <h3 className="text-2xl font-bold  mb-2 text-gray-600">{a.title}</h3>
                <p className="text-gray-600 text-[1rem] leading-relaxed whitespace-pre-line">{a.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
