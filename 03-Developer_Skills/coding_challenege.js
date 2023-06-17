///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console


const data1 = [17 ,21 ,23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C in 1 days...${data1[1]}°C in 2 days...${data1[2]}°C in 3 days `)


const printForecast = function(data1 , data2) {
    const arr = data1.concat(data2);
    let string = '';
    for(let i =0 ; i<arr.length ; i++){
        string  += `${arr[i]}°C in ${i+1} days ...`
    }
    console.log("..." + string)
}


printForecast(data1 , data2);