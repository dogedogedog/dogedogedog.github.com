// (1) h1 title always shows
// (2) sound icon: click to mute the background fighting music

const startGame = document.getElementById( 'startgame' );
const gameControl = document.getElementById( 'gamecontrol' );
const game = document.getElementById( 'game' );
const score1 = document.getElementById( 'score1' );
const score2 = document.getElementById( 'score2' );
const actionArea = document.getElementById( 'actions' );

const bgm = document.querySelector( '.bgm' );
const bgmSound = new Audio( 'media/background.mp3' );

let gameData = {
    dice: [
        'images/1die.png',
        'images/2die.png',
        'images/3die.png',
        'images/4die.png',
        'images/5die.png',
        'images/6die.png'
    ],
    players: ['FIRE PIG', 'SHINING PIG'],
    score: [0, 0],
    roll1: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 24
};

startGame.addEventListener('click', function(){
    bgmSound.play();

    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = '';
    gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById('quit').addEventListener('click', function(){
        location.reload();
    });

    bgm.addEventListener('click', function(){
        bgmSound.pause();
        bgmSound.currentTime = 0;
    });

    setUpTurn();
});

function setUpTurn() {
    game.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn.</p>`;
    actionArea.innerHTML = '<button id="roll">Fight!!</button>';
    document.getElementById('roll').addEventListener('click', function(){
        throwDice();
    });
}

function throwDice(){
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn.</p>`;
    game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">`;
    gameData.rollSum = gameData.roll1;

    if( gameData.rollSum === 1 ){
        
        game.innerHTML += `<p>Doctor Stop!!!</p>`;
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0): (gameData.index = 1);

        showCurrentScore();
        setTimeout(setUpTurn, 2000);
        
    } 
    // else if ( gameData.roll1 === 1 || gameData.roll2 === 1) {

    //     gameData.index ? (gameData.index = 0): (gameData.index = 1);
    //     game.innerHTML += `<p>A Miss Punch! Switching to ${gameData.players[gameData.index]}</p>`;
    //     setTimeout(setUpTurn, 2000);
    // } 
    else {
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id="rollagain">Punch!</button> or <button id="pass">Defense</button>';

        document.getElementById('rollagain').addEventListener('click', function(){
            setUpTurn();
        });

        document.getElementById('pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0): (gameData.index = 1);
            setUpTurn();
        });

        checkWinningCondition();
    }
}

function checkWinningCondition(){
    if (gameData.score[gameData.index] > gameData.gameEnd){
        actionArea.innerHTML = "";
        actionArea.innerHTML += `<h2>${gameData.players[gameData.index]} Wins!!</h2>`;

        showCurrentScore();
        document.getElementById('quit').innerHTML = "Start a New Game";
        
    } else {
        showCurrentScore();
    }
}

function showCurrentScore(){
    score1.innerHTML = `<p>Points: ${gameData.score[0]}</p>`;
    score2.innerHTML = `<p>Points: ${gameData.score[1]}</p>`;
}

// overlay
'use strict';

// add script here
document.querySelector(".credit").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("overlay").className = "showing";
});

document.querySelector(".close").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("overlay").className = "hidden";
});

document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        document.getElementById("overlay").className = "hidden";
    }
});

// overlay2
document.querySelector(".instruction").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("overlay2").className = "showing";
});

document.querySelector(".close2").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("overlay2").className = "hidden";
});

document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        document.getElementById("overlay2").className = "hidden";
    }
});