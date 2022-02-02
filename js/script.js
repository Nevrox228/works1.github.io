// "use strict"



const hamburger = document.querySelector('.header__top__burger'),
      menu = document.querySelector('.header__sidepanel'),
      closeElem = document.querySelector('.header__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('header__sidepanel__active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('header__sidepanel__active');
});



// const hamburger1 = document.querySelector('.header__top__burger'),
//       menu1 = document.querySelector('.header__sidepanel'),
//       closeElem1 = document.querySelector('.menu__close');

// hamburger1.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem1.addEventListener('click', () => {
//     menu.classList.remove('active');
// });