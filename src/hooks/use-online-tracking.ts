import { useEffect, useRef } from "react";

export function useOnlineTracking() {
  const sessionId = useRef<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Generate unique session ID
    sessionId.current = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    const userAgent = navigator.userAgent;

    // Function to ping the server
    const pingServer = async () => {
      try {
        await fetch("/api/analytics/online", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionId.current,
            userAgent,
          }),
        });
      } catch (error) {
        console.error("Failed to ping server:", error);
      }
    };

    // Initial ping
    pingServer();

    // Set up interval to ping every 30 seconds
    intervalRef.current = setInterval(pingServer, 30 * 1000);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { sessionId: sessionId.current };
}
