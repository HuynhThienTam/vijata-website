import EventCarousel from "./EventCarousel";
import RecentEvents from "./RecentEvents";

export default function LetsMeet() {
  return (
    <div className="w-[90%] mx-auto flex bg-white ">
      {/* Left (4/5) */}
      <div className="w-2/3 relative flex flex-col justify-start overflow-hidden">
        <EventCarousel/>
      </div>

      {/* Right (1/5) */}
      <div className="w-1/3  flex items-center justify-start ">
        <RecentEvents/>
      </div>
    </div>
  );
}
