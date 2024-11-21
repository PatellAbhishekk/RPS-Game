// Variables
const choices = ["rock", "paper", "scissors"];
const icons = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

// Function to get the computer's choice
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You used the cheat code! You win!";
  }
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer wins!" : "You win!";
  }
  if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer wins!" : "You win!";
  }
  if (userChoice === "scissors") {
    return computerChoice === "rock" ? "Computer wins!" : "You win!";
  }
};
