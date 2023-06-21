'use strict';

//Default parameters
const bookings = [];

const createBooking = function(
    fligthNUm , 
    numPassenger =1 ,
    price =199 *numPassenger)
    {
    
    //ES5
    // numPassenger = numPassenger || 1 ;
    // price = price || 199;
    const booking = {
        fligthNUm,
        numPassenger,
        price,
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123');
createBooking('AIR34',2,800);
createBooking('Air' ,4);
createBooking('bO28' ,14);
createBooking('25bI' ,undefined , 125)

//PASSING ARGUMENTS AS VALUE VS REFERENCE

const flight = 'BI172';
const rajneesh ={
    name : 'Rajneesh Singh',
    passport : 734482424,
}

const checkIn = function(fligthNUm , passenger){
    fligthNUm = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport ===  734482424){
        alert('Checked in');
    }else{
        alert('Wrong Passport!');
    }
}

// checkIn(flight,rajneesh);
// console.log(flight);
// console.log(rajneesh);

//Is same as doing
// const fligthNUm = flight;
// console.log(fligthNUm);
// const passenger = rajneesh;
// console.log(rajneesh);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000000);
}
// newPassport(rajneesh);
// checkIn(flight,rajneesh)



//First - class and Higher order functions


//Function accepting callback function

const oneWord = function(str){
    return str.replace(/ /g , '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first , ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher -order function Abstraction happening here
const transformer = function(str , fn){
    console.log(`Originalstring : ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by : ${fn.name} `);
}

transformer('JavaScript is the Best! ' ,upperFirstWord);

transformer('Best web language is Javascript' ,oneWord);

/*
const high5= function(){
    console.log(`Hello 👋`);
}

document.body.addEventListener('click',high5);
['Raj' ,'Anu' ,'Jash'].forEach(high5);

*/

//function returning functions


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greetHey = greet('Morning');
greetHey('Rajneesh');
greetHey('Jashwant');

greet('Good Evening')('Rajneesh');


//Arrow function returning functions difficult

const greetArr = greeter => name =>console.log(`${greeter} ${name}`);

greetArr('Hello')('Yashwant');



//call and apply methods

const airIndia = {
    airline : "Air India",
    iataCode : "AI",
    bookings : [],

    book(fligthNUm , name){
        console.log(
            `${name} booked seat on ${this.airline} flight ${this.iataCode}${fligthNUm}`);
    this.bookings.push({flight : `${this.iataCode}${fligthNUm}` ,name});
},
};

airIndia.book(239 ,'Rajneesh Singh');
airIndia.book(432,'Ramo');
console.log(airIndia);

const NeoIndia = {
    airline : "Neo India",
    iataCode : "AI",
    bookings : [],
}


const book = airIndia.book;

//Does not work this pointing to undefined
// book(23 , 'Rajneesh');

book.call(airIndia, 23 ,'Rajneesh');
console.log(airIndia);

book.call(NeoIndia ,1321 ,'Narayan');
book.call(NeoIndia ,1121 ,'Utkarsh');

const swiss ={
    airline : "Swiss Air lines",
    iataCode : "SW",
    bookings : [],
}

book.call(swiss,213,'Kushhal');

//Apply method --> old way not mostly used we pass array as arugment after this keyword e.g. ('swiss')
const flightData = [131 ,'Rohit'];
book.apply(swiss ,flightData);
console.log(swiss);

const flightData2 = [144 ,'Rahul'];

book.call(swiss ,...flightData2);



//bind method

const bookNI = book.bind(NeoIndia);
bookNI(2432,'Shaan')
console.log(NeoIndia);

const bookSW = book.bind(swiss);
bookSW(213,'RAJ');
console.log(swiss);

const bookSW23 = book.bind(swiss , 23);
bookSW23('Ayush');
bookSW23('Martha');

//bind With Event listeners

airIndia.planes = 278 ;
airIndia.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

//airIndia.buyPlane();

document.querySelector('.buy').addEventListener('click' ,airIndia.buyPlane.bind(airIndia))


//partial appliaction

const addTax = (rate , value) => value + value *rate;

console.log(addTax(0.1,200));

const addGST = addTax.bind(null , 0.28);
// addGST = value => value + value * 0.23 ;

console.log(addGST(2000));
console.log(addGST(145));

const addTax2 = function(rate){
    return function(value){
        return value + value *rate;
    }
}

const addGST2 = addTax2(0.23);
console.log(addGST2(100));
console.log(addGST2(1050));

console.log(addTax2(0.18)(100));
