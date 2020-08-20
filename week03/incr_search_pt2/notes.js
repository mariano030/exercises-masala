///// NOTES


// remove the arry with the country data

// remove the logic that limits the results to 4 array elements
// as API does that automatically

// every time the user types we make an ajax event

// make request inside of input event listener
$.ajax({
    url: "https://spicedworld.herokuapp.com/",
    mehtod: "GET", // is default could be left out
    data: {         // <<-- the data object 
        q: "a",     // this is my query - "a" is hardcoded - make dynamic
    },
    success : function (response) {
        console.log("response from success function" response);
        // this is where we have access to the data! it's in this scope
    }
});

// small problem - with each letter - ?cancel requests? - 
// we don't know when the response will come back, which one will come first
// inside success function: compare current value of input field to value that's
// in the ajax object - if they are not the same - you need to discard this result
// how is it that we handle things ?? discard - of smth - this morgings encounter