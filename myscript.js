
// Randomly either return 'rock', 'paper, or 'scissors'


let computerSelection;
let playerSelection;

function questionAsk() {
    const question = prompt("Choose your player").toLowerCase();
    return question;
}

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
    computerSelection = computerPlay();
    playerSelection = questionAsk();
    let output = '';
    let score = '';
    let noScore = 0;
    let homeScore = 1;
    let oppScore = 2;


    if (playerSelection === computerSelection) {
        output = "You both chose " + playerSelection + " please try again."; 
        score = noScore;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        output = "You won! Rock beats scissors";
        score = homeScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        output = "You won! Paper beats rock";
        score = homeScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        output = "You won! Scissors beats paper";
        score = homeScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        output = "You lost! Rock beats scissors";
        score = oppScore;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        output = "You lost! Paper beats rock";
        score = oppScore;
    }
    else {
        output = "You lost! Scissors beats paper";
        score = oppScore;
    }
    console.log(output);
    return score;
}

function game() {
let urScore = 0;
let pcScore = 0;

    for (let i = 0; i < 5; i++) {
        let output = (playRound(playerSelection, computerSelection));
        if (output === 0) {
            urScore;
            pcScore;
            i--;
        }
        else if (output === 1) {
            urScore++;
        }
        else if (output === 2) {
            pcScore++;
        }

        console.log("Your score: " + urScore + " Computer score: " + pcScore);
    }

    if (urScore === pcScore) {
        console.log("It's a tie!");
    }
    else if (urScore < pcScore) {
        console.log("Sorry you lost.");
    }
    else {
        console.log("Congrats you won!");
    }

}



console.log(game());