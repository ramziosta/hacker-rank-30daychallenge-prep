const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if( userInput === "rock" || 
      userInput === "paper" || 
      userInput === "scissors" ) {
    return userInput;
  }else console.log("wrong input dingbag!");
};

const getComputerChoice = () => {
 const odds = Math.floor(Math.random() * 3);
  var choice = ["rock", "paper", "scissors"]
  return choice[odds];

};



const determainWinner = (userChoice, computerChoice) => {
      if( userChoice === computerChoice) {
        return "Draw, Try again DingBag!";
      }

     if ( userChoice === "rock"){
        if( computerChoice === "paper"){
          return "You Lose!"
        }else{ return "You win!"}
      } 

     if ( userChoice === "paper"){
        if( computerChoice === "scissors"){
          return "You Lose!"
        }else{ return "You win!"}
      }

    if ( userChoice === "scissors"){
        if( computerChoice === "rock"){
          return "You Lose!"
        }else{ return "You win!"}
      }
} 


const playGame = () => {
const userChoice = getUserChoice("paper");
const computerChoice = getComputerChoice();
console.log(determainWinner(userChoice, computerChoice));
}

playGame();

