var topics = ["cat", 
"penguin", 
"panda",
"turtle",
"dog",
"frog",
"rabbit",
"dolphin",
"bear"];
var addedTopics = "";

var pageButtons = $('#buttonsTopics');
for (var i = 0; i < topics.length; i++) {
  pageButtons.append('<input type="button" class="btn btn-primary" id="buttonTopics' + i + '" value="' + topics[i] + '"/>');
}

$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "TcbGhYWRBlW2REvL6nD4Co0xKVOoIHZN";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var animalDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var animalImage = $("<img>");
          
          animalImage.attr("src", results[i].images.fixed_height.url);

         
          animalDiv.append(p);
          animalDiv.append(animalImage);

         
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });

$(".gif").on("click", function() {
  
    var state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });