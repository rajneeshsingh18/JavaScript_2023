'use strict';

const countriesContainer = document.querySelector('.countries');

const RenderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
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
// console.log(request.responseText);

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

const renderCountry = function(data , className){
  const html = `
  <article class="country  ${className}">
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
  // countriesContainer.style.opacity = 1;
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

// const getCountryData2 = function(country){

//   //Modern ways of AJAX call
//   const request3 = fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//   .then(function(response){
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//     renderCountry(data[0]);
//   })

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

const getJson = function(url , errorMsg = 'Something went wrong'){
  return fetch(url).then(
    response =>{
      if(!response.ok) throw new Error(`${errorMsg}(${response.status})`);

      return response.json();
    });
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


const getCountryData2 = function(country){

  getJson(`https://countries-api-836d.onrender.com/countries/name/${country}` ,
  `Country not found`
  )
  //Modern ways of AJAX call
  .then(data=>{ 
    renderCountry(data[0]);
    const neighbour = data[0]?.borders[0];
    // const neighbour = 'vegtr';

    if(!neighbour) throw new Error('No neighbour found !');

    //country 2
    return  getJson(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}` , 'Country not found');
  })
  .then( data => renderCountry(data , 'neighbour'))
  .catch(err => {
    console.error(`${err}🖤😰😰`);
    RenderError(`SOMETHING WENNT WRONG ${err.message}🖤😰😰 `);
  })
  .finally(()=> {
        countriesContainer.style.opacity = 1;
  });
};
const btn = document.querySelector('.btn-country');
btn.addEventListener('click' , function(){
  getCountryData2('bharat')
});

getCountryData2('australia');