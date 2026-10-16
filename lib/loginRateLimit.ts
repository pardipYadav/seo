type Attempt = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const attempts = new Map<string, Attempt>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export function consumeLoginAttempt(ip: string): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const existing = attempts.get(ip);

  if (!existing || existing.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= MAX_ATTEMPTS) {
    return { ok: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true, retryAfterSeconds: 0 };
}

export function clearLoginAttempts(ip: string): void {
  attempts.delete(ip);
}
