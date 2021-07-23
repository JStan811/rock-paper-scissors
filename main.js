console.log('Welcome. You have entered into a Rock Paper Scissors battle. Your objective is to defeat the computer in a best of 5 match. Good luck.')

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
    let roundStatus = ''
    // make playerPlay argument all lower-case letters so it is case-insensitive
    playerPlay = playerPlay.toLowerCase();
    // if computer wins, return 'Round lost!'. If player wins, return 'Round won!'
    if ((computerPlay === 'Rock' && playerPlay === 'scissors') || (computerPlay === 'Paper' && playerPlay === 'rock') || (computerPlay === 'Scissors' && playerPlay === 'paper')) {
        roundStatus = 'Round lost!';
    }
    else {
        roundStatus = 'Round won!';
    }
    return roundStatus;
}

/* - one function that represents one full game that plays 5 rounds and reports the winner
    - this should console.log() the result of each round and the winner at the end */

// function that plays 5 rounds then reports the winner
function game() {
    // run playRound 5 times, keep track of score, then calculate and declare winner
    playerCount = 0;
    computerCount = 0;

    // function that prompts user for play, then runs playRound using user's input. If user wins, increment playerCount by 1 and return round status message (victory of defeat) and total score. If user loses, increment computerCount by 1
    function roundMessageAndScore() {
        let playerPlay = prompt("Enter your play: ");
        let roundStatus = playRound(playerPlay, computerPlay());
        if (roundStatus === 'Round won!') {
            playerCount++;
        }
        else {
         computerCount++;
        }
        console.log(roundStatus + '\nScore: Player ' + playerCount + ' | ' + 'Computer ' + computerCount);
    }

    //run roundMessageAndScore 5 times for 5 rounds
    roundMessageAndScore();
    roundMessageAndScore();
    roundMessageAndScore();
    roundMessageAndScore();
    roundMessageAndScore();
   
    //tally total score and declare winner
    if (playerCount > computerCount) {
        console.log('Victory! You are the champion.');
    }
    else {
        console.log('You have been defeated. Keep training.');
    }
}

game();