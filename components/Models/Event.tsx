import { EventContentBlockGet } from "./EventContentBlock";

export interface EventGet {
  id: number;
  title: string;
  content: string;
  coverPhoto: string;
  createdOn: string;
  startOn: string;
  finishOn: string;
  createdBy: string;
  eventContent: EventContentBlockGet[];
}

export interface EventCreate {
  title: string;
  content: string;
  coverPhoto: string; // url sau khi upload
  startOn: string;
  finishOn: string;
};