export const CALENDLY_CONTAINER_ID = "booking-calendly-container";
const SCROLL_INTENT_KEY = "scrollToCalendly";

export function scrollToCalendly() {
  setTimeout(() => {
    const container = document.getElementById(CALENDLY_CONTAINER_ID);
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 150);
}

export function navigateToCalendly(router) {
  if (typeof window !== "undefined" && window.location.pathname === "/contact") {
    scrollToCalendly();
    return;
  }

  sessionStorage.setItem(SCROLL_INTENT_KEY, "1");
  router.push("/contact");
}

export function consumeCalendlyScrollIntent() {
  if (typeof window === "undefined") {
    return false;
  }

  if (sessionStorage.getItem(SCROLL_INTENT_KEY)) {
    sessionStorage.removeItem(SCROLL_INTENT_KEY);
    return true;
  }

  return false;
}
