import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { EventCreate, EventGet } from "../Models/Event";
import { toast } from "react-toastify";

const api = process.env.NEXT_PUBLIC_API_URL + "/api/event/";
export const EventGetByPageAPI = async (pageNumber: number, pageSize: number) => {
  try {
    const data = await axios.get<EventGet[]>(api + `?SortBy=CreatedOn&IsDescending=true&PageNumber=${pageNumber}&PageSize=${pageSize}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
export const EventGetByIdAPI = async (id: number) => {
  console.log("🔍 Fetching event with ID:", `${api}${id}`);
  try {
    const res = await axios.get<EventGet>(`${api}${id}`);
    return res;
  } catch (error: any) {
    console.error("❌ Get event by id failed:", {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });
    return null; // ⚠️ không throw để UI xử lý
  }
};
// export const EventGetByIdAPI = async (id: number) => {
//   try {
//     const data = await axios.get<EventGet>(api + `/${id}`);
//     return data;
//   } catch (error:any) {
//     console.error("loi gi ne:", error.response?.data);
//     throw error; // ⚠️ QUAN TRỌNG
//   }
// };
export const EventPostAPI = async (
  title: string,
  content: string,
  coverPhoto: string,
  startOn: string,
  finishOn: string,
) => {
  // return axios.post<EventCreate>(api, {
  //   title,
  //   content,
  //   coverPhoto, //
  //   startOn,
  //   finishOn,
  // });
  try {
    return await axios.post(api, {
      title,
      content,
      coverPhoto,
      startOn,
      finishOn,
    });
  } catch (error: any) {
    console.error("loi gi ne:", error.response?.data);
    throw error; // ⚠️ QUAN TRỌNG
  }
};
// export const EventPostAPI = async (
//   title: string,
//   content: string,
//   coverPhoto: string,
//   startOn: string,
//   finishOn: string,
// ) => {
//   try {
//     const data = await axios.post<EventCreate>(api, {
//       title: title,
//       content: content,
//       coverPhoto: coverPhoto,
//       startOn: startOn,
//       finishOn: finishOn,
//     });
//     return data;
//   } catch (error) {
//     handleError(error);
//   }
// };
export const EventUpdateAPI = async (
  id: number,
    title: string,
    content: string,
    coverPhoto: string,
    startOn: string,
    finishOn: string,
  
) => {
  return await axios.put(`${api}${id}`, {
    title: title,
    content: content,
    coverPhoto: coverPhoto,
    startOn: startOn,
    finishOn: finishOn,
  });
};

/* =======================
   DELETE
======================= */
export const EventDeleteAPI = async (id: number) => {
  return await axios.delete(`${api}${id}`);
};