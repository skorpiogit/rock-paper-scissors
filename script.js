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
