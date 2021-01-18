var hello = document.querySelector("#myBtn");
var secondsLeft = 30;
document.getElementById("myText").innerHTML = secondsLeft; 
var timeEl = document.querySelector(".time");

hello.addEventListener("click", function(){
     setTime();  
     
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("myText").innerHTML = secondsLeft; 

        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        //sendMessage();
        }

    }, 1000);
}
