// Javascript Fundamentals - Part 2

////////////////////////////////////
//Activating strict mode
'use strict';

/*

let hasDriversLicence = true;
const PassedTest = true;

//use of strict mode give us error if we try to assign value to undeclared variable 
// if(PassedTest) hasDriverLicence=true  ; //Uncaught ReferenceError: assignment to undeclared variable hasDriverLicence
if(hasDriversLicence) console.log("U can drive a vehicle 🚗");

//In strict mode future keywords are preserved
// const interface="audio"; //interface is a reserved identifier
// const private=6789; //private is a reserved identifier
// const if = 223;//syntax error :missing variable name


///////////////////////////////////////////////////////////////////////////////
//Funtions

function greeting(){
    console.log("Good morning Lets start our new day");
}

//calling  or running or invoking a function a relative terms
greeting();
greeting();
greeting();

// function can recieve and return data

function fruitjuice(orange,apple){
    console.log(orange,apple);
    const juice=`Juice with  ${orange} oranges and ${apple} apples`;
    return juice;
}

const orangejuice = fruitjuice(5,0);
console.log(orangejuice);

const mixjuice = fruitjuice(3,2);
console.log(mixjuice);

const applejuice = fruitjuice(0,2);
console.log(applejuice);

const num = Number('63');
console.log(num);


///////////////////////////////////////////////////////////////////////////////
//Funtion declaration vs. function expression

const age1= calcAge1(2003);
console.log(`Your age is ${age1}`);

//function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}

const age2 = calcAge1(2000);
console.log(`Your age is ${age2}`);

//function expression gives value 

// console.log(`Your age2 is ${calcAge2(2000)}`); //ReferenceError: Cannot access 'calcAge2' before initialization

//anomonous function expression
const calcAge2 = function (birthYear2){
    return 2023 - birthYear2;
}
console.log(`Your age2 is ${calcAge2(2000)}`);



///////////////////////////////////////////////////////////////////////////////
//Arrow function


// In oneliner arrow funtion we don't need parentheses , curly brackets and return keyword.

const calcage3 = birthYear => 2023 -birthYear;
console.log(`Your age3 is ${calcage3(2003)}`)

const yearsUntilRetirement = birthYear => {
    const age = 2023- birthYear;
    const retirementAgeLeft = 60 - age;
    return retirementAgeLeft ;
}

const yearsANDnameUntilRetirement = (birthYear,firstname) => {
    const name = firstname;
    const age = 2023- birthYear;
    const retirementageleft = 60 - age;
    return `${name} has left ${retirementageleft} years before retirement.`
}

console.log(`Retirement age left : ${yearsUntilRetirement(2003)}`);
console.log(yearsANDnameUntilRetirement(2003,"RAJNEESH"));


///////////////////////////////////////////////////////////////////////////////
//Function calling another function
const cutfruitPieces = fruit => fruit *4;

function fruitjuice(orange,apple){
    console.log(`Oranges are ${orange} and apples are ${apple} .`);
    const applePieces = cutfruitPieces(apple);
    const orangePieces = cutfruitPieces(orange);
    const juice=`Juice with  ${orangePieces} pieces of oranges  and juice with ${applePieces} of pieces apples. `;
    return juice;
}

console.log(fruitjuice(4,3));

////////////////////////////////////////////////////////////
//Reviewing function

const calage= year => 2022- year;
  

const yearsANDnameUntilRetirement = function (birthYear,firstname) {
    const name = firstname;
    const age = calage(birthYear);
    const retirementageleft = 60 - age;

    if(retirementageleft > 0){
        console.log(`${name} has left ${retirementageleft} years before retirement.`);
        return retirementageleft;
        // console.log("Age left"); // after return no statement is executed 
    }else{
        console.log(`${name} has left ${retirementageleft} years before retirement.`);
        return -1 ;
    }
}

//console.log() is built in function 
console.log(yearsANDnameUntilRetirement(2003,'Raj'));
console.log(yearsANDnameUntilRetirement(1900,'Raju'));


////////////////////////////////////////////////////////////
//Arrays


const friend1= 'Rajneesh';
const friend2= 'Ankur';
const friend3= 'Yashwant';

const friends = [ 'Rajneesh' , 'Ankur' , 'Yashwant']

const Age = new Array(2003,2000,2010,1999);
console.log(Age);

console.log(friends);
console.log(friends[0]); //Accessing an element from an array

friends[1] = 'kushhal';
// friends= {'Bob' , 'Rohan'}; we cannot change more than two value at a time
console.log(friends)

console.log(friends.length) //gives length of an array 
console.log(friends.length-1) // gives last index from an array
console.log(friends[friends.length-1]); // accessing last element from an array

const Rajneesh = [ 'Rajneesh ' , 'Singh' , 2022-2003 , 'Student' , friends];
console.log(Rajneesh)
console.log(Rajneesh.length)

//exercise
const year = [2000 , 2003 ,1999 ,1997];

//arrow function to calculate age
const calcAge = birthYear => 2023 -birthYear;

const age1 = calcAge(2000);
const age2 = calcAge(2003);
const age3 = calcAge(1999);
const age4 = calcAge(1997);
const age = [calcAge(year[0]),calcAge(year[1]),calcAge(year[2]),calcAge(year[year.length-1])];
console.log(age);
console.log(age.length);



//////////////////////////////////////////////////////////////////////////////////
//Basic Array opertaions and methdos

const friends = [ 'Rajneesh' , 'Ankur' , 'Yashwant'];

//push() -> Adds a element at end of an array
friends.push('Narayan');
console.log(friends);

const pushed = friends.push('Utkarsh');
console.log(friends);
console.log("new lenght after pushed : "+ pushed);

//unshift() -> Adds a element at the starting of an array
friends.unshift('Raj');
console.log(friends);

//Delete or remove element
friends.pop(); //last element popped Utkarsh
const popped =friends.pop(); //gives string value shaan as it is popped
console.log(popped);
console.log(friends);

friends.shift();//first element removed
console.log(friends);


//indexOf() and includes()
console.log(friends.indexOf('Yashwant')); //2
console.log(friends.indexOf('RAJU')); //-1

console.log(friends.includes('Rajneesh')); //true
console.log(friends.includes('Rohan'));  //false

if(friends.includes('Ankur')){
    console.log("Yes u have friend name ANkur");
}



//////////////////////////////////////////////////////////////////////////////////
//Introduction to objects -->{key : value ,  }  pairs
const raj = {
    firstName : 'Rajneesh' ,
    lastName : 'Singh',
    age : 2022 - 2003,
    job : 'Student',
    friends : ['Ankur' , 'Yashwant' , 'shaan']
}

//In objects order does not matter while accessing but in array order matters
console.log(raj);

//////////////////////////////////////////////////////////////////////////
//Member access operator or DOT vs Bracket(expression ) operator for objects
console.log(raj.firstName);
console.log(raj.job);
console.log(raj['lastName']);

const namekey = 'Name' ;
console.log(raj['first' + namekey]);
console.log(raj['last' + namekey])

// console.log(raj.'last'+namekey) //Syntax error : missing name after . operator

const interestedIn = prompt('What do you want to know about raj ? choose b/w firstName , lastName , job  , friends , age')
// console.log(raj.interestedIn) // gives undefined

// console.log(raj[interestedIn])

if(raj[interestedIn]){
    console.log(raj[interestedIn])
}else{
    console.log(`Wrong input! choose b/w firstName , lastName , job  , friends , age `)
}


//adding a key value pair in object data structure in js
raj.location = 'Delhi';
raj.instaID = '@rajneesh_19'
console.log(raj);

//Challenge 
// raj has 3 friends and his best friend is Ankur


console.log(`${raj.firstName} has ${raj.friends.length} friends and his best friend is ${raj.friends[0]}`);
// check MDN docs operator percendence for more info --> dot operator has more precedence than bracket



////////////////////////////////////////////////////////////////////////////////
//Object Methods -> Function inside a curly brackets is known as object methods 

const raj={
    firstName : 'Rajneesh' ,
    lastName : 'sINGH',
    birthYear : 2003,
    job : 'Student',
    friends : ['Ankur ', 'Yashwant' , 'SHAAN'],
    hasDrivingLicence : true ,

    // calcAge : function(birthYear){
    //     return 2023 - birthYear ;
    // }

    // calcAge : function(){
    //     console.log(this);
    //     return 2034 - this.birthYear;
    // }


    calcAge : function(){
       
    this.age = 2034 - this.birthYear
    return this.age

    }
    ,
    getSummary : function(){
        return `Rajneesh is ${raj.calcAge()} years old ${raj.job} , and  he has ${ (this.hasDrivingLicence ? "a DRIVER LICENCE" : "Not a DL")}. `
    }

}

console.log(raj.calcAge(2003));
console.log(raj['calcAge'](2000));

// console.log(raj.calcAge());
console.log(raj.calcAge());

console.log(raj.age); 

console.log(raj.age);

//Challenge
//Rajneesh is 19 year old student , and he has a driver licence

console.log(raj.getSummary());



////////////////////////////////////////////////////////////////////////////////
//Iteration the for loop 

// for loop keep running until the condition is true if condition in false we exit the loop
for(let i=1 ; i<=10 ; i++){
    console.log(`Lifting the weight with repetition ${i} 🏋️ `)
}




/////////////////////////////////////////////////////////////////////////
//Looping Array  , Break and continue 

const raj = ['Rajneesh' ,'Singh',2022 - 2003,'Student',
            ['Ankur' , 'Yashwant' , 'shaan'],true]

const types = [];

//printing the array elements
// for( let i=0 ; i<raj.length ; i++){
//     console.log(raj[i]);
// }

for( let i=0 ; i<raj.length ; i++){
    //Reading from raj array
    console.log(raj[i] , typeof raj[i]);

    //filling data in types array
    // types[i] = typeof raj[i];
    types.push(typeof raj[i]);
}

console.log(types)

const years = [2003 , 2000 ,1993 , 1995];
const ages = [];

for(let i=0 ; i<years.length ; i++){
    //reading years[] array element
    console.log(years[i]);

    //filling data in ages[] array
    ages.push(2022-years[i]);
}

console.log(ages);

//continue keyword

console.log("-----ONLY STRINGS -------")
for(let i= 0 ; i <raj.length ; i++){
    if(typeof raj[i] !== 'string') continue

    console.log(raj[i] , typeof raj[i])
}

console.log("-----ONLY numbers -------")

for(let i= 0 ; i <raj.length ; i++){
    if(typeof raj[i] !== 'number') continue

    console.log(raj[i] , typeof raj[i])
}

// break keywords
console.log("-----Break on  numbers -------")

for(let i= 0 ; i <raj.length ; i++){
    if(typeof raj[i] === 'number') break

    console.log(raj[i] , typeof raj[i])
}

//lOOPING BACKWARDS 

const cars = ['BMW' , 'AUDI' , 'HONDA' , 'MERCEDES']

//reversing an array
for( let i= cars.length - 1 ; i>=0 ; i--){
    console.log(cars[i]);
}

//loops in loops

for(let exercise= 1 ; exercise<=3 ; exercise++){
    console.log(`---------Exercise ${exercise}---------`);

    for(let rep= 1 ; rep <=5 ; rep++){
        console.log(`Exercice ${exercise} : Lifiting the weight repition no. ${rep}`)
    }
}


////////////////////////////////////////////////
//While loop and random dice 

//while loop is similar to for loop but 
let i=0;
while(i<=7){
    console.log("Hello world ");
    i++;
}

// we can run while loop without without counter or unary operator only we need is condition

//generating random dice number

let dice = Math.trunc(Math.random()*6) + 1;


while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;
    if(dice==6){
        
        console.log(`Loop is about to end dice = ${dice} ....`)
    }
}

*/