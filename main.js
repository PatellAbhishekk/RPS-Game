// Variables and Constants
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

// Function to animate the dice and display the computer's choice
const showDiceRoll = (computerChoice) => {
  const diceElement = document.getElementById("dice");
  diceElement.classList.add("shaking");

  // Simulate rolling effect
  let rollCount = 0;
  const rollInterval = setInterval(() => {
    const randomIcon = icons[choices[Math.floor(Math.random() * 3)]];
    diceElement.textContent = randomIcon;
    rollCount++;

    // Stop after a few rolls
    if (rollCount >= 6) {
      clearInterval(rollInterval);
      diceElement.textContent = icons[computerChoice];
      diceElement.classList.remove("shaking");
    }
  }, 200);
};

// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  // Animate the dice roll
  showDiceRoll(computerChoice);

  // Update the UI
  document.getElementById("user-choice").querySelector("span").textContent =
    userChoice;
  setTimeout(() => {
    document
      .getElementById("computer-choice")
      .querySelector("span").textContent = computerChoice;
    document.getElementById("winner").querySelector("span").textContent =
      determineWinner(userChoice, computerChoice);
  }, 1300); // Delay results until dice animation completes
};
