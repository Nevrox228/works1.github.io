const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// const txt = document.querySelectorAll('.procent__txt'),
//     line = document.querySelectorAll('.procent__line span');

// txt.forEach( (item, i) => {
//     line[i].style.width = item.innerHTML;
// });




// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       line = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     line[i].style.width = item.innerHTML;
// });