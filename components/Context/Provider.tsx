"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/components/Context/useAuth";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      {children}
      <ToastContainer />
    </UserProvider>
  );
}