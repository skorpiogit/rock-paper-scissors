function getComputerChoice() {
  let sentinel = Math.random();
  if ( (0 < sentinel) && (sentinel < 1.0/3.0) ) {
    return "rock";
  } 
  else if ( (1.0/3.0 <= sentinel) && (sentinel < 2.0/3.0)  ) {
    return "paper";
  }
  else return "scissors";
}

function getHumanChoice() {
  let selection = prompt("1 for rock\n2 for paper\n3 for scissors");
  let humanChoice
  switch(selection) {
    case "1": 
      humanChoice = "rock";
      break;
    case "2": 
      humanChoice = "paper"; 
      break;
    case "3": 
      humanChoice = "scissors"; 
      break;
  }
  return (selection, humanChoice);
}

function playGame(number_rounds) {

  let humanScore = 0;
  let computerScore = 0;
  let gameWinner;
  const winnerTable = new Map();
  winnerTable.set("rock|rock", ["Tie", "It's a tie!"]);
  winnerTable.set("rock|paper",["computer", "You lose! Paper fully covers rock."]);
  winnerTable.set("rock|scissors", ["human", "You win! Rock crushes scissors."]);
  winnerTable.set("paper|rock", ["human", "You win! Paper fully covers rock."]);
  winnerTable.set("paper|paper", ["Tie", "It's a tie!"]);
  winnerTable.set("paper|scissors", ["computer", "You lose! Scissors evisarates paper."]);
  winnerTable.set("scissors|rock", ["computer", "You lose! Rock crushes scissors."]);
  winnerTable.set("scissors|paper", ["human", "You win! Scissors evisarates paper."]);
  winnerTable.set("scissors|scissors", ["Tie", "It's a tie!"]);

  function playRound(humanChoice, computerChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();
    let hand = `${hChoice}|${cChoice}`
    let roundWinner;
    let message;
  
    let roundResult = winnerTable.get(hand);
    roundWinner = roundResult[0];
    message = roundResult[1];
  
    switch(roundWinner) {
      case "human":
        humanScore +=1;
        console.log(message);
        break;
      case "computer":
        computerScore +=1;
        console.log(message);
        break;
      case "Tie":
        console.log(message);
        break;
    }

    console.log(`\n\nScore\nhuman ${humanScore} <==> computer ${computerScore}`);
  }

  for (var i = 0; i < number_rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    gameWinner = "human player";
  } else if (computerScore > humanScore) {
    gameWinner = "computer player";
  } else gameWinner = "Tie";

  console.log("====================================================");
  
  console.log(`                  WINNER: ${gameWinner}`)

  console.log("====================================================");
}

playGame(number_rounds=9);
