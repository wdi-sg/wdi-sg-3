# function correct (answer)
check whether answer by user is correct


#function questionOver ()
question is over when timer = 0, or when answer is given (reference correct function)

#quiz / questions stored as object
  var quiz
    currentQuestion
    numberofQuestions
    isGameOver: false

#function generatenumber ()
generates random integer numbers

# function endGame ()
determine whether game is over base on whether current question = total question

#function timer ()
sets time of 5sec for every question turn

#function restart ()
restarts the game when the 'start' button is clicked

#function updatedisplay ()
trigger generatenumber function
update all HTML display below
1stnumber
2ndnumber
player1score
currentquestion
results
