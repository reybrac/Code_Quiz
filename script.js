var start = document.querySelector("#myBtn");
var secondsLeft = 10;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");
var score = 0;


var exampleQues = [
    {
        question: "What is the best food?",
        choices: ["pizza", "burgers", "anchovies"],
        accuracy: ["burgers"]
    },
    {
        question: "What is the best drink?",
        choices: ["Ginger Ale", "Coca Cola", "Fanta", "Dr. Pepper"],
        accuracy: ["Ginger Ale"]
    }
];

var quizChoices = document.querySelector("#choices");
var quizSection = document.querySelector("#quiz-section");

start.addEventListener("click", function(){
    
    init();
    setTime();  
    quizQues1();
    
});


function setTime() {
    document.getElementById("myBtn").disabled = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("myText").innerHTML = secondsLeft; 

        if(secondsLeft === 0) {

            document.getElementById("myText").innerHTML = "Game over!";
            clearInterval(timerInterval);
            document.getElementById("myBtn").disabled = false;
            
        }
        

    }, 1000);
    
}

function endGame(){
    document.getElementById("quiz-section").style.visibility = "hidden";
}


function quizQues1() {
    //Question 1 beginning -- until I can figure out how to improve this code
    document.getElementById("quiz-section").style.visibility = "visible";
    document.getElementById("accuracy").innerHTML = "";
    document.getElementById("questions").innerHTML = exampleQues[0].question;
    console.log(exampleQues);
   

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
                    
            var answer = event.target.textContent;
            console.log('answer', answer);
            //console.log('event', event.target.textContent); 
        }  
            if (answer == exampleQues[0].accuracy){
                document.getElementById("accuracy").innerHTML = "That is Correct";
                document.getElementById("accuracy").style.color = "green";
                score += 10;
                setTimeout(function(){document.getElementById("quiz-section").style.visibility = "hidden"; }, 1000);
            }else{
                document.getElementById("accuracy").innerHTML = "Wrong answer";
                document.getElementById("accuracy").style.color = "red";
                score -= 5;
                setTimeout(function(){document.getElementById("quiz-section").style.visibility = "hidden"; }, 1000);
            }
        console.log(score);
        
        
        localStorage.setItem("High score", score);
        
    });
        // end of Question 1


}



function init(){
    
    secondsLeft = 10;
    quizChoices.innerHTML = "";
}


init();
