
var animals = ["penguin", "dog", "cat", "tiger", "falcon", "eagle", "hamster"];


function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < animals.length; i++) {

    var a = $("<button>");

    a.addClass("animal");
    a.attr("data-name", animals[i]);
    a.text(animals[i]);
    $("#buttons-view").append(a);

  }
}

$("#add-animal").on("click", function (event) {

  event.preventDefault();

  var animal = $("#animal-input").val().trim();

  animals.push(animal);

  renderButtons();
});

function displayGifs() {

  var rap = $(this).attr("data-name");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      rap + "&api_key=TcbGhYWRBlW2REvL6nD4Co0xKVOoIHZN&limit=10";

  $.ajax({ 
    url: queryURL, 
    method: "GET" 
  }).done(function (response) {

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

          var gifDiv = $('.tenGifs');
          var showGif = $('<img>');

          showGif.attr('src', results[i].images.fixed_height_still.url);
          showGif.attr('title', "Rating: " + results[i].rating);
          showGif.attr('data-still', results[i].images.fixed_height_still.url);
          showGif.attr('data-state', 'still');
          showGif.addClass('gif');
          showGif.attr('data-animate', results[i].images.fixed_height.url);
          gifDiv.append(showGif)
          $(".tenGifs").append(gifDiv);
      }

  });
}

$(document).on('click', '.gif', function () {
  
  var state = $(this).attr('data-state');

  if (state === 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
  } else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
  };
});

$(document).on("click", ".animal", displayGifs);
renderButtons();