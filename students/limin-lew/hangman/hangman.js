
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

var currentplayer = 1
var player1score = 0
var player2score = 0

var number1 = getRandomInt(0,10)
var number2 = getRandomInt(0,10)
var question = number1+number2
var questionnumber = 0

$(document).ready(function() {

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
console.log("dom is ready");
console.log(number1);
console.log(number2);

//DOCUMENT CLOSE
})

//ACTIVATE THE START BUTTON
$('button').click(function () {
  restart ();
  console.log("restart button activated.")
})

function restart() {
  $('#1stnumber').text(number1)
  $('#2ndnumber').text(number2)
  show_prompt()
  updatedisplay();
  console.log("restart button activated!")
}

function updatedisplay() {
  if (gameover()) {
      $('#results').text('Game Over!')
      console.log("GameOver!")
  } else {
      $('#player1score').text('Player 1: ' + player1score)
      $('#player2score').text('Player 2: ' + player2score)
      $('#results').text('Please Continue!')
      console.log("Please Continue!")
  }
}


// function playTurn (choice) {
//   if (quiz.isGameOver) {
//     return false
//   }
//   var correct = false
//   if (choice === quiz.questions[quiz.currentQuestion].correctChoice) {
//     correct = true;
//     console.log(correct)
//
//     if (quiz.currentQuestion % 2) {
//       quiz.player2Points++
//       console.log("player 2 points ", quiz.player2Points)
//     } else {
//       quiz.player1Points++
//       console.log("player 1 points ", quiz.player1Points)
//     }
//   }
//   ++quiz.currentQuestion
//   if (quiz.currentQuestion === numberOfQuestions()) {
//     quiz.isGameOver = true
//   }
//   return correct
// }

//NEED TO TIE THIS WITH GAME NUMBER



function playturn() {
  if ( gameover())
  {console.log("Game is over")}
  else

  if (questionnumber % 2) {
    currentplayer=2
    questionnumber++
    show_prompt()
  } else {
    currentplayer=1
    questionnumber++
    show_prompt()
  }
}

var userinput = function show_prompt()
{var userinput=prompt("?")
$('#answer').text(userinput)
console.log(userinput)
correct()
}

function correct() {
  if (number1+number2 === userinput) {
  totalscore()
  console.log("correct")
}
}
//GAMEOVER WHEN  COMPLETED 10QUESTIONS
function gameover() {
  if (questionnumber === 10) {
  console.log("gameover")}
}

function whowins() {
  if (gameover()) {
    if (player1score > player2score)
    {
      return "player 1 wins!"
      console.log("player 1 wins!") }
    else (player1score < player2score)
    {
      return "player 2 wins!"
      console.log("player 2 wins!")
    }
}

}




// function correct() {
//   if (question.qn[0] === (number1*number2) ||
//   question.qn[1] === (number1+number2) ||
//   question.qn[2] === (number1-number2)) {
//   totalscore()
//   }
// }

function totalscore() {
  if (currentplayer = 2 && correct())
  {quiz.player2score++
    console.log("player 2 points ", quiz.player2score)
    updatedisplay()
  }
  else (currentplayer = 1 && correct())
  {quiz.player1score++
    console.log("player 1 points ", quiz.player1score)
    updatedisplay()
  }
}

//TIMER
  var timer = 10;
  var interval = setInterval(function() {
      timer--;
      $('.timer').text(timer);
      if (timer === 0) clearInterval(interval);
  }, 1000);
