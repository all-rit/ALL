//New Implementation to increment and decrement size of UI.
export function changeTSize(num, className = null) {
    let elems = document.querySelectorAll(".appBody *, .nav-link, button, h2, h3, h4, .navbar-brand");
    let fontSizeString;
    let index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size");
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
    let index = 0, length = elems.length;
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
    let elems = document.querySelectorAll('body *, a');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.color = picker.toString();
    }
}

export function setBackgroundColor(picker) {
    const elems = document.querySelectorAll('body, .quiz, .result');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.backgroundColor = picker.toString();

    }
}
