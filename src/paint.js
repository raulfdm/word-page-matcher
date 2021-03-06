export function paintMatches() {
  const allBodyElements = document.querySelectorAll("body *");
  const stringToMatch = "de krom";

  const els = Array.from(allBodyElements).filter((currentEl) => {
    const blockedEls = ["script", "style"];

    if (!blockedEls.includes(currentEl.localName)) {
      if (
        currentEl.textContent.toLowerCase().includes(stringToMatch) &&
        /**
         * currentEl.childElementCount combined with textContent
         * is the best indication that the current element has only text and
         * is not the main div, root element or whatever.
         *
         * I still have to create an array because some websites might use
         * duplicated html elements to either show or hide for certain screens.
         * */
        currentEl.childElementCount === 0
      ) {
        return true;
      }
    }

    return false;
  });

  for (const el of els) {
    el.style["background-color"] = "#10ff00";
    el.style["color"] = "#2e2e2e";
    el.style["border"] = "1px dashed black";
  }

  console.log(`Word highlight: ${els.length} elements found and highlighted`);
}
