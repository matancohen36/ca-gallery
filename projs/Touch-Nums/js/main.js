'use strict';
var gStart;
var gNums;
var gCount = 1;
var gTime = 0;
var gSize = 4;
var elTimerSpan
var gElNextNum;
var gInterval;

function init() {
    if (gInterval) clearInterval(gInterval);
    resetGame();
    renderGame();
}

function renderGame(size) {
    gNums = resetNums();
    var strHTML = '';
    for (var i = 0; i < gSize; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gSize; j++) {
            var currNum = gNums.pop();
            strHTML += `<td onclick="cellClicked(this)">`;
            strHTML += `${currNum}`;
            strHTML += '</td>';
        }
        strHTML += '</tr>';

    }
    var elPlayG = document.querySelector('.play-ground');
    elPlayG.innerHTML = strHTML;
}

function resetGame() {
    gCount = 1;
    elTimerSpan = document.querySelector('.timer');
    elTimerSpan.innerText = 'pick the first number'
    gElNextNum = document.querySelector('.next-num');
    gElNextNum.innerText = gCount;

}
function cellClicked(clickedNum) {
    if (+clickedNum.innerText === 1) {
        gStart = Date.now();
        gInterval = setInterval(startTimer, 10);
        clickedNum.classList.add('mark')
    }
    if (+clickedNum.innerText === gCount) {
        clickedNum.classList.add('mark')
        gCount++;
        gElNextNum = document.querySelector('.next-num');
        gElNextNum.innerText = gCount;
        isGameOver();

    }
}

function isGameOver() {
    if (gCount === gSize ** 2) {
        clearInterval(gInterval)
    }
}

function startTimer() {
    //take now - when we start
    var now = Date.now();
    elTimerSpan = document.querySelector('.timer');
    elTimerSpan.innerText = (now - gStart) / 1000;
}

function resetNums() {
    var nums = [];
    for (var i = 0; i < gSize * gSize; i++) {
        nums.push((i + 1));
    }
    shuffle(nums);
    return nums;
}

function setDiffLvl(size) {
    gSize = size;
    init();
}

