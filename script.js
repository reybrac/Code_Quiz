var hello = document.querySelector("#myBtn");
var secondsLeft = 10;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");

var questions = {question1: "A very useful tool used during development and debugging for printing content to the debugger is:"};
var choices = {choices1: ["Javascript", "Terminal bash", "for Loops", "Console log"]};
var accuracy = {accuracy1: "Console log"};

var quizChoices = document.querySelector("#accuracy")

hello.addEventListener("click", function(){
    init();
    setTime();  
    quiz();
    
});

function setTime() {
    document.getElementById("myBtn").disabled = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("myText").innerHTML = secondsLeft; 

        if(secondsLeft === 0) {

        // Stops execution of action at set interval
        document.getElementById("myText").innerHTML = "Game over!";
        clearInterval(timerInterval);
        // Calls function to create and append image
        document.getElementById("myBtn").disabled = false;
        //sendMessage();
        }
        

    }, 1000);
    
}

function quiz() {
    
    document.getElementById("questions").innerHTML = questions.question1;
    console.log(questions.question1);
    quizChoices.innerHTML = "";

    for (var i = 0; i < choices.choices1.length; i++) {
        var listChoices = choices.choices1[i];
    
        var li = document.createElement("li");
        
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = listChoices;
    
        li.appendChild(button);
        quizChoices.appendChild(li);
      }
    
    


}

function init(){
    secondsLeft = 10;
    quizChoices.innerHTML = "";

    
}

init();
