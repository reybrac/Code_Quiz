var start = document.querySelector("#myBtn");
var secondsLeft = 10;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");

// var questions = {question1: "A very useful tool used during development and debugging for printing content to the debugger is:"
//                 ,question2: "What is the best food?"};
// var choices = {choices1: ["Javascript", "Terminal bash", "for Loops", "Console log"]
//                 ,choices2:["pizza", "burgers", "anchovies"]};
// var accuracy = {accuracy1: "Console log", accuracy2: "burgers"};

var exampleQues = [
    {
        question: "What is the best food?",
        choices: ["pizza", "burgers", "anchovies"],
        accuracy: ["burgers"]
    },
    {
        question: "What is the best drink?",
        choices: ["Ginger Ale", "Coca Cola", "Fanta", "Dr. Pepper"],
        accuracy: "Ginger Ale"
    }
];

var quizChoices = document.querySelector("#choices")

start.addEventListener("click", function(){
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
    


    document.getElementById("questions").innerHTML = exampleQues[0].question;
    console.log(exampleQues);
    //quizChoices.innerHTML = "";

        for (var i = 0; i < exampleQues[0].choices.length; i++) {
            var listChoices = exampleQues[0].choices[i];
        
            var li = document.createElement("li");
            
            li.setAttribute("data-index", i);
        
            var button = document.createElement("button");
            button.textContent = listChoices;
        
            li.appendChild(button);
            quizChoices.appendChild(li);
        }
        quizChoices.addEventListener("click", function(event){
            if(event.target.matches("button")){
                        
                var answer = event.target.matches("button");
                console.log('event', event.target); 
            }  
            
            console.log('answer', answer);
            // var answer = event.target.matches("button");
            // if(answer === exampleQues[0].accuracy){
            //     alert("you win");
            // }
            
        });
    


}

function init(){
    secondsLeft = 10;
    quizChoices.innerHTML = "";

    
}

init();
