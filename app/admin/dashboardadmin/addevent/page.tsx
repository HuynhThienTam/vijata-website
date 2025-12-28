import AddEventPage from "@/components/AddEventPage/AddEventPage";
import ProtectedLayout from "@/components/Helpers/ProtectedRoute";
import React from "react";

const addevent = () => {
  return (
    <ProtectedLayout>
      <div className="bg-white">
        <AddEventPage />
      </div>
    </ProtectedLayout>
  );
};

export default addevent;
