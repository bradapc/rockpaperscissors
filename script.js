let computerChoice;

function computerPlay() {
    x = Math.floor(Math.random() * 3);
    console.log(x);
    if(x === 0) {
        computerChoice = "Rock";
    } else if(x === 1) {
        computerChoice = "Paper";
    } else if (x === 2) {
        computerChoice = "Scissors";
    }
}

let playerChoice;
function playerChoose() {
    playerChoice = prompt("Rock, paper, or scissors?");
    if(playerChoice.toLowerCase() == "rock") {
        return;
    } else if(playerChoice.toLowerCase() == "paper") {
        return;
    } else if(playerChoice.toLowerCase() == "scissors") {
        return;
    } else {
        playerChoose();
    }
}