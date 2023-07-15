'use strict';

const countriesContainer = document.querySelector('.countries');

const RenderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// https://countries-api-836d.onrender.com/countries/


//AJAX request call in json format
// Auth    HTTPS    CORS(Cross-Origin Resource Sharing)

/*
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET' ,`https://countries-api-836d.onrender.com/countries/name/${country}`);
request.send()
// console.log(request.responseText); noy work

request.addEventListener('load' , function(){

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} Million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
       
      </div>
    </article>
   `;
    countriesContainer.insertAdjacentHTML('beforeend' , html);
    countriesContainer.style.opacity = 1;
});
}

getCountryData('portugal');
getCountryData('usa');
getCountryData('bharat');
getCountryData('china');
*/

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

/*
const getCountryDataAndNeighbour = function(country){
    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET' ,`https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();
    console.log(request.responseText);

    request.addEventListener('load' ,function(){
      const [data] =JSON.parse(this.responseText);
      console.log(data);

      //Render country 1
      renderCountry(data);

      const neighbour = data.borders?.[0];
      if(!neighbour) return ;

      //AJAX call for country 2
      const request2 = new XMLHttpRequest();
      request2.open('Get' ,`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
      request2.send();

      request2.addEventListener('load',function(){
          const data2 = JSON.parse(this.responseText);
          console.log(data2);
          renderCountry(data2 ,'neighbour');
      });
    });
};
  
  // getCountryDataAndNeighbour('portugal');
  getCountryDataAndNeighbour('bharat');


  //Callback hell 
  setTimeout(()=>{
    console.log('1 second passed');
    setTimeout(()=>{
      console.log('2 second passed');
      setTimeout(()=>{
        console.log('3 second passed');
        setTimeout(()=>{
          console.log('4 second passed');
        },1000)
      },1000)
    },1000)
  },1000)

*/


//Promises and the fetch API --> ES6




//consuming promises --> .then() , .json() 

// const getCountryData2 = function (country) {

//   //Modern ways of AJAX call
//   const request3 = fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     })

// }


//consuming promises --> .then() , .json() 
/*
const getCountryData2 = function(country){

  //Modern ways of AJAX call
  const request3 = fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
  .then(response =>response.json())
  .then(data=> renderCountry(data[0]));

}
*/

/*
//chaining promisis to overcome callback hell 
const getCountryData2 = function(country){

  //Modern ways of AJAX call
  const request3 = fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
  .then(response =>response.json()) ///json() and then() return a promise
  .then(data=>{ 
    renderCountry(data[0]);
    const neighbour = data[0]?.borders[0];

    if(!neighbour) return;

    //country
    return  fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
  })
  .then( response => response.json())
  .then( data => renderCountry(data , 'neighbour'));

}
getCountryData2('bharat');
// getCountryData2('germany');

*/


//Handling Rejected Promises => .catch( err => alert(err))

const getJson = async function (url, errorMsg = 'Something went wrong') {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
  return await response.json();
}

// const getCountryData2 = function(country){

//   //Modern ways of AJAX call
//   const request3 = fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//   .then(response =>{
//     console.log(response);

//     if(!response.ok){
//       throw new Error(`Country not found ${response.status}`)
//     }

//     return response.json()/* ,err => alert(err) */}
//    ) ///json() and then() return a promise
//   .then(data=>{ 
//     renderCountry(data[0]);
//     const neighbour = data[0]?.borders[0];

//     if(!neighbour) return;

//     //country
//     return  fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
//   })
//   .then( response => response.json() /*,err => alert(err)*/)
//   .then( data => renderCountry(data , 'neighbour'))
//   .catch(err => {
//     console.error(`${err}🖤😰😰`);
//     RenderError(`SOMETHING WENNT WRONG ${err.message}🖤😰😰 `);
//   })
//   .finally(()=> {
//         countriesContainer.style.opacity = 1;
//   });
// };


const getCountryData2 = function (country) {

  getJson(`https://countries-api-836d.onrender.com/countries/name/${country}`,
    `Country not found`
  )
    //Modern ways of AJAX call
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];
      // const neighbour = 'vegtr';

      if (!neighbour) throw new Error('No neighbour found !');

      //country 2
      return getJson(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}🖤😰😰`);
      RenderError(`SOMETHING WENNT WRONG ${err.message}🖤😰😰 `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
const btn = document.querySelector('.btn-country');
btn.addEventListener('click', function () {
  // getCountryData2('bharat')

});

//country without neighbour
// getCountryData2('australia');



//The event loop 
//--> microstack queue 
//--> callback queue
//--> Web API
//--> JS Engine -> heap memory -> global execution context

/*
console.log('Test start');

setTimeout(() => console.log(`0 SEC TIMER`), 0);

//TO CREATE A PROMISE immediatley have success value

Promise.resolve('Resolved promise 1').then(res => console.log(res)); //-->beacause it is present in microtask queue has priority over callback queue

Promise.resolve('Resolve promise 2').then(res => {

  // for (let i = 0; i < 10000000; i++) { }
  // console.log(res);
})


console.log('Test end');


//Building a promise

const lotteryPromise = new Promise(function (resolve, reject) {

  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN ')  //fulfilled
    } else {
      reject(new Error('You lost your money 😭')); //rejected
    }
  }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));


//Promisifying setTimeout

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

wait(1).
  then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds')
    return wait(2);
  })
  .then(() => {
    console.log('I waited for 3 seconds')
    return wait(3);
  })
  .then(() => console.log('I waited for 4 seconds'));

*/

//Callback hell 
/*
setTimeout(()=>{
  console.log('1 second passed');
  setTimeout(()=>{
    console.log('2 second passed');
    setTimeout(()=>{
      console.log('3 second passed');
      setTimeout(()=>{
        console.log('4 second passed');
      },1000)
    },1000)
  },1000)
},1000)
*/


//creat a fulfilled promise immediately

// Promise.resolve('rahiiii').then(x => console.log(x));
// Promise.reject(new Error(`Problem !`)).catch(x => console.error(x))

//Promisifyung the geoloaction API
navigator.geolocation.getCurrentPosition(
  position =>console.log(position),
  err => console.error(err)
);

console.log('Getting position')

//Consuming Promises with Async/Await
console.log('First');



//Error handling with try catch

/*
try{
  let y =1;
  const x=2;
  x=3;
}catch(err){
  alert(err.message)
}
*/

const getPosition = function(){
  return new Promise(function (resolve , reject){
    navigator.geolocation.getCurrentPosition(
    resolve ,reject
    );
  })
}

const whereAmI = async function(country){

  try{ //GeoLocation
    const pos = await getPosition();
    const {latitude : lat , longitude : lng}=pos.coords

    //Reverse GeoCoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=203377718755924867659x87698`
    )
    if(!resGeo.ok) throw new Error('Promblem getting location')

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGerbtdo.c45ountry}`) //await return a resolved value of a promise 

    if(!resGeo.ok) throw new Error('Promblem getting country')
    
    const data = await res.json()
    console.log(data);
    renderCountry(data[0])
    return `You are in ${dataGeo.city} , ${dataGeo.country}`

  }catch(error){
    // console.error(`${err} 😭`);
    RenderError(` ${err.message}`)


    //Reject promise returned from async function
    throw err;
  }  
 }
  
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();

console.log("1: will get location");
// const city = whereAmI(); //-->Pending promise
// console.log(city);

// whereAmI().then(req=>console.log(req))

whereAmI()
.then(req=>console.log(` 2: ${req}`))
// .catch(err=>console.error(`2 : ${err.message} 💥`))
.finally(()=>console.log("3:Finished getting location"));

//IIFE
(async function(){
  try{
    const city= await whereAmI()
    console.log(` 2: ${city}`)
  }catch(err){
    console.error(`2: ${err.message} 💥`);
  }
  console.log("3:Finished getting location")
})


//Running Promises in Parallel

/*
const getCountryCapital = async function(c1,c2,c3){
  try{
      // const [data1]=await getJson(`https://countries-api-836d.onrender.com/countries/name/${c1}`);

      // const [data2]=await getJson(`https://countries-api-836d.onrender.com/countries/name/${c2}`);

      // const [data3]=await getJson(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

      // console.log([data1.capital ,data2.capital,data3.capital]);

      const data = await Promise.all([
        getJson(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
        getJson(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
        getJson(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
      ]);

      console.log(data.map(d=>d[0].capital));

      
  }catch(err){
    console.err(err);
  }
}

getCountryCapital('bharat','USA','Canada')
*/

/*
//Combinator for Promise : race
(async function(){
  const res = await Promise.race([
      getJson(`https://countries-api-836d.onrender.com/countries/name/bharat`),
      getJson(`https://countries-api-836d.onrender.com/countries/name/USA`),
      getJson(`https://countries-api-836d.onrender.com/countries/name/Canada`)
    ]);
  console.log(res[0]);
})();
*/

//Combinator for Promise : race
const timeout = function(sec){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error('request took too long!'))
    },sec*1000)
  })
}

Promise.race([
  getJson(`https://countries-api-836d.onrender.com/countries/name/bharat`),
  timeout(1)
  // timeout(0.1) s//Error: request took too long! at script.js:495:14

])
.then(data=>console.log(data[0]))
.catch(err=>console.error(err))


// Promise.allSettled() --> never shortcircuit

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another succes')
])
.then(res=>console.log(res))


Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another succes')
])
.then(res=>console.log(res))
.catch(err=>console.error("Error in line 526",err))

//Promise.any()

Promise.any([
  Promise.resolve('Success any'),
  Promise.reject('Error'),
  Promise.resolve('Another succes any')
])
.then(res=>console.log(res))
.catch(err=>console.error("Error in line 526"))