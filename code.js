var playerScore;
var computerScore; 
var finalPlayerScore = 0;
var finalComputerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1; 
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  playerScore = 0;
  computerScore = 0;

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "It's a tie!";
    } else if (computerSelection == "paper") {
      computerScore++;
      return "You lose! Paper beats Rock!";
    } else {
      playerScore++;
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      return "You win! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      return "It's a tie!";
    } else {
      computerScore++;
      return "You lose! Paper beats Rock!";
    }
  } else {
    if (computerSelection == "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      playerScore++;
      return "You win! Scissors beats Paper!";
    } else {
      return "It's a tie!";
    }
  } 
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("What do you want?");
    let round = playRound(playerSelection, getComputerChoice());
    finalPlayerScore += playerScore;
    finalComputerScore += computerScore;

    console.log(round);
  }
}

console.log(game());
if (finalPlayerScore > finalComputerScore) {
  console.log("You win! You had " + finalPlayerScore + " wins!")
} else if (finalPlayerScore < finalComputerScore) {
  console.log("You lose! You had " + finalPlayerScore + " wins!")
} else {
  console.log("You tied! You had " + finalPlayerScore + " wins!")
}