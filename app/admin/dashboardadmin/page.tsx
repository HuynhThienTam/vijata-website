
import AddEventCard from "@/components/DashBoard/AddEvent";
import EventsManagementCarousel from "@/components/DashBoard/EventsManagementCarousel";
import ProtectedLayout from "@/components/Helpers/ProtectedRoute";
import React from "react";

const dashboard = () => {
  return (
    <ProtectedLayout>
      <div className="bg-white">
        <AddEventCard/>
        <EventsManagementCarousel/>
      </div>
    </ProtectedLayout>
  );
};

export default dashboard;
