import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionCookieName, verifyAdminSessionToken } from "@/lib/adminAuth";
import { getMaintenanceState, isMaintenanceForcedOn } from "@/lib/maintenance";
import MaintenanceToggle from "./MaintenanceToggle";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const isAdmin = await verifyAdminSessionToken(cookieStore.get(getSessionCookieName())?.value);

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const state = await getMaintenanceState();

  return (
    <MaintenanceToggle
      enabled={state.enabled}
      updatedAt={state.updatedAt}
      forcedByEnv={isMaintenanceForcedOn()}
    />
  );
}
