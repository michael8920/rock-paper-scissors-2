const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const scoreH1 = document.getElementById('score');
const roundScoreH3 = document.getElementById('roundscore');

btnRock.addEventListener('click', () => {endGame(score(playRound('ROCK', computerPlay())))});
btnPaper.addEventListener('click', () => {endGame(score(playRound('PAPER', computerPlay())))});
btnScissors.addEventListener('click', () => {endGame(score(playRound('SCISSORS', computerPlay())))});


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
            console.log('Draw!')
            roundScoreH3.textContent = 'Draw!'
            } else if ( playerSelection === 'ROCK' && computerSelection === 'paper') {
                console.log('You lose! Paper beats Rock!')
                roundScoreH3.textContent = 'You lose! Paper beats Rock!'
                return 'You lose! Paper beats Rock!'
            } else if ( playerSelection === 'ROCK' && computerSelection === 'scissors') {
                console.log('You win! Rock beats Scissors')
                roundScoreH3.textContent = 'You win! Rock beats Scissors!'
                return 'You win! Rock beats Scissors' 
            } else if ( playerSelection === 'PAPER' && computerSelection === 'rock') {
                console.log('You win! Paper beats Rock!')
                roundScoreH3.textContent = 'You win! Paper beats Rock!'
                return 'You win! Paper beats Rock!'
            } else if ( playerSelection === 'PAPER' && computerSelection === 'paper') {
                console.log('Draw!')
                roundScoreH3.textContent = 'Draw!'
            } else if ( playerSelection === 'PAPER' && computerSelection === 'scissors') {
                console.log('You Lose! Scissors beat Paper!')
                roundScoreH3.textContent = 'You lose! Scissors beat Paper!'
                return 'You Lose! Scissors beat Paper!'
            } else if ( playerSelection === 'SCISSORS' && computerSelection === 'rock') {
                console.log('You lose! Rock beats Scissors!')
                roundScoreH3.textContent = 'You lose! Rock beats Scissors!'
                return 'You lose! Rock beats Scissors!'
            } else if ( playerSelection === 'SCISSORS' && computerSelection === 'paper') {
                console.log('You win! Scissors beat Paper!')
                roundScoreH3.textContent = 'You win! Scissors beat Paper!'
                return 'You win! Scissors beat Paper!'
            } else if ( playerSelection === 'SCISSORS' && computerSelection === 'scissors') {
                console.log('Draw!')
                roundScoreH3.textContent = 'Draw!'
            } else {
                console.log('Please input again.') }
                        
    }
    function score(winner) {
        if (winner === 'You win! Rock beats Scissors' || winner === 'You win! Paper beats Rock!' || winner === 'You win! Scissors beat Paper!') {
            playerScore++;
            scoreH1.textContent = playerScore + ' : ' + computerScore;
            return console.log('Player score is: ' + playerScore + ' versus Computer score: ' + computerScore);
            }else if (winner === 'You lose! Paper beats Rock!' || winner === 'You Lose! Scissors beat Paper!' || winner ==='You lose! Rock beats Scissors!') {
            computerScore++;
            scoreH1.textContent = playerScore + ' : ' + computerScore;
            return console.log('Player score is: ' + playerScore + ' versus Computer score: ' + computerScore);
            }else {
            scoreH1.textContent = playerScore + ' : ' + computerScore;
            return console.log('Player score is: ' + playerScore + ' versus Computer score: ' + computerScore);
            }
    }
    
    function endGame() {
        if (playerScore === 5) {
            alert('You won! :)')
            document.location.reload(false)
        } else if (computerScore === 5) {
            alert('You lost!')
            document.location.reload(false)
        }
    }