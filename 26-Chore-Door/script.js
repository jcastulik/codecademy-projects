// Global variables

// Doors from index.html
let door1 = document.getElementById('door1');

let door2 = document.getElementById('door2');

let door3 = document.getElementById('door3');

// Start button from index.html
let startButton = document.getElementById('start');

// Variables for pictures of closed and opened doors
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// variable for starting number of closed doors
let numClosedDoors = 3;


// OpenDoors variables
let openDoor1;

let openDoor2;

let openDoor3;

// variable for status of the game (in process or not)
let currentlyPlaying = true;


// Functions

// Function telling us that if door.src ic closedDoorPath, function returns false. We need it for onCLick functions to define
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
	} else {
  return true;
	}
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
  return true;
	} else {
  return false;
	}
};

// Function serves two purposes. First decrease the number of doors and determine results of the game.
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('loose');
  }
};

// We randomly asigh src to openDoors variables
const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
	if (choreDoor === 0) {
 	  openDoor1 = botDoorPath;
  	openDoor2 = beachDoorPath;
  	openDoor3 = spaceDoorPath;
	} else if (choreDoor === 1) {
 		openDoor2 = botDoorPath;
  	openDoor1 = beachDoorPath;
  	openDoor3 = spaceDoorPath;
	} else if (choreDoor === 2) {
  	openDoor3 = botDoorPath;
  	openDoor1 = beachDoorPath;
  	openDoor2 = spaceDoorPath;
	} else if (choreDoor === 3) {
 	  openDoor1 = botDoorPath;
  	openDoor3 = beachDoorPath;
  	openDoor2 = spaceDoorPath;
	} else if (choreDoor === 4) {
 		openDoor2 = botDoorPath;
  	openDoor3 = beachDoorPath;
  	openDoor1 = spaceDoorPath;
	} else {
  	openDoor3 = botDoorPath;
  	openDoor2 = beachDoorPath;
  	openDoor1 = spaceDoorPath;
  }
}

// Function which defines what should happend afte click on door. Function has condition that contains function isClicked. In condition we asign to openDoor right image and we iniciate function playDoor for door. This condition is true when function isClicked with doorImage in not true.
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
    door1.src = openDoor1;
    playDoor(door1);
	}
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
    door2.src = openDoor2;
    playDoor(door2);
	}
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)) {
    door3.src = openDoor3;
    playDoor(door3);
	}
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
}

// Initiate State for game
const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

// Function defining what happens after game is over
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

// Calling function

startRound();
