import Image from "next/image";
import { JSX } from "react";

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
export default function NewsDetailPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Ảnh bìa lớn */}
      <div className="w-full h-[400px] relative mb-10">
        <Image
          src="/images/blue-pond-hokkaido.jpg"
          alt="Cover"
          fill
          className="object-cover rounded-xl brightness-95"
        />
      </div>

      {/* Nội dung bài */}
      <article className="prose prose-lg max-w-none">
        {articleContent.map((part, idx) => renderArticlePart(part, idx))}
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
