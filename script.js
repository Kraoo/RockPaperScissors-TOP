let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        tieScore++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win! Play again?";
        playerScore++;
    } else {
        result = "Computer wins! Play again?";
        cpuScore++;
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    updateScore();

    if (playerScore === 5 || cpuScore === 5) {
        let winner;
        if (playerScore > cpuScore) {
            winner = "You";
        } else {
            winner = "Computer";
        }
        document.getElementById('popup').style.display = 'block';
        document.getElementById('gameResult').innerText = `${winner} won the game!`;
    }
}

function updateScore() {
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('cpuScore').innerText = cpuScore;
    document.getElementById('tieScore').innerText = tieScore;
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    tieScore = 0;
    document.getElementById('result').innerText = '';
    updateScore();
    document.getElementById('popup').style.display = 'none';
}
