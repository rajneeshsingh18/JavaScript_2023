'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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



const restaurant1 = {
  name1: 'Classico Italiano',
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

  order : function(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
  }
}


///////////////////////////////////////
// Destructuring Array

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

const [first , , second] = restaurant1.categories;
console.log(first,second);


let [main , , secondary] = restaurant1.starterMenu;
console.log(main,secondary);


//switching variable
// const temp = main;
// main = secondary;
// secondary = temp ;
// console.log(main,secondary);

[main , secondary] = [secondary , main];
console.log(main,secondary);

//Receive 2 return value from a function
// console.log(restaurant1.order(1,1));
const [starter , mainCourse] = restaurant1.order(2,0);
// console.log(restaurant1.order(2,0));
console.log(starter,mainCourse);

const nested = [2,4, [5,6]];
// const [i,  ,j] = nested;
// console.log(i,j);

//destructuring inside destruring
const nested1 = [2,6,3,[4,24,5],24,3]
const [i , ,j ,[k,l,m] , ...rest]= nested1 ;
console.log(i,j,k,l,m ,rest);


//default values

const [p=1,q=1,r=1] = [8];
console.log(p,q,r);

const[lu,cl,zl=64]= [9,10];
console.log(lu,cl,zl);



///////////////////////////////////////
// Destructuring Objects
const restaurant2 = {
  name1: 'Classico Italiano',
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

  order : function(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
  } ,


  orderDelivery : function({starterIndex = 1,mainIndex = 0,time ='20:00',address}){
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },


  orderPasta : function(ing1 ,ing2 ,ing3){
    console.log(`Here is your declicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  }

  ,

  orderPizza : function(mainIngreditens , ...otherIngredients){
  console.log(mainIngreditens);
  console.log(otherIngredients);
  }
}


restaurant2.orderDelivery({
        time : '22:30',
        address : 'Delhi dwarka ,11',
        mainIndex : 2,
        starterIndex :1,
});

restaurant2.orderDelivery({

  address : ' dwarka ,11',
  starterIndex :1,
});



const {name1 , openingHours , categories} = restaurant2;
console.log(name1 , openingHours , categories);


//assinging different name
const {name1 : restaurantName ,
      openingHours : hours ,
      categories : tags ,
      ...restpropertie
} = restaurant2;
console.log(restaurantName,hours,tags,restpropertie);


//assinging default values and different name together
const { menu = [] , starterMenu : starters = []} = restaurant2;
console.log(menu ,starters);


//mutating variables in objects

let x1 = 111;
let y1 = 999;
const obj ={ x1 :23 , y1:7 , z1:9};

//{x1 , y1} = obj ;// Uncaught SyntaxError: Unexpected token
({x1 , y1} = obj) ;

console.log(x1,y1);


//nested objects

const {fri} =openingHours;
console.log(fri);

const {fri : {open : o , close : s}} = openingHours;
// console.log(open , close);
console.log(o , s);

//Spread Operataor( ...)
const arr1 = [7,8,9];
const badNewArr = [1 , 2 ,arr1[0], arr1[1] , arr1[2]];

console.log(badNewArr);


const newArr = [8,9,2,...arr1];
console.log(newArr);
console.log(...newArr); //indiviual elements



const newMenu = [...restaurant.mainMenu , 'Palak Paneer'];
console.log(newMenu);

//copy array -->shallo copy

const mainMenuCopy = [...restaurant.mainMenu];


//Join 2 arrays
const menu1 = [...restaurant.mainMenu , ...restaurant.starterMenu];
console.log(menu1);



//Iterables : array , strings , map , sets. NOT OBJETCS

const str = "Rajneesh";
const letters = [...str , " " , "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Singh`); //SyntaxError: Unexpected token '...'

/*
const ingredinets = [prompt("Let's make pasta ! Ingredients 1 ? ") , 
prompt(" pasta ! Ingredients 2 ? ") ,
 prompt(" pasta ! Ingredients 3 ? ")] ;

 console.log(ingredinets);

restaurant2.orderPasta(ingredinets[0],ingredinets[1],ingredinets[2]);
 restaurant2.orderPasta(...ingredinets); //bettrer ES6 way

*/


//Objects

const newRest = {foundedIN : 1991 ,  ...restaurant2 , founder  : "Fooo"};
console.log(newRest);


//making copy of object using spread object
const restaurantCopy1 = {...restaurant2};
restaurantCopy1.name1 = 'Ristro ooma';

console.log(restaurantCopy1.name1);
console.log(restaurant2.name1);





//Rest Pattern and parameters
//Spread --> unpack an array


//spread , beacuse on Right side of =
const arr2 = [1,2, ...[3,4]];
console.log(arr2);

//Rest , beacasue on letf side of =
//Rest --> pack an array

const [value1,value2 , ...others]= [1,2,3,4,5];
console.log(value1 , value2 , others);


console.log(...restaurant.mainMenu);
 console.log(...restaurant.starterMenu);
const [pizza , , risotto , ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza , risotto , otherFood);

//rest pattern in objects

console.log(restaurant.openingHours);
const {sat , ...weekdays} =restaurant.openingHours;
console.log(weekdays);

//functions

const add = function(...numbers){
  console.log(numbers)
    let sum = 0 ;
    for(let i=0 ; i<numbers.length ; i++){
      sum+=numbers[i];
    }
    console.log(sum);
};

add(2,3);
add(5,3,7,1);
add(8,2,4,5,3,2,2,1,4)

const addition = [12,5,2];
add(...addition)



//orderPizza function inside object restaurant2
restaurant2.orderPizza('mushroom' , 'onion' , 'olives','spinach')

restaurant2.orderPizza('kaju');



console.log("----------------------OR-------------");
//Short circuiting ( && and ||)

//use ANY data type , return ANY data type 

// --> || truthy value evaluated
console.log(3 || 'Jonas');
console.log('' || 'Raj');
console.log(true || 0);
console.log(undefined || null);


console.log(undefined || 0 || '' || 'Hello' || 23 || null);


//NULLISH COALESCING OPERATOR (??) //ES2020
restaurant2.numGuests = 0;
const guests1 = restaurant2.numGuests ? restaurant2.numGuests : 10 ;
console.log(guests1);

//nullish : null and undefined (NOT 0 or '')
const guests2 = restaurant2.numGuests ?? 23;
console.log(guests2);

const guests3 = restaurant2.numGuests || 16;
console.log(guests3);



// --> || falsey value evaluated
console.log("------AND------");
console.log(0 && 'RAJ');
console.log(7 && 'RAMU');

console.log('Hello' && 23 && null && 'Jonas');

//practical example
if(restaurant2.orderPizza){
  restaurant2.orderPizza('mushrooms' ,'corn');
}

restaurant2.orderPizza && restaurant2.orderPizza('kaju' , 'corn');



/////////////////////
//LOGICAL ASSIGNMENT OPERATOR

const rest1 = {
  name : 'Capri',
  numGuests : 20 ,
  // numGuests : 0 ,

}

const rest2 = {
  name : 'Nautella',
  owner : 'Tata',
}


//truthy
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 23 ;
console.log(rest1);
console.log(rest2);

//OR assignment opertaor
// rest1.numGuests ||= 10 ;
// rest2.numGuests ||= 22 ;

//nullish assignment operator ( null or undefined)
rest1.numGuests ??= 10 ;
rest2.numGuests ??= 22 ;

console.log(rest1);
console.log(rest2);

// rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner = rest1.owner && 'ANONYMOUS';
// rest1.owner = rest1.owner ?? 'ANONYMOUS';
// console.log(rest2);
console.log(rest1);

rest2.owner  &&= 'ANONYMOUS';
rest1.owner ??= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);



//Looping Array : the for of loop

const menu2 = [...restaurant2.starterMenu ,... restaurant2.mainMenu];
//get current element
for(const item of menu2) 
console.log(item);


//to get index we use .entries()
// console.log(menu2.entries()) --? //learn later

for(const item of menu2.entries()){
  console.log(`${item[0]+1}: ${item[1]}`);
}

for(const [i,el] of menu2.entries()){
  console.log(`${i+1} : ${el} `);
}





//ES-6 Enhanced Object literals

const weekdays1 =['mon' ,'tue' ,'wed' , 'thu' ,'fri' ,'sat' ,'sun'];
const Hours = {
  [weekdays1[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[3]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 17,
    close: 23,
  },
  // [`Day --${2+6}`] :{
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  [weekdays1[6]] :{
      open: 0, // Open 24 hours
      close: 24,
    },
};

console.log(Hours);

const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //1st ES6 feature
  Hours,

  order(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
  } ,


  orderDelivery ({starterIndex = 1,mainIndex = 0,time ='20:00',address}){
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },


  orderPasta(ing1 ,ing2 ,ing3){
    console.log(`Here is your declicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  }

 
};

console.log(restaurant3);


//Optional Chaining

if(restaurant3.Hours && restaurant3.Hours.mon) console.log(restaurant3.Hours.mon.open);

// console.log(restaurant3.Hours.mon.open);//  Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//with opitional chaining

console.log(restaurant3.Hours.mon?.open);
console.log (restaurant3.Hours?.mon?.open);

//example
const days =['mon' ,'tue' ,'wed' , 'thu' ,'fri' ,'sat' ,'sun'];

for(const day of days){
 const open = restaurant3.Hours[day]?.open ?? 'closed'
  console.log(`on ${day} , we open at ${open}`);
}

//Methods

console.log(restaurant3.order?.(0,1) ?? 'Method does not exits');
console.log(restaurant3.orderALoo?.(0,1) ?? 'Method does not exits');



//Arrays

// const users = [
//   {
//     name : 'Raj' ,
//     email : 'rajneesh@gmail.com'
//   }
// ]

const users = []

console.log(users[0]?.name ?? 'user array empty');

//without optional chaining
if(users.length >0 ) console.log(users[0].name);
else console.log('user array empty');


//Looping Objects : object keys , values and Entries


//Property names
const properties = Object.keys(Hours);
console.log(properties);

let openStr =`We are open on ${properties.length} days `;

for(const day of Object.keys(hours)){
  console.log(day);
}

for (const day of properties){
  openStr += `${day} ,`
}

console.log(openStr);


//Property Values

const values = Object.values(Hours);
console.log(values);

//Entries object
const entries = Object.entries(Hours);
console.log(entries);


//key and values

for(const x of entries){
  console.log(x);
}
for(const [day , {open , close}] of entries){
  console.log( `On ${day} we open at ${open} and close at ${close}`);
}

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
