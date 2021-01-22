var start = document.querySelector("#myBtn");
var viewHs = document.querySelector("#highScores");
var secondsLeft = 15;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");
var score = 0;


var exampleQues = [
    {
        question: "What is the ninja turtles favorite food?",
        choices: ["pizza", "burgers", "worms","anchovies"],
        accuracy: ["pizza"]
    },
    {
        question: "What type of soda has an ingredient that can be used in tea?",
        choices: ["Ginger Ale", "Coca Cola", "Fanta", "Dr. Pepper"],
        accuracy: ["Ginger Ale"]
    },
    {
        question: "What fastfood restaurant serves a Whopper?",
        choices: ["Taco Bell", "Popeyes", "McDonalds", "Burger King"],
        accuracy: ["Burger King"]
    },
    {
        question: "Who shot Alexander Hamilton?",
        choices: ["Tom Jones", "Aaron Burr", "George Washington", "Donal Trump"],
        accuracy: ["Aaron Burr"]
    },
    {
        question: "What food delivery company has a commercial with a catchy song?",
        choices: ["DoorDash", "Grubhub", "Uber eats", "Postmates"],
        accuracy: ["Grubhub"]
    },
    {
        question: "Who is the ninja turtles sensai?",
        choices: ["Shredder", "Snakeweed", "Splinter", "April"],
        accuracy: ["Splinter"]
    },
   
];

var quizIndex = 0;

var quizChoices = document.querySelector("#choices");
var quizSection = document.querySelector("#quiz-section");

start.addEventListener("click", function(){
    
    init();
    setTime();  
    quizQues1();
    highScore();
});



function setTime() {
    document.getElementById("myBtn").disabled = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("myText").innerHTML = secondsLeft; 

        if(secondsLeft === 0) {
            
            document.getElementById("myText").innerHTML = "Game over!";
            var name = prompt("You scored " + score + " Enter your initials to save your high score");
            localStorage.setItem("High score", name + " " + score);

            clearInterval(timerInterval);
            document.getElementById("myBtn").disabled = false;
            endGame();
            
        }
        

    }, 1000);
    
}


function quizQues1() {
    
    document.getElementById("quiz-section").style.visibility = "visible";
    quizChoices.innerHTML = "";
    document.getElementById("accuracy").innerHTML = "";
    document.getElementById("questions").innerHTML = exampleQues[quizIndex].question;
    console.log(exampleQues);
   

    for (var i = 0; i < exampleQues[quizIndex].choices.length; i++) {
        var listChoices = exampleQues[quizIndex].choices[i];
    
        var li = document.createElement("li");
        
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = listChoices;
    
        li.appendChild(button);
        quizChoices.appendChild(li);
    }   

}

quizChoices.addEventListener("click", function(event){
    if(event.target.matches("button")){
                
        var answer = event.target.textContent;
        console.log('answer', answer);
        //console.log('event', event.target.textContent); 
      
        if (answer == exampleQues[quizIndex].accuracy){
            document.getElementById("accuracy").innerHTML = "That is Correct";
            document.getElementById("accuracy").style.color = "green";
            score += 10;
            setTimeout(function(){
                document.getElementById("quiz-section").style.visibility = "hidden";
                setTimeout(function(){
                    quizIndex++;
                    
                    if(quizIndex >= exampleQues.length){
                        // highScore();
                        console.log("Game over");
                        
                    }else{
                       quizQues1(); 
                    }
    
                 }, 500);
             }, 1000);
             
                
        }else{
            document.getElementById("accuracy").innerHTML = "Wrong answer";
            document.getElementById("accuracy").style.color = "red";
            score -= 5;
            setTimeout(function(){
                document.getElementById("quiz-section").style.visibility = "hidden";
                setTimeout(function(){
                    quizIndex++;
                    
                    if(quizIndex >= exampleQues.length){
                        // highScore();                      
                        console.log("Game over");
                        
                    }else{
                       quizQues1(); 
                    }
    
                 }, 500);
             }, 1000);
            
        }
    console.log(score);
    
    }
    
    
    });


function init(){
    
    secondsLeft = 15;
    quizIndex = 0;
    quizChoices.innerHTML = "";    
}


function endGame(){
    document.getElementById("quiz-section").style.visibility = "hidden";
    
}

function highScore(){
     
}   
viewHs.addEventListener("click", function(){
    document.getElementById("quiz-section").style.visibility = "hidden"
    alert("ive been clicked");
});

init();
