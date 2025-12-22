"use client";

import { useAuth } from "@/components/Context/useAuth";
import { useRouter} from "next/navigation";
import { useEffect } from "react";

export default function LoginRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  // const pathname = usePathname();

  useEffect(() => {
    if (isLoggedIn()) {
      // router.replace(`/?from=${pathname}`);
      router.replace(`/admin/dashboardadmin`);
    }
  // }, [isLoggedIn, pathname, router]);
   }, [isLoggedIn,  router]);

  if (isLoggedIn()) return null;

  return <>{children}</>;
}