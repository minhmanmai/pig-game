/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score0, score1, current0, current1, roundScore,
    activePlayer, dice, 
    btnStart, btnNew, btnRoll, btnHold;
const END_SCORE = 100;

score0 = document.querySelector('#score-0');
score1 = document.querySelector('#score-1');
current0 = document.querySelector('#current-0');
current1 = document.querySelector('#current-1');
dice = document.querySelector('.dice');
btnStart = document.querySelector('.btn-start');
btnNew = document.querySelector('.btn-new');
btnRoll = document.querySelector('.btn-roll');
btnHold = document.querySelector('.btn-hold');
roundScore = 0;
activePlayer = 0;

initGame();

btnStart.addEventListener('click', function(){
    hide(btnStart);
    show(btnNew, btnRoll, btnHold, dice);
})

btnRoll.addEventListener('click', function () {
    diceValue = Math.floor(Math.random() * 6 + 1);
    dice.src = 'dice-' + diceValue + '.png';
    
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
    hide(btnNew, btnRoll, btnHold, dice);
    show(btnStart);
}