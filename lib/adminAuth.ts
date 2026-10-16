const SESSION_COOKIE = "gcs_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD?.trim() || undefined;
}

function getSigningSecret(): string | undefined {
  const secret = process.env.ADMIN_SECRET?.trim() || getPassword();
  return secret || undefined;
}

export function isAdminConfigured(): boolean {
  return Boolean(getPassword() && getSigningSecret());
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

function bytesToBase64Url(bytes: ArrayBuffer | Uint8Array): string {
  const buffer = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (let i = 0; i < buffer.length; i++) {
    binary += String.fromCharCode(buffer[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (value.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function hmac(secret: string, value: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return bytesToBase64Url(signature);
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const expected = getPassword();
  if (!expected) return false;
  const [a, b] = await Promise.all([sha256Hex(password), sha256Hex(expected)]);
  return timingSafeEqual(a, b);
}

export async function createAdminSessionToken(): Promise<string> {
  const secret = getSigningSecret();
  if (!secret) {
    throw new Error("Admin secret is not configured");
  }

  const payload = JSON.stringify({
    v: 1,
    role: "admin",
    exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
  });
  const encodedPayload = bytesToBase64Url(new TextEncoder().encode(payload));
  const signature = await hmac(secret, encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export async function verifyAdminSessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const secret = getSigningSecret();
  if (!secret) return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [encodedPayload, signature] = parts;
  const expected = await hmac(secret, encodedPayload);
  if (!timingSafeEqual(signature, expected)) return false;

  try {
    const payloadText = new TextDecoder().decode(base64UrlToBytes(encodedPayload));
    const payload = JSON.parse(payloadText) as { v?: number; role?: string; exp?: number };
    if (payload.v !== 1 || payload.role !== "admin") return false;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return false;
    return true;
  } catch {
    return false;
  }
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
