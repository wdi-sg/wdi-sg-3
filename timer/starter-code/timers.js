//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset)
$( "#start" ).click(Start)
$( "#pause" ).click(Pause)

var intervalID
var time = 0

// Call this function to update the text display
function UpdateText() {
    time++
    $( "#timeDisplay" ).text("Time elapsed: " + time)
}

// YOUR CODE GOES HERE

function Reset() {
  console.log("Reset Clicked")
    clearInterval(intervalID)
    time=0
    updateText()
}

function Start() {
    console.log("Start Clicked")
    // start the timer
    intervalID= setInterval(UpdateText, 1000);
    console.log("timer id = " + intervalID)
}

function Pause() {
    console.log("Pause Clicked")
    clearInterval(intervalID)
    console.log("timer id = " + intervalID)
}
