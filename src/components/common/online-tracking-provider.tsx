"use client";

import { useOnlineTracking } from "@/hooks/use-online-tracking";

export function OnlineTrackingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useOnlineTracking();

  return <>{children}</>;
}
