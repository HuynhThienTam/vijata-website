"use client";

import { useAuth } from "@/components/Context/useAuth";
import { useRouter} from "next/navigation";
import { useEffect } from "react";
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  // const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn()) {
      // router.replace(`/?from=${pathname}`);
      router.replace(`/not-found`);
    }
  // }, [isLoggedIn, pathname, router]);
   }, [isLoggedIn,  router]);

  if (!isLoggedIn()) return null;

  return <>{children}</>;
}


// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../Context/useAuth";

// type Props = { children: React.ReactNode };

// const ProtectedRoute = ({ children }: Props) => {
//   const location = useLocation();
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn() ? (
//     <>{children}</>
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default ProtectedRoute;
