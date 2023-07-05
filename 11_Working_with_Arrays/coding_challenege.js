'use strict'

//154 : CODING Challenege #2

const data_1 = [5,2,4,1,15,8,3]
const data_2 = [16,6,10,5,6,1,4]


const calcAvergaeHumanAge = function(data_1){
    const humanAges = data_1.map(age => age <=2 ? 2 * age : 16 + age *4);
    console.log(humanAges);

    const adultDog = humanAges.filter(age => age >=18);

    console.log(adultDog);

    const average = adultDog.reduce((acc,age)=>acc+age,0)/adultDog.length;
    
    return average
};



const avg1= calcAvergaeHumanAge(data_1)
console.log(avg1);

const avg2= calcAvergaeHumanAge(data_2);
console.log(avg2);




//156 : Coding challenge #3

const calcAvergaeHumanAge2 = (data_1)=>
    data_1
    .map(age => age <=2 ? 2 * age : 16 + age *4)
    .humanAges.filter(age => age >=18)
    .reduce((acc,age,i,arr)=>acc+age/arr.length,0)

    const avg3= calcAvergaeHumanAge(data_1)
    console.log(avg3);
    
    const avg4= calcAvergaeHumanAge(data_2);
    console.log(avg4);

/*
const dogAgeInHuman = data_1.map(function(age){
    if(age<=2){
        return 2 * age;
    }else{
        return (16+age*4);
    }
})
console.log(dogAgeInHuman);
*/