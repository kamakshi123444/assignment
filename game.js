
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function guessNumber(userGuess) {
  attempts++;

  if (attempts > maxAttempts) {
    return `You've used all ${maxAttempts} attempts. The number was ${randomNumber}. Better luck next time!`;
  }

  if (userGuess === randomNumber) {
    return `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
  } else if (userGuess > randomNumber) {
    return `Too High! You have ${maxAttempts - attempts} attempts left.`;
  } else {
    return `Too Low! You have ${maxAttempts - attempts} attempts left.`;
  }
}


console.log(guessNumber(50)); 
