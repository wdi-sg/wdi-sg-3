  $(document).ready(function () {
    console.log('dom is ready')
// ACTIVATE THE START BUTTON
  $('#start').click(function () {
    restart()
    // $('#answer').text(userinput);
    console.log('restart button clicked.')
  })

// DOCUMENT ENDS
  })

// WITHIN FUNCTION ENTER TO COMPARE THE USERINPUT TO THE ANSWER
  document.addEventListener('keydown', keyEnterHandler, false)
  function keyEnterHandler (e) {
    if (e.keyCode === 13) {
// ANSWER BUTTON
      var answer = $('#answer').val()
// CLEAR VALUE
      $('#answer').val('')

      correct(Number(answer))
      console.log('local variable ' + answer)
      updatedisplay()
      time()
      endGame()
// return answer
    }
  }

  function correct (answer) {
    ++quiz.currentQuestion
    console.log("function correct" + answer)
    if (answer === number1 + number2) {
      ++player1score
      console.log ("it is correct!")
    }
  }

  // QUESTION IS OVER WHEN TIMER = 0 (OR WHEN ANSWER IS GIVEN IN CORRECT IS ACTIVATED EVEN BEFORE TIMER = 0)
    function questionOver () {
      console.log('questionOver activated')
      updatedisplay()
      time()
      endGame()
      correct()
    }

//THIS IS GLOBAL VARIABLE
var player1score = 0
var number1 = 0
var number2 = 0

    var quiz = {
      currentQuestion: 1,
      numberofQuestions: 10,
      isGameOver: false
    }

// JQUERY TO GET DIV. CHANGE VALUE OF DIV TO THE NUMBER
  function generatenumber () {
    return Math.round(Math.random() * 10)
  }

  function endGame () {
    console.log('game over is triggered!')
    console.log(quiz.currentQuestion)
    console.log(quiz.numberofQuestions)
    if (quiz.currentQuestion > quiz.numberofQuestions) {
      $('#currentquestion').text('')
      alert('Game Over.  You Scored ' + Math.round((player1score/quiz.numberofQuestions)*100) + '%')
      location.reload()
      //  STOP TIMER
      //  STOP QUIZ
      return true
    }
  }



var interval
// TIMER
  function time () {
    clearInterval(interval)
    var timer = 6
    interval = setInterval(function () {
      timer--
      $('.timer').text(timer)
      if (timer === 0) {
        clearInterval(interval)
// CALL QUESTIONOVER() FUNCTION
        questionOver()
      }
    }, 1000)
  }

  function restart () {
    quiz.currentQuestion = 1
    console.log('restart function activated!')
    updatedisplay()
    time()
    // window.location.reload()
  }

  function updatedisplay () {
    if (quiz.isGameOver === true) {
      $('#results').text('Game Over!')
      console.log('If updated display activated!')
    } else {
  // UPDATE THE 2 NUMBERS
      number1 = generatenumber()
      number2 = generatenumber()
      $('#1stnumber').text(number1)
      $('#2ndnumber').text(number2)

  // UPDATE PLAYERS SCORE
      $('#player1score').text(player1score)
      $('#results').text('game in progress...')
  // UPDATE NEXT QUESION
      $('#currentquestion').text(quiz.currentQuestion + ' out of ' + quiz.numberofQuestions)

      console.log('Else updated display activated!')
    }
  }
