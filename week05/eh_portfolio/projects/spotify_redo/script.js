/// handlebars initialisieren



//ajax request

// error handling

// no picture handling

// is there a next option ??

// Displaying results for: MF DOOM

// More results - if necessary

//https://derickbailey.com/2015/11/18/finitely-iterating-infinite-data-with-es6-generators/


// # generator function
function* getData() {
    // ... code to get data and yield it, one item at a time // or one set of 20ies????
}

// loop through the iterator and render the items
// stopping at the max number of items to render
function listIterator(iterator, max) {
    // get the first iteration
    var result = it.next();

    // iterate the max number of times
    var i = 0;
    while (i < max && !result.done) {
        // render this one, assume it is synchronous
        renderItem(result.value);

        // move on to the next one
        result = it.next();
        i++;
    }
}

function renderItems(max) {
    // get the iterator
    var it = getData();

    // set up a function to continue rendering
    function continueRendering() {
        listIterator(max);
    }

    // run the first round of rendering
    continueRendering(max);

    // return an API that allows you to
    // continue rendering whenever you want
    return {
        continue: continueRendering,
    };
}




$(function(){
  // only render 10 at a time
  var renderer = listIterator(10);

  // handle the "more" button click
  $(".more").onClick(function(e){
    e.preventDefault();
  
    // render the next set of items
    renderer.continueRendering();
  });
  