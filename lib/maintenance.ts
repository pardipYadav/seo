import { promises as fs } from "fs";
import path from "path";

export type MaintenanceState = {
  enabled: boolean;
  updatedAt: string | null;
};

const FILE_PATH = path.join(process.cwd(), "data", "maintenance.json");
const TMP_PATH = "/tmp/gcs-maintenance.json";

let memoryState: MaintenanceState | null = null;

const DEFAULT_STATE: MaintenanceState = {
  enabled: false,
  updatedAt: null,
};

async function readJson(filePath: string): Promise<MaintenanceState | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<MaintenanceState>;
    return {
      enabled: Boolean(parsed.enabled),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : null,
    };
  } catch {
    return null;
  }
}

export function isMaintenanceForcedOn(): boolean {
  return process.env.MAINTENANCE_MODE === "true";
}

export async function getMaintenanceState(): Promise<MaintenanceState> {
  if (isMaintenanceForcedOn()) {
    return { enabled: true, updatedAt: memoryState?.updatedAt ?? null };
  }

  if (memoryState) return memoryState;

  const fromFile = (await readJson(FILE_PATH)) ?? (await readJson(TMP_PATH));
  memoryState = fromFile ?? DEFAULT_STATE;
  return memoryState;
}

export async function isMaintenanceEnabled(): Promise<boolean> {
  const state = await getMaintenanceState();
  return state.enabled;
}

export async function setMaintenanceEnabled(enabled: boolean): Promise<MaintenanceState> {
  const state: MaintenanceState = {
    enabled,
    updatedAt: new Date().toISOString(),
  };
  memoryState = state;

  const serialized = `${JSON.stringify(state, null, 2)}\n`;
  try {
    await fs.writeFile(FILE_PATH, serialized, "utf8");
  } catch {
    await fs.writeFile(TMP_PATH, serialized, "utf8");
  }

  return state;
}
