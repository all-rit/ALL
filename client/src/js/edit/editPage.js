export function changeTSize1(num) {
    var el = document.getElementsByTagName("body")[0];
    console.log("hello ");
    // only one body in document
    var fontSizeString = window
        .getComputedStyle(el, null)
        .getPropertyValue("font-size", "important");
    var fontSize = parseFloat(fontSizeString);
    el.style.fontSize = fontSize + num + "px";
    // Must be done separately for buttons:
    var els = document.getElementsByTagName("button");

    for (var i = 0; i < els.length; i++) {
        fontSizeString = window
            .getComputedStyle(els[i], null)
            .getPropertyValue("font-size", "important");
        var fontSize = parseFloat(fontSizeString);
        els[i].style.fontSize = fontSize + num + "px";
        //h2 tag
        var el = document.getElementsByTagName("h2")[0];
        if (el !== undefined) {
            var fontSizeString = window
                .getComputedStyle(el, null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
            el.style.fontSize = fontSize + num + "px";
        }
        //h3
        var el = document.getElementsByTagName("h3")[0];
        if (el !== undefined) {
            var fontSizeString = window
                .getComputedStyle(el, null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
            el.style.fontSize = fontSize + num + "px";
        }
        //h4
        var el = document.getElementsByTagName("h4")[0];
        if (el !== undefined) {
            var fontSizeString = window
                .getComputedStyle(el, null)
                .getPropertyValue("font-size", "important");

            var fontSize = parseFloat(fontSizeString);
            el.style.fontSize = fontSize + num + "px";
        }

    }
    var elems = document.querySelectorAll("p");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            var fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
            elems[index].style.fontSize = fontSize + num + "px";
        }

    }
}
//New Implementation to increment and decrement size of UI.
export function changeTSize(num) {
    //Works for <tags> specified in the document.querySelectorAll()
    var elems = document.querySelectorAll("body, p, h1, h2, h3, h4, li, ul, label, button");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            var fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("font-size", "important");
            var fontSize = parseFloat(fontSizeString);
            elems[index].style.fontSize = fontSize + num + "px";
        }

    }
    //Image
    var elems = document.querySelectorAll("img");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
        if (elems[index] !== undefined) {
            var fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("height", "important");
            var height = parseFloat(fontSizeString);
            elems[index].style.height = height + num +"px";
            var fontSizeString = window
                .getComputedStyle(elems[index], null)
                .getPropertyValue("width", "important");
            var width = parseFloat(fontSizeString);
            elems[index].style.width = width + num +"px";
        }

    }
}

export function setTextColor(picker) {
    document.getElementsByTagName("body")[0].style.color =
        "#" + picker.toString();
}

export function setBackgroundColor(picker) {
    document.getElementsByTagName("body")[0].style.backgroundColor =
        "#" + picker.toString();
}
