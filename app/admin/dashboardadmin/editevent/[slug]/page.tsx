import EditEventPage from "@/components/EditEventPage/EditEventPage";
import React from "react";
type PageProps = {
  params: {
    slug: string;
  };
};
export default async function Page({ params }: PageProps) {
  const { slug } = params; 
  return (
    <div className="bg-white">
        <EditEventPage eventId={slug}/>
    </div>
  );
};
