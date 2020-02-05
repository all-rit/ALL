function changeTSize(num) {
  var el = document.getElementsByTagName("body")[0];
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
    var fontSizeString = window
      .getComputedStyle(el, null)
      .getPropertyValue("font-size", "important");
    var fontSize = parseFloat(fontSizeString);
    el.style.fontSize = fontSize + num + "px";
    //h3
    var el = document.getElementsByTagName("h3")[0];
    var fontSizeString = window
      .getComputedStyle(el, null)
      .getPropertyValue("font-size", "important");
    var fontSize = parseFloat(fontSizeString);
    el.style.fontSize = fontSize + num + "px";
    //h4
    var el = document.getElementsByTagName("h4")[0];
    var fontSizeString = window
      .getComputedStyle(el, null)
      .getPropertyValue("font-size", "important");
    var fontSize = parseFloat(fontSizeString);
    el.style.fontSize = fontSize + num + "px";
  }
}

function setTextColor(picker) {
  document.getElementsByTagName("body")[0].style.color =
    "#" + picker.toString();
}

function setBackgroundColor(picker) {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "#" + picker.toString();
}
