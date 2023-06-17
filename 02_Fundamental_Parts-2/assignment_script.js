
/*

///////////////////////////////////
//LECTURE: Functions
function describeCountry(country, population,capitalCity){
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const firstCountryData = describeCountry('Finland' , 6 , 'Helsinki' );
console.log(firstCountryData);

const secondCountryData = describeCountry('India' , 1230 , 'New Delhi' );
console.log(secondCountryData);


const thirdCountryData = describeCountry('USA' , 320 , 'Washington Dc' );
console.log(thirdCountryData);

///////////////////////////////////
//LECTURE:Function Declarations vs. Expressions

function percentageOfWorld1(population){
    percentage = (population/7900) *100 ;
    return percentage
}

const population1 = 1441 ;
console.log(`China has ${population1} million people, so it's about ${percentageOfWorld1(population1)}% of 
the world population`);

const population2 = 1360 ;
const country2 = `India has ${population2} million people, so it's about ${percentageOfWorld1(population2)}% of 
the world population`
console.log(country2);


const population3 = 360 ;
const country3 = `USA has ${population3} million people, so it's about ${percentageOfWorld1(population3)}% of 
the world population`
console.log(country3);

//function expression
const percentageOfWorld2 = function (population){
    return (population/7900) *100 ;
}

const population4 = 1441 ;
console.log(`China has ${population4} million people, so it's about ${percentageOfWorld2(population4)}% of 
the world population`);

const population5 = 1360 ;
const country4 = `India has ${population5} million people, so it's about ${percentageOfWorld2(population5)}% of 
the world population`
console.log(country4);


const population6 = 360 ;
const country5 = `USA has ${population6} million people, so it's about ${percentageOfWorld2(population6)}% of 
the world population`
console.log(country5);


*/
///////////////////////////////////
//Arrow Function

const  percentageOfWorld3 = (population) => (population/7900) *100 ;
    


const population1 = 1441 ;
console.log(`China has ${population1} million people, so it's about ${percentageOfWorld3(population1)}% of 
the world population`);

const population2 = 1360 ;
const country2 = `India has ${population2} million people, so it's about ${percentageOfWorld3(population2)}% of 
the world population`
console.log(country2);


const population3 = 360 ;
const country3 = `USA has ${population3} million people, so it's about ${percentageOfWorld3(population3)}% of 
the world population`
console.log(country3);

//////////////////////////////////////////////
//LECTURE: Functions Calling Other Functions


const describePopulation = (country , population ) => `${country} has ${population} million people, 
which is about ${percentageOfWorld3(population)} % of the world.`


const data1 = describePopulation('Bangladesh' ,170);
console.log(data1);

const data2 = describePopulation('Russia' ,146);
console.log(data2);

const data3 = describePopulation('Brazil' ,214);
console.log(data3);

///////////////////////////////////////////////////////
//LECTURE: Introduction to Arrays

const populations = [1360 , 214 , 146, 1445];

if(populations.length === 4){
    console.log(`Has 4 elements`)
}else{
    console.log(` wrong data`);

}

const percentages = [];

for(let i = 0 ; i<populations.length;i++){
    percentages.push(percentageOfWorld3(populations[i]));
} 

console.log(percentages);

/////////////////////////////////////////////
//LECTURE: Basic Array Operations (Methods)

const neighbours = ['Nepal' , 'Pakistan' , 'Srilanka'];
console.log(neighbours);

// add it to the end of the 'neighbours' array
neighbours.push('Utopia');
console.log(neighbours);

const dissolved = neighbours.pop();
console.log(dissolved);
console.log(neighbours);


if(!neighbours.includes ('Germany')){
        console.log(`Probably not a central European country :D`);
    }

neighbours[1] = 'Bhutan';
console.log(neighbours);

console.log(neighbours.indexOf('Bhutan'))
neighbours[neighbours.indexOf('Bhutan')] = 'Myanmar';
console.log(neighbours);



///////////////////////////////////////////
///LECTURE: Introduction to Object


const myCountry = { 
    country : 'India' ,
    capital : 'New Delhi' ,
    language : 'Hindi',
    population : 1470 ,
    neighbours : ['Nepal' , 'Pakistan' , 'Srilanka' , 'Bhutan'] ,

    //LECTURE: Object Methods
    describe: function () {
        console.log(
        `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        );
        } ,
    
    checkIsland : function(){
        this.isIsland = this.neighbours.length === 0 ? true : false ;
    }
}


console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population)


myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

///////////////////////////////////
//LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++)
 console.log(`Voter number ${voter} is currently voting`);


//////////////////////////////
// Looping Arrays
const populations2 = [1460, 144, 332, 830];
const percentages2 = [];
for (let i = 0; i < populations2.length; i++) {
const perc = percentageOfWorld3(populations2[i]);
 percentages2.push(perc);
}
 console.log(percentages2)

///////////////////////////
 //Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);


//////////////////////////////////////////////////
//LECTURE: The while Loop
const percentages3 = [];
let i = 0;

while (i < populations.length) {
    const perc = percentageOfWorld3(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);















