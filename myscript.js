
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

console.log(computerPlay());

function playRound() {
    
}

