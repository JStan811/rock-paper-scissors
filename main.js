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