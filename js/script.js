const hamburger = document.querySelector('.header__top__burger'),
      menu = document.querySelector('.header__sidepanel'),
      closeElemSm = document.querySelector('.header__close__sm'),
      closeElem = document.querySelector('.header__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('header__sidepanel__active');
});

closeElemSm.addEventListener('click', () => {
    closeElemSm.classList.toggle('header__close__sm__active');
    menu.classList.toggle('header__sidepanel__active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('header__sidepanel__active');
});
