'use strict';


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



