import { toast } from "react-toastify";

export const confirmDeleteToast = (
  message: string,
  onConfirm: () => void
) => {
  toast(
    ({ closeToast }) => (
      <div>
        <p className="mb-2 text-sm">{message}</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={closeToast}
            className="px-3 py-1 text-xs border rounded"
          >
            No
          </button>
          <button
            onClick={() => {
              onConfirm();
              closeToast?.();
            }}
            className="px-3 py-1 text-xs bg-red-500 text-white rounded"
          >
            Yes
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
    }
  );
};
