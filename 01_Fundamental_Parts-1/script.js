////////////////////////////////////////////////////////////////////////////////
// Linking a JavaScript File

/*
alert("Hello World");

let js = "AMAZING" ;
if ( js === "AMAZING") console.log("Yes lets learn javascript");


js = "BORING";
if ( js === "BORING") alert("Javascript is boring :( ");
*/
//Alert() function

// let js="Amazing";
// if(js=="Amazing") alert ("JavaScript is FUN!");

// "Implicitly" means that the JS engine does it. "Explicitly" means that you must do it
/*
  60+735-344;
  console.log("Your value is : " , 60+464-433);//Explicitly 
  console.log("Hello this is my first JS program ");
*/
//////////////////////////////////////////////////////////////////////////////////////////
//VALUES AND VARIABLES


/*

console.log("Rajneesh");
console.log(45);

// Variable name conventions
//we are using camelCase 
let myFirstName = "Rajneesh";
let firstJob ="Programmer";
let currentAge=19;
// let 2age=3; // syntax error: Invalid or unexpected token 
// let new = 18; //syntax error : Unexpected token 'new' -->keyword
let real_age=22;
//let my-cat=" "; //not allowed for declaring variable
let greeting= "Good morning";
let PI = 3.14; //Capital words are used for constant 


console.log(myFirstName);
console.log(myFirstName);
console.log(currentAge);
console.log(real_age);
console.log(greeting);
console.log(firstJob);


///////////////////////////////////////////////////////////////////////////
//Data types

let isAdult=true;  //boolean
console.log(typeof(isAdult));

let Age = 19;     //number 
console.log(typeof(Age));

let _name = "Rajneesh"; //string
console.log(typeof(_name));

let Salary;  // here variable value is undefined
console.log(typeof(Salary));    //undefined


const PI=3.14;  //number
console.log(typeof PI);

console.log(typeof null); //object (it is consider as javascript bug)

//JavaScript has dynamic typing: We do not have to manually define the data type of
// the value stored in a variable. Instead, data types are determined automatically.
Salary="Kya re bhikmangaya";  
console.log(typeof Salary);// change from undefined to string

Age= 9007199254740991n;  //bigint data for larger numbers
console.log(typeof(Age));

_name="Ankur";
console.log(typeof _name);





///////////////////////////////////////////////////////////////////////////
//let , const and var keywords


let Age = 19; 
Age = 45; // mutable we can reassign a value to variable Age
console.log(Age);

const birthYear=2003; //immutable value cannot be change further in a program.
// birthYear = 2000;  //TypeError: invalid assignment to const 'birthYear'

var Driver = true ;  //Introduced before modernJavascript or ES6  
console.log(Driver);

//not the rightway 
car = "BMW";
console.log(car);



/////////////////////////////////////////////////////////////////////
//Basic operators

    //Arithimetic operators -> + , - , *, /, %
  const futureYear=2037;

  const rajneeshRealAge = futureYear - 2003;
  const rajneeshFakeAge = futureYear - 2000;

  console.log(rajneeshFakeAge + " " + rajneeshRealAge);

  const newage = rajneeshFakeAge + rajneeshRealAge;
  console.log(newage);

  const a =5 , b=3;
  console.log(" 3 cube is " +  b**3 ) ; // b**3 means b to the power of 3 = b*b*b 
  console.log( a*b ,  (a+b) , a-b , a/b , a%b)
   
  //concatenate two strings

  const firstName = "Rajneesh";
  const lastName = "Singh";

  console.log(firstName +" "+ lastName);

  //Assignment operators 
  let x = 10+6; //16 
  console.log(x);
  x += 3; // x = x + 3 ->19
  console.log(x);
  x *= 2  // x = x * 2 -> 38
  console.log(x);

  //Uniary opertors
  let c = 2;
  c++; 
  console.log(c);//3
  c--; 
  console.log(c);//2
  ++c; 
  console.log(c);//3
  --c; 
  console.log(c);//2


  //Comparison operators ->  , > , < , >= , <= , !=
  let myAge = 19 ;
  let yourAge = 20;

  console.log(myAge>yourAge); //FALSE
  console.log(myAge<yourAge); //true

  console.log(18==18); //true
  console.log(17>=18); //false
  console.log(16<=18); //true
  console.log(17!=18); //true
  


/////////////////////////////////////////////////////////
//Operator precendence

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y ;
x=y=23-3-5; // "=" operator right-to-left Associativity
console.log(x,y);

let myAge = 19 ; 
let yourAge = 20;
const averageAge = (myAge + yourAge) / 2;    //grouping in prarentheses as higher precedence than addition and division
console.log(averageAge);




/////////////////////////////////////////////////////////
//String and template literals

const firstName= "Rajneesh" ;
const Age = 19 ;
const workingAs = "Student";

const data = " Hello I'm " + firstName + " ' a  " + Age +" years old " + workingAs +" ." ;
console.log(data);

const newData = `Hello I am ${firstName} I am ${Age} years old and I am a ${workingAs} .`;
console.log(newData); 

console.log("We can write \n\ multiple line \n\strings");

console.log(`Great and easy way of writing 
without using escape charater 
Bye 👋.`)


/////////////////////////////////////////////////////////
//if - else Decison making 

const currentAge = 15 ;

if (currentAge >= 18){
  console.log(`You can apply for Driving liceence as your age is ${currentAge}`);
}else{
  const yearLeft = 18 - currentAge;
  console.log(`You are too young apply after ${yearLeft} years for driving licence 🚗`)
}

const birthYear = 2003;
let century;
if(birthYear <= 2000){
  century=20
  console.log(`You are born in ${century} century`);
} 
else{
  century=21
  // let great = 56; //cannot access outside the scope or block of else 
  console.log(`You are born in ${century} century`);
}

// console.log(great);








/////////////////////////////////////////////////////////
//Type conversion and type coercion 

//type conversion -> Done manually
let inputYear = "2003";  //2003 is a string here
console.log(Number(inputYear) , inputYear); //Type String is converted into type Number manually
console.log(inputYear + 18 ); //200318 -> 18 is converted into string 
console.log(Number(inputYear) + 18 ); //2021 -> type is number 
console.log(String(67) , 67);

console.log(Number("Rajneesh")); //NaN --> not a number
console.log(typeof(NaN)); //Number


//type coercion -> automatically done by javascript compiler

console.log("Hello I am " + 18 + " years old"); //18 is converted from number type to  String type
console.log("19" - "2" + 3); //19 ,2 is converted into type number ans. 20
console.log("3" * 9); // 3 is converted from string type to number type ans. 27
console.log(28 / "4"); // 4 is converted from string type to number type ans. 7


let n = "2"+ 5;//5 is converted from number type to  String type ----> output: 25
console.log(n);
console.log(typeof(n));
n= n -3; // 22
console.log(typeof(n));
console.log(n);

console.log( 2 + 3 + "5" + 1);
console.log("10" - "2" - "4" + 3 -"1");




///////////////////////////////////////////////////////////////////////////////////
//Truthy and Falsy value 

//falsy value are total 5 --> 0 , ' ' , undefined , null , Nan

console.log(Boolean(0));  //false
console.log(Boolean("Rajneesh"));  //true
console.log(Boolean(252)); //true
console.log(Boolean('' ));  //false
console.log(Boolean(" " ));  //true space include
console.log(Boolean("" ));  //false
console.log(Boolean(undefined));  //false
console.log(Boolean({})); //true
console.log(Boolean(null));  //false
console.log(Boolean(NaN));  //false



let money=0; //else statement executed
// let money=242; //true statement executed
if(money){
  console.log(` Don't Spent it all : )`);
}else{
  console.log(`Go and earn some money before spending`);  
}

// let height; //height is undefined
let height=54; //height is defined
if(height){  
  console.log("height is  definded ");
}else{
  console.log("height is  undefinded ! ");
}





/////////////////////////////////////////////////////////
//Equality operators : == & ===  , prompt() funtion , else-if


// == (loose) --> type coercion occur
//=== (strict) --> type coercion do not occur

const age1 = 19;
if(age1 === 19) console.log(`Congrats you are an adult having age ${age1}(strict)`);
else console.log("Not an adult");

const ageNew = "10";
if(ageNew==19) console.log(`Congrats you are an adult having age ${age1} (loose)`);
else console.log("Not an adult");

console.log("18"===18);
console.log(18===28);

//type coercion
console.log("128"==128);// "128" is converted from string type to number type
console.log("18"==28); // "18" is converted from string type to number type 



//prompt() function

// const favourite = prompt("What's your favorite number ?");

// LATER : This helps us prevent bugs
const favourite = Number(prompt("What's your favorite number ?"));
console.log(`Favourite number entered by you is :   ${favourite}`);

//else if 
if(favourite === 12){ 
console.log(`Your favourite number is ${favourite} , (strict equality opertaor)`);
}
else if(favourite === 8 ){    
 console.log(`Your favourite number is ${favourite} , (strict equality opertaor)`);
}
else if(favourite===18){  
console.log(`Your favourite number is ${favourite} , (strict equality opertaor)`);
}
else{ 
  console.log("Favourite number is not 12 , 18 and 8.")
}



const favouriteNew = prompt("What's your favorite NEW number ?");
console.log("FavouriteNEW number entered by you is : " + favouriteNew);

//else if 
if(favouriteNew==12){ //"12" == 12 true -->type coercion occur
console.log(`Your favourite number is ${favouriteNew} (loose equality operator)`);
}
else if(favouriteNew==8 ){    //"12" == 8 false -->type coercion  occur
 console.log(`Your favourite number is ${favouriteNew} (loose equality operator)`);
}
else if(favouriteNew==18){  //"12" == 18 false --> type coersion  occur
console.log(`Your favourite number is ${favouriteNew} (loose equality operator)`);
}
else{ 
  console.log("FavouriteNEW number is not 12 , 18 and 8.")
}


//different operator 
if (favouriteNew !== 23) console.log("Why not 23!")




///////////////////////////////////////////////////////////////////////////////////
//Logical opertaors --> and(&&) , or(||) , not(!) , etc.

const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense && !hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasGoodVision);

const isTired = true;
const isDrunked = false;

if(hasDrivingLicense && !hasGoodVision && !isTired){
  console.log("You can drive easily");
}else if ( hasDrivingLicense && !isDrunked)
console.log("You have to test alcohol level then drive")
else{
  console.log("someone else should drive ");
}




///////////////////////////////////////////////////////////////////////////////////
//Switch Statement 

const day='Wednesday';
switch(day){
  case 'Monday' : 
    console.log("Read Books and Complete pending work");
    console.log("Go to market");
    break;
  case 'Tuesday':
    console.log("Do coding and repeat");
    break;

  case 'Wednesday':
  case 'Thrusday':
    console.log("Repeat the boaring days");
    break;
  case 'Friday':
    console.log("Submit your assigments");
    break;
  case 'Saturday':
  case 'Sunday':
    console.log("Enjoy Weekends");
    break;
  default :
    console.log("NOt a valid day !");
}


//same above code using if - else if -else statement
if(day==='Monday'){
  console.log("Read Books and Complete pending work");
  console.log("Go to market");
}else if (day ==='Tuesday'){
  console.log("Do coding and repeat");

}else if (day ==='Wednesday' || day ==='Thrusday'){
  console.log("Repeat the boaring days");

}else if (day ==='Friday' ){
  console.log("Submit your assigments");
}else if (day ==='Saturday' || day ==='Sunday'){
  console.log("Enjoy Weekends");
}
else{
  console.log("NOt a valid day !");
}





///////////////////////////////////////////////////////////////////////////////////
//statement and expression

//all are expression give a value
4+4
1992
"1231"
true && false && true

const age = 19;
if(age>=16){
  const st = " 43 is bigger";
}

const me ="Rajneesh"
//we cannot write statements in template literals
// console.log(`I am ${age} years old ${if(age>=16){
//   const st = " 43 is bigger";
// }}`)

console.log(`${me} is  ${age} years old ${2032-2003}.`)



///////////////////////////////////////////////////////////////////////////////////
//Conditional expression or ternary operators

// (condition) ? if true statement : else false statement

// const age=34;
const drink = age>=18 ? "Drink wine 🍷" : "Drink water 💧"
console.log(drink);

const agenew=16;
if(agenew>=18){
  console.log("Drink wine 🍷")
}else{
  console.log("Drink water 💧")
}

console.log(`I would like to drink ${age>=18 ? "wine 🍷" : " water 💧"}`);
*/