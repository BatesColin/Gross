$(document).ready(function() {
  $("form#list").submit(function(event){
    event.preventDefault();

    var food = ["food1", "food2", "food3", "food4", "food5", "food6", "food7", "food8", "food9", "food10"];

      var newGuy =[]

   food.forEach(function(input){
     var userInput = $("input#" + input).val();
     newGuy.push(userInput);
  });

  newGuy.sort();

  newGuy.forEach(function(input) {
    $("#list").append("<li>" + input.toUpperCase() + "</li>");
  });
$("#return").show();
});

});
