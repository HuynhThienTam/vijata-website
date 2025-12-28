import ProtectedLayout from "@/components/Helpers/ProtectedRoute";
import ImageUploadPage from "@/components/ImageUploadPage/ImageUploadPage";
import React from "react";

const imageupload = () => {
  return (
    <ProtectedLayout>
      <div className="bg-white">
        <ImageUploadPage />
      </div>
    </ProtectedLayout>
  );
};

export default imageupload;
