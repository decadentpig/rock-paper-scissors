function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    switch (random){
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
      default:
        return `ERR: The computer failed to make a selection. \nNeeded 0, 1 or 2. Got: ${random}`;
    }
}
  
function playRound(playerArg, computerArg){
    // Uniform case, unless null
    if (playerArg) playerArg = playerArg.toUpperCase()[0] + playerArg.toLowerCase().slice(1);
  
    // Find the outcome
    let contest = playerArg + computerArg;
    switch (contest){
      // Player wins
      case 'RockScissors':
      case 'ScissorsPaper':
      case 'PaperRock':
        return `You win! ${playerArg} beats ${computerArg}`
  
      // Computer wins
      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
        return `You lose! ${computerArg} beats ${playerArg}`
  
      // Draw
      case 'RockRock':
      case 'ScissorsScissors':
      case 'PaperPaper':
        return `Draw! Both used ${playerArg}`
  
      default:
        return `ERR: Unable to evaluate pair. \nCheck for error in user input: ${playerArg}`
    }
}

function game(){
      // Fetch player and computer selections
      let playerSelection = document.getElementById('playerInput').value;
      let computerSelection = computerPlay();
  
      // Run match with selections, print result
      let result = playRound(playerSelection, computerSelection);
      document.querySelector('p').innerText = `${result}`;
      
      //Update tally
      if (result.indexOf('win') > -1) document.getElementById('playerTally').innerHTML++;
      if (result.indexOf('lose') > -1) document.getElementById('computerTally').innerHTML++;
};