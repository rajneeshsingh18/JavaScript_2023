'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  // e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//Selecting  elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// const header=document.querySelector('.header')

const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1');
const allbutton = document.getElementsByTagName('button')
console.log(allbutton);

console.log(document.getElementsByClassName('btn'));



//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookied for improved functionality and analtytics'
message.innerHTML = 'We use cookied for improved functionality and analtytics <button class ="btn btn--closecookie">Got it</button>';
const header = document.querySelector('.header')
// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message)



//Delete elements

document
  .querySelector('.btn--closecookie').addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  })



//styles

message.style.backgroundColor="#37383d"
message.style.width = '120%';

//not a inline style show to shown to console
console.log(message.style.height);

//only inline style are shown to console
console.log(message.style.backgroundColor);

//real style or external css style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);


message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 +'px';

document.documentElement.style.setProperty('--color-primary' ,'blue')


//attributes in html

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful logo"

//non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','bankist')

console.log(logo.src); //absolute link
console.log(logo.getAttribute('src')); //relative link

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attribute
console.log(logo.dataset.versionNumber); //3.9

//Classes

logo.classList.add('c')
logo.classList.remove('c' ,'j')
logo.classList.toggle('c')
logo.classList.contains('c'); //not includes


