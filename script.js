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
        return `ERR: The computer failed to make a selection. Needed 0, 1 or 2. Got: ${random}`;
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
        return `ERR: Unable to evaluate pair. Check for error in user input: ${playerArg}`
    }
}
  
function game(){
    let playerTally = 0;
    let computerTally = 0;
  
    for (let i = 0; i < 5; i++){
      // Fetch player and computer selections
      let playerSelection = prompt('Scissors, paper or rock?');
      let computerSelection = computerPlay();
  
      // Run match with selections, log result and add to tally
      let result = playRound(playerSelection, computerSelection);
  
      if (result.indexOf('win') > -1) playerTally++;
      if (result.indexOf('lose') > -1) computerTally++;
      if (!playerSelection) playerTally = -1;
      console.log(result);
    }
  
    // Evaluate winner overall and print result
    if (playerTally === -1) return console.log(`\nERR: No result returned, user provided incorrect input/s.`)
    if (!playerTally && !computerTally || playerTally === computerTally){
       return console.log(`\nDraw overall!`);
    };
    return (playerTally > computerTally) ? 
      console.log(`\nPlayer wins ${playerTally} to ${computerTally}!`) : 
      console.log(`\nComputer wins ${computerTally} to ${playerTally}...`);
  } game();