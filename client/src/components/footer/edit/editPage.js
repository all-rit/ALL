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
  const elems = document.querySelectorAll(
    "body *, a, button, p, .tw-title, .btn, .modal-content__header, .btn-primary, .btn-secondary, .tw-body-text",
  );
  elems.forEach((el) => {
    el.style.setProperty("color", color);
    el.style.setProperty("--yellow-text", color);
    el.style.setProperty("--blue-text", color);
    el.style.setProperty("--light-blue-text", color);
    el.style.setProperty("--bs-body-color", color);
    el.style.setProperty("--bs-modal-color", color);
  });
}

export function setBackgroundColor(picker) {
  const elems = document.querySelectorAll(
    "body, .quiz, .result, .tw-bg-white, .tw-bg-primary-blue",
  );
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = picker.toString();
    elems[i].setAttribute(
      "style",
      `background-color:${picker.toString()} !important`,
    );
  }
}
