This is the second project in The Odin Project curriculum and the first using JavaScript. The objective is to create a Rock Paper Scissors game using the browser's console. The program plays 5 rounds, using a user's input against a randomly generated computer's play, then calculates and declares the winner.

Skills demonstrated:
- adding JavaScript to an html page
- using Google to find solution for problem, in this case how to randomly generate a number
- using conditionals (if, else)
- prompting user for input then using that input for another part of the program
- nesting functions inside other functions (sub functions?)
- incrementing a variable to keep a total game score, then using the total score at the end to declare a winner
- making a function case-insensitive

Potential improvements for script:
- Add greater detail to round messages so they show type of win. Eg "Round won! Paper beats Rock."
    - for this I'd have to change the logic of the playRound() function. At this point, it only checks who wins, not how they win.
- Add error checking to ensure user input is "rock", "paper", or "scissors."
    - for this I think I'd have to use some sort of loop that checks the user's input against a predefined set of values and either assigns the input to a variable if the input is acceptible or shows an error message and prompts again if it's not.