import Link from "next/link";

export default function AddEventCard() {
  return (
    <div className="w-[90%] mx-auto py-9 ">
        <Link
      href="/admin/dashboardadmin/addevent"
      className="
        flex items-center justify-center
        w-36 h-48
        border-4 border-dashed border-gray-300
        rounded-xl
        text-gray-400
        hover:border-gray-500 hover:text-gray-600
        transition
        cursor-pointer
      "
    >
      <span className="text-6xl font-light">+</span>
    </Link>
    </div>
  );
}