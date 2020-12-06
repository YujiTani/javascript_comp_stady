'use strict';

//変数・定数の定義
let clearMsg = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let body = document.querySelector('body');

let currentScore = 20;
let currentHighscore = 0;
let anserNum = '';
const max = 20;
//sound
const sound = new Audio('../../../SE/nc152176.wav');
sound.volume = 0.2;

//取得情報の確認
// console.log(clearMsg);
// console.log(number);
// console.log(score);
// console.log(guess);
// console.log(check);
// console.log(again);

// clearMsg.textContent = 'Correct Number!!';
// number.textContent = 13;
// score.textContent = 10;
// guess.value = 10;

//関数
const randomNum = x => {
  return Math.trunc(Math.random() * x) + 1;
};

const comparison = score => {
  currentHighscore > score
    ? (currentHighscore = currentHighscore)
    : (currentHighscore = score);
  return;
};

const displayMessage = message => {
  clearMsg.textContent = message;
};

const init = () => {
  number.textContent = anserNum;
  displayMessage('Start guessing...');
  guess.disabled = false;
  body.style.background = '#222';
  body.style.color = '#eee';
  number.style.width = '15rem';
  currentScore = 20;
  score.textContent = currentScore;
  anserNum = randomNum(max);
  number.textContent = '?';
  guess.value = '';
};

anserNum = randomNum(max);

check.addEventListener('click', () => {
  const guessNumber = Number(guess.value);
  //   console.log('guess', typeof guessNumber);
  //   console.log('anserNum', anserNum);

  if (currentScore <= 0) {
    displayMessage('GAME OVER');
    return;
  }

  if (!guessNumber) {
    x;
    displayMessage('⛔️ No number!');
    // player win
  } else if (guessNumber === anserNum) {
    sound.play();
    comparison(currentScore);
    number.textContent = anserNum;
    displayMessage('🎉 Correct Number!!');
    highscore.textContent = currentHighscore;
    guess.disabled = true;
    body.style.background = '#a7e8bd';
    body.style.color = '#404e7c';
    number.style.width = '30rem';

    //Different numbers
  } else if (guessNumber !== anserNum) {
    guessNumber > anserNum
      ? displayMessage('Too hight')
      : displayMessage('Too low');

    currentScore--;
    score.textContent = currentScore;
  }
  //again event
  again.addEventListener('click', () => {
    init();
  });
});
