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
  let oldInput = playerArg;
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
      return `ERR: Unable to evaluate pair. \nCheck for error in user input: ${oldInput}`
  }
}

function game(){
  // Fetch player and computer selections
  let playerSelection = document.getElementById('playerInput').value;
  let computerSelection = computerPlay();

  // Run match with selections, print result
  let result = playRound(playerSelection, computerSelection);
  document.querySelector('p').innerText = `${result}`;
      
  //Update tallies
  if (result.indexOf('ERR') === -1) document.getElementById('gamesTally').innerHTML++;
  if (result.indexOf('win') > -1) document.getElementById('playerTally').innerHTML++;
  if (result.indexOf('lose') > -1) document.getElementById('computerTally').innerHTML++;

  //Update log
  let logDiv = document.querySelector('#gameLog');
  let para = document.createElement('p');
  para.setAttribute('class','logEntries')
  para.textContent = `(${result})`;
  logDiv.prepend(para);
};

function resetGame(){
  //Reset tallies
  document.getElementById('gamesTally').innerHTML = 0;
  document.getElementById('playerTally').innerHTML = 0;
  document.getElementById('computerTally').innerHTML = 0;

  //Reset log, clear input field
  document.getElementById('result').innerHTML = '<i>(Results appear here.)</i>';
  document.querySelectorAll('.logEntries').forEach(logEntry => logEntry.remove());
  document.getElementById('playerInput').value = '';
}

function toggleLog(){
  let log = document.getElementById('gameLog');
  if (log.style.display === 'none'){
    log.style.display = 'grid';
    document.getElementById('toggle').innerText = 'HIDE LOG';
  } else {
    log.style.display = 'none';
    document.getElementById('toggle').innerText = 'SHOW LOG';
  }
}