var playerScore = 0;
var computerScore = 0; 


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
  changeResultRock();
  checkScores();
});
paper.addEventListener('click', () => {
  changeResultPaper();
  checkScores();
});
scissors.addEventListener('click', () => {
  changeResultScissors();
  checkScores();
});

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

function checkScores() {
  if (document.querySelector(".player-points").innerHTML == 5) {
    document.querySelector(".results").innerHTML = "The Player has Won!";
  } else if (document.querySelector(".computer-points").innerHTML == 5) {
    document.querySelector(".results").innerHTML = "The Computer has Won!";
  }
}

function changeResultRock() {
  document.querySelector(".results").innerHTML = playRound('rock', getComputerChoice());
}
function changeResultPaper() {
  document.querySelector(".results").innerHTML = playRound('paper', getComputerChoice());
}
function changeResultScissors() {
  document.querySelector(".results").innerHTML = playRound('scissors', getComputerChoice());
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "It's a tie!";
    } else if (computerSelection == "paper") {
      computerScore++;
      document.querySelector(".computer-points").innerHTML = computerScore;
      return "You lose! Paper beats Rock!";
    } else {
      playerScore++;
      document.querySelector(".player-points").innerHTML = playerScore;
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      document.querySelector(".player-points").innerHTML = playerScore;
      return "You win! Paper beats Rock";
    } else if (computerSelection == "paper") {
      return "It's a tie!";
    } else {
      computerScore++;
      document.querySelector(".computer-points").innerHTML = computerScore;
      return "You lose! Scissors beat Paper!";
    }
  } else {
    if (computerSelection == "rock") {
      computerScore++;
      document.querySelector(".computer-points").innerHTML = computerScore;
      return "You lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      playerScore++;
      document.querySelector(".player-points").innerHTML = playerScore;
      return "You win! Scissors beats Paper!";
    } else {
      return "It's a tie!";
    }
  } 
}


// function game() {
//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("What do you want?");
//     let round = playRound(playerSelection, getComputerChoice());
//     finalPlayerScore += playerScore;
//     finalComputerScore += computerScore;

//     console.log(round);
//   }
// }

// console.log(game());
// if (finalPlayerScore > finalComputerScore) {
//   console.log("You win! You had " + finalPlayerScore + " wins!")
// } else if (finalPlayerScore < finalComputerScore) {
//   console.log("You lose! You had " + finalPlayerScore + " wins!")
// } else {
//   console.log("You tied! You had " + finalPlayerScore + " wins!")
// }