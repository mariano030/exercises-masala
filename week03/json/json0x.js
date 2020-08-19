var banner = $("#cookieconsent");
var button = $("#cookieconsent button");


try {
var clicked = localStorage.getItem("clicked";)      // always use try{} catch{} when working with localStorage
} catch {}                                          // 5 MB storage limit for LoSto - try catch helps when full


console.log(clicked);

if (!clicked) {
    banner.show()   // also .fadeIn()
}

button.on("clicked", funciton () {
    banner.fadeOut();
});

// saving an object to localStorage - convert to JSON - save - load - convert back

// even if you close the browser and reopen it will still be in your local storage

// localStorage is synced between tabs as it is present in the browser profile! 

$(window).on("storage", fucntion (e){
    var key = e.originalEvent.key;
    var value = e.originalEvent.newValue;

    if (key === "clicked" && !!value)  // !!value is the same as value BUT !! converts to boolean
    {
        banner.fadeOut();
    }
});