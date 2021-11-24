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