import { NextResponse } from "next/server";
import {
  createAdminSessionToken,
  getSessionCookieName,
  getSessionCookieOptions,
  isAdminConfigured,
  isSameOrigin,
  verifyAdminPassword,
} from "@/lib/adminAuth";
import { clearLoginAttempts, consumeLoginAttempt, getClientIp } from "@/lib/loginRateLimit";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured. Set ADMIN_PASSWORD in your environment." },
      { status: 503 }
    );
  }

  const ip = getClientIp(request);
  const limit = consumeLoginAttempt(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many login attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password ?? "";

  if (!(await verifyAdminPassword(password))) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  clearLoginAttempts(ip);
  const token = await createAdminSessionToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(getSessionCookieName(), token, getSessionCookieOptions());
  return response;
}
