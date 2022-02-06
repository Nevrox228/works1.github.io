  ////heart

  const heart = document.querySelector('.articles__item__right__svg__1'),
  heart1 = document.querySelector('.articles__item__right__svg__2'),
  heart2 = document.querySelector('.articles__item__right__svg__3');


  heart.addEventListener('click', () =>  {
  heart.classList.toggle('articles__item__right__svg__active');
  });

  heart1.addEventListener('click', () =>  {
  heart1.classList.toggle('articles__item__right__svg__active');
  });

  heart2.addEventListener('click', () =>  {
  heart2.classList.toggle('articles__item__right__svg__active');
  });
