"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUserAuth } from "@/hooks/userAuth";
import LoadingComponent from "@/components/LoadingComponent";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectIfAuthenticated?: boolean; // true = used in /login or /signup
  redirectTo?: string; // where to go if redirect is triggered
}

export default function AuthGuard({
  children,
  redirectIfAuthenticated = false,
  redirectTo = "/blogs",
}: AuthGuardProps) {
  const { isLoggedIn, isChecking } = useUserAuth();

  useEffect(() => {
    // only run when the isChecking is completed , which store "false" 
    if (!isChecking) {
      // Authenticated user visiting login/signup? Redirect to blogs page
      if (redirectIfAuthenticated && isLoggedIn) redirect(redirectTo);

      // Not logged in user trying to access /blogs route, Redirect to login
      if (!redirectIfAuthenticated && !isLoggedIn) redirect("/login");
    }
  }, [isChecking, isLoggedIn]);

  // While we're checking, or a redirect is happening, show loading spinner
  if (isChecking ||
    (redirectIfAuthenticated && isLoggedIn) ||
    (!redirectIfAuthenticated && !isLoggedIn)) {
    return <LoadingComponent />;
  }

  return <>{children}</>;
}
