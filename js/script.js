const button = document.querySelector('.function__btn'),
	  info = document.querySelector('.info'),
	  closeElem = document.querySelector('.info__close');

button.addEventListener('click', () => {
	info.classList.add('info__active');
});

closeElem.addEventListener('click', () => {
	info.classList.remove('info__active');
});


const button__mini = document.querySelector('.blitz__mini__btn'),
	  info__mini = document.querySelector('.info__mini'),
	  closeElem__mini = document.querySelector('.info__mini__close');

button__mini.addEventListener('click', () => {
	info__mini.classList.add('info__mini__active');
});

closeElem__mini.addEventListener('click', () => {
	info__mini.classList.remove('info__mini__active');

});

// габургер

const hamburger = document.querySelector('.header__mobi__humburger'),
      menu = document.querySelector('.header__mobi__left'),
      closeElem2 = document.querySelector('.header__mobi__close2');
      closeElem3 = document.querySelector('.header__mobi__close3');
      closeElem4 = document.querySelector('.header__mobi__close4');
      closeElem5 = document.querySelector('.header__mobi__close5');
      closeElem6 = document.querySelector('.header__mobi__close6');
      closeElem7 = document.querySelector('.header__mobi__close7');
      closeElem8 = document.querySelector('.header__mobi__close8');


hamburger.addEventListener('click', () => {
    menu.classList.add('header__mobi__left__active');
});
    closeElem2.addEventListener('click', () => {
      menu.classList.remove('header__mobi__left__active');
});

closeElem3.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

closeElem4.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

closeElem5.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

closeElem6.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

closeElem7.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

closeElem8.addEventListener('click', () => {
  menu.classList.remove('header__mobi__left__active');
});

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// скролл

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


// $(document).ready(function () {
//     $('.impossible__wrapper').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     });
// });




// слайдер

// let offset = 0;  //смещение от левого края  
// const sliderWrapper = document.querySelector('.impossible__wrapper');

// document.querySelector('.impossible__next').addEventListener('click', function () {
//   offset = offset + 170;
//   if (offset > 340) {
//     offset = 0;
//   }
//   sliderWrapper.style.left = offset + 'px';
// });

// document.querySelector('.impossible__prev').addEventListener('click', function () {
//   offset = offset - 170;
//   if (offset < 0) {
//     offset = 340;
//   }
//   sliderWrapper.style.left = offset + 'px';
// });
