'use strict';

//          0    1    2    3    4
let arr = ['a', 'b', 'c', 'd', 'e'];

//.slice() --> does not mutate array
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

//At position 2, add 2 elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits);

//At position 2, remove 2 items:
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits2.splice(2, 2);
console.log(fruits2);

//At position 2, add new items, and remove 1 item:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits3);

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


//concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join two arrays
const arr_3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const children = arr_3.concat(arr4);
console.log(children)

//Join three arrays
const arr6 = ["Cecilie", "Lone"];
const arr7 = ["Emil", "Tobias", "Linus"];
const arr8 = ["Robin"];
const children2 = arr6.concat(arr7, arr8);
console.log(children2)

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
console.log(log1.entries());

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
  console.log(Map);
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
  owner: 'Rajneesh Singh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Yashwant Jodha',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Ankur Kumar',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Shaan Aalam',
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

/*

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`
}

const calcDisplaySummary = function(acc){
  const incomes  = acc.movements
  .filter(mov => mov >0 )
  .reduce((acc,mov)=>acc+mov ,0);

  labelSumIn.textContent = `${incomes}💵`;

  const out = acc.movements
  .filter(mov => mov<0)
  .reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent=`${Math.abs(out)}`


  const interest = acc.movements
  .filter(mov=>mov>0)
  .map(deposit=>deposit*acc.interestRate/100)
  .filter((int,i,arr)=>{
    // console.log(arr);
    return int>=1;
  })
  .reduce((acc,mov)=>acc+mov ,0);
  labelSumInterest.textContent = `${interest}`
}


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





//IMPLEMENTING LOGIN 

btnLogin.addEventListener('click',function(e){

  //prevent from submitting the form
  e.preventDefault();
  
  let currentAccount;
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and message
    labelWelcome.textContent = `Welcome back , ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    //clear unput fiels
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    //Display movements
    displayMovements(currentAccount.movements)

    //Display balance
    calcDisplayBalance(currentAccount)


    //Display summary
    calcDisplaySummary(currentAccount)


  }


});

console.log(accounts);

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);


  const receiverAcc = accounts.find(acc => acc.userName == inputTransferTo.value);
  console.log(amount , receiverAcc);

  if(
    amount>0 
    && receiverAcc
    // && currentAccount.balance >= amount 
    && receiverAcc?.userName !== currentAccount.userName){

    console.log(`Transfer valid`);

    }
})


btnLoan.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov=>mov >= amount*0.1)){
    //Add movement 
    currentAccount.movements.push(amount)

    //Update UI

    updateUI(currentAccount)
  }
  inputLoanAmount.value=' '
})


//FINDINDEX method

btnClose.addEventListener('click',function(e){
  e.preventDefault();


  if(inputCloseUsername.value === currentAccount.userName &&
     Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(acc => acc.userName === currentAccount.userName)

     console.log(index);


     //delete account

     accounts.splice(index,1)
     containerApp.style.opacity = 0;

    inputClosePin.value = inputCloseUsername = ' ';


     }  
})


*/




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

// Return a new array with the square root of all element values:
const numbers1 = [4, 9, 16, 25];
const newArr1 = numbers1.map(Math.sqrt)
console.log(newArr1);

//Multiply all the values in an array with 10:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(num => num * 10)

console.log(newArr)



//--> FILTER METHOD on arrays
console.log(movements_2);
const deposit = movements_2.filter(function (mov) {
  return mov > 0;
})

console.log(deposit);

//using for of loop
const depositFor = [];
for (const mov of movements_2) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);

const withdrawal = movements_2.filter((mov) => (mov < 0));

console.log(withdrawal);

// Return an array of all values in ages[] that are 18 or over:
const ages = [32, 33, 16, 40, 15, 75, 4, 2, 2];
const result = ages.filter(age => age >= 18);
console.log(result)


//-->REDUCE method

//Subtract all numbers in an array:
const numbers4 = [175, 50, 25];
const subtracted_reduced = numbers4.reduce((acc, val) => acc - val);
console.log(subtracted_reduced)

//reduce by for of loop
let balance_2 = 0;
for (const mov of movements_2) balance_2 += mov;
console.log(balance_2);


//detaile of reduce
const balance3 = movements_2.reduce(function (acc, cur_value, i) {
  console.log(`Iteration ${i}:${acc} `);
  console.log(`${cur_value}`);
  return acc + cur_value
}, 100) //initail value


//accumulator is like a snowball 
const balance = movements_2.reduce((acc, cur_value) => acc + cur_value, 120) //initail value

console.log(`Total :`, balance);


//maximum value 
const max = movements_2.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements_2[0])

console.log(`Maximum`, max);


//Magic chaining method

const USDToRupee2 = 82.22
const totalDepositsRupees = movements_2
  .filter(mov => mov > 0)
  // .map(mov => mov * USDToRupee2)
  .map((mov,i,arr) => {
    // console.log(arr);
    mov * USDToRupee2
  })
  .reduce((acc, mov) => acc + mov, 0)

console.log(`Total Deposited amount is rupees : `, totalDepositsRupees);


//FIND METHOD

const firstWithdrawal = movements_2.find(mov => mov < 0)
console.log(movements_2);
console.log(firstWithdrawal);


console.log(accounts);
const findOwner = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(findOwner);

const ages6 = [3, 10, 18, 20];

console.log(ages6.find(age=>age>18));