'use strict';
const countriesContainer = document.querySelector('.countries');


const renderCountry = function (data, className) {
  const html = `
    <article class="country  ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
       
      </div>
    </article>
   `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const whereAmI = function (lat, lng) {
  // fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=203377718755924867659x87698`
  )
    .then(res => {
      // console.log(res);
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city} , ${data.country}`);

      return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`)
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`)

      return res.json();

    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
  ;
};

// whereAmI(58.508,13.381);

whereAmI(19.037, 72.873);



//Image loading functionality

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img)
//     });

//     img.addEventListener('error' ,function(){
//       reject( new Error('Image not found'))
//     });
//   });
// };


// createImage('.\img\img-1.jpg').then(img =>{
//   console.log("Image 1 loaded");
// })


const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};


let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none'; //hiding image
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));


const loadNPause = async function(){
  try{
    //Load image 1
    let img=  await createImage('img/img-1.jpg');
    console.log('Loaded 1 IMages');
    await wait(2);
    img.style.display = 'none';

    //Load image 2
     img=  await createImage('img/img-2.jpg');
    console.log('Loaded 2 IMages');
    await wait(2);
    img.style.display = 'none';


  }catch(err){
    console.log(err);
  }
}

// loadNPause();

//Part2

const loadAll = async function(imgArr){
  try{
    const imgs = imgArr.map(async img => await
      createImage(img));
      console.log(imgs);

      const imgEl = await Promise.all(imgs);
      console.log(imgEl);
      
      imgEl.forEach(img => img.classList.add('parallel'));
  }
  catch{
    console.error(err);
  }
}

loadAll(
  ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']
)