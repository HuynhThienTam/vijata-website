"use client";
import { useState, useRef, useEffect } from "react";

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must be numbers only";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Message sent!");
    }
  };

  // 🔥 Lắng nghe click ngoài section
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        setErrors({ name: "", email: "", phone: "", message: "" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-4 bg-white ">
      <section 
        ref={sectionRef}
        className="max-w-4xl mx-auto p-8 bg-white rounded"
        style={{
        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
      }}
      >
        <h3 className="text-sm font-light text-gray-500 mb-1">
          You need to get support? We'd love to hear from you!
        </h3>
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact us!</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {["name", "email", "phone"].map((field) => (
              <div key={field} className="flex-1 relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "name"
                      ? "Name"
                      : field === "email"
                      ? "Email"
                      : "Phone"
                  }
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 focus:outline-blue-600 text-black placeholder-gray-400 ${
                    errors[field as keyof typeof errors]
                      ? "border-red-500"
                      : "border-gray-500"
                  }`}
                />
                {errors[field as keyof typeof errors] && (
                  <p className="text-red-500 text-xs absolute -top-5 left-0">
                    {errors[field as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full border rounded px-3 py-2 focus:outline-blue-600 text-black placeholder-gray-400 ${
                errors.message ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs absolute -top-5 left-0">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
