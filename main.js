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

/* - one function playing a round, taking the computer's play and player's play and deciding, then declaring the winner.
- the player's play need to be case-insensitive (rock, ROCK, or RocK)
- this should return results, not console.log() them */

// function that plays one round, taking computer's play and player's play then deciding and declaring the winner.
function playRound(playerPlay, computerPlay) {
    let roundStatus = ''
    // make playerPlay argument all lower-case letters so it is case-insensitive
    playerPlay = playerPlay.toLowerCase();
    // if computer wins, return 'Defeated!'. If player wins, return 'Victorious!'
    if ((computerPlay === 'Rock' && playerPlay === 'scissors') || (computerPlay === 'Paper' && playerPlay === 'rock') || (computerPlay === 'Scissors' && playerPlay === 'paper')) {
        roundStatus = 'Defeated!';
    }
    else {
        roundStatus = 'Victorious!';
    }
    return roundStatus;
}
