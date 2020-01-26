const rockButton = document.querySelector('#rockIcon');
const paperButton = document.querySelector('#paperIcon');
const scissorsButton = document.querySelector('#scissorsIcon');
const latestOutcome = document.querySelector('#latestOutcome');
const playerScore = document.querySelector('#playerWinCounter');
const computerScore = document.querySelector('#computerWinCounter');

let userWin = 0;
let computerWin = 0;

rockButton.addEventListener('click', (e) => {playGame('rock')});
paperButton.addEventListener('click', (e) => {playGame('paper')});
scissorsButton.addEventListener('click', (e) => {playGame('scissors')});


function computerPlay() {
    const possibleMoves = {0: 'rock', 1: 'paper', 2: 'scissors'}
    const move = Math.floor(Math.random() * 3);
    return possibleMoves[move];
};

function playGame(userChoice) {

    const computerMove = computerPlay();
    
    if (userChoice === computerMove) {
        latestOutcome.textContent =`Draw! You both selected ${computerMove}`;
    } else if (userChoice === 'rock' && computerMove === 'paper') {
        latestOutcome.textContent ='Drats! Paper covers rock!';
        computerWin += 1;
        computerScore.textContent = `Computer wins: ${computerWin}`
    } else if (userChoice === 'rock' && computerMove === 'scissors') {
        latestOutcome.textContent = 'BOOM! Rock crushes scissors!';
        userWin += 1;
        playerScore.textContent = `Your wins: ${userWin}`;
    } else if (userChoice === 'paper' && computerMove === 'rock') {
        latestOutcome.textContent = 'Bing bang boom! Paper covers rock!';
        userWin += 1;
        playerScore.textContent = `Your wins: ${userWin}`;
    } else if (userChoice === 'paper' && computerMove === 'scissors') {
        latestOutcome.textContent = 'Ah Snip snip! Scissors cuts paper!';
        computerWin += 1;
        computerScore.textContent = `Computer wins: ${computerWin}`;
    } else if (userChoice === 'scissors' && computerMove === 'rock') {
        latestOutcome.textContent = 'Oh no! Rock crushes scissors!';
        computerWin += 1;
        computerScore.textContent = `Computer wins: ${computerWin}`;
    } else if (userChoice === 'scissors' && computerMove === 'paper') {
        latestOutcome.textContent = 'Thats one for you! Scissors cuts paper!';
        userWin += 1;
        playerScore.textContent = `Your wins: ${userWin}`;
    }

    if (userWin === 5) {
        window.alert('Congratulations, You have won! Play again?')
        userWin = 0;
        computerWin = 0;
        playerScore.textContent = `Your wins: ${userWin}`;
        computerScore.textContent = `Computer wins: ${computerWin}`;
        latestOutcome.textContent = '';
    } else if (computerWin === 5) {
        window.alert('Better luck next time, You have lost! Play again?')
        computerWin = 0;
        userWin = 0;
        playerScore.textContent = `Your wins: ${userWin}`;
        computerScore.textContent = `Computer wins: ${computerWin}`;
        latestOutcome.textContent = '';
    }
    return null
}