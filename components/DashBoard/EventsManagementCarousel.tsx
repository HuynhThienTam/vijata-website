"use client";
import { useRef, useState, useEffect } from "react";
import { EventDeleteAPI, EventGetByPageAPI } from "../Services/EventService";
import { EventCardDashBoard } from "./EventCardDashboard";
import { toast } from "react-toastify";

export default function EventsManagementCarousel() {
  const [events, setEvents] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const pageSize = 12;

  useEffect(() => {
    fetchEvents();
  }, [pageNumber]);

  const fetchEvents = async () => {
    const res = await EventGetByPageAPI(pageNumber, pageSize);
    if (res?.data) {
      setEvents(res.data);
    }
  };

  const nextPage = () => {
    if (events.length === pageSize) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  const removeEvent = async (index: number) => {
      const event = events[index];
        try {
          await EventDeleteAPI(event.id);
          toast.success("Event deleted");
        } catch {
          toast.error("Delete event failed");
          return;
        }
      
      // xoá khỏi state
      setEvents((prev) => prev.filter((_, i) => i !== index));
    };
  return (
    <div className=" w-[90%] mx-auto py-9">
      {/* Grid */}
        <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-9 justify-items-center">
          {events.map((item, index) => (
            <div key={index} className="  w-full" >
              <EventCardDashBoard  news={item} onRemoveEvent={() => removeEvent(index)} />
            </div>
            
          ))}
        </div>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center gap-4 pt-8">
        <button
          onClick={prevPage}
          disabled={pageNumber === 1}
          className="px-4 py-2 text-gray-600 border rounded disabled:opacity-40"
        >
          ←
        </button>

        <span className="text-sm text-gray-600">Page {pageNumber}</span>

        <button
          onClick={nextPage}
          disabled={events.length < pageSize}
          className="px-4 py-2 text-gray-600 border rounded disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
