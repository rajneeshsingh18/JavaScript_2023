'use strict';

/*

function calcAge(birthYear){
    const age = 2037 - birthYear;

    // console.log(firstName);
    // console.log(lastName); //lastName is not defined at calcAge 

    function printAge(){
        let output = `${firstName} You are ${age} , born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1991 & birthYear <= 1996){
            var millenial = true ;

            //creating New variable with same name as outer  scopes variable
            const firstName = "Yashwant";

            //Reassigning outre scope's variable
            output = "New Output";
            const str = `Oh , and You are a millenial , ${firstName}`;
            console.log(str);

            function add(a,b){
                return a+b;
            }

        }

        // console.log(str); //--> error cannot be accessed outside the block scope
        console.log(millenial);  //var declared with var keyword are function scoped.
        // console.log(add(2,3)); //error function are blocked scoped in strict mode;
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = "Rajneesh";
calcAge(1995);

// console.log(age); //--> error cannot be accessed outside the scope
// printAge(); //--> error



//Hoisting --> let , const and var

console.log(me); //undefined
// console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

var me = 'Rajneesh'; 
let job = 'working';
const year = 1991 ;


//Hoisting in Functions

console.log(addDec(2,4));
// console.log(addExpr(2,3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow); 
// console.log(addArrow(3,4)); //Uncaught TypeError: addArrow is not a function --> calling undefined beacuse of var

function addDec(a,b){
    return a+b;
}

const addExpr = function (a,b){
    return a+b;
}


var addArrow = (a,b) => a+b ;


//Example
console.log(numProducts); //undefiend is falsy value 
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log("All product deleted!");
}

var x= 1;
let y =2;
const z =3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//this keyword

console.log(this);

const calcAge1 = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
};

calcAge1(2003);

const calcAgeArrow = birthYear => {
    console.log(2037-birthYear);
    console.log(this);
};
calcAgeArrow(2003);


const raj ={
    year : 2003,
    job : 'student',
    calcAge : function(){
        console.log(this);
        console.log(2033 - this.year);
    }
}

raj.calcAge()


const matilda = {
    year : 2017,
}

matilda.calcAge = raj.calcAge ; //method borrowing
matilda.calcAge();


const f = raj.calcAge;
f();

*/
//regular function vs arrow function
var firstName = "Yashwant";

const jonas = {
    firstName : "Rajneesh",
    year : 1993 ,

    calcAge : function(){
        // console.log(this);
        console.log(2037-this.year);

        // const self = this ; //self or that
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);

        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // } 

        //Use arrow function to get this from parent scope
        const isMillenial = () =>{
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);

            // console.log(this.year >= 1981 && this.year <= 1996);
        } 

    isMillenial();

    },


    

    greet1 : function()  {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

    greet2 : ( )=>  {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

};

jonas.greet1();
jonas.greet2();
console.log(this.firstName);

jonas.calcAge();


//argument keyword are available for regular function

const addExpr = function(a,b){
    console.log(arguments);
    return a+b;
}
addExpr(2,5);
addExpr(5,6,1);

// Uncaught ReferenceError: arguments is not define at addArrow
// const addArrow = (a,b) =>{
//     console.log(arguments);
//     return a+b;
// }

// addArrow(4,5,1);

//Primitive value example 

//age and oldage point to different addresses in stack 
let age =30 ;
let oldAge = age ;
age = 31 ;
console.log(age); //31
console.log(oldAge); //30

//reference value example

const me = {
    name : 'Raj',
    age : 30
}


//me and friend point to same reference to memory address in heap
const friend = me ;
friend.age = 27 ;

console.log("Friend : " , friend); // {name : "Jonas" , age : 27}

console.log('Me : ' , me);

//Primitive value example 

let lastName = "SINGH" ;
let oldLastName = lastName ;
lastName = "Jodha";
console.log(lastName,oldLastName);


//reference value example

const Vessica = {
    firstName: "Vessica",
    lastName : 'Singh',
    age : 27 ,
}

const marriedSomeone = Vessica ;
marriedSomeone.lastName = "Jodha";

console.log("Before marriage : " ,Vessica);
console.log("After marriage : " , marriedSomeone);

// marriedSomeone = {}; //Uncaught TypeError: Assignment to constant variable.


//Copying objects

const Vessica2 = {
    firstName: "Vessica",
    lastName : 'Singh',
    age : 27 ,
    family : ['Raj' ,'Ankur'],
}

//object.assign() 
const VessicaCopy = Object.assign({},Vessica2);
VessicaCopy.lastName = "Jodha";

console.log("Before marriage : " ,Vessica2);
console.log("After marriage : " , VessicaCopy);

VessicaCopy.family.push('Rohan');
VessicaCopy.family.push('haan');


console.log("Before marriage family increases : " ,Vessica2);
console.log("After marriage family increases : " , VessicaCopy);