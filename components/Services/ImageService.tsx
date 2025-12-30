// Services/ImageService.ts
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API_URL + "/api/images";

export const uploadImageAPI = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(api + "/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getImagesAPI = () => axios.get(api);

export const deleteImageAPI = (id: number) =>
  axios.delete(api + "/" + id);
