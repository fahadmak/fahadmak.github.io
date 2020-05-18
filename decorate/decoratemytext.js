function decorate() {

    let textAreaElem = document.getElementById("deco-text");

    let fontStyle = window.getComputedStyle(textAreaElem);

    let fontSize = parseInt(fontStyle.fontSize)

    let size = 2;

    setInterval(function() {
        textAreaElem.style.fontSize = `${size + fontSize}px`;
        size += 2;
    }, 500);

}

function bling() {
    let checkBoxElem = document.getElementById("checkbox");
    let textAreaElem = document.getElementById("deco-text");
    if (checkBoxElem.checked) {
        textAreaElem.style.fontWeight = "bold";
        textAreaElem.style.textDecoration = "underline";
        textAreaElem.style.color = "green";
    } else {
        textAreaElem.style.fontWeight = "normal";
        textAreaElem.style.textDecoration = "none";
        textAreaElem.style.color = "black";
    }
}