"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

import { EventGetByIdAPI, EventUpdateAPI } from "../Services/EventService";
import {
  EventContentBlockUpdateAPI,
  EventContentBlockDeleteAPI,
  EventContentBlockPostAPI,
} from "../Services/EventContentBlockService";

import {
  EventContentBlockCreate,
  EventContentBlockGet,
} from "../Models/EventContentBlock";
import { EventCreate, EventUpdate } from "../Models/Event";

/* =======================
   Validation
======================= */
const eventValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Short description is required"),
  coverPhoto: Yup.string().required("Cover photo is required"),
  startOn: Yup.string().required("Start date is required"),
  finishOn: Yup.string().required("Finish date is required"),
});
type EventFormInputs = EventUpdate;

export default function EditEventPage({ eventId }: { eventId: string }) {
  const eventIdNumber = Number(eventId);

  const [blocks, setBlocks] = useState<EventContentBlockGet[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormInputs>({
    resolver: yupResolver(eventValidation),
  });

  /* =======================
     Load event
  ======================= */
  useEffect(() => {
    EventGetByIdAPI(eventIdNumber)
      .then((res) => {
        const event = res!.data;

        reset({
          title: event.title,
          content: event.content,
          coverPhoto: event.coverPhoto,
          startOn: event.startOn.split("T")[0],
          finishOn: event.finishOn.split("T")[0],
        });

        setBlocks(event.eventContent ?? []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load event");
      });
  }, [eventIdNumber]);

  /* =======================
     Update block helpers
  ======================= */
  /* =======================
       Add / Update block
    ======================= */
  const addBlock = () => {
    setBlocks((prev) => [...prev, { id: 0, type: "text", content: "" }]);
  };

  const updateBlock = (
    index: number,
    field: keyof EventContentBlockGet,
    value: any
  ) => {
    const updated = [...blocks];
    updated[index] = { ...updated[index], [field]: value };
    setBlocks(updated);
  };

  // const removeBlock = (index: number) => {
  //   setBlocks(blocks.filter((_, i) => i !== index));
  // };
  const removeBlock = async (index: number) => {
    const block = blocks[index];

    // nếu block đã tồn tại trong DB
    if (block.id && block.id !== 0) {
      try {
        await EventContentBlockDeleteAPI(block.id);
        toast.success("Block deleted");
      } catch {
        toast.error("Delete block failed");
        return;
      }
    }

    // xoá khỏi state
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  /* =======================
     Submit
  ======================= */
  const onSubmit = async (data: EventFormInputs) => {
    try {
      await EventUpdateAPI(
        eventIdNumber,
        data.title,
        data.content,
        data.coverPhoto,
        new Date(data.startOn).toISOString(),
        new Date(data.finishOn).toISOString()
      );

      for (const block of blocks) {
        if ((block as any).id != 0) {
          await EventContentBlockUpdateAPI(
            block.id,
            block.type,
            block.level ?? 0,
            block.content ?? "",
            block.src ?? "",
            block.alt ?? "",
            block.href ?? ""
          );
        } else {
          await EventContentBlockPostAPI(
            block.type,
            block.level ?? 0,
            block.content ?? "",
            block.src ?? "",
            block.alt ?? "",
            block.href ?? "",
            eventIdNumber
          );
        }
      }

      toast.success("Event updated successfully");
    } catch {
      toast.error("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  /* =======================
     UI
  ======================= */
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Add New Event</h1>

      {/* ========= Event Info ========= */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Event title"
          className="w-full -600 p-2 rounded border border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <textarea
          placeholder="Short description"
          rows={4}
          className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
          {...register("content")}
        />

        <input
          placeholder="Cover photo URL"
          className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
          {...register("coverPhoto")}
        />

        <div className="flex gap-4">
          <input
            type="date"
            className="border p-2 rounded w-full  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
            {...register("startOn")}
          />
          <input
            type="date"
            className="border p-2 rounded w-full  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
            {...register("finishOn")}
          />
        </div>

        {/* ========= Content Blocks ========= */}
        <div className="mt-8">
          <h2 className="font-semibold mb-3 text-blue-600">Event Content</h2>

          {blocks.map((block, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded p-4 mb-4 bg-white"
            >
              <div className="flex gap-3 mb-2">
                <select
                  value={block.type}
                  onChange={(e) => updateBlock(index, "type", e.target.value)}
                  className="border border-gray-600 text-gray-600 p-2 rounded"
                >
                  <option value="heading">Heading</option>
                  <option value="text">Text</option>
                  <option value="image">Image</option>
                  <option value="quote">Quote</option>
                  <option value="link">Link</option>
                </select>

                <button
                  type="button"
                  onClick={() => removeBlock(index)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>

              {block.type === "heading" && (
                <>
                  <input
                    placeholder="Heading text"
                    value={block.content ?? ""}
                    className="w-full border p-2 rounded mb-2  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "content", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    min={1}
                    max={3}
                    placeholder="Level (1-3)"
                    value={block.level ?? ""}
                    className="border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "level", Number(e.target.value))
                    }
                  />
                </>
              )}

              {block.type === "text" && (
                <textarea
                  placeholder="Text content"
                  value={block.content ?? ""}
                  rows={3}
                  className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                  onChange={(e) =>
                    updateBlock(index, "content", e.target.value)
                  }
                />
              )}

              {block.type === "image" && (
                <>
                  <input
                    placeholder="Image URL"
                    value={block.src ?? ""}
                    className="w-full border p-2 rounded mb-2  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) => updateBlock(index, "src", e.target.value)}
                  />
                  <input
                    placeholder="Alt text"
                    value={block.alt ?? ""}
                    className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) => updateBlock(index, "alt", e.target.value)}
                  />
                </>
              )}

              {block.type === "quote" && (
                <textarea
                  placeholder="Quote"
                  value={block.content ?? ""}
                  rows={2}
                  className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                  onChange={(e) =>
                    updateBlock(index, "content", e.target.value)
                  }
                />
              )}

              {block.type === "link" && (
                <>
                  <input
                    placeholder="Link text"
                    value={block.content ?? ""}
                    className="w-full border p-2 rounded mb-2  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "content", e.target.value)
                    }
                  />
                  <input
                    placeholder="Href"
                    value={block.href ?? ""}
                    className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) => updateBlock(index, "href", e.target.value)}
                  />
                </>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addBlock}
            className="px-4 py-2 border rounded text-sm border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 "
          >
            + Add content block
          </button>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Update Event
        </button>
      </form>
    </div>
  );
}
