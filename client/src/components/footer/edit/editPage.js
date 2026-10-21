/* eslint-disable no-unused-vars */
// New Implementation to increment and decrement size of UI.
export function changeTSize(num, className = null) {
  let elems = document.querySelectorAll(
    ".mainBody *, .nav-link, p, h3, button, .navbar-brand, .labnav, .base",
  );
  let fontSizeString;
  let index = 0;
  const length = elems.length;
  for (; index < length; index++) {
    if (elems[index] !== undefined) {
      fontSizeString = window
        .getComputedStyle(elems[index], null)
        .getPropertyValue("font-size");
      const fontSize = parseFloat(fontSizeString);
      elems[index].style.fontSize = fontSize + num + "px";
    }
  }

  // Image
  elems = document.querySelectorAll("img");
  index = 0;
  for (; index < length; index++) {
    if (elems[index] !== undefined) {
      fontSizeString = window
        .getComputedStyle(elems[index], null)
        .getPropertyValue("height");
      const height = parseFloat(fontSizeString);
      elems[index].style.height = height + num + "px";
      fontSizeString = window
        .getComputedStyle(elems[index], null)
        .getPropertyValue("width");
      const width = parseFloat(fontSizeString);
      elems[index].style.width = width + num + "px";
    }
  }
}

export function onNextPageChangeTSize(size) {
  const elems = document.querySelectorAll(".appBody *");
  let index = 0;
  const length = elems.length;
  for (; index < length; index++) {
    if (elems[index] !== undefined) {
      const fontSizeString = window
        .getComputedStyle(elems[index], null)
        .getPropertyValue("font-size");
      const fontSize = parseFloat(fontSizeString);
      elems[index].style.fontSize = fontSize + size + "px";
    }
  }
}

export function setTextColor(picker) {
  const color = picker.toString();

  document.querySelectorAll("body *").forEach((el) => {
    el.style.setProperty("color", color, "important");
  });

  const root = document.documentElement.style;
  ["--yellow-text", "--blue-text", "--white-text", "--light-blue-text"].forEach(
    (v) => root.setProperty(v, color),
  );
}

export function setBackgroundColor(picker) {
  const color = picker.toString();

  document
    .querySelectorAll(
      "body, button, .quiz, .result, .radioCustomButton, .nextButton, .answerOption, .tw-bg-white, .tw-bg-primary-blue, .align-right, .tw-flex",
    )
    .forEach((el) => {
      el.style.setProperty("background-color", color, "important");
    });
}
