//New Implementation to increment and decrement size of UI.
export function changeTSize(num, className = null) {
    let elems = document.querySelectorAll(".appBody *, .nav-link, button, h2, h3, h4");
    let fontSizeString;
    let index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            const fontSize = parseFloat(fontSizeString);
            elems[index].style.fontSize = fontSize + num + "px";
        }
    }

    //Image
    elems = document.querySelectorAll("img");
    index = 0;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("height", "important");
            const height = parseFloat(fontSizeString);
            elems[index].style.height = height + num + "px";
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("width", "important");
            const width = parseFloat(fontSizeString);
            elems[index].style.width = width + num + "px";
        }
    }
}

export function onNextPageChangeTSize(size) {
    const elems = document.querySelectorAll(".appBody *");
    let index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            const fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            const fontSize = parseFloat(fontSizeString);
            elems[index].style.fontSize = fontSize + size + "px";
        }
    }
}

export function setTextColor(picker) {
    let bodyElements = document.querySelectorAll("body *, a");
    for (let i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.color = "#" + picker.toString();
    }
}

export function setBackgroundColor(picker) {
    const bodyElements = document.querySelectorAll('body, .quiz, .result');
    for (let i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.backgroundColor = picker.toString();
    }
}
