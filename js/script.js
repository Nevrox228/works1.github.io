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


    

    // window.onload = function () {
    //     var box = document.getElementsByClassName('street_style__item');
    //     var btn = document.getElementById('button');
    //     for (let i=4;i<box.length;i++) {
    //         box[i].style.display = "none";
    //     }

    //     var countD = 4;
    //     btn.addEventListener("click", function() {
    //         var box=document.getElementsByClassName('street_style__item');
    //         countD += 4;
    //         if (countD <= box.length){
    //             for(let i=0;i<countD;i++){
    //                 box[i].style.display = "block";
    //             }
    //         }

    //     })
    // }





    // closeElemSm.addEventListener('click', () => {
    //     closeElemSm.classList.toggle('header__close__sm__active');
    //     menu.classList.toggle('header__sidepanel__active');
    //     document.body.classList.toggle('hidden');
    // });

    // closeElem.addEventListener('click', () => {
    //     menu.classList.remove('header__sidepanel__active');
    // });


    // const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 	  modal = document.querySelector('.modal'),
    //       button = document.querySelectorAll('.open'),
    //       hidden = document.querySelectorAll('.hidden'),
	// 	  modalCloseBtn = document.querySelector('[data-close]');

	// function openBlock() {
	// 	hidden.classList.add('show');   //это самый легкий вариант и не самый правильный	
	// }

	// button.addEventListener('click', openBlock);


	// modalTrigger.forEach(btn => {     //это уже правильней тут мы написали что для каждого эллемента с дата атрибутом мы даём такое дествоие 
	// 	btn.addEventListener('click', openBlock);
	// });
    
	// modalCloseBtn.addEventListener('click', closeElement);



    // selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;
//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }
  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}
});

