//SETS 
//-->Collection of unique values


const ordersSet = new Set(
    [
      'Pasta',
      'Pizza',
      'Risotto',
      'Pizza',
      'Pasta',
      'Pizza',  
    ]
);
console.log(ordersSet);

console.log(new Set('Rajneehs'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);


for(const order of ordersSet) console.log(order);

//Example

const staff = ['Waiter' ,'Chef' , 'Waiter' , 'Manager' ,'Chef' ,'Waiter'] ;
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];

console.log(staffUnique); 
console.log(new Set(['Waiter' ,'Chef' , 'Waiter' , 'Manager' ,'Chef' ,'Waiter']).size); 

console.log(new Set('Rajneeshsingh').size);


//MAPS Fundamentals
//--> Key value pairs like objects

const rest = new Map();
rest.set('name' , 'DineNight');
rest.set(1, 'Dwarka , South -Delhi');
console.log(rest.set(2 , 'Rajouri , West -Delhi' ));

//chaining of set method
rest
.set('categories' , ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open' ,11)
.set('close',23)
.set(true,'We are open :)')
.set(false , 'We are Close :(')

console.log(rest.get('name'));
console.log(rest.get(true));
//Data type matters 
console.log(rest.get(open));//undefineds
console.log(rest.get('open'));
console.log(rest.get('1'));//undefined
console.log(rest.get(1));

const time = 15 ;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1,2]
rest.set(arr,'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1')  , 'Heading');
console.log(rest);
console.log(rest.size);
// console.log(rest.get([1,2])); //undefiend


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

//Convert object to map --> NOT CLEAR
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

//Map : Iteration
const question = new Map([
    ['question' , 'What is Your name? '],
    [1,'Rajneesh'],
    [2,'Ankur'],
    [3,'Yashwant'],
    [4,'Johar'],
    ['correct' , 1],
    [true , 'Correct 🎉'],
    [false ,'Try Again'],

]);
console.log(question);
console.log(question.get('question'));
for( const [key, value] of question){
    if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your answer'));
answer =1;
console.log(answer);


console.log(question.get(question.get('correct') === answer));

//convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



//WORKING With Strings

const airline = 'Air India Maharaja';
const plane ='A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('R342' [2]);

console.log(airline.length);
console.log('R568'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Maharaja'));

console.log(airline.slice(4));
console.log(airline.slice(4,9));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat){
    //B and E are middle seats
    if(seat.slice(-1) === 'B' || seat.slice(-1) === 'E'){
        console.log('You got the middle seat 😒');
    }else{
        console.log('You got the lucky seat 😊');

    }
}

checkMiddleSeat('11B');
checkMiddleSeat('32C');
checkMiddleSeat('21E');

//string primitive converted into object
console.log(new String('Rajneesh'));
console.log(typeof new String('Rajneesh'));
console.log(typeof new String('Rajneesh').slice(-1));


//string method

console.log(airline.toLowerCase);
console.log(airline.toUpperCase);

//Fix capitalization in name
const passenger = "RaJnEEsh";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower.slice(1));
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email

const email = 'rajneesh@gmail.com';
const loginEmail = '   RajNeesH@gmail.COm  ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing

const priceAI = '23,234$';
const priceIndia = priceAI.replace('$','@').replace(',','.')
console.log(priceIndia);


const announcement = 'All passengers come to barding door 23 . Boarding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));

//regular expression
console.log(announcement.replace(/door/g,'gate')); //g stands for global

//Booleans
const plane1 = 'AIr India243';
console.log(plane1.includes('243'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('AI'));

if(plane1.startsWith('AIr') && plane1.endsWith('243')){
    console.log('Part of NEw airline family');
}

const checkBaggage = function(item){
    const baggage = item.toLowerCase();
    if( baggage.includes('knife') || baggage.includes('gun')){
        console.log("Not allowed to board 🚫");
    }else{
        console.log(" welcome aboard 🙏");

    }
}
checkBaggage('I have a laptop , some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection')


//split returns array

console.log('a+very+nice_string'.split('+'));
console.log('Raj Hello I am ... '.split(' '));

const [firstName , lastName] = "Rajneesh Singh".split(' ');

//opposite of split
const newName = ['Mr.' , firstName , lastName.toUpperCase()].join(' -');
console.log(newName);


const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const item of names){
        // namesUpper.push(item[0].toUpperCase()+ item.slice(1));
        namesUpper.push(item.replace(item[0],item[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}; 

capitalizeName('jessica ann smith ankur');

//padding a string

const message = 'Go to gate 29!';
console.log(message.padStart(25 ,'+')); //lenght after the padding -->25
console.log(message.padEnd(25 ,'+'));
console.log(message.padStart(25 ,'+').padEnd(30,'+'));
console.log(' Rajneesh '.padStart(20 ,'+').padEnd(30,'+'));


//masking a string

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);

    return last.padStart(str.length, '*')
}


console.log(maskCreditCard(43523454));
maskCreditCard('2435435235425243523');

//Repeat
const message2 = 'Bad weather... all Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(12);


//String Method Practice
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const getCode2 = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
    // console.log(flight);
    // console.log(flight.split(';'));
    const [type , from , to , time] =flight.split(';')
    const output = `${type.startsWith('_Delayed')? '🚫': ' '}${type.replaceAll('_'," ")} from  ${getCode2(from)} to ${getCode2(to)} (${time.replace(':','h')})`

    console.log(output);
}