'use strict';

console.log('読み込みました。');

//DOMの取得
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// //取得したDOMの確認
// console.log(btnOpenModal);
// console.log(modal);
// console.log(hidden);
// console.log(btnCloseModel);
// console.log(overlay);

//関数
const openModal = function () {
  // console.log([index] + 'がクリックされました。');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  //   console.log('overray clicked');
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let index = 0; index < btnOpenModal.length; index++)
  btnOpenModal[index].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

btnCloseModel.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
