import EditEventPage from "@/components/EditEventPage/EditEventPage";
import ProtectedLayout from "@/components/Helpers/ProtectedRoute";
import React from "react";
type PageProps = {
  params: {
    slug: string;
  };
};
export default async function Page({ params }: PageProps) {
  const { slug } = params;
  return (
    <ProtectedLayout>
      <div className="bg-white">
        <EditEventPage eventId={slug} />
      </div>
    </ProtectedLayout>
  );
}
