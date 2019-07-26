
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

 
 $("#add-animal").on("click", function(event) {
  
   event.preventDefault();

 
   var animal = $("#animal-input").val().trim();

   animals.push(animal);

   
   renderButtons();
 });

 
 renderButtons();