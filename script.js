var start = document.querySelector("#myBtn");
var viewHs = document.querySelector("#highScores");
var secondsLeft = 15;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");
var score = 0;

// Question section
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
    {
        question: "What city do the Ninja turtles live in?",
        choices: ["New York", "Los Angeles", "Chicago", "Portland"],
        accuracy: ["New York"]
    },
    {
        question: "What color are the ninja turtles?",
        choices: ["Green", "Blue", "Purple", "Yellow"],
        accuracy: ["Green"]
    },
    {
        question: "What is the name of Rhino in Ninja turtles?",
        choices: ["Bebop", "Baxter", "Rocksteady", "Shredder"],
        accuracy: ["Rocksteady"]
    },
   
];

var quizIndex = 0;
var userName = [];
var quizChoices = document.querySelector("#choices");
var quizSection = document.querySelector("#quiz-section");
var hsSection = document.querySelector("#high-scores");

// Start button section
start.addEventListener("click", function(){
    
    init();
    setTime();  
    quizQues1();
    
    
});


// Timer section
function setTime() {
    document.getElementById("myBtn").disabled = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("myText").innerHTML = secondsLeft; 

        if(secondsLeft === 0) {
            endGame();
            

            clearInterval(timerInterval);
            document.getElementById("myBtn").disabled = false;
            
            currentScore();
        }
        

    }, 1000);
    
}

// Quiz questions and answer choices
function quizQues1() {
    
    document.getElementById("quiz-section").style.visibility = "visible";
    quizChoices.innerHTML = "";
    document.getElementById("accuracy").innerHTML = "";
    document.getElementById("questions").innerHTML = exampleQues[quizIndex].question;
    console.log(exampleQues);
   
    //quizIndex = Math.floor(Math.random() * exampleQues.length);
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

// Section checks the accuracy of the answer clicked and adds/deducts value of the score variable
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
                        
                        console.log("Game over");
                        endGame();
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
                                              
                        console.log("Game over");
                        endGame();
                    }else{
                       quizQues1(); 
                    }
    
                 }, 500);
             }, 1000);
            
        }
    console.log(score);
    
    }
    
    
    });

// Initialization section that resets variables and sections that are displaed
function init(){
    
    secondsLeft = 15;
    quizIndex = 0;
    quizChoices.innerHTML = "";    
    document.getElementById("quiz-section-header").innerHTML = "Questions";
    document.getElementById("high-scores").innerHTML = "";
    document.getElementById("form").style.visibility = "hidden";

}

// End game section that hides sections and sends a game over message
function endGame(){
    document.getElementById("quiz-section").style.visibility = "hidden";
    document.getElementById("myText").innerHTML = "Game over!"; 
}

// Current score section to show what the users current score was for the game
function currentScore(){
   
    
    document.getElementById("high-scores").style.visibility = "visible";
    document.getElementById("form").style.visibility = "visible";
    document.getElementById("quiz-section-header").innerHTML = "You scored " + score + " points. Enter your initials to save your high scores";
    document.getElementById("quiz-section-header").style.textAlign = "center";
}

// Section to send the user initials to local storage
    var addName = (ev) =>{
        ev.preventDefault();
        var name ={
            
            Initials: document.getElementById("name").value,
            Score: score
            
        }
        userName.push(name);
        document.querySelector("form").reset();


        localStorage.setItem("current-score", JSON.stringify(userName));
    
     }    
        document.getElementById("submit-btn").addEventListener("click", addName);
            if(true){
                document.getElementById("form").style.visibility = "hidden";
                document.getElementById("quiz-section-header").style.visibility = "hidden";
            }
        
    
        console.log("userName", userName);
   
// Highscore section that determines what to hide and what to show the user when the highscore button is clicked

function highScore(){
    
    
    document.getElementById("quiz-section-header").innerHTML = "High Score";
    document.getElementById("high-scores").style.visibility = "visible";
    document.getElementById("quiz-section-header").style.visibility = "visible";
    document.getElementById("form").style.visibility = "hidden";
    
   
    var lsHs = document.querySelector("#high-scores");
    var example = JSON.parse(localStorage.getItem("current-score"));
    for(var i = 0; i < example.length; i++ ){
        var para = document.createElement("p");
        para.classList.add("final");
        para.textContent = example[i].Initials + " : " + example[i].Score;
        lsHs.appendChild(para);
    }
    
    
} 

viewHs.addEventListener("click", function(){
    document.getElementById("quiz-section").style.visibility = "hidden";
    //alert("ive been clicked");
    highScore();
});

//init();
