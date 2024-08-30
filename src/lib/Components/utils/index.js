/**
 * Handles clicking on an Anchor Element and directing to that anchor
 * @param {Event} event - The event object
 */
export function handleAnchorClick(event) {
  if (!(event.currentTarget instanceof HTMLAnchorElement)) return;

  /** @type {HTMLAnchorElement} */
  const anchor = event.currentTarget;

  if (!anchor) return;

  const href = anchor.getAttribute("href")?.split("#")[1] ?? "";
  const element = document.getElementById(href);

  if (element) {
    event.preventDefault();

    const rect = element.getBoundingClientRect();
    const offset = window.innerHeight / 2 - rect.height / 2;

    console.log("Bounding Rect:", rect, "Offset:", offset);

    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth"
    });
    // element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Gets all Anchor Elements that jump to a specific item
 * @param {HTMLAnchorElement[]} anchors - a nodelist of anchor elements
 * @return {HTMLAnchorElement[]} - An array anchor elements that match the criteria
 */
export function filterAnchors(anchors) {
  const regex = /^#|^(\/about#|\/blogs#|\/classes#|\/faqs#|\/home#)/;
  return anchors.filter((anchor) => regex.test(anchor.getAttribute("href") ?? ""));
}

/**
 * Scrolls to the Anchor after page navigation
 * @param {string} anchorId - The id of the anchor to navigate to
 */
export function scrollToAnchor(anchorId) {
  const element = document.getElementById(anchorId);

  if (element) {
    const rect = element.getBoundingClientRect();
    const offset = window.innerHeight / 2 - rect.height / 2;

    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth"
    });
  }
}
