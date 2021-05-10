const allBodyElements = document.querySelectorAll("body *");
const els = [];
const stringToMatch = "de krom";
// debugger;

for (let i = allBodyElements.length - 1; i >= 0; i--) {
  const currentEl = allBodyElements[i];
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
      els.push(currentEl);
    }
  }
}

for (let el of els) {
  el.style["background-color"] = "#10ff00";
  el.style["border"] = "1px dashed black";
}

console.log(`${els.length} elements found and highlighted`);
