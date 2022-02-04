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

    ////search
    const searchIcon = document.querySelector('.header__top__search__input__img'),
          form = document.querySelector('.header__top__search__input'),
          body = document.querySelector('.body'),
          headerTopSocial = document.querySelector('.header__top__social'),
          headerTopLogin = document.querySelector('.header__top__login');

          
    searchIcon.addEventListener('click', () => {
        form.classList.toggle('header__top__search__input__active');
        body.classList.add('body__active');
        headerTopSocial.style.display = 'none';
        headerTopLogin.style.display = 'none';
    });


    body.addEventListener('click', (e) => {
		if (e.target === body) {
        form.classList.remove('header__top__search__input__active');
        body.classList.remove('body__active');
        headerTopSocial.style.display = '';
        headerTopLogin.style.display = '';
		}
	});


    window.onload = function () {
        var box = document.getElementsByClassName('street_style__item');
        var btn = document.getElementById('button');
        for (let i=4;i<box.length;i++) {
            box[i].style.display = "none";
        }

        var countD = 4;
        btn.addEventListener("click", function() {
            var box=document.getElementsByClassName('street_style__item');
            countD += 4;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }

        })
    }

});

