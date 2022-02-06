window.addEventListener('DOMContentLoaded', () => { 
  
    const hamburger = document.querySelector('.header__top__burger'),
      menu = document.querySelector('.header__sidepanel'),
      closeElemSm = document.querySelector('.header__close__sm'),
      closeElem = document.querySelector('.header__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('header__sidepanel__active');
        document.body.style.overflow = 'hidden';
    });

    closeElemSm.addEventListener('click', () => {
        closeElemSm.classList.toggle('header__close__sm__active');
        menu.classList.toggle('header__sidepanel__active');
        document.body.classList.toggle('hidden');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('header__sidepanel__active');

        document.body.style.overflow = 'auto';
    });


    const searchIcon = document.querySelector('.header__top__search__input__img'),
          form = document.querySelector('.header__top__search__input'),
          body = document.querySelector('.body'),
          headerTopSocial = document.querySelector('.header__top__social'),
          headerTopLogin = document.querySelector('.header__top__login');

          
     ////search

    searchIcon.addEventListener('click', () => {
        form.classList.toggle('header__top__search__input__active');
        body.classList.toggle('body__active');
        headerTopSocial.classList.toggle('hidden__btn');
        headerTopLogin.classList.toggle('hidden__btn');        
        searchIcon.classList.toggle('header__top__search__input__img__active');
    });

    body.addEventListener('click', (e) => {
		if (e.target === body) {
        form.classList.remove('header__top__search__input__active');
        body.classList.remove('body__active');
        headerTopSocial.classList.toggle('hidden__btn');
        headerTopLogin.classList.toggle('hidden__btn');
		}
	});


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




     //// show all
     const hiddenStreet = document.querySelector('.hidden_btn_street'),
     hiddenTrends = document.querySelector('.hidden_btn_trends'), 
     hiddenCelebrity = document.querySelector('.hidden_btn_celebrity'),           
     openElem = document.querySelector('.open'),  
     openElem1 = document.querySelector('.open1'),
     openElem2 = document.querySelector('.open2');    

    function openForStreet() {            
    hiddenStreet.classList.add('show');
    }   

    function openForTrends() {            
    hiddenTrends.classList.add('show');
    }

    function openForCelebrity() {            
    hiddenCelebrity.classList.add('show');
    }

    openElem.addEventListener('click', openForStreet);
    openElem1.addEventListener('click', openForTrends);
    openElem2.addEventListener('click', openForCelebrity);


    ////heart

    // function heartActive () {  //имя функции
	// 	// tabsContent.forEach(item => {   //для всех tabcontent пишем стиль display none 
	// 	// 	item.style.display = 'none';
	// 	// });

	// 	heart.forEach(heart => {  //для всех tabs удаляем класс активности
	// 		heart.classList.toggle('articles__item__right__svg__active');
	// 	});
	// }
    

    // heartActive();

   
        
});

