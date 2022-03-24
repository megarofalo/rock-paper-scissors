
// Randomly either return 'rock', 'paper, or 'scissors'

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 100);
    let choosePlayer = '';

    if (randomNum >= 0 && randomNum <= 33) {
        choosePlayer = 'rock';
    }
    else if (randomNum >= 34 && randomNum <= 67) {
        choosePlayer = 'scissors';
    }

    else {
        choosePlayer = 'paper';
    }
    return choosePlayer;
}


function playRound(playerSelection, computerSelection) {
    let output = '';
    if (playerSelection === computerSelection) {
        output = "You both chose " + playerSelection + " please try again.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        output = "You won! Rock beats scissors";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        output = "You won! Paper beats rock";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        output = "You won! Scissors beats paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        output = "You lost! Rock beats scissors";
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        output = "You lost! Paper beats rock";
    }
    else {
        output = "You lost! Scissors beats paper";
    }

    return output;
}

const computerSelection = computerPlay();
const playerSelection = prompt("Choose your player").toLowerCase();
console.log(playRound(playerSelection, computerSelection));
