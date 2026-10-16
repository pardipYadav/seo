import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookieName, verifyAdminSessionToken } from "@/lib/adminAuth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminLogin = pathname === "/admin/login";
  const hasAdminSession = await verifyAdminSessionToken(
    request.cookies.get(getSessionCookieName())?.value
  );

  if (isAdminRoute && !isAdminLogin && !hasAdminSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminLogin && hasAdminSession) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
