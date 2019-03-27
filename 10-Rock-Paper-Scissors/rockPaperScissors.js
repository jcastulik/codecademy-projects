const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput ==="bomb") {
    return userInput;
  } else {
    console.log("Error!");
  }
}

const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === "bomb") {
    return "you are unbeatable winner"
  };
  if (userChoice === computerChoice){
    return "That is a tie!";
  };
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
   	return "Computer won";
  } else {
    return "User won";
  }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
   	return "Computer won";
  } else {
    return "User won";
  }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
   	return "Computer won";
  } else {
    return "User won";
  }
  }
}

const playGame = () => {
  console.log(`player chose ${getUserChoice('scissors')}`);
  console.log(`computer chose ${getComputerChoice()}`);
  console.log(determineWinner(getUserChoice("scissors"),getComputerChoice()));
}
playGame();
