// --- Base Variables ---
let playerScore = 0; // keeps track of when the user wins a round
let computerScore = 0; // keeps track of when the user loses a round
let round = 0; // keeps track of the amount of rounds

// Randomly chooses a string from the array
function randomizer() {
    let list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random() * list.length)];
}

// Updates the #player-score HTML Element
function updatePlayerScore(newScore) {
    document.getElementById("player-score").innerHTML = newScore;
}

// Updates the #computer-score HTML Element
function updateComputerScore(newScore) {
    document.getElementById("computer-score").innerHTML = newScore;
}

// Updates the #player-choice HTML Element
function updatePlayerChoice(newChoice) {
    document.getElementById("player-choice").innerHTML = newChoice;
}

// Updates the #computer-choice HTML Element
function updateComputerChoice(newChoice) {
    document.getElementById("computer-choice").innerHTML = newChoice;
}

// Updates the #round-result HTML Element
function updateRoundResult(newResult) {
    document.getElementById("round-result").innerHTML = newResult;
}

// Collects all the button elements and makes the run playRound(button.id) on click
document.querySelectorAll(".options button").forEach((button) => {
    // Add a click event listener
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

// the whole game in a function
function playRound(playerChoice) {
    // Creates a choice for the computer
    let computerChoice = randomizer();

    // Keeps track of what message will be displayed after the round
    let roundResult = "";

    // Check to see if it is a tie
    if (computerChoice === playerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        updatePlayerScore(playerScore++);
        roundResult = `You win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    } else {
        updateComputerScore(computerScore++);
        roundResult = `You lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
    }

    // Updates the choice selected
    updatePlayerChoice(playerChoice);
    updateComputerChoice(computerChoice);

    // Updates the score after someone won
    updateComputerScore(computerScore);
    updatePlayerScore(playerScore);

    updateRoundResult(roundResult);

    // restart button
    document.getElementById("reset").onclick = function() {
        document.getElementById("player-score").innerHTML = "0";
        document.getElementById("computer-score").innerHTML = "0";
        document.getElementById("computer-choice").innerHTML = "";
        document.getElementById("player-choice").innerHTML = "";
        document.getElementById("round-result").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        };
}
