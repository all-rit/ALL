//New Implementation to increment and decrement size of UI.
export function changeTSize(num, className = null) {
    var elems = document.querySelectorAll(".appBody *, .nav-link, button");
    var fontSizeString;
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
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
            var height = parseFloat(fontSizeString);
            elems[index].style.height = height + num + "px";
            fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("width", "important");
            var width = parseFloat(fontSizeString);
            elems[index].style.width = width + num + "px";
        }
    }
}

export function onNextPageChangeTSize(size) {
    var elems = document.querySelectorAll(".appBody *");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            var fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
            elems[index].style.fontSize = fontSize + size + "px";
        }
    }
}

export function setTextColor(picker) {
    var bodyElements = document.getElementsByTagName('body');
    for (var i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.color = picker.toString();
    }
}

export function setBackgroundColor(picker) {
    var bodyElements = document.querySelectorAll('body, .quiz, .result');
    for (var i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.backgroundColor = picker.toString();
    }
}
