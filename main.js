let userScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('score-1');
// playerScoreDisplay.textContent = userScore;
const computerScoreDisplay = document.getElementById('score-2');
// computerScoreDisplay.innerHTML = computerScore;

const resultsTag = document.getElementById('results');
const userChoiceTag = document.getElementById('user-choice');
const computerChoiceTag = document.getElementById('computer-choice');

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
  console.log('The player chose rock');
  getplayerChoice('rock');
});
const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
  console.log('The player chose paper');
  getplayerChoice('paper');
});
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
  console.log('The player chose scissors.');
  getplayerChoice('scissors');
});

function getComputerChoice() {
  const makeChoice = Math.floor(Math.random() * 3);
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choice = computerChoices[makeChoice];

  console.log('The computer chose ', choice);
  return choice;
}

function win(playerChoice, computerChoice) {
  resultsTag.textContent = 'You WON!';
  userChoiceTag.textContent = 'User Choice: ' + playerChoice;
  computerChoiceTag.textContent = 'Computer Choice: ' + computerChoice;
  userScore++;
  playerScoreDisplay.textContent = userScore;
}

function lost(playerChoice, computerChoice) {
  computerScore++;
  resultsTag.textContent = 'You LOST!';
  userChoiceTag.textContent = 'User Choice: ' + playerChoice;
  computerChoiceTag.textContent = 'Computer Choice: ' + computerChoice;
  computerScoreDisplay.textContent = computerScore;
}

function tie(playerChoice, computerChoice) {
  resultsTag.textContent = "It's a TIE";
  userChoiceTag.textContent = 'User Choice: ' + playerChoice;
  computerChoiceTag.textContent = 'Computer Choice: ' + computerChoice;
}

function getplayerChoice(playerChoice) {
  const computerChoice = getComputerChoice();

  switch (playerChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      tie(playerChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      lost(playerChoice, computerChoice);
      break;
  }
}

const startNewGame = document.getElementById('toggle-btn');
startNewGame.addEventListener('click', function () {
  userChoiceTag.textContent = '';
  computerChoiceTag.textContent = '';
  resultsTag.textContent = '';
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
});
