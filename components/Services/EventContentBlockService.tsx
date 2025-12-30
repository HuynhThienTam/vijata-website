import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { EventContentBlockCreate, EventContentBlockGet } from "../Models/EventContentBlock";

const api = process.env.NEXT_PUBLIC_API_URL + "/api/eventcontentblock/";

export const EventContentBlockPostAPI = async (
  type: string,
  level:number,
  content: string,
  src: string,
  alt: string,
  href: string,
  eventId: number
) => {
  try {
    const data = await axios.post<EventContentBlockCreate>(api + eventId, {
      type: type,
      level: level,
      content: content,
      src: src,
      alt: alt,
      href: href,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const EventContentBlockUpdateAPI = async (
  id: number,
    type: string,
    level?: number | null,
    content?: string | null,
    src?: string | null,
    alt?: string | null,
    href?: string | null,
  
) => {
  try {
    const res = await axios.put<EventContentBlockGet>(
      `${api}${id}`,
      { type, level, content, src, alt, href }
    );
    return res;
  } catch (error: any) {
    console.error("Update block error:", error.response?.data);
    throw error;
  }
};

/* =======================
   DELETE BLOCK
======================= */
export const EventContentBlockDeleteAPI = async (id: number) => {
  try {
    const res = await axios.delete(`${api}${id}`);
    return res;
  } catch (error: any) {
    console.error("Delete block error:", error.response?.data);
    throw error;
  }
};