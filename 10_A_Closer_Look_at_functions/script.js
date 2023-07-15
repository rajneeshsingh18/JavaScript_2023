'use strict';

//Default parameters
const bookings = [];

const createBooking = function(fligthNUm , numPassenger =1 ,price =199 *numPassenger)
    {
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
// console.log(bookings);


//PASSING ARGUMENTS AS VALUE VS REFERENCE
//--> Javascript do not have feature that allow passing by reference

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

checkIn(flight,rajneesh);
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
newPassport(rajneesh);
// checkIn(flight,rajneesh)



//First-class and Higher order functions


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
    console.log(`Transformed by : ${fn.name} `); // .name property for function
}

transformer('JavaScript is the Best! ' ,upperFirstWord);

transformer('Best web language is Javascript' ,oneWord);

/*

//Js uses callbacks all the time
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

const greetArr = (greeter) => (name) =>console.log(`${greeter} ${name}`);

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

//.call() method

book.call(airIndia, 23 ,'Rajneesh'); //this keyword pointing airIndia
console.log(airIndia);

book.call(NeoIndia ,1321 ,'Narayan');//this keyword pointing NeoIndia
book.call(NeoIndia ,1121 ,'Utkarsh');
console.log(NeoIndia);

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



//bind method --> manually set this keyword return a new function

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


//IIFE : Immediately Invoked Function Expression (IIFE)

const runOnce = function(){
    console.log('This will never run again');
}
runOnce();

//IIFE
(function(){
    console.log('This will never run again');
    // const isPrivate = 45;
})();

// console.log(isPrivate);

// () => console.log('tHIS IS ALSO NEVER RUN AGAIN');
(() => console.log('tHIS IS ALSO NEVER RUN AGAIN'))();


{
    const isPrivat3 =292;
    var notPrivate =12;
}
// console.log(isPrivat3);
console.log(notPrivate);



/*
:::::::::::::::Closures::::::::::::::::::

--> A closure is the closed-over variable environment of the execution context in which a function was created , evne after that execution context is gone;
                                    
-->A closure gives a function access to all the variables of its parent function , even after that parent function has returned . The function keeps a reference to its outer scope , which preserves the scope chain throughtout time.

--> A closure makes sure that a function doesn't loose connection to variables that existed at the functions birth place

-->A closure is like a backpack that a function carries around wherever it goes . This backpack has all the variables that were present in the enivroment where the function was created
*/


const passengerBooking = function(){
    let passengerCount = 0 ;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger.`);
    }
}

const booker = passengerBooking();

booker();
booker();
booker();

console.dir(booker)

let f ;
const g = function(){
    const a =23 ;
    return f = function(){
        console.log(a*2);
    }
    
}

g();
f();
console.dir(f);

const h = function(){
    const b  = 100;
    return f = function(){
        console.log(b*3);
    };
}


//Re-assinging f function
h();
f();
console.dir(f);

//Example 2 closures

const boardPasenegers = function( n , wait){
    // const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups , each with ${perGroup} passenegers`);
    },wait*1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPasenegers(180 ,3)
// console.dir(boardPasenegers)






