'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (nameClass, message) {
  document.querySelector(nameClass).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('.message', '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct Number!');
    displayMessage('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }
    //  When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too high' : '📉 Too low'
      );
      displayMessage('.score', score);
    } else {
      displayMessage('.message', '💥 You lost the game!');
      displayMessage('.score', 0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('.score', 0);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
