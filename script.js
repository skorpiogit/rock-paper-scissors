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
