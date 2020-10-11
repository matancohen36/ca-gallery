'use strict'
const WALL = '<img src="img/wall.png">'
const FOOD = '<img class="food" src="img/food.png">';
const EMPTY = '';
const CHERRY = '<img class="cherry" src="img/cherry.png">';
const SUPER_FOOD = '<img class="super-food" src="img/superfood.png">';
var gGenFood;
var gCount;
var gBoard;
var gGhostEaten;
var gCherryInterval;
var gGame = {
    score: 0,
    isOn: false
}
function init() {
    gGenFood = 0;
    gCount = 0;
    gGhostEaten = [];
    closeGameOverModal();
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard, 3);
    printMat(gBoard, '.board-container')
    // gCherryInterval = setInterval(placesCherry, 3000);
    gCherryInterval = setInterval( placesCherry, 15000);
    gGame.isOn = true
    gGame.score = 0;
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            gGenFood++;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
                gGenFood--;
            }
            if (i === 1 && j === 1 ||
                i === 1 && j === 8 ||
                i === 8 && j === 1 ||
                i === 8 && j === 8) {
                board[i][j] = SUPER_FOOD;
            }

        }
    }
    return board;
}

function placesCherry() {
    var emptyPoses = getsEmptyPos(gBoard);
    // console.log('emptyPoses:', emptyPoses)
    var randCherryIdx = getRandomIntInclusive(0, emptyPoses.length - 1);
    // console.log('randCherryIdx:', randCherryIdx)
    var loc = emptyPoses[randCherryIdx];
    gBoard[loc.i][loc.j] = CHERRY;
    renderCell(loc, CHERRY);
}


function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score
}

function gameOver() {
    gGame.isOn = false;
    clearInterval(gIntervalGhosts)
    clearInterval(gCherryInterval)
    gBoard = [];
    openGameOverModal();
}
function isVictory() {
    if ((gCount - 1) === gGenFood && gGenFood > 0) {
        gGame.isOn = false
        openVictoryModal();
    }
}


function openGameOverModal() {
    var elModal = document.querySelector('.restart-container ');
    elModal.style.display = 'block';
}

function closeGameOverModal() {
    var modal = document.querySelector('.restart-container ')
    modal.style.display = 'none';
}

function openVictoryModal() {
    var elModal = document.querySelector('.victory-container ');
    elModal.style.display = 'block';
}
function getsEmptyPos(board) {
    var emptyCells = [];
    for (var i = 1; i < board.length - 1; i++) {
        for (var j = 1; j < board[i].length - 1; j++) {
            var coord = {
                i: i,
                j: j
            }
            if (board[coord.i][coord.j] === EMPTY) {
                emptyCells.push(coord);
            }
        }
    }
    // if (!emptyCells.length) return ;
    return emptyCells;
}