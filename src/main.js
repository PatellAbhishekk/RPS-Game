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
