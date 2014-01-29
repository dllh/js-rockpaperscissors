// Rock Paper Scissors

// Initialize variables
var userChoice = null;
var compChoice = null;

// Returns rock, paper, or scissors randomly
function getCompChoice () {
	var randomInt = Math.floor(Math.random() * 3);
	if (randomInt == 0) {
		return "rock";
	} else if (randomInt == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

// Set compChoice
var compChoice = getCompChoice();

// Set userChoice
var userChoice = prompt("Choose rock, paper, or scissors:");

// If user wins
function youWin () {
	alert("You win!");
	return true;
}

// If user loses
function youLose () {
	alert("You lose!");
	return true;
}

if ( userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" ) {
	if (userChoice == compChoice) {
		youWin();
	}
	else if (userChoice == "rock") {
		if (compChoice == "paper") {
			youLose();
		} else {
			youWin();
		}
	} else if (userChoice == "paper") {
		if (compChoice == "rock") {
			youWin();
		} else {
			youLose();
		}
	} else { // user chose scissors
		if (compChoice == "rock") {
			youLose();
		} else {
			youWin();
		}
	}
} else {
	alert("Choose either rock, paper, or scissors.");
	return false;
}
