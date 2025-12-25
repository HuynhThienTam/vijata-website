import Link from "next/link";
import { IoMdPhotos } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";

export default function AddEventCard() {
  return (
    <div className="w-[90%] mx-auto py-9 flex ">
        <Link
      href="/admin/dashboardadmin/addevent"
      className="
        flex items-center justify-center
        w-36 h-48
        border-4 border-dashed border-gray-300
        rounded-xl
        text-gray-300
        hover:border-gray-400 hover:text-gray-400
        transition
        cursor-pointer
        mr-9
      "
    >
      <span className="text-6xl font-light">+</span>
    </Link>
    <Link
      href="/admin/dashboardadmin/library"
      className="
        flex items-center justify-center
        w-36 h-48
        border-4 border-dashed border-gray-300
        rounded-xl
        text-gray-300
        hover:border-gray-400 hover:text-gray-400
        transition
        cursor-pointer
        mr-9
      "
    >
      <span className="text-6xl font-light"><IoMdPhotos className="" /></span>
    </Link>
    <Link
      href="/admin/dashboardadmin/imageupload"
      className="
        flex items-center justify-center
        w-36 h-48
        border-4 border-dashed border-gray-300
        rounded-xl
        text-gray-300
        hover:border-gray-400 hover:text-gray-400
        transition
        cursor-pointer
        mr-9
      "
    >
      <span className="text-6xl font-light"><MdAddPhotoAlternate className="" /></span>
    </Link>
    </div>
  );
}