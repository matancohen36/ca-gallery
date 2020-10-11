'use strict';

var gCurrQuestIdx = 0;
var gQuests;
var gNextId = 0;


function init() {
    gQuests = createQuests();
    renderQuestion();
}

function createQuests() {
    var quests = [
        { id: gNextId++, opts: ['This Is The White Fang Of Konoha', 'This Is The Legendary Sanin'], correctOptIdx: 1 },
        { id: gNextId++, opts: ['This Is Obito', 'This Is Itachi'], correctOptIdx: 0 },
        { id: gNextId++, opts: ['This Is Yahiko', 'This Is Nagato'], correctOptIdx: 0 }
    ];
    return quests;
}

function getQuestById(id) {
    var question;
    for (var i = 0; i < gQuests.length; i++) {
        var currQuest = gQuests[i];
        if (currQuest.id === id) {
            question = currQuest;
        }
    }
    return question;
}



function renderQuestion() {
    var question = getQuestById(gCurrQuestIdx);
    //console.log('question:', question)
    var strHTML = '';
    strHTML += `<img class='quest-img' src='img/${gCurrQuestIdx + 1}.png'/>`;
    for (var i = 0; i < question.opts.length; i++) {
        var optText = question.opts[i];
        //console.log('question:', optText)
        strHTML += `<button onclick="checkCorrection(this)" class="question" data-quest="${i}"> `;
        strHTML += optText;
        strHTML += `</button>`;
    }
    var elQuestions = document.querySelector('.questions')
    elQuestions.innerHTML = strHTML;

}

function checkCorrection(elBtn) {
    var questIdx = +elBtn.dataset.quest;
    console.log('innerText:', elBtn.innerText);
    console.log('idx:', questIdx);

    console.log(gQuests[gCurrQuestIdx])
    if (questIdx === gQuests[gCurrQuestIdx].correctOptIdx) {
        gCurrQuestIdx++;
        console.log('You are correct')
        renderQuestion() 
    } else {
        console.log('You are wrong!')
    }
    // if (elBtn.innerText === gQuests[gCurrQuest].opts[gQuests[gCurrQuest].correctIdx]) {
    //     gCurrQuest++
    // }
}