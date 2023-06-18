'use strict';

//selecting elements by Id's
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores  ,currentScore , activePlayer , playing ;

const init = function () {


    //starting condition
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
     scores = [0, 0];

     currentScore = 0;
     activePlayer = 0;
     playing = true;

    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

//Rolling dice functionality


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {


    if (playing) {
        //1. Generating a random dice roll

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);


        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;


        //3. Check for rolled 1 : if true , switch to next player

        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore; //Change later --above line 

        } else {
            //switch to next player
            switchPlayer();
        }
    }

});



btnHold.addEventListener('click', function () {


    if (playing) {
        //1. Add current score to active player,s scire
        scores[activePlayer] += currentScore;
        // console.log(scores[activePlayer]);

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if player score is >= 100
        //Finish the game
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            //switch to the next player 

            switchPlayer();

        }
    }



});





btnNew.addEventListener('click', init);



