'use strict'
const PACMAN = '<img src="img/pacman.png">';

var gPacman;
function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}
function getsEatenGhostIdx(location) {
    for (var i = 0; i < gGhosts.length; i++) {
        var currGhost = gGhosts[i];
        if (location.i === currGhost.location.i && location.j === currGhost.location.j) return i;
    }
}
function movePacman(ev) {
    isVictory();
    if (!gGame.isOn) return;
    // console.log('ev', ev);
    var nextLocation = getNextLocation(ev)


    if (!nextLocation) return;
    // console.log('nextLocation', nextLocation);

    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('NEXT CELL', nextCell);

    if (nextCell === WALL) return;
    if (nextCell === SUPER_FOOD) {
        superFoodEat();
    }
    if (nextCell === FOOD) {
        gCount++;
        updateScore(1);

    }
    if (nextCell === CHERRY) {
        updateScore(10);

    }
    else if (nextCell === GHOST) {
        if (!gPacman.isSuper) {
            gameOver();
            renderCell(gPacman.location, EMPTY)
        }
        var currIdx = getsEatenGhostIdx(nextLocation)
        gGhosts[currIdx].isEaten = true;
        gGhostEaten.push(gGhosts.splice(currIdx, 1)[0]);

    }

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

    // update the dom
    renderCell(gPacman.location, EMPTY);
    gPacman.location = nextLocation;

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
    // update the dom
    renderCell(gPacman.location, PACMAN);

}

function superFoodEat() {
    gCount++;
    gPacman.isSuper = true;
    for (var i = 0; i < gGhosts.length; i++) {
        gGhosts[i].img = '<img class="ghosts" src="img/weakghost.png">';
        renderCell(gGhosts[i].location , getGhostHTML(gGhosts[i]))
    }
    setTimeout(ghostGetsNormal, 5000)
}

function ghostGetsNormal() {
    gPacman.isSuper = false;
    for (var j = 0; j < gGhostEaten.length; j++) {
        // gGhostEaten[j].img = getsRandGhostImg();
        gGhosts.push(gGhostEaten.pop());
    }
    for (var i = 0; i < gGhosts.length; i++) {
        gGhosts[i].img = getsRandGhostImg();
        renderCell(gGhosts[i].location , getGhostHTML(gGhosts[i]))
    }
}

function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--;
            break;
        case 'ArrowDown':
            nextLocation.i++;
            break;
        case 'ArrowLeft':
            nextLocation.j--;
            break;
        case 'ArrowRight':
            nextLocation.j++;
            break;
        default:
            return null;
    }
    return nextLocation;
}