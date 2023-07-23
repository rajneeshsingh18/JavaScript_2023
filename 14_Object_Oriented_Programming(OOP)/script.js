'use strict';

//What is Object Oriented Programming?

//Classes And Instances (Traditional OOP)

//Class --> Like a blueprint from which we can create new objects

//Instances --> Is like a real object that can be use in our code which was created from a class and class itself is not an object

//E.g Like a real house created from abstract blueprint

//The 4 Fundamental OOP principles

/*
-->Abstraction : Ingnoring or hiding details that don't matter.

-->Encapsulation :Keeping properties an dmethods private inside the class , so they are not accessible from outside the class . Some methods can be exposed as a public interface (API)

-->Inheritance : Making all properties and Methods of a certain class available to a child class , forming a hierarchical relationship between classes . This allows us to resuse common logic and to model (Describe)real-world realtionships

-->Polymorphism : A child class can overwrite a method it inherited from a parent class .


## OOP In JavaScript

**“Classical OOP : “ Classes**

Class  ———> Instance [Instantiation]

—> Objects (instances) are instantiated from a class which functions like a blueprint 

**“OOP IN JS : PROTOTYPES”**

Prototype[Contains Methods] <—— Object [Can access method]

—>Objects are linked to a prototype object;

—>**Prototypal Inheritance / Delegation** : The prototype contains methods (behavior ) that are accessible to all objects linked to that prototype

**3 Ways Of Implementing Prototypal Inheritance in Javascript**

—>Constructor functions

—>ES6 Classes

—>Object.create()
*/


//Constructor Function and the new Operator
//Behind the scenes
//1. New {} is created
//2. function is called , this ={}
//3. {} linked to prototype
//4. function automatically return {}

const Person = function(fullName , birthYear){

    //Instance properties

    this.fullName = fullName
    this.birthYear = birthYear

    //Never do this
    // this.calcAge=function(){
    //     console.log(2037-this.birthYear);
    // }
};

const rajneesh =new Person('Rajneesh' , 2003)
console.log(rajneesh);

const yashwant = new Person('Yashwant' ,2001)
console.log(yashwant);

const ankur = new Person('Ankur' , 2002);
console.log(ankur);

console.log(ankur instanceof Person);
// console.log(jay instanceof Person);



//Prototypes
console.log(Person.prototype);

//Prototypal Inheritance
Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear);
}

//Proto chaining
console.log(rajneesh.__proto__);
console.log(rajneesh.__proto__.__proto__);
console.log(rajneesh.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);



rajneesh.calcAge();
ankur.calcAge();

console.log(rajneesh.__proto__);
console.log(ankur.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(rajneesh)); //true
console.log(Person.prototype.isPrototypeOf(ankur)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapines';
console.log(rajneesh.species , yashwant.species);

console.log(yashwant.hasOwnProperty('fullName'));
console.log(rajneesh.hasOwnProperty('species'));
console.log(rajneesh.hasOwnProperty('fullName'));


//Prototypal Inheritance on built-In object

const arr = [3,63,2,2,1,3,3,54,334,34]; //new Array === []
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); //For object.prototype


Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());


//DOM strutrure is true
const h1 = document.querySelector('h1');
console.log(h1.__proto__); //HTMLHeadingElement
console.log(h1.__proto__.__proto__); //HTMLElement
console.log(h1.__proto__.__proto__.__proto__); //Element
console.log(h1.__proto__.__proto__.__proto__.__proto__); //Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); //EventTarget



// console.dir(x=>x+1); // inside this we have call() apply() bind()



//Coidng challenge #1

const Car = function(make , speed){
    this.make=make;
    this.speed= speed;

    // console.log(`${make} going at ${speed} Km/h`);
};

Car.prototype.accelerate = function(){
    this.speed += 10;
   console.log(`${this.make} going at ${this.speed} Km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
   console.log(`${this.make} going at ${this.speed} Km/h`);
}

const bmw = new Car('BMW' , 120);
const mercedes = new Car('Mercedes' , 95);

bmw.accelerate();
bmw.brake()
mercedes.accelerate();
mercedes.brake();


//ES6 classes

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl{
    constructor(fullName,birthYear){
        // console.log(this);
        this.fullName=fullName;
        this.birthYear=birthYear;
    }

    //Instance Methods
    //  method will be added to .prototype property
    calcAge(){
        console.log(3003-this.birthYear);
    }


    greet(){
        console.log(`Hey ${this.fullName}`);
    }

    
    get age(){
        return 2074-this.birthYear
    }

    //set a property that already exists
    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    //static method attached to prototype only 
    static hey = function(){
            console.log(`Hey  there 👋`);
        }
}

const raj = new PersonCl('Rajneesh Singh' ,'2003')
console.log(raj);

raj.calcAge();
console.log(raj.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet= function(){
//     console.log(`Hey ${this.fullName}`);
// }

raj.greet()
console.log(raj.age);

PersonCl.hey = function(){
    console.log(`Hey  there 👋`);
}

PersonCl.hey();
// raj.hey() //not allowed

//1.Classes are NOT hoisted
//2.Classes are first-class citiznes
//3.Classes are executed in strict mode 

const ankur2 = new PersonCl('Kumar Ankur' ,3241);


//Setters and Getters

const account = {
    owner: "Rajneesh" ,
    movements : [134,533,64,2,4],

    get latest(){
        return this.movements.slice(-1).pop()
    },

    set latest(move){
        // return this.movements.unshift(move);
        return this.movements.push(move);

    }
}


console.log(account.latest);

account.latest =182;
console.log(account.movements);

//Object.create()
const PersonProto = {
    calcAge(){
        console.log(3003-this.birthYear);
    } ,
    init(firstName , birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

//Attaching manually no constructor prototype 
const raju = Object.create(PersonProto);
console.log(raju);

raju.name = "rajan";
raju.birthYear = 2012;
raju.calcAge();

console.log(raju.__proto__ === PersonProto);


const yash = Object.create(PersonProto)
yash.init('Yashwant',2003);
yash.calcAge();
console.log(yash.__proto__);
console.log(PersonProto);


//Coding challenge #2

class Cars{

    constructor(make , speed){
        this.make= make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10 ;
        console.log(`${this.make} is going at ${this.speed} Km/h.`);
    }

    
    brake(){
        this.speed -= 5 ;
        console.log(`${this.make} is going at ${this.speed} Km/h.`);
    }

    get speedUS(){
        return this.speed/1.6;
    }

    set speedUS(speed){
        this.speed = speed *1.6
    }

}

const ford = new Cars('FORD',120)

console.log(Cars.prototype);
console.log(ford.__proto__);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);



