'use strict';
const countriesContainer = document.querySelector('.countries');

const RenderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const renderCountry = function (data, className) {
    const html = `
    <article class="country  ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} Million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
       
      </div>
    </article>
   `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

////////////////////////////////////////////////////////////////////////////////////////////////
//Error Handling with try..catch
const whereAmI = async function (country) {
    try {
        // Get user's geolocation
        const pos = await getPosition(); // Using the getPosition function to get the user's position
        const { latitude: lat, longitude: lng } = pos.coords; // Extracting latitude and longitude from position object

        // Reverse Geocoding
        const resGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json&auth=203377718755924867659x87698`
        ); // Sending a request to reverse geocode the coordinates
        if (!resGeo.ok) throw new Error('Problem getting location'); // Handling error if reverse geocoding request fails

        const dataGeo = await resGeo.json(); // Parsing the JSON response from reverse geocoding
        console.log(dataGeo);

        // Fetch country information based on geolocation
        const res = await fetch(
            `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
        ); // Sending a request to get country information
        if (!res.ok) throw new Error('Problem getting country'); // Handling error if country information request fails

        const data = await res.json(); // Parsing the JSON response containing country information
        console.log(data);
        renderCountry(data[0]); // Rendering country information on the page
    } catch (error) {
        console.error(`${error} 😭`); // Logging the error with a crying emoji
        RenderError(` ${error.message}`); // Rendering the error message on the page
    }

    // Throwing an error to reject the promise returned from the async function
    // throw error; // This part of the code will never be reached because of the previous error handling
};

// whereAmI();

//////////////////////////////////////////////////////////
// Returning Values from Async Functions


whereAmI()
    .then(req => console.log(`1: ${req}`)) // When the Promise is resolved, log the resolved value
    .catch(err => console.error(`2: ${err.message} 💥`)) // If there's an error, log the error message
    .finally(() => console.log('3: Finished getting location'));

console.log('1: will get location'); // Logging a message indicating that geolocation will be obtained

// Immediately Invoked Function Expression (IIFE)
(async function () {
    // Defining an asynchronous IIFE
    try {
        const city = await whereAmI(); // Waiting for the promise to be resolved and storing the result in 'city'
        console.log(`2: ${city}`); // Logging the city once the promise is resolved
    } catch (err) {
        console.error(`2: ${err.message} 💥`); // Logging an error message if the promise is rejected
    }
    console.log('3: Finished getting location'); // Logging a message indicating that geolocation process is finished
})(); // Invoking the IIFE immediately

/////////////////////////////////////////////////////////////////////
//aysnc function running in sequence.

// Function to fetch JSON data from a URL
const getJson = async function (url, errorMsg = 'Something went wrong') {
    const response = await fetch(url); // Fetching data from the specified URL
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // Throwing an error if the response is not okay
    return await response.json(); // Parsing the response as JSON and returning it
};

// Function to get capital cities of specified countries
const getCountryCapital = async function (c1, c2, c3) {
    try {
        // Fetching data for the specified countries
        const [data1] = await getJson(
            `https://countries-api-836d.onrender.com/countries/name/${c1}`
        );
        const [data2] = await getJson(
            `https://countries-api-836d.onrender.com/countries/name/${c2}`
        );
        const [data3] = await getJson(
            `https://countries-api-836d.onrender.com/countries/name/${c3}`
        );

        // Logging the capital cities of the specified countries
        console.log([data1.capital, data2.capital, data3.capital]);
    } catch (err) {
        console.error(err); // Logging any errors that occur during the process
    }
};

// Calling the getCountryCapital function with specified countries
getCountryCapital('Bharat', 'USA', 'Canada');

////////////////////////////////////////////////////////
//Running Promises in parallel

// Function to get capital cities of specified countries
const getCountryCapital2 = async function (c1, c2, c3) {
    try {
        // Fetching data for the specified countries using Promise.all
        const data = await Promise.all([
            getJson(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
            getJson(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
            getJson(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
        ]);

        // Logging the capital cities of the specified countries from the data array
        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.error(err); // Logging any errors that occur during the process
    }
};

// Calling the getCountryCapital function with specified countries
getCountryCapital2('India', 'USA', 'Canada');

/////////////////////////////////////////////////////////////////////
//Promise Combinators: race(), allSettled() and any()

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

(async function () {
    try {
        // Fetching data from multiple URLs using Promise.race()
        const res = await Promise.race([
            getJson(`https://countries-api-836d.onrender.com/countries/name/bharat`),
            getJson(`https://countries-api-836d.onrender.com/countries/name/USA`),
            getJson(`https://countries-api-836d.onrender.com/countries/name/Canada`)
        ]);

        console.log(res[0]); // Logging the result of the fastest promise to resolve
    } catch (error) {
        console.error(error); // Logging any errors that occur during the process
    }
})();


////////////////////////////////////////////////////////////////////
//Promise.allSettled() —>never shortcircuit

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another succes')
  ])
  .then(res=>console.log(res))

////////////////////////////////////////////////////////////
//Promise.any()
Promise.any([
    Promise.resolve('Success any'),
    Promise.reject('Error'),
    Promise.resolve('Another succes any')
  ])
  .then(res=>console.log(res))
  .catch(err=>console.error("Error in line 526"))