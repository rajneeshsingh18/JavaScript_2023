const budget = Object.freeze( [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

budget[0].value =1000;
// budget[9]='jonas'

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}
) 

spendingLimits.jay = 200 ;
console.log(spendingLimits);

const getLimit = (limits,user) => limits?.[user] ?? 0;

//pure function
const addExpense = function (
  state , 
  limits ,
  value,
  description, 
  user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits,cleanUser) ?
   [...state,{ value: -value, description, cleanUser }]
   : state;
};

const newBudget1 = addExpense(budget , spendingLimits,100, 'Pizza 🍕');
const newBudget2 =addExpense(newBudget1 , spendingLimits,100, 'Going to movies 🍿', 'Matilda');
const newBudget3 =  addExpense(newBudget2 , spendingLimits,200, 'Stuff', 'Jay');



const checkExpenses = function (state , limits) {
  return state.map(entry =>{
    return entry.value < -getLimit(limits , entry.user) ? {...entry , flag:'limit'} : entry;
  })



  // for (const entry of newBudget3)
  // if (entry.value < -getLimit(limits , entry.user)) entry.flag = 'limit';
};
const finalBudget = checkExpenses(newBudget3 , spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) 
      output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : ''
   

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
