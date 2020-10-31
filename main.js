function computer_choice() {
    choice = Math.random();
    if (choice <= 0.33) {
      choice = "rock";
    } else if (choice <= 0.66) {
      choice = "paper";
    } else {
      choice = "scissors";
    }
    console.log(choice);
    return choice;
  }
  
  
  
  function DoSomething(yourchoice) {
    yourchoice = ['rock', 'paper', 'scissors'];
    robotpick = computer_choice();
  
    // compare for tie
    if (yourchoice == robotpick) {
      resultstxt = 'TIE!'
      // alert("IT'S A TIE !!! . Computer's choice - " + robotpick);
    }
    // compare yourchoice ROCK to computers choice
    else if (yourchoice == "rock" && robotpick == "paper") {
      resultstxt = 'LOSER!'
      // alert("YOU LOST. Computer's choice - " + robotpick);
    } 
    else if (yourchoice == "rock" && robotpick == "scissors") {
      resultstxt = 'WINNER!'
      // alert("YOU WON. Computer's choice - " + robotpick);
    }
    //compare yourchoice PAPER to computers choice
    else if (yourchoice == "paper" && robotpick == "rock") {
      resultstxt = 'WINNER!'
  //    alert("YOU WON vs " + robotpick);
    } 
    else if (yourchoice == "paper" && robotpick == "scissors") {
      resultstxt = 'LOSER!'
      // alert("YOU LOST. Computer's choice -  " + robotpick);
    }
    //compare yourchoice SCISSORS to computers choice
    else if (yourchoice == "scissors" && robotpick == "rock") {
      resultstxt = 'LOSER!'
      // alert("YOU LOST. Computer's choice - " + robotpick);
    } 
    else if (yourchoice == "scissors" && robotpick == "paper") {
      resultstxt = 'WINNER!'
        // alert("YOU WON. Computer's choice - " + robotpick);
    }
  return robotpick;
  }