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
  if (!playerArg) playerArg = '?+';

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
      return `ERR: Unable to evaluate pair: ${contest}`
  }
}

function game(){
  // Fetch player and computer selections
  let playerSelection = document.getElementById('player-input').value;
  let computerSelection = computerPlay();

  // Run match with selections, print result
  let result = playRound(playerSelection, computerSelection);
  document.querySelector('p').innerHTML = `${result}`;
      
  // Update tallies
  if (result.indexOf('ERR') === -1) document.getElementById('games-tally').innerHTML++;
  if (result.indexOf('win') > -1) document.getElementById('player-tally').innerHTML++;
  if (result.indexOf('lose') > -1) document.getElementById('computer-tally').innerHTML++;

  // Update log
  let logDiv = document.querySelector('#game-log');
  let para = document.createElement('p');
  para.setAttribute('class','log-entries')
  para.textContent = `(${result})`;
  logDiv.prepend(para);
};

function resetGame(){
  // Reset tallies
  document.getElementById('games-tally').innerHTML = 0;
  document.getElementById('player-tally').innerHTML = 0;
  document.getElementById('computer-tally').innerHTML = 0;

  // Reset log, clear input field
  document.getElementById('result').innerHTML = '<i>(Results appear here.)</i>';
  document.querySelectorAll('.log-entries').forEach(logEntry => logEntry.remove());
  document.getElementById('player-input').value = '';
};

function toggleLog(){
  let log = document.getElementById('game-log');
  if (log.style.display === 'none'){
    log.style.display = 'grid';
    document.getElementById('toggle').innerHTML = '<div id="arrow-hide"></div>';
  } else {
    log.style.display = 'none';
    document.getElementById('toggle').innerHTML = '<div id="arrow-show"></div>';
  };
};