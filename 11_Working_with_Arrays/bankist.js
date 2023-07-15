/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
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
  
  const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    // const movs = sort ? movements.slice().sort((a,b)=>b-a) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  
  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
  };
  
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;
  
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;
  
    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
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
    displayMovements(acc.movements);
  
    // Display balance
    calcDisplayBalance(acc);
  
    // Display summary
    calcDisplaySummary(acc);
  };
  
  ///////////////////////////////////////
  // Event handlers
  let currentAccount;
  
  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
  
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
  
      // Update UI
      updateUI(currentAccount);
    }
  });
  
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
  
    const amount = Number(inputLoanAmount.value);
  
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // Add movement
      currentAccount.movements.push(amount);
  
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


  //SOME and every

//EQUALITY
const movements_3= [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
console.log(movements_3)
console.log(movements_3.includes(-130));

//CONDITION
const anyDeposits =movements_3.some(mov => mov >9000) //return true false .some()
console.log(anyDeposits);


//EVERY return true if all condition passes else return false

console.log(movements_3.every(mov => mov >0)); //false
console.log(account4.movements.every(mov => mov >0)); //true

//separate callback

const deposit = mov => mov > 0;

console.log(movements_3.every(deposit));
console.log(movements_3.some(deposit));
console.log(movements_3.filter(deposit));

//flat and flatmap

const arr = [[1,2,3],[4,5,3],8324,23]
console.log(arr.flat());


const arrDeep =  [[[1,2],3],
                  [4,[5,6]],
                  7,8]
// console.log(arrDeep.flatMap()); //flatMap mapper function is not callable
console.log(arrDeep.flat());
// console.log(arrDeep.flat().flat());
console.log(arrDeep.flat(2));

//flat

const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc,mov)=>acc + mov , 0)
console.log(overalBalance)


//flatMap

const overalBalance_2 = accounts
.flatMap(acc => acc.movements)
.reduce((acc,mov)=>acc + mov , 0)
console.log(`Using flatMap : `,overalBalance_2)


//Sorting

//-->Strings
const owners = ['Raj' ,'Aman','Zack' ,'Bob'];
console.log(owners.sort());
console.log(owners);

//Number

console.log(movements_3);
console.log(movements_3.sort()); 

//return < 0 --> A,B (keep order)
//return > 0 --> B,A (switch order)

/*
const ascending = movements_3.sort((a,b)=>{
      if(a>b)return 1;
      if(a<b)return -1;
})
console.log(ascending);


const Descending = movements_3.sort((a,b)=>{
  if(a>b)return -1;
  if(a<b)return 1;
})
console.log(Descending);
*/

const ascending_2 = movements_3.sort((a,b)=>a-b)
console.log(ascending_2);

const Descending_2 = movements_3.sort((a,b)=>b-a)
console.log(Descending_2);


// let sorted=false;
// btnSort.addEventListener('click',function(e){
//   e.preventDefault();
//   displayMovements(currentAccount.movements,!sorted);
//   sorted = !sorted;
// })


//More ways of creating and filling arrays


console.log(new Array(1,2,3,4,2,5,4,34,2));



//Array constructor function

const  x = new Array(7);
console.log(x);
console.log(x.map(()=>5));

x.fill(3);
// x.fill(1,3)
// x.fill(1,3,5) // 3 and 4th poisition are filled with 1
console.log(x);

const arr_2=[1,2,3,4,2,5,4,34,2];
arr_2.fill(13,2,6)
console.log(arr_2);


//Array.from
const y =Array.from({length:7} ,()=>1*2)
console.log(y);

const z = Array.from({length:8},(_,i)=>i+1);
console.log(z);


labelBalance.addEventListener('click',function(){
  
const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
el => Number(el.textContent.replace('€',''))
);
console.log(movementsUI)
})



/////////////////////////////////
//Array Methods Practice
// const bankDepositSum = accounts.map(acc => acc.movements).flat();

const bankDepositSum = accounts
                      .flatMap(acc => acc.movements)
                      .filter(mov => mov>0)
                      .reduce((sum,cur)=>sum+cur);

console.log(bankDepositSum);


//2. 
// const numDeposits1000 = accounts
// .flatMap(acc=>acc.movements)
// .filter(mov=>mov>=1000).length

const numDeposits1000 = accounts
.flatMap(acc=>acc.movements)
// .reduce((count,cur) => cur>=1000? count+1: count,0)
.reduce((count,cur) => cur>=1000? ++count: count,0)


console.log(numDeposits1000);

//Prefixed ++ operator

let a= 10;
console.log(++a);
console.log(a);


//3.
const sums = accounts.flatMap(acc=>acc.movements)
.reduce((sum , cur)=>{
    cur >0 ? (sum.deposit += cur) : sum.withdrwalas +=cur;
    return sum;
},{deposit:0 ,withdrwalas:0})



console.log(sums);

//or 
const {deposit2 ,withdrwalas2} = accounts.flatMap(acc=>acc.movements)
.reduce((sum , cur)=>{
    // cur >0 ? (sum.deposit2 += cur) : sum.withdrwalas2 +=cur;

    sum[cur>0 ? 'deposit2' : 'withdrwalas2'] += cur
    return sum;
},{deposit2:0 ,withdrwalas2:0})

console.log(deposit2,withdrwalas2);


//4.

//this is a nice title --> This Is a Nice Title --> debugging required

const convertTitleCase = function(title){
  const capitzalize = str =>  str[0].toUpperCase()+ str.slice(1)
  const exceptions = ['a','an','the','but','or','on','in','with'];

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word =>
    exceptions.includes(word) ? word :capitzalize(word));
  return titleCase;
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LOng title but not too in  with Great'));
