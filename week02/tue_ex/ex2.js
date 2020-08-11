/// ex 2 - exchange text in textarea -

var textarea = document.getElementById("textarea");

console.log("textarea: ", textarea);

// var getty =
//    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.";

var getty =
    "Es war wunderbar. Nein, ehrlich ich hätte es mir nicht besser vorstellen können. Vollste Zufriedenheit ist ein Untertreibung! Wärmstens zu empfehlen, eine der Besten Sachen, die mir je wiederfahren sind! Danke nochmal. Auch im Namen der Familie.";

textarea.addEventListener("input", function (e) {
    console.log(e);
    console.log("textarea.value.length", textarea.value.length);
    var inputLength = textarea.value.length;
    console.log("inputLength: ", inputLength);
    var newText = getty.slice(0, textarea.value.length);
    console.log("newText: ", newText);
    console.log("textarea.length: ", textarea.value.length);
    textarea.value = newText;
});
