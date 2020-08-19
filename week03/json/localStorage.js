console.log("sane");
(function () {
    console.log("iife");

    var textArea = $("#textarea");
    var savedText;

    $(window).on("load", function () {
        console.log("the website is loaded");
        textArea.val(localStorage.getItem("text"));
        console.log(
            'localStorage.getItem("text"): ',
            localStorage.getItem("text")
        );
    });

    textArea.on("keydown", function (e) {
        savedText = textArea.val();
        console.log("savedText: ", savedText);
        localStorage.setItem("text", savedText);
    });

    /*

    try {
  localStorage.setItem('motto', 'Failing to prepare is preparing to fail.');
  console.log(localStorage.getItem('motto')); // logs "Failing  to prepare is preparing to fail." 
  localStorage.removeItem('motto');
} catch (e) {
  console.log('What a nuisance');
}

    */
})();
