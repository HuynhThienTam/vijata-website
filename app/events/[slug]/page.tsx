import NewsDetailPage from "@/components/NewsPage/NewsDetailPage";
import {  fetchEventById } from "@/components/Services/EventService";
import type { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const event = await fetchEventById(params.slug);

  if (!event) {
    return {
      title: "Sự kiện không tồn tại",
    };
  }

  const imageSrc =
    event.coverPhoto?.startsWith("http")
      ? event.coverPhoto
      : "https://vijata-website.vercel.app/images/vijatameta.png";
 
  return {
    title: event.title,
    description:  event.content?.slice(0, 160),
    openGraph: {
      title: event.title,
      description: event.content?.slice(0, 160),
      images: [
        {
          url: imageSrc,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params; 

  return (
    <div className="bg-white">
      <NewsDetailPage eventId={slug} />
    </div>
  );
}
