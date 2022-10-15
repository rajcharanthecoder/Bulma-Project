// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

//tabs

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target; // target is the id of the div to show (tab-content-1, tab-content-2, etc) 
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') !== target) {
        box.classList.add('is-hidden');
      } else {
        box.classList.remove('is-hidden');
      }
    });
  });
});

//Modal

const SignUpButton = document.querySelector('#signUp');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

SignUpButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

//Clicks On escapse key to close modal//

const eScaperThebUtoonism = document.querySelector('#buttoner');

eScaperThebUtoonism.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

