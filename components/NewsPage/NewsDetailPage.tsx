"use client";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import { getImagesAPI } from "../Services/ImageService";
import { EventGetByIdAPI } from "../Services/EventService";
import { EventContentBlockGet } from "../Models/EventContentBlock";

const articleContent = [
  { type: "heading", level: 1, content: "Vijata opens new language center" },
  { type: "text", content: "On October 24th, Vijata celebrated the grand opening of its new Chinese language training center in Ho Chi Minh City." },
  { type: "image", src: "/images/display1.jpg", alt: "Opening ceremony" },
  { type: "quote", content: "“Inspiring lifelong learning through dedication and innovation.”" },
  { type: "heading", level: 2, content: "Highlights of the event" },
  { type: "text", content: "The event was attended by over 200 guests including educators, students, and community partners." },
  { type: "image", src: "/images/display2.jpg", alt: "Guests and partners" },
  { type: "text", content: "This marks Vijata’s fifth center nationwide, reinforcing our mission to make language learning accessible to everyone." },
  { type: "link", content: "Visit our website for more details", href: "https://vijata.com" },
];

const renderArticlePart = (part: any, idx: number) => {
  switch (part.type) {
    case "heading":
      const HeadingTag = `h${part.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag key={idx} className="text-3xl font-semibold mt-10 mb-4 text-blue-600">
          {part.content}
        </HeadingTag>
      );

    case "text":
      return (
        <p key={idx} className="text-lg leading-relaxed mb-5 text-gray-700">
          {part.content}
        </p>
      );

    case "image":
      return (
        <div key={idx} className="my-8 flex justify-center">
          <Image
            src={part.src}
            alt={part.alt}
            width={800}
            height={500}
            unoptimized
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      );

    case "quote":
      return (
        <blockquote key={idx} className="border-l-4 border-blue-600 pl-6 italic text-gray-600 text-xl my-6">
          {part.content}
        </blockquote>
      );

    case "link":
      return (
        <a
          key={idx}
          href={part.href}
          target="_blank"
          className="text-blue-600 font-semibold hover:underline"
        >
          {part.content}
        </a>
      );

    default:
      return null;
  }
};
export default function NewsDetailPage({eventId}: {eventId: string}) {
  const [event, setEvent] = useState<any>(null);
  const [eventContentBlocks, setEventContentBlocks] = useState<EventContentBlockGet[]>([]);
  const eventIdNumber = Number(eventId);
  // const eventIdNumber= 2007;;
  useEffect(() => {
    EventGetByIdAPI(eventIdNumber).then(res => {
      console.log("API DATA:", res?.data);
      setEvent(res?.data);
      setEventContentBlocks(res?.data?.eventContent || []);
    }).catch(err => {
      console.error("API error:", err);
    });
  }, [eventId]);
  if (!event) return <p>Loading...</p>;
  const imageSrc =
  event.coverPhoto &&
  (event.coverPhoto.startsWith("/") ||
    event.coverPhoto.startsWith("http"))
    ? event.coverPhoto
    : "/images/default-image.png";
  
  
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Ảnh bìa lớn */}
      <div className="w-full h-[400px] relative mb-10">
        <Image
          src={imageSrc}
          alt="Cover"
          fill
          unoptimized
          className="object-cover rounded-xl brightness-95"
        />
      </div>

      {/* Nội dung bài */}
      <article className="prose prose-lg max-w-none">
        {eventContentBlocks.map((part, idx) => renderArticlePart(part, idx))}
      </article>

      {/* Hashtags */}
      <div className="mt-10 flex flex-wrap gap-3">
        {["#Learning", "#Community", "#Innovation"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { EventGetByIdAPI } from "../Services/EventService";
// import { EventContentBlockGet } from "../Models/EventContentBlock";

// export default function NewsDetailPage({ eventId }: { eventId: string }) {
//   const [event, setEvent] = useState<any>(null);
//   const [blocks, setBlocks] = useState<EventContentBlockGet[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const id = Number(eventId);
//     if (isNaN(id)) {
//       setError("ID không hợp lệ");
//       return;
//     }

//     EventGetByIdAPI(id)
//       .then((res) => {
//         setEvent(res.data);
//         setBlocks(res.data?.eventContent || []);
//       })
//       .catch(() => {
//         setError("Không tải được bài viết");
//       });
//   }, [eventId]);

//   if (error) return <p className="text-red-500">{error}</p>;
//   if (!event) return <p>Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
//       <p className="text-gray-500 mb-6">
//         {new Date(event.createdOn).toLocaleDateString("vi-VN")}
//       </p>

//       {blocks.map((block) => {
//         switch (block.type) {
//           case "heading":
//             return <h2 key={block.id} className="text-xl font-semibold my-4">{block.content}</h2>;
//           case "text":
//             return <p key={block.id} className="my-3">{block.content}</p>;
//           case "image":
//             return <img key={block.id} src={block.src!} className="my-4 rounded" />;
//           case "quote":
//             return <blockquote key={block.id} className="border-l-4 pl-4 italic my-4">{block.content}</blockquote>;
//           case "link":
//             return <a key={block.id} href={block.href!} className="text-blue-600 underline">{block.content}</a>;
//           default:
//             return null;
//         }
//       })}
//     </div>
//   );
// }

