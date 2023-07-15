'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Rajneesh Singh',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

//Not working
const formatMovementDate = function(date,locale){
  
  const calcDaysPassed = (date1 , date2) => Math.round(Math.abs(date2-date1) /(1000*60*60*24))

  const daysPassed = calcDaysPassed(new Date() , date)
  console.log(daysPassed);

  if(daysPassed===0) return 'Today';
  if(daysPassed===0) return 'Today'
  if(daysPassed<=7) return `${daysPassed} days ago`


  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`

  return new Intl.DateTimeFormat(locale).format(date)
}


const formatCur = function(value , locale,currency){
 return new Intl.NumberFormat(locale , {
    style : 'currency',
    currency : currency,
  }).format(value);
}


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i])
    
    const displayDate = formatMovementDate(date,acc.locale)


    const formattedMOv= formatCur(mov,acc.locale,acc.currency)

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMOv}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance,acc.locale,acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;



//FAKE always LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


//day/month/year

//Expermenting Intl.DateTimeFormat API

// const now2 = new Date();
// const options = {
//   hour : 'numeric',
//   minute : 'numeric',
//   day : 'numeric',
//   month : 'long',
//   year : 'numeric',
//   weekday : 'short'
// }

// const locale = navigator.language
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale,options).format(now2)

// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now2)
// labelDate.textContent = new Intl.DateTimeFormat('hu-HU').format(now2)




btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    //Create Current date and Time
    const now2 = new Date();
    const options = {
      hour : 'numeric',
      minute : 'numeric',
      day : 'numeric',
      month : 'long',
      year : 'numeric',
      weekday : 'short'
    }
    
    // const locale = navigator.language
    // console.log(locale);
    
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now2)

//     const now1 = new Date();
// const day = `${now1.getDate()}`.padStart(2, 0);
// const month = `${now1.getMonth()}`.padStart(2, 0);
// const year = now1.getFullYear();
// const hour = now1.getHours()
// const min = now1.getMinutes();
// labelDate.textContent = now1

// labelDate.textContent = `${day}/${month}/${year}, ${hour} :${min}`

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);


    //Addtransfer date
    currentAccount.movementsDates.push(new Date().toISOString);
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

//Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());


    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Base 10 --> 0 to 9 ; 1/10=0.1 ; 3/10=3.33333
//Binary base 2 -->
console.log(23 === 23.0);

console.log(0.1 + 0.2); //0.30000000000000004
console.log(3 / 10);
console.log(0.1 + 0.2 === 0.3); //false

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23')); //string need to start with number 

console.log(Number.parseInt('30px', 10)); //10 is radix or base
console.log(Number.parseInt('30px', 10));//10 is radix or base

console.log(Number.parseInt('  2.4rem '));
console.log(Number.parseFloat('2.5rem'));

//Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

//checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isFinite(23 / 0));



//Math and Rounding


console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); //cubic root

console.log(Math.max(5, 18, 32, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, '23', 11, 2));

console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//Generate a random number in a certain range
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
//0....1 -> 0....(max-min) -> min...max
console.log(randomInt(5, 13));


//Rounding

console.log(Math.trunc(23.3));

console.log(Math.round(23.4));
console.log(Math.round(23.9));

console.log(Math.ceil(3.4));
console.log(Math.ceil(3.9));

console.log(Math.floor(32.4));
console.log(Math.floor('32.9'));

//For negative and positive number floor are better
console.log(Math.trunc(-24.5));
console.log(Math.floor(-24.5));


//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7213).toFixed(3));
console.log((3.321).toFixed(2));
console.log(+(2.713).toFixed(2));


//Remainder operator

console.log(5 % 2);
console.log(5 / 2); // 5 = 2*2+1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2*3+2


console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);  // 7 = 2*3+1

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(243));
console.log(isEven(260));

labelBalance.addEventListener('click', function () {

  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    //0,2,4,6
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered'
      , row.style.color = "white"
    }
    //0 ,3,6,9
    if (i % 3 === 0) {
      row.style.backgroundColor = 'blue'
      , row.style.color = "white"
    }
  })
})




//Numeric Separators

//287,460,000,000
const diameter = 287_460_000_000
console.log(diameter);

const price = 345_99
console.log(price);

const transferFee = 15_00;
const transferFee2 = 1_500;

// const PI = 3._1415;
// const PI = _3.1415;
const PI = 3.14_15;
console.log(PI);


console.log(Number('230_000')); //error

console.log(parseFloat('2.45_4'));


//BigInt ES2020

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);


//place n at end to create bigInt
console.log(52743578246357862786174527527522n);
console.log(BigInt(5274343247824635));


//opertions

console.log(1000n + 10000n);
console.log(4267617863761n * 514523546236453n);
// console.log(Math.sqrt(16n));

const huge = 6247381534756174978n
const num = 24332;

// console.log(huge * num);
console.log(huge * BigInt(num));


//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + 'Is realy big !!');

//Divisions
console.log(11n / 3n);
console.log(21n / 3n);
console.log(10 / 3);




//Creating DATE And Times


//Create a DATE --> 4 ways

const now = new Date()
console.log(now);

console.log(new Date('Jul 07 2023 21:11:17'));

console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); //Month is 0 base in JS

console.log(new Date(2037, 10, 31)); //auto correction of date by Js

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log(new Date(259200000));

//Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);


//methods on date
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());

console.log(future.getTime());

console.log(new Date(2142237180000));

console.log(Date.now());

future.setFullYear(2048);
console.log(future);

//Operations on Dates
const future1 = new Date(2037,10,19,15,23);
// console.log(Number(future1));
console.log(+future1);


const calcDaysPassed = (date1 , date2) => Math.abs(date2-date1) /(1000*60*60*24)

const days = calcDaysPassed(new Date(2040,4,5) , new Date(2040,4,25));
console.log(days);


console.log(`-----------------Internationalizong Numbers(Intl.NumberFormat('en-US'));-------------------`);


const num1 =632467.34;

console.log('US : ' , new Intl.NumberFormat('en-US').format(num1));
console.log('Germany : ' , new Intl.NumberFormat('de-De').format(num1));
console.log('Syria : ' , new Intl.NumberFormat('ar-SY').format(num1));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num1)
);
console.log(`------------------------------------`);


const options = {
  style : "unit",
  // unit : 'mile-per-hour'
  unit : "celsius"
}

console.log('US : ' , new Intl.NumberFormat('en-US',options).format(num1));
console.log('Germany : ' , new Intl.NumberFormat('de-De',options).format(num1));
console.log('Syria : ' , new Intl.NumberFormat('ar-SY',options).format(num1));


console.log(`------------------------------------`);
const options2 = {
  style : "currency",
  unit : "celsius",
  currency : 'EUR',
}
console.log('Germany : ' , new Intl.NumberFormat('de-De',options2).format(num1));
console.log('Syria : ' , new Intl.NumberFormat('ar-SY',options2).format(num1));




console.log(`---------------setTimeout and setInterval---------------------`);


setTimeout(() => console.log('Here is your pizza 🍕'),3000)


setTimeout((ing1 , ing2) => console.log(`Here is your pizza 🍕 containing ${ing1} and ${ing2}`),3000,'olives','corn')


const ingredients = [ 'olives ' ,'spinach']
setTimeout((ing1 , ing2) => console.log(`Here is your pizza 🍕 containing ${ing1} and ${ing2}`),3000,...ingredients)
console.log('Waiting...')


const ingredients2 = [ 'onion'  ,'spinach']
// const ingredients2 = [   'corn','spinach']

const pizzaTimer = setTimeout((ing1 , ing2) => console.log(`Here is your pizza 🍕 containing ${ing1} and ${ing2}`),3000,...ingredients2)
console.log('Waiting...')

if(ingredients2.includes('onion')) clearTimeout(pizzaTimer);


//setInterval



setInterval(function(){
  const now = new Date();
  console.log( `${now.getHours()} : ${now.getMinutes()} :${now.getSeconds()}`);
},2000)







