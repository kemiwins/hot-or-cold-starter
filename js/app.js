
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- My code ---*/

    secretNum(magic); 

    $("#guessButton").on("click",function(){
      guessing();
      return false;
    });

    $(".new").on("click",function(){
      newGame();
    });
});

var secretNum = function(random){
      alert(random);
      return random;     
  }
var magic = (Math.floor((Math.random()*100) + 1)); 

var guessing = function(){    
    var guess = $("#userGuess ").val();
    var proximity = (Math.abs(magic-guess));  
     
      if(guess >= 101 || guess <=0 || guess%1 != 0 || isNaN(guess)){
        alert("Guess a whole number between 1 and 100!");
        $("#count").text(countGuesses);
        return false;
      }
      if((proximity<=100) && (proximity>=50) ) {
        alert("FREEZING");
        $("#feedback").text("FREEZING!");
      }
      if((proximity<=49) && (proximity>=30) ) {
        alert("COLD");
        $("#feedback").text("COLD");
      }
      if((proximity<=29) && (proximity>=10) ) {
        alert("WARM");
        $("#feedback").text("WARM :)");
      }
      if((proximity<=9) && (proximity>=1) ) {
        alert("HOT");
        $("#feedback").text("HOT HOT HOT!");
      }
      if(proximity<=0) {
        alert("YOU WIN");           
        $("#feedback").text("YOU WIN!");
        $("#userGuess").prop("disabled",true );
      }

      $("#guessList").append("<li>" + guess);
      $("#userGuess").val("");

      var countGuesses = $("#guessList").children().length;
      $("#count").text(countGuesses);
       return false;
     }

var newGame = function(){
      $("#feedback").text("Make your Guess!");
      $("#userGuess").prop("disabled",false);
      $("#guessList").text("");
      $("#count").text("0");
}