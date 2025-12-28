import ProtectedLayout from "@/components/Helpers/ProtectedRoute";
import ImageLibraryPage from "@/components/ImageLibraryPage/ImageLibraryPage";
import React from "react";

const imagelibrary = () => {
  return (
    <ProtectedLayout>
      <div className="bg-white">
        <ImageLibraryPage />
      </div>
    </ProtectedLayout>
  );
};

export default imagelibrary;
