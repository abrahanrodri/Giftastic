
var topics = ["cat", 
"penguin", 
"panda",
"turtle",
"dog",
"frog",
"rabbit",
"dolphin",
"bear"];

function displayGifs() {
    var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=TcbGhYWRBlW2REvL6nD4Co0xKVOoIHZN&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log(queryURL);

        console.log(response);
        var addedTopics = response.data;

        for (var i = 0; i < addedTopics.length; i++) {

          var topicsDiv = $("<div>");

          var p = $("<p>").text("Rating: " + addedTopics[i].rating);

          var animalImage = $("<img>");
          
          animalImage.attr("src", addedTopics[i].images.fixed_height.url);
          animalImage.attr("data-still", addedTopics[i].images.fixed_height_still.url);
     	  animalImage.attr("data-animate", addedTopics[i].images.fixed_height.url);
     	  animalImage.attr("data-state", "still");
         
          topicslDiv.append(p);
          topicsDiv.append(animalImage);
          $("#tenGifs").prepend(topicsDiv);
        };
    });
};

  $(document).on("click", "#topics", display_topics);

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