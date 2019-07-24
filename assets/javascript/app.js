
var animals = ["cat", 
"penguin", 
"panda",
"turtle",
"dog",
"frog",
"rabbit",
"dolphin",
"bear"];


$(document).ready(function() {

  function showButtons() {

    for (var i = 0; i < animals.length; i++) {
      var newAnimals = $("<button>");
      newAnimals.addClass("btn btn-primary");
      newAnimals.attr("data-name", animals[i]);
      newAnimals.append(animals[i]);
      $("button").append(newAnimals);

      
    }
  }
 
  
  showButtons();
  showGifs();

function showGifs(animal) {
    
  var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
    + animal + "&api_key=TcbGhYWRBlW2REvL6nD4Co0xKVOoIHZN&q=&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
         var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('.gifs');

                var gifShow = $('<img>');

                gifShow.attr('src', results[i].images.fixed_height_still.url);
                gifShow.attr('title', "Rating: " + results[i].rating);
                gifShow.attr('data-still', results[i].images.fixed_height_still.url);
                gifShow.attr('data-state', 'still');
                gifShow.addClass('gif');
                gifShow.attr('data-animate', results[i].images.fixed_height.url);
                gifDiv.append(gifShow);
                $(".gifs").append(gifDiv);
            }

        });
    }
        

    });


