//Importing module
// import './shoppingCart.js';
// console.log("Importing module");

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';

// console.log(shippingCost); //shippingCost is not defined
// addToCart('bread' ,5);
// console.log(price,tq);

// console.log(price, tq);

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// ShoppingCart.addToCart('Chawal', 54);

// import add, { cart } from './shoppingCart.js';

// console.log(add);
// add('pizza', 2);
// add('bread', 4);
// add('apples', 4);

// console.log(cart); //live connection

///////////////////////////////////////////////////////////

//OverView of Modern JavaScipt Development
/*
-->Development --> Bundling --> TransPiling/PolyFilling -->JavaScript Bundle

Development : Containes different module 

Bundling :Join all modules into one file use PARCEL OR WEBPACK (developmet tool)

TransPiling/PolyFilling : Convert Modern Javascript back to ES5 using BABEL 

Javascript Bundle : Production ready

NPM (Node package manager) --> 

Node.Js(software) : Contain open-source packages to include 3rd party code in our code (e.g. React , Leaflet , etc.)

--> Contain development tools that buil our applications(e.g. , live server , Parcel , Babel ,etc.)
*/

////////////////////////////////////////////////////////////////
//TOP -LEVEL AWAIT (ES2022)

// console.log('start fetching');
// const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(data);

// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// //not very clean
// lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost();
console.log(lastPost2);

//IIFE
const shoppingCart2 = (function(){
    const  cart = [];
    const shippingCost = 10 ;
    const totalPrice = 237;
    const totalQuantity = 23 ; 

    const addToCart = function(product , quantity){
        cart.push({product,quantity});
        console.log(`${quantity} ${product} added to cart`);
    };


    const orderStock = function(product , quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };


    return{
        addToCart , cart , totalPrice , totalQuantity
    };
})();


shoppingCart2.addToCart('apple',4);
shoppingCart2.addToCart('pizza',2)
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);



//CommonJS Modules

//Export works in NodeJS
// export.addToCart = function(product , quantity){
//     cart.push({product,quantity});
//     console.log(`${quantity} ${product} added to cart`);
// };

// //Import works in NodeJS
// const {addToCart} = require('./shoppingCart.js')


// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js'

// import { cloneDeep } from "lodash-es";

const state = {
    cart : [
        {
            product : 'bread' ,quantity :4
        },
        {
            product:'pizza' , quantity :2
        }
    ] ,
    user : {
        loggedIn : true
    }
}

console.log(state);

const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state)

state.user.loggedIn = false;
console.log(stateClone);

// console.log(stateDeepClone);