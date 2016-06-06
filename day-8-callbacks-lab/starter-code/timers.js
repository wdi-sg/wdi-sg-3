//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);


var timer = {
  Id:0,
  time:0,
}

// Call this function to update the text display
function UpdateText(seconds) {
    $( "#timeDisplay" ).text("Time elapsed: " + seconds);

}

function UpdateTime(){
  timer.time++;
  console.log(timer.time);
  UpdateText(timer.time);
}


// YOUR CODE GOES HERE
function Reset() {
    console.log("Reset Clicked");
    timer.time = 0;
    window.clearInterval(timer.Id);
    Start();

    // $( "#timeDisplay" ).text("Time elapsed: " + seconds);

}

function Start() {
    console.log("Start Clicked");
    //celar timer interval before
    // window.clearInterval(timer.Id);
    timer.Id = window.setInterval(UpdateTime,1000);
    console.log(timer.Id);
    // if(timerId !==0 ){
    //   seconds = 0;
    // }
}

function Pause() {
    console.log("Pause Clicked");
    window.clearInterval(timer.Id);
}


// function UpdateTime( seconds ){
//     $( "#timer").text(seconds)
//     console.log(seconds);
//     seconds++
//     console.log(seconds);
// }
