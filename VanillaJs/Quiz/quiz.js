class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.answer = answer;
        this.choices = choices;
    }

    correctAnswer(choice) {
        return choice === this.answer;
    }
}

var questions =[
    new Question("1.What is my name ?",["Mzml","Rafiq","Malik","Imbu"],"Mzml"),
    new Question("2.What 12 + 54?",["99","64","-4","66"],"66"),
    new Question("3.Longest river?",["Nile","Amazon","weth","Brengi"],"Nile"),
    new Question("4.When classes added in JS?",["2020","2002","2005","2015"],"2015")
];
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    isEnded() {
        return this.questions.length === this.questionIndex;
    }
    gues(answer) {
        if ( this.getQuestionIndex().correctAnswer(answer) ) {
            this.score++;
        }
        this.questionIndex++;
    }
}

function populate(){
    if(quiz.isEnded()){
        showScores();
    }else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
}
function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.gues(guess);
        populate();
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Total "+quiz.questions.length+" questions";
}

function showScores(){
    var checkKarlo = "<h1>Result</h1>";
    checkKarlo += "<h2 id='score'>Yours Scores is "+quiz.score+" out of "+quiz.questions.length+"</h2>";
    var element  = document.getElementById("quiz");
    element.innerHTML = checkKarlo;
}

var quiz = new Quiz(questions);
populate();

