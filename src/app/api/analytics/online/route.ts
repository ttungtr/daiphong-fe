import { NextRequest, NextResponse } from "next/server";

// In-memory store for active sessions (in production, use Redis)
const activeSessions = new Map<
  string,
  { timestamp: number; userAgent: string }
>();
const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  const now = Date.now();

  // Clean up expired sessions
  for (const [sessionId, session] of activeSessions.entries()) {
    if (now - session.timestamp > SESSION_TIMEOUT) {
      activeSessions.delete(sessionId);
    }
  }

  return NextResponse.json({
    online: activeSessions.size,
  });
}

export async function POST(req: NextRequest) {
  const { sessionId, userAgent } = await req.json();
  const now = Date.now();

  if (sessionId) {
    activeSessions.set(sessionId, { timestamp: now, userAgent });
  }

  // Clean up expired sessions
  for (const [id, session] of activeSessions.entries()) {
    if (now - session.timestamp > SESSION_TIMEOUT) {
      activeSessions.delete(id);
    }
  }

  return NextResponse.json({
    online: activeSessions.size,
    success: true,
  });
}
