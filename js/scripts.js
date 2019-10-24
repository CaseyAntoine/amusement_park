$(document).ready(function() {

  // var runAge = function() {
  //   if (age < 18) {
  //     console.log("Sorry you're not old enough to vote.");
  //   } else {
  //     console.log("Hey! you're of age to vote! But are you registered?");
  //   }
  // }

    $(".voting").submit(function(event) {
      event.preventDefault();

      var age = parseInt($("input.age").val());

      if (age < 18) {
        console.log("You aren't old enough!");
        $(".voteResult p").hide();
        $(".voteCant").show();

      } else {
        console.log("Thanks! We'll check for you.");
        $(".voteResult p").hide();
        $(".voteNow").show();
      }
      $("input.age").val("");

    });


});
