import { browser } from "$app/environment";

function getDeviceType() {
  if (!browser) return;
  if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
    return "mobile";
  }
  return "desktop";
}

export { getDeviceType };
