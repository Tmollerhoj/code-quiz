// landing page
var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("QnA-page");
var highscorePage = document.getElementById("highscore-page");
var timeEl = document.getElementById("timer");



var questionContent = [
    questionOne = 
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correctChoice:'console.log'
    },
    questionTwo = 
    {
        question:'Commonly used data types  DO NOT include:',
        choices:['strings', 'booleans', 'alerts', 'nnumbers'],
        correctChoice:'alerts'
    },
    questionThree = 
    {
        question:'The condition in an if/else statement is enclosed within _____.',
        choices:['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        correctChoice:'parentheses'
    },
    questionFour = 
    {
        question:'Arrays in JavaScript can be used to store _____.',
        choices:['numbers', 'other arrays', 'booleans', 'all of the above'],
        correctChoice:'all of the above'
    }
]

var pageArray = [landingPage, quizPage, highscorePage];
// console.log(pageArray);

function hidePages() {
    for (var i = 0; i <pageArray.length; i++){
        if (!pageArray[i].classList.contains("hide")) {
            pageArray[i].classList.add("hide");
        }
    }
}

function start() {
    hidePages();
    quizPage.classList.remove("hide");
    var seconds = 60;
    runTimer();

    questionOrderArray = questionOrder(questionContent);

}
function showHighscores() {
    hidePages();
    highscorePage.classList.remove("hide");

}


function questionOrder(array){
    let arrIndex = [];
    for (let i = 0; i < array.length; i++) {
        arrIndex.push(i);
        console.log('arraIndex', arrIndex)
    }
    return arrIndex;
}



let button = document.createElement('button')
let li = document.createElement('li')

button.innerHTML = choices[i];
li.appendChild(button);
choices.appendChild(li)



function runTimer() {
    
    var timer = setTimer(function() {
        seconds--;
        timeEl.textContent = seconds;
        if (secondsLeft === 0) {
        clearInterval(timer);
        }
        
    }, 1000);
}
