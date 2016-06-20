// /When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second
// When "Reset" is clicked, the text should return to "Stop Watch"
// When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing

//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);

// Call this function to update the text display
function UpdateText( seconds ) {
    $( "#timeDisplay" ).text("Time elapsed: " + seconds);
}

var seconds = 0;
var timerId;

var timerId = window.setInterval(UpdateTime, 1000);

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function UpdateTime() {
  seconds++
}


var head = document.getElementsByIdName('timer');
head.append(seconds)  


// YOUR CODE GOES HERE
function Reset() {
    console.log("Reset Clicked");
}

function Start() {
    console.log("Start Clicked");
}

function Pause() {
    console.log("Pause Clicked");
}
