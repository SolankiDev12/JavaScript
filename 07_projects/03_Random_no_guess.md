# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-zsyexxlv?file=script.js)

# Solution code

## Project 3

```javascript
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesslot =  document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = parseInt(Math.random() * 100 + 1);


const p = document.createElement('p')
const prvarr = []
let Noguess = 1

let playGame = true;

if (playGame) 
{
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  })
}

function validateGuess(guess)
{
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prvarr.push(guess);
    if (Noguess === 11) 
    {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
  }}
}

function displayGuess(guess) {
  userInput.value = '';
  guesslot.innerHTML += `${guess}, `;
  Noguess++;
  remaining.innerHTML = `${11 - Noguess} `;
}

function checkGuess(guess)
{
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayMessage(message) 
{
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



// function endGame() 
// {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

function endGame() 
{
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'Start New Game';
  newGameButton.setAttribute('id', 'newGame');
  // newGameButton.classList.add('button');
  startOver.appendChild(newGameButton);

  playGame = false;

  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prvarr.length = 0;
    Noguess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - Noguess} `;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(newGameButton);
    playGame = true;
  });
}


// function newGame() 
// {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prvarr = [];
//     Noguess = 1;
//     guesslot.innerHTML = '';
//     remaining.innerHTML = `${11 - Noguess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);
//     playGame = true;
//     startOver.append(newGameButton)
//   });
// }

```
