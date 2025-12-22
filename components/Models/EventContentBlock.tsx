export interface EventContentBlockGet {
  id: number;
  type: "heading" | "text" | "image" | "quote" | "link";
  level?: number | null;
  content?: string | null;
  src?: string | null;
  alt?: string | null;
  href?: string | null;
}

export interface EventContentBlockCreate {
  type: "heading" | "text" | "image" | "quote" | "link";
  level?: number;
  content?: string;
  src?: string;
  alt?: string;
  href?: string;
};