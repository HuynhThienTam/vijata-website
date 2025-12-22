"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { uploadImageAPI } from "../Services/ImageService";

export default function ImageUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const upload = async () => {
    if (!file) return;

    const res = await uploadImageAPI(file);
    setUrl(res.data.url);
    toast.success("Upload success");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="font-bold text-xl mb-4 text-blue-600">Upload Image</h1>

      <input
        className="border border-gray-600 my-2  text-gray-600 hover:text-gray-400 hover:border-gray-400"
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={upload}
        className="block mt-4 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded"
      >
        Upload
      </button>

      {url && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Copy link:</p>
          <input value={url} readOnly className="w-full bg-gray-600 text-xs text-amber-200 p-2" />
          <img src={url} className="mt-2 rounded" />
        </div>
      )}
    </div>
  );
}
