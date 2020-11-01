function computer_choice() {
  choice = Math.random();
  if (choice <= 0.33) {
    choice = "Rock";
  } else if (choice <= 0.66) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  console.log(choice);
  return choice;
}

const playerScore = document.getElementById("score-1");
const computerScore = document.getElementById("score-2");

function DoSomething(yourchoice) {
  robotpick = computer_choice();

  const resultsTag = document.getElementById("results");
  const userChoiceTag = document.getElementById("user-choice");
  const computerChoiceTag = document.getElementById("computer-choice");

  // compare for tie
  if (yourchoice == robotpick) {
    resultsTag.textContent = "It's a TIE";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
  }
  // compare yourchoice ROCK to computers choice
  else if (yourchoice == "Rock" && robotpick == "Paper") {
    resultsTag.textContent = "You LOST!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  } else if (yourchoice == "Rock" && robotpick == "Scissors") {
    resultsTag.textContent = "You WON!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  }
  //compare yourchoice Paper to computers choice
  else if (yourchoice == "Paper" && robotpick == "Rock") {
    resultsTag.textContent = "You WON!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  } else if (yourchoice == "Paper" && robotpick == "Scissors") {
    resultsTag.textContent = "You LOST!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  }
  //compare yourchoice Scissors to computers choice
  else if (yourchoice == "Scissors" && robotpick == "Rock") {
    resultsTag.textContent = "You LOST!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  } else if (yourchoice == "Scissors" && robotpick == "Paper") {
    resultsTag.textContent = "You WON!";
    userChoiceTag.textContent = "User Choice: " + yourchoice;
    computerChoiceTag.textContent = "Computer Choice: " + robotpick;
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  }
  return robotpick;
}

document.getElementById("toggle-btn").addEventListener("click", function () {
  document.getElementById("user-choice").innerHTML = "";
  document.getElementById("computer-choice").innerHTML = "";
  document.getElementById("results").innerHTML = "";
  playerScore.innerText = 0;
  computerScore.innerText = 0;
});
