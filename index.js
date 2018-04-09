var userChoice = prompt("Rock, paper, or scissors?");
var cpuChoice = Math.random()
var oppChoice = "Opponent chose "

if (cpuChoice <= 0.33){
  cpuChoice = "rock";
} else if (cpuChoice > 0.33 && cpuChoice <=0.66){
  cpuChoice = "paper";
} else{
  cpuChoice = "scissors";
}

var loseString = cpuChoice + " You lose!"
var winString = cpuChoice + " You Win!"

var matchUps = function(){
  var output = ""
   if(userChoice === "rock"){
     if (cpuChoice === "paper"){
       alert(oppChoice + loseString);
     } else if(cpuChoice === "scissors"){
       alert(oppChoice + winString);
     }

   }
   else if(userChoice === "paper"){
     if(cpuChoice === "rock"){
       alert(oppChoice + winString);
     } else if(cpuChoice === "scissors"){
       alert(oppChoice + loseString);
     }

   }
   else if(userChoice === "scissors"){
     if(cpuChoice === "rock"){
       alert(oppChoice + loseString);
     } else if(cpuChoice === "paper"){
       alert(oppChoice + winString);
     }
   }
   if(userChoice === cpuChoice){
     alert("The result is a Tie!");
   }
} 

matchUps();

/*
- [ ] (easy) - Prevent invalid user choices from being made
- [ ] (easy) - Improve win/loss messaging, i.e. "You chose x. Computer chose y. You win/lose"
- [ ] (medium/hard) Allow more rounds 
- [ ] "Best 3 of 5"
- [ ] (depends on ^) Keep score of wins and losses
- [ ] (med/hard) allow ties to be broken
*/