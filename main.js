const divResults = document.querySelector('#results');
const divScore = document.querySelector('#score');
const divFinal = document.querySelector('#final');
const divReset = document.querySelector('#resetButton');

// function that randomly generates either 0, 1, or 2
function getRandomNum() {
    // Math.random generates random number between 0 and <1. Multipied by 3 makes it 0 and <3. Math.floor makes sure its always 0, 1, or 2.
    return Math.floor(Math.random() * 3);
}

// function that returns computer's play - randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    let play = '';
    // randomly generate 0, 1, or 2 then return 'Rock', 'Paper', or 'Scissors' depending on the number
    let num = getRandomNum();
    if (num === 0) {
        play = 'Rock';
    }
    else if (num === 1) {
        play = 'Paper'
    }
    else {
        play = 'Scissors'
    }
    return play;
}

// function that plays one round, taking computer's play and player's play then deciding and declaring the winner.
function playRound(playerPlay, computerPlay) {
    let roundStatus = '';

    // make playerPlay argument all lower-case letters so it is case-insensitive
    playerPlay = playerPlay.toLowerCase();
    // if computer wins, return 'Round lost!'. If player wins, return 'Round won!'
    if ((computerPlay === 'Rock' && playerPlay === 'scissors') || (computerPlay === 'Paper' && playerPlay === 'rock') || (computerPlay === 'Scissors' && playerPlay === 'paper')) {
        roundStatus = 'Round lost!';
    }
    else {
        roundStatus = 'Round won!';
    }

    divResults.textContent = roundStatus;
}

//Below this comment is the code for adding a UI re: The Odin Project section DOM manipulation
//function that runs playRound using the id from the click event, ie it sets the player selection based on which button is clicked
let playerScore = 0;
let computerScore = 0;

function playRoundOnClick(e) {
    let playerSelection = e.srcElement.id;
    playRound(playerSelection, computerPlay());
    keepScore();
}

//create node list reference to all buttons
const butts = document.querySelectorAll('button');

//runs playRoundOnClick every time a button is clicked
butts.forEach(butt => butt.addEventListener('click', playRoundOnClick)); 

function keepScore() {
    if(divResults.innerText === 'Round won!') {
        playerScore++;
    }
    else if(divResults.innerText === 'Round lost!') {
        computerScore++;
    }
    divScore.textContent = 'Score: ' + playerScore + ' - ' + computerScore + '\r\n\r\nChoose your next play.';

    if (playerScore === 3) {
        divScore.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
        divFinal.textContent = 'Victory! You are the champion.';
        butts.forEach(butt => butt.remove());
        const resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset';
        divReset.appendChild(resetButton);
    }

    if (computerScore === 3) {
        divScore.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
        divFinal.textContent = 'You have been defeated. Keep training.';
        butts.forEach(butt => butt.remove());
        const resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset';
        divReset.appendChild(resetButton);
    }
};

//function to refresh page
function refreshPage() {
    location.reload();
}

//add listener to refresh page when reset button is clicked
resetButton.addEventListener('click', refreshPage);