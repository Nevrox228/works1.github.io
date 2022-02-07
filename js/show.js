//// show all
const hiddenStreet = document.querySelector('.hidden_btn_street'),
      hiddenTrends = document.querySelector('.hidden_btn_trends'), 
      hiddenCelebrity = document.querySelector('.hidden_btn_celebrity'),     
      openElem = document.querySelector('.open'),  
      openElem1 = document.querySelector('.open1'),
      openElem2 = document.querySelector('.open2'); 
        


function openForStreet() {            
    hiddenStreet.classList.toggle('show');
    openElem.classList.add('beauty__btn__active');
}   

function openForTrends() {            
    hiddenTrends.classList.toggle('show');
    openElem1.classList.add('beauty__btn__active');
}

function openForCelebrity() {            
    hiddenCelebrity.classList.toggle('show');
    openElem2.classList.add('beauty__btn__active');
}

openElem.addEventListener('click', openForStreet);
openElem1.addEventListener('click', openForTrends);
openElem2.addEventListener('click', openForCelebrity);