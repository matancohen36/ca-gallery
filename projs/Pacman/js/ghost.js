'use strict'
const GHOST = '<img class="ghosts" src="img/ghost.png">';

var gGhosts = []
var gIntervalGhosts;
function getsRandGhostImg() {
    var ghostsImg = ['<img class="ghosts" src="img/ghost.png">', '<img class="ghosts" src="img/ghost2.png">', '<img class="ghosts" src="img/ghost3.png">', '<img class="ghosts" src="img/ghost4.png">']
    var randIdx = getRandomIntInclusive(0, 3);
    return ghostsImg[randIdx];
}
function createGhost(board) {
    var ghost = {
        location: {
            i: 3,
            j: 3,
        }, isEaten: false,

        currCellContent: FOOD,
        img: getsRandGhostImg()
    }

    gGhosts.push(ghost)
    board[ghost.location.i][ghost.location.j] = getsRandGhostImg();

}

function createGhosts(board, size = 3) {
    gGhosts = [];
    for (var i = 0; i < size; i++) {
        createGhost(board)
    }
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function moveGhosts() {
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];
        moveGhost(ghost, i)
    }
}
function moveGhost(ghost, i) {
    var moveDiff = getMoveDiff();
    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j
    }
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    if (nextCell === WALL) return;
    if (nextCell === GHOST) return;
    if (nextCell === PACMAN) {
        if (!gPacman.isSuper) gameOver();
        ghost.isEaten = true;
        gGhostEaten.push(gGhosts.splice(i, 1)[0])
        ghost.currCellContent = gBoard[ghost.location.i][ghost.location.j]
        gBoard[ghost.location.i][ghost.location.j] = EMPTY;
    }

    // model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
    // dom
    renderCell(ghost.location, ghost.currCellContent)

    // model
    ghost.location = nextLocation;
    ghost.currCellContent = gBoard[ghost.location.i][ghost.location.j]
    gBoard[ghost.location.i][ghost.location.j] = GHOST;
    // dom
    renderCell(ghost.location, getGhostHTML(ghost))
}

function getMoveDiff() {
    var randNum = getRandomIntInclusive(0, 100);
    if (randNum < 25) {
        return { i: 0, j: 1 }
    } else if (randNum < 50) {
        return { i: -1, j: 0 }
    } else if (randNum < 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}


function getGhostHTML(ghost) {
    return `<span>${ghost.img}</span>`
}