// import NewsDetailPage from "@/components/NewsPage/NewsDetailPage";

// export default async function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return (
//     <div className="bg-white">
//       <NewsDetailPage eventId={params.slug} />
//     </div>
//   );
// }
import NewsDetailPage from "@/components/NewsPage/NewsDetailPage";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = params; // ✅ OK

  return (
    <div className="bg-white">
      <NewsDetailPage eventId={slug} />
    </div>
  );
}
// import NewsDetailPage from "@/components/NewsPage/NewsDetailPage";

// export default function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return (
//     <div className="bg-white">
//       <NewsDetailPage eventId={params.slug} />
//     </div>
//   );
// }

// import NewsDetailPage from '@/components/NewsPage/NewsDetailPage';

// export default async function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return (
//     <div className="bg-white">
//       <NewsDetailPage eventId={params.slug} />
//     </div>
//   );
// }