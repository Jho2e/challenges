const numberInputBetween = document.querySelector("#numberSubmitBtn");
const result = document.querySelector("#result");
const usergenerateNumber = document.querySelector(".generateNumberBetween");
const userGuessNumber = document.querySelector("#guessTheNumber");

const HIDDEN_CLASSNAME = "hidden";

function numberSubmit(event) {
  event.preventDefault();
  const guessNumber = userGuessNumber.value;
  const computerNumber = Math.ceil(Math.random() * usergenerateNumber.value);

  if (parseInt(computerNumber, 10) === parseInt(guessNumber, 10)) {
    result.innerText = `You chose: ${guessNumber}, the machine chose: ${computerNumber}.\nYou won!`;
  } else {
    result.innerText = `You chose: ${guessNumber}, the machine chose: ${computerNumber}.\nYou lost!`;
  }
  result.classList.remove(HIDDEN_CLASSNAME);
}

numberInputBetween.addEventListener("submit", numberSubmit);
