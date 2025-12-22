import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { EventContentBlockCreate } from "../Models/EventContentBlock";

const api = "http://localhost:5210/api/eventcontentblock/";

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