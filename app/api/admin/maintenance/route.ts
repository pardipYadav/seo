import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSessionCookieName,
  isSameOrigin,
  verifyAdminSessionToken,
} from "@/lib/adminAuth";
import { getMaintenanceState, isMaintenanceForcedOn, setMaintenanceEnabled } from "@/lib/maintenance";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return verifyAdminSessionToken(token);
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const state = await getMaintenanceState();
  return NextResponse.json({
    ...state,
    forcedByEnv: isMaintenanceForcedOn(),
  });
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (isMaintenanceForcedOn()) {
    return NextResponse.json(
      { error: "Maintenance mode is forced on by the MAINTENANCE_MODE environment variable." },
      { status: 409 }
    );
  }

  const body = (await request.json().catch(() => null)) as { enabled?: boolean } | null;
  if (typeof body?.enabled !== "boolean") {
    return NextResponse.json({ error: "A boolean `enabled` value is required." }, { status: 400 });
  }

  const state = await setMaintenanceEnabled(body.enabled);
  return NextResponse.json({
    ...state,
    forcedByEnv: false,
  });
}
