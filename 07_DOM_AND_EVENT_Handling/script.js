'use strict';

/*
//////////////////////////////////////////////
//querySelector Manipulation HTMl using DOM
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value;
document.querySelector('.guess').value = 43;
console.log(document.querySelector('.guess').value);

console.log(document.querySelector('.message').textContent);
*/




//////////////////////////////////////////////
//EventListener
//EventTarget.addEventListener: At least 2 arguments required, but only 1 passed and anomynous function

//Genertae randome number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//DRY --> Do not repeat yourself or refracting our code
const DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //Taking input or value from the user
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Checking if there is a value or not 0 means false
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' ⛔ No Number ';
    DisplayMessage(' ⛔ No Number ');
  }

  //when player wins
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    DisplayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    //Manipulating CSS using DOM
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      //DRY --> Do not repeat yourself or refracting our code
      //   document.querySelector('.message').textContent = secretNumber > guess ? '👆Too High' : '👇Too Low';
      DisplayMessage(guess > secretNumber ? '👆Too High' : '👇Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎You Lost Game 😢';
      document.querySelector('.score').textContent=0;

    }
  }

  //   //when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '👆Too High';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎You Lost Game 😢';
          // document.querySelector('.score').textContent=0;
  //     }
  //   }

  //   //when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '👇Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎You Lost Game 😢';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  //restoring all value and data or restarting the game
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //   document.querySelector('.message').textContent = 'Start Guessing...';
  DisplayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});






