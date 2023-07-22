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