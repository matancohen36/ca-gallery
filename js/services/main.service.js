var gProjs = [{
    id: "1",
    name: "MineSweeper",
    title: "MineSweeper",
    desc: "My Version of the Classic game with all the Features",
    url: "./projs/MineSweeper/index.html",
    date: "Sep 2020",
    labels:["Board Game","Puzzle"]
},
{
    id: "2",
    name: "In-Picture",
    title: "In-Picture",
    desc: "My Version of the Classic game with all the Features",
    url: "./projs/In-Picture/index.html",
    date: "Sep 2020",
    labels:["Puzzle"]
},
{
    id: "3",
    name: "Touch-Nums",
    title: "Touch-Nums",
    desc: "My Version of the Classic game with all the Features",
    url: "./projs/Touch-Nums/index.html",
    date: "Sep 2020",
    labels:["Board Game","Puzzle"]
},
{
    id: "4",
    name: "Pacman",
    title: "Pacman",
    desc: "My Version of the Classic game with all the Features",
    url: "./projs/Pacman/index.html",
    date: "Sep 2020",
    labels:["Board Game"]
},
{
    id: "5",
    name: "Chess",
    title: "Chess",
    desc: "My Version of the Classic game with all the Features",
    url: "./projs/Chess/index.html",
    date: "Sep 2020",
    labels:["Board Game","Matrix"]
},
{
    id: "6",
    name: "Todo",
    title: "Todo",
    desc: "My Version of the Todo List with all the Features",
    url: "./projs/Todo/index.html",
    date: "Sep 2020",
    labels:["Todo List"]
},

]

function getProjs() {
    return gProjs;
}

function getProjById(id) {
    return gProjs.find(function (proj) {
        return proj.id === id
    })
}