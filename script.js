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
    if(playerChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("Tie game! Rock vs. rock");
        } else if(computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            return playerScore++;
        } else if(computerChoice === "paper") {
            console.log("You lose! Paper beats rock!");
            return computerScore++;
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            return playerScore++;
        } else if(computerChoice === "paper") {
            console.log("Tie game! Paper vs. paper");
        } else if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper!");
            return computerScore++;
        }
    } else if(playerChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!");
            return computerScore++;
        } else if(computerChoice === "paper") {
            console.log("You win! Scissors beats paper!");
            return playerScore++;
        } else if(computerChoice === "scissors") {
            console.log("Tie game! Scissors vs. scissors");
        }
    }
}
let playerScore = 0;
let computerScore = 0;
function game() {
    do {
        rockPaperScissors(playerChoose(), computerPlay());
        console.log(`Score: ${playerScore} You ${computerScore} Computer`);
    } while(playerScore < 5 && computerScore < 5);
    if(playerScore == 5) {
        console.log(`You won! Final score:\n ${playerScore} You ${computerScore} Computer`);
    } else if(computerScore == 5) {
        console.log(`You lost. Final score:\n ${playerScore} You ${computerScore} Computer`);
    }
}

game();