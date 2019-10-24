$(document).ready(function() {

  // var runAge = function(age) {
  //   if (age < 18) {
  //     console.log("Sorry you're not old enough to vote.");
  //   } else {
  //     console.log("Hey! you're of age to vote! But are you registered?");
  //   }
  // }
// Voting functionality

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


// Animal Select functionality

    $("form.animal").submit(function(event) {
      event.preventDefault();


      var value = $("#animal option:selected").val();
      
      console.log("the value is " + value);

      if (value === "wolf") {
        console.log("nope 1");
        $("#bats").hide();
        $("#sloth").hide();
        $("#whoops").hide();
        $("#wolf").show();
      } else if (value === "bat") {
        console.log("nope 2");
        $("#wolf").hide();
        $("#sloth").hide();
        $("#whoops").hide();
        $("#bats").show()
      } else if (value === "sloth") {
        $("#wolf").hide();
        $("#bats").hide();
        $("#whoops").hide();
        $("#sloth").show();
      } else {
        $("#wolf").hide();
        $("#bats").hide();
        $("#sloth").hide();
        $("#whoops").show();
      }

    });

});
