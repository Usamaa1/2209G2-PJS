let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let restart = document.getElementById('restart');
let btnRoll = document.getElementById('btn--roll');
let btnHold = document.getElementById('btnHold');
let dice = document.getElementById('dice');

let current = 0;
let activePlayer = 0;

let scores = [0, 0];

let isPlaying = true;

dice.classList.add('hidden');
document
      .querySelector('#win')
      .classList.add('hidden');



btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    let randomDice = Math.trunc(Math.random() * 6 + 1);

    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      dice.classList.remove('hidden');

      current += randomDice;

      document.getElementById(`current--${activePlayer}`).innerText = current;
    } else {
      current = 0;
      document.getElementById(`current--${activePlayer}`).innerText = current;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      activePlayer = activePlayer === 0 ? 1 : 0;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      document.getElementById(`current--${activePlayer}`).innerText = current;
    }
  }
});

btnHold.addEventListener('click', () => {
  scores[activePlayer] += current;

  if (scores[activePlayer] >= 40) {
    isPlaying = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
      document
      .querySelector(`#win`)
      .classList.remove('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--winner');
    dice.classList.add('hidden');
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  } else {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    current = 0;
    document.getElementById(`current--${activePlayer}`).innerText = current;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    activePlayer = activePlayer === 0 ? 1 : 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).innerText = current;
  }
});

restart.addEventListener('click', () => {
  scores = [0, 0];
  current = 0;
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--active');
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--winner');
  activePlayer = 0;
  isPlaying = true;
  dice.classList.add('hidden');
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.toggle('player--active');
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
});
