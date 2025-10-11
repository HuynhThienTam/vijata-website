export default function NotableActivities() {
  const activities = [
    { title: "Charity Event", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity1.jpg" },
    { title: "Teacher Workshop", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity2.jpg" },
    { title: "Environmental Campaign", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity3.jpg" },
    { title: "Student Festival", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum quis nesciunt sapiente labore. Est magnam incidunt quam eligendi explicabo? Minus saepe expedita laudantium voluptatum illo magnam natus nam labore perferendis est ex rem accusantium ut, iste tenetur ipsam omnis maiores sequi. Itaque ea impedit iusto pariatur exercitationem architecto fugiat.", image: "/images/activity4.jpg" },
  ];

  return (
    <section className="w-[90%] mx-auto pb-12 pt-56">
      <h2 className="text-4xl font-extrabold text-rose-600 text-center mb-20">Our Notable Activities</h2>
      <div className="flex flex-col gap-12">
        {activities.map((a, idx) => {
          const isEven = idx % 2 === 0; // 0-based index → 0,2,4 là even

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-12 py-4 ${
                isEven ? "md:flex-row-reverse" : ""
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
                <h3 className="text-4xl font-bold  mb-2 ">{a.title}</h3>
                <p className="text-gray-600 text-[1.25rem] leading-relaxed">{a.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
