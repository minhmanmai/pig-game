/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Keep score', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score0, score1, current0, current1, currentScore,
    activePlayer, dice,
    btnStart, btnNew, btnRoll, btnKeep,
    winnerMsg;
const END_SCORE = 100;

score0 = document.querySelector('#score-0');
score1 = document.querySelector('#score-1');
current0 = document.querySelector('#current-0');
current1 = document.querySelector('#current-1');
dice = document.querySelector('.dice');
btnStart = document.querySelector('.btn-start');
btnNew = document.querySelector('.btn-new');
btnRoll = document.querySelector('.btn-roll');
btnKeep = document.querySelector('.btn-keep');
currentScore = 0;
activePlayer = 0;
winnerMsg = document.querySelector('.winner-message');

initGame();

btnStart.addEventListener('click', function () {
    hide(btnStart);
    show(btnNew, btnRoll, btnKeep, dice);
})

btnNew.addEventListener('click', function () {
    initGame();
})

btnRoll.addEventListener('click', function () {
    diceValue = Math.floor(Math.random() * 6 + 1);
    dice.src = 'dice-' + diceValue + '.png';
    if (diceValue != 1) {
        currentScore += diceValue;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
    } else {
        currentScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }

})

btnKeep.addEventListener('click', function () {
    totalScore = parseInt(document.querySelector('#score-' + activePlayer).textContent) + currentScore;
    document.querySelector('#score-' + activePlayer).textContent = parseInt(totalScore);
    document.querySelector('#current-' + activePlayer).textContent = 0;
    if (document.querySelector('#score-' + activePlayer).textContent >= 100) {
        hide(btnRoll, btnKeep, dice);
        winnerMsg.textContent = "Player " + (activePlayer + 1) + " is the winner!"
        show(winnerMsg);
    }else {
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
})

function resetScore(...args) {
    for (i = 0; i < args.length; i++) {
        args[i].textContent = 0;
    }
}

function show(...args) {
    for (i = 0; i < args.length; i++) {
        args[i].style.display = 'unset';
    }
}

function hide(...args) {
    for (i = 0; i < args.length; i++) {
        args[i].style.display = 'none';
    }
}

function initGame() {
    resetScore(score0, score1, current0, current1);
    hide(btnNew, btnRoll, btnKeep, dice, winnerMsg);
    show(btnStart);
}