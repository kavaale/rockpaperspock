$(function () {
    $("#lizard").click(runGame);
    $("#rock").click(runGame);
    $("#spock").click(runGame);
    $("#scissors").click(runGame);
    $("#paper").click(runGame);
    $("#reset").click(resetGame);

    var playerWin = 0;
    var aiWin = 0;

    function resetGame(event) {
        //resets all values and text objects
        event.preventDefault();
        playerWin = 0;
        aiWin = 0;
        $("#aiOutput").text(aiWin);
        $("#playerOutput").text(playerWin);
        $("#winOutput").text("");
        $("#finalOutput").text("");
    }


    function runGame(event) {
        event.preventDefault();
        //if statement to check if the game has been won or not
        if(playerWin<2&&aiWin<2) {
            //variable to store what value the ai chooses
            var randNum = (Math.random() * 4).toFixed(0);
            //checks which picture was clicked and then compares it to the random number for the ai
            if (this.id == "lizard") {
                if (randNum == 0) {
                    $("#finalOutput").text("lizard ties lizard");
                }
                if (randNum == 1) {
                    $("#finalOutput").text("lizard loses to rock");
                    aiWin++;
                }
                if (randNum == 2) {
                    $("#finalOutput").text("lizard beats spock");
                    playerWin++;
                }
                if (randNum == 3) {
                    $("#finalOutput").text("lizard loses to scissors");
                    aiWin++;
                }
                if (randNum == 4) {
                    $("#finalOutput").text("lizard beats paper");
                    playerWin++;
                }
            }
            if (this.id == "spock") {
                if (randNum == 0) {
                    $("#finalOutput").text("spock loses to lizard");
                    aiWin++;
                }
                if (randNum == 1) {
                    $("#finalOutput").text("spock beats rock");
                    playerWin++;
                }
                if (randNum == 2) {
                    $("#finalOutput").text("spock ties spock");
                }
                if (randNum == 3) {
                    $("#finalOutput").text("spock beats scissors");
                    playerWin++;
                }
                if (randNum == 4) {
                    $("#finalOutput").text("spock loses to paper");
                    aiWin++;
                }
            }
            if (this.id == "rock") {
                if (randNum == 0) {
                    $("#finalOutput").text("rock beats lizard");
                    playerWin++;
                }
                if (randNum == 1) {
                    $("#finalOutput").text("rock ties rock");
                }
                if (randNum == 2) {
                    $("#finalOutput").text("rock loses to spock");
                    aiWin++;
                }
                if (randNum == 3) {
                    $("#finalOutput").text("rock beats scissors");
                    playerWin++;
                }
                if (randNum == 4) {
                    $("#finalOutput").text("rock loses to paper");
                    aiWin++;
                }
            }
            if (this.id == "scissors") {
                console.log()
                if (randNum == 0) {
                    $("#finalOutput").text("scissors beats lizard");
                    playerWin++;
                }
                if (randNum == 1) {
                    $("#finalOutput").text("scissors loses to rock");
                    aiWin++;
                }
                if (randNum == 2) {
                    $("#finalOutput").text("scissors loses to spock");
                    aiWin++;
                }
                if (randNum == 3) {
                    $("#finalOutput").text("scissors ties scissors");
                }
                if (randNum == 4) {
                    $("#finalOutput").text("scissors beats paper");
                    playerWin++;
                }
            }
            if (this.id == "paper") {
                if (randNum == 0) {
                    $("#finalOutput").text("paper loses to lizard");
                    aiWin++;
                }
                if (randNum == 1) {
                    $("#finalOutput").text("paper beats rock");
                    playerWin++;
                }
                if (randNum == 2) {
                    $("#finalOutput").text("paper beats spock");
                    playerWin++;
                }
                if (randNum == 3) {
                    $("#finalOutput").text("paper loses to scissors");
                    aiWin++;
                }
                if (randNum == 4) {
                    $("#finalOutput").text("paper ties paper");
                }
            }

            //outputs values and checks if ai or player won the game yet
            $("#playerOutput").text(playerWin);
            $("#aiOutput").text(aiWin);
            if(playerWin>=2){
                $("#winOutput").text("You win!")
            }
            if(aiWin>=2){
                $("#winOutput").text("You lost sorry better luck next time")
            }
        }
    }

})