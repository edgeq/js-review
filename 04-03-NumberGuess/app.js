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
    winningNum = getRandomNum(min, max),
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
//play again listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

function submitGuess(e) {
    let guess = parseInt(guessInput.value);
    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'tomato');
    }
    // Check if winningNum 
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct! Win!!`);

    } else {
        //WRONG NUMBER
        guessesLeft -= 1; //subtracts from global let
        if (guessesLeft === 0) {
            gameOver(false, `Game over. The correct number was ${winningNum}. You Lose`);

        } else {
            //GAME CONTINUES - WRONG ANSWER

            setMessage(`${guess} is not correct. Guesses left: ${guessesLeft}`, 'red');
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
        }

    }
}

function getRandomNum() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    //PLAY AGAIN CHOICE
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}