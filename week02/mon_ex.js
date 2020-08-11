function fontModifier(selector) {
    var element = document.querySelectorAll(selector);
    console.log(element);
    for (var i = 0; i < element.length; i++) {
        console.log("element[i]", element[i]);
        element[i].style.color = "red";
        element[i].style.textDecoration = "underline";
        element[i].style.fontWeight = "bold";
        element[i].style.fontStyle = "italic";
    }
}

fontModifier("p");

function classNew(className) {
    var querryReturn = document.getElementsByClassName(className);
    console.log(querryReturn[0]);
    var allClassyElements = [];
    //console.log("querryReturn[1]: ", querryReturn[1]);
    for (var i = 0; i < querryReturn.length; i++) {
        allClassyElements = allClassyElements.push(querryReturn[i]);
    }
    console.log(allClassyElements);
}

function classyElements(input) {
    var allClassyElements = [];
    var querryReturn = document.getElementsByClassName(input);
    for (var i = 0; i < querryReturn.length; i++) {
        allClassyElements.push(querryReturn[i]);
    }
    return allClassyElements;
}

console.log("what is being returned?:", classyElements("first"));

// ex 3
//Write a function that inserts an element into the body of the currently
//loaded page. That element should have fixed position, z-index of 2147483647,
//left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

function addAwesome() {
    var newDiv = document.createElement("div");
    var newText = document.createTextNode("AWESOME!");
    newDiv.appendChild(newText);
    document.body.appendChild(newDiv);
    newDiv.style.position = "fixed";
    newDiv.style.top = "100px";
    newDiv.style.left = "20px";
    newDiv.style.fontSize = "200px";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.color = "red";
}

addAwesome();

/////// TICKER //////

// any animation that can be done in CSS, SHOULD be done in CSS - otherwise use javascript
