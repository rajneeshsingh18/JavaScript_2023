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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*

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

message.style.backgroundColor = "#37383d"
message.style.width = '120%';

//not a inline style show to shown to console
console.log(message.style.height);

//only inline style are shown to console
console.log(message.style.backgroundColor);

//real style or external css style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);


message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'blue')


//attributes in html

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful logo"

//non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist')

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
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c'); //not includes


//smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y) ', window.pageXOffset, window.pageYOffset);

  console.log('Height/width viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);


  //scrolling

  window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset,)

  //smooth scrolling
  //   window.scrollTo({
  //     left :s1coords.left + window.pageXOffset,
  //     right : s1coords.top + window.pageYOffset,
  //      behavior : 'smooth', 
  // }) 

  section1.scrollIntoView({ behavior: "smooth" })
})

//Types of Events and Event Handlers

const h1 = document.querySelector('h1')

const alertH1 = function (e) {
  alert('addEventListener : Great You are reading the heading : D')

  // h1.removeEventListener('mouseenter',alertH1)
}
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 4000);

// h1.addEventListener('mouseenter',function(e){
//   alert('addEventListener : Great You are reading the heading : D')
// })

// another way of adding event listener
// h1.onmouseenter= function(e){
//   alert('onmouseenter : Great ! heading')
// }


//Event Propagation : Bubbling AND Capturing --> Section 13 : 190

//Event Propagation in practise


//random color --> rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //stop propagation
  // e.stopPropagation();
})


document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
})


document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
})






//—>Scrolling smooth: but lower performance

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//    const id = this.getAttribute('href');
//    console.log(id);
//    document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

//Event Delegation : Implementing Page Navigation

//1.Add event listenser to common parent element
//2. Determine  what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
  // console.log(e.target);
  e.preventDefault();


  //Maatching strategy
  if(e.target.classList.contains('nav__link')){
   const id = e.target.getAttribute('href');
   console.log(id);
   document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})


//DOM traversing
const h1 = document.querySelector('h1')


//Going downward : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color ='white'
h1.lastElementChild.style.color="orangered"

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background='var(--gradient-secondary)'

h1.closest('h1').style.background='var(--gradient-primary)'


//going sideways : sibling

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1 ) el.style.transform = 'scale(0.2)';
})



//Tabbed Component


const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container')

const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if(!clicked) return;

  // remove Active classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'))

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Activate tab
  clicked.classList.add('operations__tab--active');


  //Activate content area

  console.log(clicked.dataset.tab);
  document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
})


//Passing Arguments to Event handlers

//Menu fade animation

const nav =document.querySelector('.nav')

const handleHover = function(e , opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link')

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity = opacity;
    })

    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5)
})

// nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout',function(e){
  handleHover(e,1)
})

*/
//sticky navigation

const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const initialCoord = section1.getBoundingClientRect();
console.log(initialCoord);

window.addEventListener('scroll', function (e) {
  console.log(window.screenY);

  if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//Sticky Navigation : Intersetion Observer API

// const obsCallback = function (entries , observer){

//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// }

// const obsOptions ={
//   root : null,
//   threshold : [0,0.2], //at 10%
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions)

// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//Revealing Elements on Scroll

//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: '-200px',
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy Loading Images

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {});

imgTargets.forEach(img => imgObserver.observe(img));

//slider

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//Lifecycle DOM events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML paresed and dom tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue='';
// })

//Defer and Async Script Loading
