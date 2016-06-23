//some jquery for you - you can ignore for now. This will trigger your button clicks
$("#reset").click(Reset);
$("#start").click(Start);
$("#pause").click(Pause);

// Call this function to update the text display
function UpdateText () {
  $("#timeDisplay").text('Time elapsed: ' + seconds);
}

// YOUR CODE GOES HERE
var seconds = 0;
var timerId;

function Reset () {
  window.clearInterval(timerId);
  console.log('Reset Clicked');
  seconds = -1;
  updateTime();
}

function Start () {
  timerId = window.setInterval(updateTime, 1000);
  console.log('Start Clicked');
}

function Pause () {
  window.clearInterval(timerId);
  console.log('Pause Clicked');
}

function updateTime () {
  seconds++;
  UpdateText();
}
