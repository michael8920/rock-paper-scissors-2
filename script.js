const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const scoreH1 = document.getElementById('score');
const roundScoreH3 = document.getElementById('roundscore');
const gameScoreH1 = document.getElementById('gamescore');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');
const newGame = document.getElementById('newgamediv');
const btnNewGame = document.createElement('button');

btnNewGame.setAttribute('id', 'newGameBtn');
btnNewGame.textContent = 'NEW GAME';

btnRock.addEventListener('click', () => {endGame(score(playRound('ROCK', computerPlay())))});
btnPaper.addEventListener('click', () => {endGame(score(playRound('PAPER', computerPlay())))});
btnScissors.addEventListener('click', () => {endGame(score(playRound('SCISSORS', computerPlay())))});
btnNewGame.addEventListener('click', ()=> {document.location.reload(false)});

let computerScore = 0;
let playerScore = 0;
            
function computerPlay() { 
    let randomSelection = Math.floor(Math.random() * 3);
        switch (randomSelection) {
            case 0:
            computerSelection = 'rock';
            break;
            case 1:
            computerSelection = 'paper';
            break;
            case 2:
            computerSelection = 'scissors';
            break;
            default:
            computerSelection = 'not valid';
        }
    return computerSelection;
}
  

    
            
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
                
    if ( playerSelection === 'ROCK' && computerSelection === 'rock') {
            roundScoreH3.textContent = 'Draw!'
            playerChoice.textContent = 'You chose rock'
            computerChoice.textContent = 'Computer chose rock'
        } else if ( playerSelection === 'ROCK' && computerSelection === 'paper') {
            roundScoreH3.textContent = 'You lose! Paper beats Rock!'
            playerChoice.textContent = 'You chose rock'
            computerChoice.textContent = 'Computer chose paper'
            return 'You lose! Paper beats Rock!'
        } else if ( playerSelection === 'ROCK' && computerSelection === 'scissors') {
            roundScoreH3.textContent = 'You win! Rock beats Scissors!'
            playerChoice.textContent = 'You chose rock'
            computerChoice.textContent = 'Computer chose scissors'
            return 'You win! Rock beats Scissors' 
        } else if ( playerSelection === 'PAPER' && computerSelection === 'rock') {
            roundScoreH3.textContent = 'You win! Paper beats Rock!'
            playerChoice.textContent = 'You chose paper'
            computerChoice.textContent = 'Computer chose rock'
            return 'You win! Paper beats Rock!'
        } else if ( playerSelection === 'PAPER' && computerSelection === 'paper') {
            roundScoreH3.textContent = 'Draw!'
            playerChoice.textContent = 'You chose paper'
            computerChoice.textContent = 'Computer chose paper'
        } else if ( playerSelection === 'PAPER' && computerSelection === 'scissors') {
            roundScoreH3.textContent = 'You lose! Scissors beat Paper!'
            playerChoice.textContent = 'You chose paper'
            computerChoice.textContent = 'Computer chose scissors'
            return 'You Lose! Scissors beat Paper!'
        } else if ( playerSelection === 'SCISSORS' && computerSelection === 'rock') {
            roundScoreH3.textContent = 'You lose! Rock beats Scissors!'
            playerChoice.textContent = 'You chose scissors'
            computerChoice.textContent = 'Computer chose rock'
            return 'You lose! Rock beats Scissors!'
        } else if ( playerSelection === 'SCISSORS' && computerSelection === 'paper') {
            roundScoreH3.textContent = 'You win! Scissors beat Paper!'
            playerChoice.textContent = 'You chose scissors'
            computerChoice.textContent = 'Computer chose paper'
            return 'You win! Scissors beat Paper!'
        } else if ( playerSelection === 'SCISSORS' && computerSelection === 'scissors') {
            roundScoreH3.textContent = 'Draw!'
            playerChoice.textContent = 'You chose scissors'
            computerChoice.textContent = 'Computer chose scissors'
        } else {
            console.log('Something went terribly wrong!') }
                        
}
function score(winner) {
    if (winner === 'You win! Rock beats Scissors' || winner === 'You win! Paper beats Rock!' || winner === 'You win! Scissors beat Paper!') {
            playerScore++;
            scoreH1.textContent = playerScore + ' : ' + computerScore;
        } else if (winner === 'You lose! Paper beats Rock!' || winner === 'You Lose! Scissors beat Paper!' || winner ==='You lose! Rock beats Scissors!') {
            computerScore++;
            scoreH1.textContent = playerScore + ' : ' + computerScore;
        } else {
            scoreH1.textContent = playerScore + ' : ' + computerScore;
        }
}
    
function endGame() {
    if (playerScore === 5) {
        gameScoreH1.textContent = 'YOU WON!'
        newGame.appendChild(btnNewGame);
    } else if (computerScore === 5) {
        gameScoreH1.textContent = 'YOU LOST!'
        newGame.appendChild(btnNewGame);
    }
}