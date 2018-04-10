var generateCPUChoice = function(){
  var cpuChoice = Math.random()
  if (cpuChoice <= 0.33){
    return "rock";
  } else if (cpuChoice > 0.33 && cpuChoice <=0.66){
    return "paper";
  } else {
    return "scissors";
  }
}


var findWinner = function(userChoice, cpuChoice) {
   
  var output = ""
  if(userChoice === "rock"){
    if (cpuChoice === "paper"){
      output = makeResultMessage(0, userChoice, cpuChoice)
    } else if(cpuChoice === "scissors"){
      output = makeResultMessage(1, userChoice, cpuChoice);
    }

  }
  else if(userChoice === "paper"){
    if(cpuChoice === "rock"){
      output = makeResultMessage(1, userChoice, cpuChoice);
    } else if(cpuChoice === "scissors"){
      output = makeResultMessage(0, userChoice, cpuChoice);
    }

  }
  else if(userChoice === "scissors"){
    if(cpuChoice === "rock"){
      output = makeResultMessage(0, userChoice, cpuChoice);
    } else if(cpuChoice === "paper"){
      output = makeResultMessage(1, userChoice, cpuChoice);
    }
  }
  if(userChoice === cpuChoice){
    output = makeResultMessage(2, userChoice, cpuChoice);
  }

  alert(output);
} 



var makeResultMessage = function(msgIndex, userPick, cpuPick){
  var msgOptions = ['You lose!', 'You Win!', 'Tie!'];
  var userOptions = ["rock", "paper", "scissors"];
    return "You picked " + userPick + ". Your opponent picked " + cpuPick + ". " + msgOptions[msgIndex]
}


var RPS = function(){
  var userChoice = prompt("Rock, paper, or scissors?");
  var cpuChoice = generateCPUChoice();

  findWinner(userChoice, cpuChoice);

}

RPS();


/*
- [ ] (easy) - Prevent invalid user choices from being made
- [ ] (easy) - Improve win/loss messaging, i.e. "You chose x. Computer chose y. You win/lose"
- [ ] (medium/hard) Allow more rounds 
- [ ] "Best 3 of 5"
- [ ] (depends on ^) Keep score of wins and losses
- [ ] (med/hard) allow ties to be broken
*/