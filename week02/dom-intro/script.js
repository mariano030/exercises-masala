// console.log("sanity check!!!");

///////////////////////////////////////////////////////////
/// 5 mehtods we can use to grab elements from the page ///
///////////////////////////////////////////////////////////

// ( script tag needs to be at the bottom of the html, last item inside body so we can reference the document nodes)

// 1. GetElementById - will allow us to target an HTML element by it's id
var mainHeading = document.getElementById("main-title");

var mainClasses = document.getElementsByClassName("first-section");

console.log(mainHeading);

// 2. querySelector - this will return us the object

var firstDivInSection = document.querySelector(".second-section div");

console.log(firstDivInSection);

// 3. querySelectorAll - this will reurn us all the elements that match the querry

var allDivsInSectionOne = document.querySelectorAll(".first-section div"); // returns array like object

console.log(allDivsInSectionOne);

// 4. getElementsByTagName - this will reurn us all the elements that match the querry

var sections = document.getElementsByTagName("section");

console.log("sections: ", sections);

// 5. getElementsByClassName - this will reurn us all the elements that match the querry

var firstDivInSections = document.getElementsByClassName("first"); // classification done by method ByClassName
// not by identifier in argument (not by .first)
console.log(firstDivInSections);

var secondSection = document.getElementsByClassName("second-section");
console.log("secondSection: ", secondSection);

console.log("secondSection[0]: ", secondSection[0]);

// change CSS STYLE of document
mainHeading.style.backgroundColor = "hotpink"; // adjust css property spelling if two word property, now camelCase

mainHeading.style.fontWeight = 100; // adjust css property spelling if two word property, now camelCase

//^^ works because of var mainHeading = document.getElementById("main-title"); further up

console.log("mainHeading.style: ", mainHeading.style);

mainHeading.style.marginLeft = 100 + "px";

for (var i = 0; i < allDivsInSectionOne.length; i++) {
    console.log(allDivsInSectionOne[i]);
    allDivsInSectionOne[i].style.color = "green";
}

/* document.body.innerHTML =
    "<h1> Hahahaha, du hast das Zauberwort nicht gesagt! <br> <img src='https://i.ytimg.com/vi/RfiQYRn7fBg/maxresdefault.jpg'> ";
*/
////////////////////////////////////////
/////////// create DOM nodes ///////////
////////////////////////////////////////

// # 1 create the HTML element we want to add to the page

var myNewDiv = document.createElement("div");

// # 2 create the text that we want to put into the div.

var text = document.createTextNode("This is my content, don't judge!");

// # 3 put text into div
myNewDiv.appendChild(text);

// # 4 put div into page

document.body.appendChild(myNewDiv);
