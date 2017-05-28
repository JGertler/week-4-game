

  var restart = function() {
  playerScore=[];
  $(".numberGuess").text();
  computerNumber = Math.floor((Math.random() *200) + 19);
  $("#randomNumber").text(computerNumber);
}


      var playerScore= [];
      var losses=0;
      var wins=0;

window.onload = function () {
computerNumber = Math.floor((Math.random() *200) + 19);
$("#randomNumber").text(computerNumber);
  




$(".crystal").click(function () {
   var crystalAmount = Math.floor((Math.random() * 12) + 1);
    playerScore.push (crystalAmount);
    var scoreAddition = (playerScore.join (" +  "));
    $(".numberGuess").text(scoreAddition);
    if (playerScore.length===4) {
    var playerScoreTotal = (playerScore[0] + playerScore [1] + playerScore [2] + playerScore [3]);
    var result = $(".results").html("Your crystals amount to  " + playerScoreTotal + ", not " + computerNumber);
      if (playerScoreTotal==computerNumber){
        wins ++;
        $(".wins").text("Wins: " + wins);
      }
      if (playerScoreTotal!=computerNumber){
        losses ++;
        $(".losses").text("Losses: " + losses);
      }
    restart();
    result;

    
    } //end of four crystals being added
}); //end of crystal-click function
    
// var amythystNumber = Math.floor((Math.random() *200) + 19);
// var roseNumber = Math.floor((Math.random() *200) + 19);
// var titaniumNumber = Math.floor((Math.random() *200) + 19);
// var foolsGoldNumber = Math.floor((Math.random() *200) + 19);







    




} //End of window.onload function



   

      // function calculator() {
      //   AmythystButton = "";
      //   foolsGoldButton = "";
      //   titaniumButton = "";
      //   roseButton = "";

      
// $("#Amythyst").on("click", function() {
//   $(".numberGuess").html((Math.floor((Math.random() * 100) + 1));
// }

// 


