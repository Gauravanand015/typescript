// what is interface ?
//  Interfaces only define method signatures without implementations. Classes that implement an interface must provide their own implementations for the methods defined in the interface.

// what is difference between the class and interface ?
// Classes: Classes can have both method declarations and implementations. When you create an object from a class, you can call its methods, and those methods execute code.

// Interfaces: Interfaces only define method signatures without implementations. Classes that implement an interface must provide their own implementations for the methods defined in the interface.

// interfaces is only available in the TypeScript not in JavaScript

// *#############################################################################

// difference between the classes and interfaces  is in classes we declare the properties and methods and also implement the method but in interface its only set the parameters that these must used inside the interface class

// how to use interface

// interface Person {
//    this things defines that structure of the objects that every objects must have this structure
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let Student: Person;

// Student = {
//   name: "Gaurav",
//   age: 27,

//   greet(phrase: string) {
//     console.log(`${phrase}` + " " + this.name);
//   },
// };
// Student.greet("Hello my name is");

// *###################################################################################

// Using interfaces with classes

// interface Greet_able{
//     name: string;
//     greet(phrase: string): void;
// }

// class Person implements Greet_able{ // to use the interface with class we have to use keyword ["implements"] after the name of the class which is Person here
//     name: string;
//     age:number // added in class not in interface we can this thing in class

//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase:string){
//         console.log(`${phrase}` + " " + this.name + " my age is " + this.age);
//     }
// }

// let user1 : Greet_able // this line ensure that the user1 can hold anything in it but it must have the name property and a greet method means that it does not matter what other things inside the user1 but it must have name and greet method because we are assign it with the Greet_able interface

// user1 = new Person("Gaurav",27)
// user1.greet("Hello there I am")
// console.log(user1)

// *##################################################################################

// Readonly interface properties

// interface Greet_able{
//     readonly name: string; // this line will ensure the the name will set only once in a lifetime we can not change that after assign some name to it, it will show error
//     greet(phrase: string): void;
// }

// class Person implements Greet_able{
//     name: string;
//     age:number // added in class not in interface we can this thing in class

//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase:string){
//         console.log(`${phrase}` + " " + this.name + " my age is ");
//     }
// }

// let user1 : Greet_able
// user1 = new Person("Gaurav",27)

//  user1.name = "Ruby" // cannot assign name because it is readonly property

// user1.greet("Hello there I am")
// console.log(user1)

// *################################################################

// Extending Interfaces

// this extending interfaces means if we want one interface to inherit the properties of other interface than we can use the extends keyword for example;

// by using the extends keyword in Greeting  with Named we ensure that if any class or object try to use Greeting interface it will have greet method as well as name property too, their is one more advantages that if some objects or class wants only name than it can use Only Named interface or it can use the Greeting for the both

// interface Named {
//     name:string
// }

// interface Greeting extends Named{
//     greet(phrase: string): void;
// }

// interface Age {
//     age:number
// }

// interface Greeting extends Named,Age{ // this snippet is also possible
//     greet(phrase: string): void;
// }

//  Now in below snippet we can see that class can inherit the more the one interface at the same time by using "," for example

// we cannot inherit more the one class in class but in interfaces we can do that

// class Person implements Greeting, Age{
//     name: string;
//     age:number

//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase:string){
//         console.log(`${phrase}` + " " + this.name + " my age is " + this.age);
//     }
// }

// let user1 = new Person("Ruby",27)
// user1.greet("Hello there I am")
// console.log(user1)

// *###############################################################################

// INTERFACES AS FUNCTION TYPES

// interface addFun{
//     (a:number,b:number) : number // in this line we are declaring a and b parameters then after colon(:) we are declaring return type which is number here
// }

// let add : addFun

// add = (a:number,b:number) =>{
//     return a+b // writing the function and return value to add
// }

// console.log(add(30,50))

// *####################################################################################

// OPTIONAL PARAMETERS AND PROPERTIES

// interface Greet_able {
//   readonly name?: string; // by adding ["?"] question mark after the name we ensure that if the object or the class does not have name properties then it does not matter
//   greet(phrase: string): void;
// }

// class Person implements Greet_able {
//   name?: string;
//   age = 27;

//   constructor(n?: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     if(this.name){
//         console.log(`${phrase}` + " " + this.name + " my age is ");
//     }else{
//         console.log("Hi!")
//     }
//   }
// }

// let user1: Greet_able;
// user1 = new Person();
// user1.greet("Hello there I am");


// *#########################################################################
