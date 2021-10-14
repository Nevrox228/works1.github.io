const button = document.querySelector('.function__btn'),
	  info = document.querySelector('.info'),
	  closeElem = document.querySelector('.info__close');

button.addEventListener('click', () => {
	info.classList.add('info__active');
});

closeElem.addEventListener('click', () => {
	info.classList.remove('info__active');
});


const button__mini = document.querySelector('.function__btn__mini'),
	  info__mini = document.querySelector('.info__mini'),
	  closeElem__mini = document.querySelector('.info__mini__close');

button__mini.addEventListener('click', () => {
	info__mini.classList.add('info__mini__active');
});

closeElem__mini.addEventListener('click', () => {
	info__mini.classList.remove('info__mini__active');
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}