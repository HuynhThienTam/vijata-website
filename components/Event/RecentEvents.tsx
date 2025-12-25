"use client";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { EventGetByPageAPI } from "../Services/EventService";
import Link from "next/link";


export default function RecentEvents() {
  // events: [{ id, date: "...", title, timeRange }]
  // const events = [
  // {
  //   id: 1,
  //   date: "2025-01-05",
  //   title: "Grand Opening Ceremony of the Innovation Hub",
  //   timeRange: "January 5 at 9:00 AM – January 5 at 12:00 PM",
  // },
  // {
  //   id: 2,
  //   date: "2025-01-12",
  //   title: "Tech for Good: Charity Coding Marathon",
  //   timeRange: "January 12 at 8:00 AM – January 12 at 6:00 PM",
  // },
  // {
  //   id: 3,
  //   date: "2025-01-20",
  //   title: "Global AI Conference 2025",
  //   timeRange: "January 20 at 9:00 AM – January 22 at 5:00 PM",
  // },
  // {
  //   id: 4,
  //   date: "2025-02-03",
  //   title: "Creative Design Workshop: Building Brand Identity",
  //   timeRange: "February 3 at 1:00 PM – February 3 at 4:00 PM",
  // },
  // {
  //   id: 5,
  //   date: "2025-02-14",
  //   title: "Valentine Community Gathering Event",
  //   timeRange: "February 14 at 6:00 PM – February 14 at 9:00 PM",
  // },
//   {
//     id: 6,
//     date: "2025-02-28",
//     title: "Business Growth & Networking Night",
//     timeRange: "February 28 at 6:30 PM – February 28 at 8:30 PM",
//   },
//   {
//     id: 7,
//     date: "2025-03-10",
//     title: "Spring Internship Recruitment Fair",
//     timeRange: "March 10 at 8:00 AM – March 10 at 3:00 PM",
//   },
//   {
//     id: 8,
//     date: "2025-03-25",
//     title: "Future Leaders Workshop",
//     timeRange: "March 25 at 10:00 AM – March 25 at 1:00 PM",
//   },
// ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("vi-VN", { month: "short" }); // Jan, Feb
    const day = date.getDate();
    return { month, day };
  };
  const [events, setEvents] = useState<any[]>([]);
    const pageSize = 5;
    const pageNumber = 1;
     useEffect(() => {
        fetchEvents();
      }, [pageNumber]);
    
      const fetchEvents = async () => {
        const res = await EventGetByPageAPI(pageNumber, pageSize);
        if (res?.data) {
          setEvents(res.data);
        }
      };
  return (
    <div className="flex flex-col w-full gap-4 pl-3 pt-9">
      {/* Title */}
      <h2 className="text-2xl text-gray-800 font-semibold  text-left tracking-wide">RECENT</h2>

      {/* Events */}
      <div className="flex flex-col gap-4">
        {events.map((ev) => {
          const { month, day } = formatDate(ev.startOn);

          return (
            <div
              key={ev.id}
              className="flex border-l-3 border-blue-500 pl-4 pb-3 gap-5 items-start"
            >
              {/* LEFT COLUMN — DATE */}
              <div className="flex flex-col items-center w-1/8 text-center">
                <span className="text-[12px] font-light uppercase text-gray-500">
                  {month}
                </span>
                <span className="text-2xl text-black font-semibold">{day}</span>
              </div>

              {/* RIGHT COLUMN — DETAILS */}
              <div className="flex flex-col w-7/8">
                {/* Time range */}
                <div className="flex items-end text-xs text-gray-600 mb-1">
                  <FaCalendar className="w-3 h-3 text-blue-600 mr-1 mb-0.5" />
                  <p className="">{ev.startOn}-{ev.finishOn}</p>
                </div>

                {/* Title */}
                <Link
                  href={`/events/${ev.id}`}
                  className="font-semibold leading-7 text-gray-900 hover:underline decoration-1 underline-offset-6  text-xl"
                >
                  {ev.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Calendar */}
      <a
        href="#"
        className="text-blue-600 text-sm font-semibold hover:underline mt-2"
      >
        View calendar →
      </a>
    </div>
  );
}
