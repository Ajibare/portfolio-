export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** True when a copy field still carries the "[PENDING]" placeholder marker. */
export function isPending(value: string): boolean {
  return value.trim().startsWith("[PENDING]");
}

export function stripPending(value: string): string {
  return value.trim().replace(/^\[PENDING\]\s*/, "");
}

export function formatLabel(label: string): string {
  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function absoluteUrl(pathname: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return `${base.replace(/\/$/, "")}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}