/**
 * GAME FUNCTIONS
 *  - player must guess a number between a min and max
 *  - Player gets a certain amount of guesses
 *  - Notify player of guesses remaining
 *  - Notify player of correct answer on loss
 *  - Let player choose to play again
 */

// GAME VALUES
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI from variables
minNum.textContent = min;
maxNum.textContent = max;

// Event Listener for Button

guessBtn.addEventListener('click', submitGuess);

function submitGuess(e) {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // Validate input
  if (isNaN(guess)|| guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'tomato');
  }
  // Check if winningNum
  if(guess === winningNum){
    //Disable input
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green'
    setMessage(`${winningNum} is correct! Win!!`, 'green');
  } else {

  }
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
