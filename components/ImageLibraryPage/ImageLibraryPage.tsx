"use client";

import { useEffect, useState } from "react";
import { deleteImageAPI, getImagesAPI } from "../Services/ImageService";
import { toast } from "react-toastify";
import { confirmDeleteToast } from "../ToastCustom/ConfirmDeleteToast";

export default function ImageLibraryPage() {
  const [images, setImages] = useState<any[]>([]);

  const load = async () => {
    const res = await getImagesAPI();
    setImages(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl mb-4 text-blue-600">Thư viện ảnh</h1>

      <div className="grid grid-cols-4 gap-5 ">
        {images.map((img) => (
          <div
            key={img.id}
            className=" bg-gray-300 p-2 flex flex-col items-center justify-center"
          >
            <img src={img.url} className="h-32 object-cover w-52" />
            <input
              value={img.url}
              readOnly
              className="w-full bg-gray-600 text-xs text-amber-200 mt-3 mb-2"
            />
            <button
              onClick={() =>
                confirmDeleteToast(
                  "Bạn có chắc chắn bạn muốn xoá ảnh này?",
                  async () => {
                    await deleteImageAPI(img.id);
                    load();
                    toast.success("Ảnh xoá thành công");
                  }
                )
              }
              className="text-white py-1 px-2 bg-red-500 rounded-sm text-xs mt-1"
            >
              Xoá
            </button>
            {/* <button
              onClick={async () => {
                await deleteImageAPI(img.id);
                load();
              }}
              className="text-white py-1 px-2 bg-red-500 rounded-sm text-xs mt-1"
            >
              Delete
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
