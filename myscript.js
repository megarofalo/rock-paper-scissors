
// Randomly either return 'rock', 'paper, or 'scissors'

let computerSelection;
let playerSelection;
const rockBtn = document.querySelector(".userRock");
const paperBtn = document.querySelector(".userPaper");
const scissorsBtn = document.querySelector(".userScissors");
const resultContainer = document.querySelector('#container');
const playerScore = document.createElement('p');
const compScore = document.createElement('p');
const currentScore = document.createElement('p');
const results = document.querySelector('#final');
const finalScore = document.createElement('h1');
resultContainer.appendChild(playerScore);
resultContainer.appendChild(compScore);
resultContainer.appendChild(currentScore);
results.appendChild(finalScore);
let urScore = 0;
let pcScore = 0;
let noScore = 0;
let homeScore = 0;
let oppScore = 0;
let scores = [];
let resetNum = 1;


rockBtn.addEventListener("click", function () {
    resetNum = gameRounds(playRound("rock", computerPlay()));
    resetGame(resetNum);
});
paperBtn.addEventListener("click", function () {
    resetNum = gameRounds(playRound("paper", computerPlay()));
    resetGame(resetNum);

});
scissorsBtn.addEventListener("click", function () {
    resetNum = gameRounds(playRound("scissors", computerPlay()));
    resetGame(resetNum);

});

function gameRounds(scores) {

    urScore = scores[0];
    pcScore = scores[1];


    if (urScore === 5 || pcScore === 5) {


        if (pcScore > urScore) {
            finalScore.textContent = "Sorry you lost.";

            return resetNum = 1;

        }
        else {
            finalScore.textContent = "Congrats you won!";
            return resetNum = 1;
        }

    }


}


function resetGame(resetNum) {
    if (resetNum === 1) {
        setTimeout(() => {
            let resetGame = confirm("Would you like to reset the game?");
            if (resetGame) {
                urScore = 0;
                pcScore = 0;
                homeScore = 0;
                oppScore = 0;
                finalScore.textContent = "";
            } else {

            }
        },
            1000);

    }



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
    let output = '';
    let score = '';


    if (playerSelection === computerSelection) {
        output = "You both chose " + playerSelection + " please try again.";
        homeScore;
        oppScore;
        currentScore.textContent = output;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        output = "You won! Rock beats scissors";
        homeScore += 1;
        currentScore.textContent = output;
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        output = "You won! Paper beats rock";
        homeScore += 1;
        currentScore.textContent = output;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        output = "You won! Scissors beats paper";
        homeScore += 1;
        currentScore.textContent = output;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        output = "You lost! Rock beats scissors";
        oppScore += 1;
        currentScore.textContent = output;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        output = "You lost! Paper beats rock";
        oppScore += 1;
        currentScore.textContent = output;
    }
    else {
        output = "You lost! Scissors beats paper";
        oppScore += 1;
        currentScore.textContent = output;
    }
    currentScore.textContent = output;

    compScore.textContent = ("PC Score: " + oppScore);
    playerScore.textContent = ("Your Score: " + homeScore);
    return [homeScore, oppScore];
}


