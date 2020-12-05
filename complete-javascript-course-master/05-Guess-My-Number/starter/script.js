'use strict';

//変数・定数の定義
let clearMsg = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let again = document.querySelector('.again');

let currentScore = 20;
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

const init = () => {
  number.textContent = anserNum;
  clearMsg.textContent = 'Start guessing...';
  guess.disabled = false;
  document.querySelector('body').style.background = '#222';
  document.querySelector('body').style.color = '#eee';
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
  console.log('guess', typeof guessNumber);
  console.log('anserNum', anserNum);

  if (currentScore <= 0) {
    clearMsg.textContent = 'GAME OVER';
    return;
  }

  if (!guessNumber) {
    x;
    clearMsg.textContent = '⛔️ No number!';
    // player win
  } else if (guessNumber === anserNum) {
    sound.play();
    number.textContent = anserNum;
    clearMsg.textContent = '🎉 Correct Number!!';
    highscore.textContent = currentScore;
    guess.disabled = true;
    document.querySelector('body').style.background = '#a7e8bd';
    document.querySelector('body').style.color = '#404e7c';
    number.style.width = '30rem';

    //number hight
  } else if (guessNumber > anserNum) {
    clearMsg.textContent = 'Too hight';
    currentScore--;
    score.textContent = currentScore;
    //number low
  } else if (guessNumber < anserNum) {
    clearMsg.textContent = 'Too low';
    currentScore--;
    score.textContent = currentScore;
  } else {
    clearMsg.textContent = 'mistake...';
    currentScore--;
    score.textContent = currentScore;
  }

  again.addEventListener('click', () => {
    init();
  });
});
