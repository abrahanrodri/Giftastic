
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
      newAnimals.addClass("btn btn-default topicBtn");
      newAnimals.attr("type", "button");
      newAnimals.append(animals[i]);
      newAnimals.attr("value", animals[i]);
      $("#newButtonDiv").append(newAnimals);

      
    }
  }
 
  
  showButtons();

function showGifs(animal) {
    

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
    + animal + "&api_key=TcbGhYWRBlW2REvL6nD4Co0xKVOoIHZN&q=&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        
        

    });

  }

})