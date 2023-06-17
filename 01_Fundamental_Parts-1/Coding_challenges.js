/*JavaScript Fundamentals – Part 1

///////////////////////////////////////////////
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
-> Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
-> Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 


//Solution for Coding Challenge #1

const massMark = 78 , heightMark = 1.69;
const BMIMarks = massMark / (heightMark * heightMark);

console.log("BMI of marks is ", BMIMarks);

const massJohn = 72 , heightJohn = 1.55;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI of marks is ", BMIJohn);

const markHigherBMI = BMIMarks > BMIJohn ;
console.log(markHigherBMI);

*/

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😊.



if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
    console.log(`John's BMI is higher than Mark's!`);
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/



/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😀
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
-> Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
-> Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
-> Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const DolphinsFirstScore = 96;
const DolphinsSecomdScore = 108;
const DolphinsThirdScore = 89;
const DolphinsAverageScore = (DolphinsFirstScore + DolphinsSecomdScore + DolphinsThirdScore)/3;
console.log(`Average score of Dolphins ${DolphinsAverageScore}`);

const KoalasFirstScore = 88;
const KoalasSecomdScore = 91;
const KoalasThirdScore = 110;
const KoalasAverageScore = (KoalasFirstScore + KoalasSecomdScore + KoalasThirdScore)/3;
console.log(`Average score of Koalas  ${KoalasAverageScore}`);

if(KoalasAverageScore > DolphinsAverageScore) console.log("Koalas team win the match");
else if(KoalasAverageScore === DolphinsAverageScore) console.log(" match is Draw");
else console.log("Dolphins Team win the match")


//BONUS 1 and Bonus 2 combined
const DolphinsFirstScore = 97;
const DolphinsSecomdScore = 112;
const DolphinsThirdScore = 101;
const DolphinsAverageScore = (DolphinsFirstScore + DolphinsSecomdScore + DolphinsThirdScore)/3;
console.log(`Average score of Dolphins  ${DolphinsAverageScore}`);

const KoalasFirstScore = 109;
const KoalasSecomdScore = 95;
const KoalasThirdScore = 106;
const KoalasAverageScore = (KoalasFirstScore + KoalasSecomdScore + KoalasThirdScore)/3;
console.log(`Average score of Koalas  ${KoalasAverageScore}`);

if(KoalasAverageScore > DolphinsAverageScore && DolphinsAverageScore >= 100){
    console.log("Dolphins wins the trophy 🏆");
}else if ( DolphinsAverageScore < KoalasAverageScore && KoalasAverageScore >= 100){
    console.log("Koalas wins the trophy 🏆");
}else if ( KoalasAverageScore === DolphinsAverageScore && KoalasAverageScore >= 100 && DolphinsAverageScore>=100 ){
    console.log("Both wins the trophy 🏆");
}else{
    console.log("No one wins the trophy 😒");

}
*/

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
-> Data 1: Test for bill values 275, 40 and 430
Hints:
-> To calculate 20% of a value, simply multiply it by 20/100 = 0.2
-> Value X is between 50 and 300, if it's >= 50 && <= 300



const bill = 430;
const tip =(bill<=300 && bill >= 50) ? (bill*15)/100 : (bill*20)/100 ;
const totalBill = bill + tip;

console.log(`The bill was ${bill} ,the tip was ${tip } , and the total value of bill ${totalBill}`);
*/