/* <!--
    Name: Kevin Lehman
    Date Created: 11/25/2019
    Most recent revision: 11/30/2019
*/

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["luckySevens"].elements.length;
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["startingBet"].value = "";
    document.getElementById("gameResults").style.display = "none";
    document.getElementById("afterCLick").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("play").innerText = "Play";
    document.forms["luckySevens"]["startingBet"].focus();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function validateBet() {
    clearErrors();
    var gameMoney = document.forms["luckySevens"]["startingBet"].value;
    var rollCount = 0;
    var biggestWin = 0;
    var rollCountAtBigWin = 0;

    if( gameMoney=="" || isNaN(gameMoney)){
      alert("Starting bet must be filled with a number");
      document.forms["luckySevens"]["startingBet"]
        .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["startingBet"].focus();
        resetForm();
        return false;
    }

    if (gameMoney <= 0) {
      alert("Starting bet much be greater than 0");
      document.forms["luckySevens"]["startingBet"]
       .parentElement.className = "form-group has-error";
      document.forms["luckySevens"]["startingBet"].focus();
      resetForm();
      return false;
    }

    while(gameMoney > 0){
        var roll1 = rollDice();
        var roll2 = rollDice();
        rollCount++;

        if(roll1 + roll2 == 7) {
          gameMoney = gameMoney + 4;

          if(gameMoney>biggestWin){
            biggestWin = gameMoney;
            rollCountAtBigWin = rollCount;
          }

        }
        else{
          gameMoney = gameMoney - 1;
        }



    }

  document.getElementById("afterClick").style.display = "block";
  document.getElementById("results").style.display = "block";
  document.getElementById("gameResults").style.display = "block";
  document.getElementById("play").innerText = "Play Again";
  document.getElementById("openingBet").innerText = "$" +Number(document.forms["luckySevens"]["startingBet"].value).toFixed(2);
  document.forms["luckySevens"]["startingBet"].value = "$0.00";
  document.getElementById("rollCount").innerText = rollCount;
  document.getElementById("biggestWin").innerText = "$" +Number(biggestWin).toFixed(2);
  document.getElementById("rollCountAtBigWin").innerText = rollCountAtBigWin;

  return false;
}
