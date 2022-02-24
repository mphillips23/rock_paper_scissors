let player_score = 0;
let computer_score = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    var textArray = ["", "Rock", "Paper", "Scissors"];
    randomNumber = getRandomInt(1, textArray.length - 1);
    return textArray[randomNumber];
}

/* computerPlay(); */

function playerSelection() {
    var player_selection = prompt("Please type Rock, Paper, or Scissors");
    return player_selection;
}

/* playerSelection(); */

function playround() {
    var computer_result = computerPlay();
    var player_result = playerSelection();
    console.log(`Your choice was ${player_result}. Your opponent's was ${computer_result}.`)
    if (player_result === "Rock" && computer_result === "Rock") {
        console.log("Draw");
    }
    else if (player_result === "Rock" && computer_result === "Paper") {
        console.log("You lose! Paper beats rock");
    }
    else if (player_result === "Rock" && computer_result === "Scissors") {
        console.log("You win! Rock beats scissors");
        player_score = player_score + 1;
    }
    else if (player_result === "Paper" && computer_result === "Paper") {
        console.log("Draw!");
    }
    else if (player_result === "Paper" && computer_result === "Rock") {
        console.log("You win! Paper beats rock");
        player_score = player_score + 1;
    }
    else if (player_result === "Paper" && computer_result === "Scissors") {
        console.log("You lose! Scissors beats paper");
    }
    else if (player_result === "Scissors" && computer_result === "Scissors") {
        console.log("Draw!");
    }
    else if (player_result === "Scissors" && computer_result === "Rock") {
        console.log("You lose! Rock beats scissors");
    }
    else if (player_result === "Scissors" && computer_result === "Paper") {
        console.log("You win! Scissors beats paper");
        player_score = player_score + 1;
    }
}

/* playround(); */


function play_game(number_of_rounds) {
    for (let i = 0; i < number_of_rounds; i++) {
       playround();
    }
    console.log("You won " + player_score + " games")
}

play_game(prompt("Enter how many rounds you want to play"));


/*
Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/