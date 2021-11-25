function computerPlay() {
    let computerChoice;
    x = Math.floor(Math.random() * 3);
    if(x === 0) {
        computerChoice = "rock";
    } else if(x === 1) {
        computerChoice = "paper";
    } else if (x === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playerChoose() {
    let playerChoice;
    do {
        playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();
    } while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
    return playerChoice;
}

function rockPaperScissors(playerChoice, computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    if(playerChoice === "rock") {
        if(computerChoice === "rock") {
            return "Tie game! Rock vs. rock";
        } else if(computerChoice === "scissors") {
            return "You win! Rock beats scissors!";
        } else if(computerChoice === "paper") {
            return "You lose! Paper beats rock!";
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            return "You win! Paper beats rock!";
        } else if(computerChoice === "paper") {
            return "Tie game! Paper vs. paper";
        } else if(computerChoice === "scissors") {
            return "You lose! Scissors beats paper!";
        }
    } else if(playerChoice === "scissors") {
        if(computerChoice === "rock") {
            return "You lose! Rock beats scissors!";
        } else if(computerChoice === "paper") {
            return "You win! Scissors beats paper!";
        } else if(computerChoice === "scissors") {
            return "Tie game! Scissors vs. scissors";
        }
    }
}

console.log(rockPaperScissors(playerChoose(), computerPlay()));