var hello = document.querySelector("#myBtn");
var secondsLeft = 10;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");

hello.addEventListener("click", function(){
    
    setTime();  
    questions();
    init();
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

function questions() {
    var question1 = "A very useful too used during development and debugging for printing content to the debugger is:";
    document.getElementById("questions").innerHTML = question1;

}

function init(){
    secondsLeft = 10;
    
}

init();
