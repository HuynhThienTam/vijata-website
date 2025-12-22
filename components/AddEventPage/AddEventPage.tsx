"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { EventCreate } from "../Models/Event";
import { EventContentBlockCreate } from "../Models/EventContentBlock";
import { EventPostAPI } from "../Services/EventService";
import { EventContentBlockPostAPI } from "../Services/EventContentBlockService";


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

type EventFormInputs = EventCreate;

/* =======================
   Page
======================= */
export default function AddEventPage() {
  const [blocks, setBlocks] = useState<EventContentBlockCreate[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormInputs>({
    resolver: yupResolver(eventValidation),
  });

  /* =======================
     Add / Update block
  ======================= */
  const addBlock = () => {
    setBlocks((prev) => [
      ...prev,
      { type: "text", content: "" },
    ]);
  };

  const updateBlock = (
    index: number,
    field: keyof EventContentBlockCreate,
    value: any
  ) => {
    const updated = [...blocks];
    updated[index] = { ...updated[index], [field]: value };
    setBlocks(updated);
  };

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  /* =======================
     Submit
  ======================= */
  const onSubmit = async (data: EventFormInputs) => {
    const startOnString = new Date(data.startOn).toISOString();
    const finishOnString = new Date(data.finishOn).toISOString();
    try {
      // 1. Create Event
      const eventRes = await EventPostAPI(
        data.title,
        data.content,
        data.coverPhoto,
        startOnString,
        finishOnString
      );
      console.log("Event created:", eventRes);
      if (!eventRes?.data) return;

      const eventId = (eventRes.data as any).id;

      // 2. Create content blocks
      for (const block of blocks) {
        await EventContentBlockPostAPI(
          block.type,
          block.level ?? 0,
          block.content ?? "",
          block.src ?? "",
          block.alt ?? "",
          block.href ?? "",
          eventId
        );
      }

      toast.success("Event created successfully!");
      reset();
      setBlocks([]);
    } 
    // catch (e) {
    //   toast.error("Create event failed");
    //   toast.error((e as Error).message);
    // }
    catch (e: any) {
  console.error("loi gi ne:", e.response?.data);

  if (e.response?.data) {
    toast.error(
      typeof e.response.data === "string"
        ? e.response.data
        : JSON.stringify(e.response.data)
    );
  } else {
    toast.error("Server error");
  }
}
  };

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
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

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
                  onChange={(e) =>
                    updateBlock(index, "type", e.target.value)
                  }
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
                    className="w-full border p-2 rounded mb-2  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "src", e.target.value)
                    }
                  />
                  <input
                    placeholder="Alt text"
                    className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "alt", e.target.value)
                    }
                  />
                </>
              )}

              {block.type === "quote" && (
                <textarea
                  placeholder="Quote"
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
                    className="w-full border p-2 rounded mb-2  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "content", e.target.value)
                    }
                  />
                  <input
                    placeholder="Href"
                    className="w-full border p-2 rounded  border-gray-500 focus:outline-blue-600 text-black placeholder-gray-400"
                    onChange={(e) =>
                      updateBlock(index, "href", e.target.value)
                    }
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
          Create Event
        </button>
      </form>
    </div>
  );
}


// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { EventCreate } from "../Models/Event";
// import { EventContentBlockCreate } from "../Models/EventContentBlock";
// type FormInputs = EventCreate;

// const validation = Yup.object({
//   title: Yup.string().required("Title is required"),
//   content: Yup.string().required("Content is required"),
//   coverPhoto: Yup.string().url("Invalid image URL").required(),
//   startOn: Yup.string().required(),
//   finishOn: Yup.string().required(),
// });

// export default function AddEventPage() {
//   const [blocks, setBlocks] = useState<EventContentBlockCreate[]>([]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormInputs>({
//     resolver: yupResolver(validation),
//   });

//   // ---------- Content Blocks ----------
//   const addBlock = () => {
//     setBlocks([
//       ...blocks,
//       { type: "text", content: "" },
//     ]);
//   };

//   const updateBlock = (index: number, data: Partial<EventContentBlockCreate>) => {
//     const updated = [...blocks];
//     updated[index] = { ...updated[index], ...data };
//     setBlocks(updated);
//   };

//   const removeBlock = (index: number) => {
//     setBlocks(blocks.filter((_, i) => i !== index));
//   };

//   const moveBlock = (from: number, to: number) => {
//     if (to < 0 || to >= blocks.length) return;
//     const updated = [...blocks];
//     const temp = updated[from];
//     updated[from] = updated[to];
//     updated[to] = temp;
//     setBlocks(updated);
//   };

//   // ---------- Submit ----------
//   const onSubmit = (data: FormInputs) => {
//     const payload = {
//       event: data,
//       blocks: blocks,
//     };

//     console.log("SUBMIT PAYLOAD", payload);
//     // gọi API create event ở đây
//   };

//   return (
//     <div className="max-w-5xl mx-auto py-10">
//       <h1 className="text-2xl font-semibold mb-6">Add New Event</h1>

//       {/* ===== EVENT INFO ===== */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <input
//           {...register("title")}
//           placeholder="Event title"
//           className="w-full border p-2 rounded"
//         />
//         {errors.title && <p className="text-red-500">{errors.title.message}</p>}

//         <textarea
//           {...register("content")}
//           rows={4}
//           placeholder="Short description"
//           className="w-full border p-2 rounded"
//         />
//         {errors.content && <p className="text-red-500">{errors.content.message}</p>}

//         <input
//           {...register("coverPhoto")}
//           placeholder="Cover image URL"
//           className="w-full border p-2 rounded"
//         />
//         {errors.coverPhoto && (
//           <p className="text-red-500">{errors.coverPhoto.message}</p>
//         )}

//         <div className="flex gap-4">
//           <input
//             type="datetime-local"
//             {...register("startOn")}
//             className="border p-2 rounded w-full"
//           />
//           <input
//             type="datetime-local"
//             {...register("finishOn")}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         {/* ===== CONTENT BLOCKS ===== */}
//         <div className="border-t pt-6">
//           <h2 className="text-xl font-semibold mb-4">Content Blocks</h2>

//           {blocks.map((block, index) => (
//             <div
//               key={index}
//               className="border rounded p-4 mb-4 bg-gray-50"
//             >
//               <div className="flex gap-2 mb-3">
//                 <select
//                   value={block.type}
//                   onChange={(e) =>
//                     updateBlock(index, { type: e.target.value as any })
//                   }
//                   className="border p-1 rounded"
//                 >
//                   <option value="heading">Heading</option>
//                   <option value="text">Text</option>
//                   <option value="image">Image</option>
//                   <option value="quote">Quote</option>
//                   <option value="link">Link</option>
//                 </select>

//                 <button onClick={() => moveBlock(index, index - 1)}>↑</button>
//                 <button onClick={() => moveBlock(index, index + 1)}>↓</button>
//                 <button
//                   onClick={() => removeBlock(index)}
//                   className="text-red-500"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {/* ===== Block Fields ===== */}
//               {block.type === "heading" && (
//                 <>
//                   <input
//                     type="number"
//                     placeholder="Level (1-3)"
//                     value={block.level || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { level: Number(e.target.value) })
//                     }
//                     className="border p-2 rounded w-full mb-2"
//                   />
//                   <input
//                     placeholder="Heading text"
//                     value={block.content || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { content: e.target.value })
//                     }
//                     className="border p-2 rounded w-full"
//                   />
//                 </>
//               )}

//               {block.type === "text" && (
//                 <textarea
//                   rows={4}
//                   placeholder="Text content"
//                   value={block.content || ""}
//                   onChange={(e) =>
//                     updateBlock(index, { content: e.target.value })
//                   }
//                   className="border p-2 rounded w-full"
//                 />
//               )}

//               {block.type === "image" && (
//                 <>
//                   <input
//                     placeholder="Image URL"
//                     value={block.src || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { src: e.target.value })
//                     }
//                     className="border p-2 rounded w-full mb-2"
//                   />
//                   <input
//                     placeholder="Alt text"
//                     value={block.alt || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { alt: e.target.value })
//                     }
//                     className="border p-2 rounded w-full"
//                   />
//                 </>
//               )}

//               {block.type === "quote" && (
//                 <textarea
//                   rows={3}
//                   placeholder="Quote"
//                   value={block.content || ""}
//                   onChange={(e) =>
//                     updateBlock(index, { content: e.target.value })
//                   }
//                   className="border p-2 rounded w-full"
//                 />
//               )}

//               {block.type === "link" && (
//                 <>
//                   <input
//                     placeholder="Link text"
//                     value={block.content || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { content: e.target.value })
//                     }
//                     className="border p-2 rounded w-full mb-2"
//                   />
//                   <input
//                     placeholder="Href"
//                     value={block.href || ""}
//                     onChange={(e) =>
//                       updateBlock(index, { href: e.target.value })
//                     }
//                     className="border p-2 rounded w-full"
//                   />
//                 </>
//               )}
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addBlock}
//             className="px-4 py-2 border rounded"
//           >
//             + Add Content Block
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="px-6 py-2 bg-green-600 text-white rounded"
//         >
//           Create Event
//         </button>
//       </form>
//     </div>
//   );
// }

