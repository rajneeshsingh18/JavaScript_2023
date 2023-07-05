'use strict';

//        0    1   2   3   4
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(0));
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//shallow copy
console.log(arr.slice());



//splice --> change the original array

// console.log(arr.splice(2)); //delete 
console.log(arr.splice(-1));
console.log(arr);

arr.splice(1, 2);//b and c are deleted --> 2 is number of element we want to delete
console.log(arr);

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


//concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join("-->"));



// .at() method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(2));


//getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.at(-1));
console.log(arr.slice(-1)[0]);

//on string
console.log('RAJNEESH'.at(-1));




//forEach method on array
const log1 = [200, 450, -400, 3000, -650, -130, 70, 1300]

// for(const movement of log1){
for (const [i, movement] of log1.entries()) {

  if (movement > 0) {
    console.log(`Movement ${i + 1} :You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} :You withdrew ${Math.abs(movement)}`); //Maths.abs() remove negative sign
  }
}

//FOREACH
console.log(`-----------------FOREACH----------------------`);
//forEach take callback function
//--> continue and break statement not work in forEach

// log1.forEach(function(movement){
log1.forEach(function (mov, i, arr) {

  if (mov > 0) {
    console.log(`Movement ${i + 1} :You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} :You withdrew ${Math.abs(mov)}`); //Maths.abs() remove negative sign
  }

})


//.forEach() --> in case of  Map()


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, Map) {
  console.log(`${key} : ${value}`);
})


//.forEach() --> in case of  Set()

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);

})








/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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



//DOM manipulation

const displayMovements = function (movements) {

  //EMPTY AN ENTIRE ELEMENT
  containerMovements.innerHTML = " "

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
console.log(containerMovements.innerHTML);
displayMovements(account1.movements)



const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`
}
calcDisplayBalance(account1.movements)

const calcDisplaySummary = function(movements){
  const incomes  = movements
  .filter(mov => mov >0 )
  .reduce((acc,mov)=>acc+mov ,0);

  labelSumIn.textContent = `${incomes}💵`;

  const out = movements
  .filter(mov => mov<0)
  .reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent=`${Math.abs(out)}`


  const interest = movements
  .filter(mov=>mov>0)
  .map(deposit=>deposit*1.2/100)
  .filter((int,i,arr)=>{
    console.log(arr);
    return int>=1;
  })
  .reduce((acc,mov)=>acc+mov ,0);
  labelSumInterest.textContent = `${interest}`
}

calcDisplaySummary(account1.movements)

const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  })

}

creatUserName(accounts);
console.log(accounts);


//DATA TRANSFORMATION: MAP FILTER REDUCE


//-->MAP method

const USDtoRupee = 82.22;
const movements_2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsInRupee=movements_2.map(function(mov){
//   // console.log(mov);
//   // return 21;
//   return mov *USDtoRupee;
// })

//Map array method with the help of arrow function
const movementsInRupee = movements_2.map((mov) => mov * USDtoRupee)

console.log(movementsInRupee);


const movementsInRupee2 = []
for (const mov of movements_2) {
  movementsInRupee2.push(mov * USDtoRupee)
}

console.log(movementsInRupee2);


const movementDesciptions = movements_2.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1} : You deposited ${mov}`;
  } else {
    return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
  }
})


console.log(movementDesciptions);



//--> FILTER METHOD on arrays
const deposit = movements_2.filter(function (mov) {
  return mov > 0;
})

console.log(deposit);

const depositFor = [];
for (const mov of movements_2) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);

const withdrawal = movements_2.filter((mov) => (mov < 0));

console.log(withdrawal);


//-->REDUCE method

// let balance_2 =0;
// for(const mov of movements_2) balance_2+=mov;
// console.log(balance_2);

// const balance= movements_2.reduce(function(acc,cur_value,i){
//   console.log(`Iteration ${i}:${acc} `);
//   console.log(`${cur_value}`);
//   return acc + cur_value
// },100) //initail value

const balance = movements_2.reduce((acc, cur_value) => acc + cur_value, 120) //initail value

console.log(`Total :`, balance);


//maximum value 

const max = movements_2.reduce((acc,mov)=>{
  if(acc>mov) return acc;
  else return mov;
},movements_2[0])

console.log(`Maximum` ,max);


//Magic chaining method

const USDToRupee2 = 82.22
const totalDepositsRupees = movements_2
.filter(mov => mov>0)
.map(mov=>mov * USDToRupee2)
.reduce((acc,mov)=>acc+mov ,0)

console.log(`Total amount is rupees : ` ,totalDepositsRupees);


//FIND METHOD

const firstWithdrawal = movements_2.find(mov => mov<0)


console.log(movements_2);
console.log(firstWithdrawal);


console.log(accounts);

const findOwner = accounts.find(acc => acc.owner ==='Jessica Davis')
console.log(findOwner);