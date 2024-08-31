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

    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth"
    });
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

/**
 * Extracts all properties called 'Anchor' along with their corresponding 'Title' from the given JSON object.
 *
 * @param {Object} json - The JSON object to search through.
 * @returns {Array<{ Title: string, Anchor: string }>} An array of objects containing Title and Anchor pairs.
 */
export function extractAnchors(json) {
  /**
   * Recursively searches for 'Anchor' and 'Title' properties in the JSON object.
   *
   * @param {Object|Array<any>} obj - The current object or array being searched.
   * @param {Array<{ Title: string, Anchor: string }>} result - The array accumulating the Title and Anchor pairs.
   */
  function findAnchors(obj, result = []) {
    if (Array.isArray(obj)) {
      obj.forEach((item) => findAnchors(item, result));
    } else if (typeof obj === "object" && obj !== null) {
      if ("Title" in obj && typeof obj.Title === "string" && "Anchor" in obj && typeof obj.Anchor === "string") {
        const exists = result.some((item) => item.Title === obj.Title);
        if (!exists) {
          result.push({ Title: obj.Title, Anchor: obj.Anchor });
        }
      }
      Object.values(obj).forEach((value) => findAnchors(value, result));
    }
  }

  /** @type {Array<{Title: string, Anchor: string}>} */
  const anchors = [];
  findAnchors(json, anchors);
  return anchors;
}
