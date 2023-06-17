// JavaScript Fundamentals – Part 1

////////////////////////////////////////
// LECTURE: Values and Variables
// Assignment solution
/*
let _name="Rajneesh";
let country="India";
let continent="Asia";
let populationInMillons=1380;
let populationInBillons=1.3;

console.log(country);
console.log(continent);
console.log(populationInMillons);
console.log("Hello my name is " + _name +
             " and I love my country " + country +
             " very much that lies in " + continent + " continent.");
console.log("Total population of "+country + " is approx " + populationInMillons + " millons. ");
console.log("Total population of "+country + " is approx " + populationInBillons + " billons. ");



////////////////////////////////////////
// LECTURE: Data Types
// Assignment solution

let isIsland = false;
let language;
let country="India";
let populationInMillons=1380;
console.log(typeof isIsland); //boolean
console.log(typeof language); //undefined
console.log(typeof populationInMillons); //number
console.log(typeof country); //string




////////////////////////////////////////
// LECTURE: let, const and var
// Assignment solution
let language;
language="Hindi";
console.log(language);

const country="India";
const populationInMillons=1380;
const PI = 3.14 ;
const SPEED_OF_LIGHT = 3 * 10^-8;

const isIsland= false;
// isIsland=True; //ReferenceError: True is not defined <anonymous>
console.log( PI);
console.log(typeof SPEED_OF_LIGHT); //number



////////////////////////////////////////
// LECTURE: Basic operators
// Assignment solution

const country="India";
let populationInMillons=1380;

let continent="Asia";
let language = "Hindi";

const halfPopulation=populationInMillons/2;

console.log("People would leave in each half : " ,halfPopulation, "millions");

populationInMillons++; //incremented by 1 
console.log(populationInMillons , " millions");

let finlandPopulation = 6 ;

if(finlandPopulation>populationInMillons){ //false
    console.log("Finland has larger poulation")
}
else{
    console.log("India has larger poulation")
}
//Yes my country have more people than Finland.

const averagePopulation = 33;
if(averagePopulation>populationInMillons){ //false
    console.log("avergae population of a country is higher")
}
else{
    console.log("my country population is greater than average population")
}

let description = country + " is in " 
                + continent + " , and its "  
                + populationInMillons 
                + " million people speak " + language ;
                 
console.log(description); 


////////////////////////////////////////
// LECTURE: String and template literals
// Assignment solution

const country="India";
let populationInMillons=1380;

let continent="Asia";
let language = "Hindi";
let descriptionTemplateLiterals = `${country} is in ${continent} , and its ${populationInMillons} millions population speak ${language}.`;
console.log(descriptionTemplateLiterals);


////////////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements
// Assignment solution

if(populationInMillons>33){
    console.log(`${country} Popolation is above avergae.`);
}else{
console.log(`${country} population is below average  `);
}


//////////////////////////////////////////////////
// LECTURE: Type Conversion and Coercion
// Assignment solution
console.log('9'-'5'); //type coercion convert string to number output: 4
console.log('19'-'3' + '17'); //type coercion  output: 1617
console.log('19'-'3' + 17); //type coercion  output: 33
console.log('123'<57); //type coercion  output: false
console.log(5+6+'4'+9-4-2); //type coercion  output: 1143

///////////////////////////////////////////////////
//LECTURE: Equality Operators: == vs. ===

// const numNeighbours = prompt("How many neighbour countries does your country have ?");
console.log(typeof numNeighbours)

// LATER : This helps us prevent bugs
const numNeighbours = Number(prompt("How many neighbour countries does your country have ?"));
console.log(typeof numNeighbours)
if(numNeighbours===1){
    console.log("Only 1 border !");
}else if ( numNeighbours>1){
    console.log("More than 1 border !");
}else console.log("no border")


///////////////////////////////////////////////////
//LECTURE:  Logical Operators

let language = 'english';
let population =26;
let isIsland = false;
let country = 'Finland';
if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
}


///////////////////////////////////////////////////
//LECTURE: The switch Statement

const language = prompt("Enter a language --> chinese , spanish , english , hindi , arabin etc.");

switch(language){
    case 'chinese' || 'mandarin' :
        console.log(`MOST number of native speakers!`);
        break;

    case 'spanish' :
        console.log(`2nd place in number of native speakers`);
        break;

    case 'english' :
        console.log(`3rd place `);
        break;

    case 'hindi' :
        console.log(`NUmber 4 `);
        break;

    case 'arabic' :
        console.log(`5th most spoken language`);
        break;
     
    default:
        console.log(`Great language too :D`);
}
*/
///////////////////////////////////////////////////
//LECTURE:The Conditional (Ternary) Operator

let population = 23;
let country = 'Portugal'

const result = (population > 33) ? `${country}'s population is above average` : `${country}'s population is below average`;

console.log(result);
