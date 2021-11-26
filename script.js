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

function playerChoose(playerSelection) {
    return playerSelection;
}

const outputText = document.querySelector('.textresult');
function rockPaperScissors(playerChoice, computerChoice) {
    if(playerChoice === "rock") {
        if(computerChoice === "rock") {
            outputText.textContent = "Tie game! Rock vs. rock";
        } else if(computerChoice === "scissors") {
            outputText.textContent = "You win! Rock beats scissors!";
            playerScore++;
        } else if(computerChoice === "paper") {
            outputText.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            outputText.textContent = "You win! Paper beats rock!";
            playerScore++;
        } else if(computerChoice === "paper") {
            outputText.textContent = "Tie game! Paper vs. paper";
        } else if(computerChoice === "scissors") {
            outputText.textContent = "You lose! Scissors beats paper!";
            computerScore++;
        }
    } else if(playerChoice === "scissors") {
        if(computerChoice === "rock") {
            outputText.textContent = "You lose! Rock beats scissors!";
            computerScore++;
        } else if(computerChoice === "paper") {
            outputText.textContent = "You win! Scissors beats paper!";
            playerScore++;
        } else if(computerChoice === "scissors") {
            outputText.textContent = "Tie game! Scissors vs. scissors";
        }
    }
    game();
}

const btn = document.querySelectorAll('.playbutton');
btn.forEach(addListen => addListen.addEventListener('click', () => {
    let id = this.id;
    rockPaperScissors(playerChoose(addListen.id), computerPlay())
}));
let playerScore = 0;
let computerScore = 0;
const scoreText = document.querySelector('.runningscore');
function game() {
    scoreText.textContent = `Score: ${playerScore} You | ${computerScore} Computer`;
    if(playerScore == 5) {
        outputText.textContent = `You won!`;
        outputText.style.color = 'green';
        scoreText.textContent = `Final score:\n ${playerScore} You | ${computerScore} Computer`
        endGame();
    } else if(computerScore == 5) {
        outputText.textContent = `You lost.`;
        outputText.style.color = 'red';
        scoreText.textContent = `Final score:\n ${playerScore} You | ${computerScore} Computer`
        endGame();
    }
}

function endGame() {
    btn.forEach(disableButton => disableButton.disabled = true);
    const restartButton = document.querySelector('.restart');
    restartButton.style.display = 'block';
    restartButton.addEventListener('click', () => {
        restartGame();
    });
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    outputText.textContent = 'Choose an option';
    outputText.style = 'initial';
    scoreText.textContent = 'Score:';
    const restartButton = document.querySelector('.restart');
    restartButton.style.display = 'none';
    btn.forEach(enableButton => enableButton.disabled = false);
}