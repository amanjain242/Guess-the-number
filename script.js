
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess){  //validates whether the guess value is between 1 and 100 and it is a valid number
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a value greater than or equal to 1")
    }
    else if(guess > 100){
        alert("Please enter a value less than 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! , Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){    // this method checks if the guess is equal the result number and return it
    if(guess === randomNumber){
        displayMessage(`You guessed it right!,Yeahh`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Tooo low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}

function displayGuess(guess){    //  cleans the value so that next value can be inputted and updates the value
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++
    remaining.innerHTML  = `${11-numGuess}`
}

function displayMessage(message){   // use this method to tell that this guess is right answer
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){   // starts the new game
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

function endGame(){   // ends the current game
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}















