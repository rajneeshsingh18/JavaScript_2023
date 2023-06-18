'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//document.querySelectorAll('');
const btnOpenModal= document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function(){
    console.log('Button clicked');

    //.classList.remove() property
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i=0 ; i<btnOpenModal.length ;i++)
    btnOpenModal[i].addEventListener('click',openModal);

const closeModal = function(){
    modal.classList.add('hidden');
    // modal.classList.add('.hidden'); //--> not work

    overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);


//keyboard events --> global events 

document.addEventListener('keydown' , function(event){
    console.log(event.key);

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
});
























