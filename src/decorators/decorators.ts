// ?What is Decorator?
// *Decorators are a feature that allows you to add metadata or behavior to classes, methods, properties, or parameters. Decorators are typically used in conjunction with classes and are a way to modify or enhance the behavior of those classes and their members. They provide a way to annotate and modify the structure and behavior of your code without changing the actual code logic.

// SYNTAX

// function Logger(constructor: Function) { // this line tells us that, the "Function" which is in the arguments this the constructor of the class at the we are using the decorator, here this line ["constructor: Function"] is refers to the "Person" class
//   console.log("Logging....");
//   console.log(constructor);
// }

// @Logger // here the "@" symbol is used because it identifies or recognize that we are using "DECORATORS" after that we have to write the name of the function(just name not invoke it) and we have to put the decorator in the front of class defined like here @Logger is placed in the front of the class Person..
// class Person { // define the class here
//   name = "John";

//   constructor() {
//     console.log("creating logging person.....");
//   }
// }

// const person = new Person(); // creating the instance of the Person class
// console.log(person);

// !NOTE => Decorators execute when the class is defined means whenever the Decorators see that the class is defined,the decorator executes it not wait for the instance to be created

// Output ->
// Logging....
// class Person {
//     constructor() {
//         this.name = "John";
//         console.log("creating logging person.....");
//     }
// }
// creating logging person.....
// Person {name: 'John'}

// *#####################################################################################################

// ! Other way to define the decorator function which is known as ["decorator factory"] which return the decorated function and allows us to pass the parameters, that can used inside or outside the decorator function

// function Logger(activity: string) {
//     return function(constructor: Function){
//         console.log(activity);
//         console.log(constructor);
//     }
// }

// @Logger("Client is logging....")
// class Person { // define the class here
//   name = "John";

//   constructor() {
//     console.log("creating logging person.....");
//   }
// }

// const person = new Person(); // creating the instance of the Person class
// console.log(person);

// *####################################################################################################

//! we can use decorator to send the html and show that into DOM we all also sent the more details and call the decorator will extra details

// function withTemplate(template:string,hookId:string){
//     // console.log(template,hookId);
//     return function(_:Function){
//         const p = new Person(56);
//         const hookElement = document.getElementById(hookId);
//         // console.log(hookElement);
//         if(hookElement){
//             hookElement.innerHTML = template;
//             hookElement.querySelector("p")!.textContent ="My name is " + p.name + " & my age is " + p.age
//         }
//     }
// }

// @withTemplate("<p>Gaurav</p>","app")
// class Person { // define the class here
//     name = "John";
//     age:number;
//   constructor(age:number) {
//     this.age = age
//     console.log("creating logging person.....");
//   }
// }

// *#############################################################################################

// ! Adding Multiple decorators

// function withTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE");
//   return function (_: Function) {
//     const p = new Person(56);
//     const hookElement = document.getElementById(hookId);
//     console.log("element",hookElement);
//     if (hookElement) {
//       hookElement.innerHTML = template;
//       hookElement.querySelector("p")!.textContent =
//         "My name is " + p.name + " & my age is " + p.age;
//     }
//   };
// }

// function Logger(activity: string) {
//     console.log("LOGGER")
//   return function (constructor: Function) {
//     console.log(activity);
//     console.log(constructor);
//   };
// }

// @Logger("Client is logging....")
// @withTemplate("<p>Gaurav</p>", "app")
// class Person { // define the class here
//   name = "John";
//   age: number;
//   constructor(age: number) {
//     this.age = age;
//     console.log("creating logging person.....");
//   }
// }

// ? this is how we can add the multiple decorators but we have to understand the order, on which order they execute and the creation of the decorators..

// * ts script create the decorators from up to down means while compiling the above snippet, the output is "LOGGER" and then "TEMPLATE".

// * while when the decorators execute its from bottom to top means the output of the withTemplate decorator returns the output first and then Logger decorator.

// * ###############################################################################################

// ! decorators used with the properties

// function Log(target: any, propertyName: string) {

// *the Log decorator is defined with a parameter target of type any. This is because TypeScript decorators can have different signatures depending on where they are applied. In this case, the Log decorator is intended to be used on a class property, specifically the title property of the Product class.

// *When you use a decorator on a class property, the target parameter typically refers to the prototype of the class, and the propertyName parameter refers to the name of the property being decorated.

// *In this usage, target would refer to the prototype of the Product class, and propertyName would be the string "title". Since TypeScript allows decorators to be applied in various contexts (such as on classes, methods, properties, and parameters), the target parameter's type is often set to any to accommodate different usage scenarios.

// *However, if you know that the decorator is intended to be used specifically on class properties, you can type the target parameter more accurately.

//   console.log("LOG DECORATOR");
//   console.log(target, "PROPERTY_NAME ->", propertyName);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Value must be a positive number");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   getTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const amount = new Product("Soap",10)
// amount.price = 25;
// console.log(amount.getTax(10))
// console.log(amount)

// ? when the Log decorator executes?
// ! this log decorator executes when the class Product(Definition) is register by the JavaScripts or we can say that when the property of the class is register by the JavaScript

// *--------------------------------------------------------------------------------------------

// ! the decorators can be used in several places like classes, accessors(getters, setters), methods, properties and parameters lets see the example with the parameters passed in them

// function Log(target: any, propertyName: string) {
//   console.log("LOG DECORATOR");
//   console.log(target, "PROPERTY_NAME ->", propertyName);
// }

// function Log1(
//   target: any,
//   name: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("ACCESSOR DECORATOR");
//   console.log(target); // prototype
//   console.log(name); // name of the accessor
//   console.log(descriptor);// details of the accessor
// }

// function Log2(
//     target: any,
//     name: string | symbol,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("METHOD DECORATOR");
//     console.log(target); // prototype
//     console.log(name); // name of the method
//     console.log(descriptor);// details of the method
//   }

//   function Log3(
//     target: any,
//     name: string | symbol,
//     position:number
//   ) {
//     console.log("PARAMETER DECORATOR");
//     console.log(target); // prototype
//     console.log(name); // name of the method in which this parameter is used
//     console.log(position);// at which index this parameter is passed here in this example I have used this Decorator at value parameter, so output is 1 here
//   }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log1
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Value must be a positive number");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log2
//   getTax(tax: number, @Log3 value:number) {
//     return this._price * (1 + tax);
//   }
// }

// *########################################################################################

// ! Returning (and Changing) a class in a class decorator :-

// function withTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function <
//     T extends { new (...args: any[]): { name: string; age: number } } //
//   >(constructorOfTheClassPerson: T) {
//     return class extends constructorOfTheClassPerson {
// by this line we are trying to replace the original constructor with new constructor which we have define below with my own logic and the logic which is defined earlier now this new template should only be rendered once I instantiate my object here not all the time the class is defined
//       constructor(...args: any[]) {
//         super(...args);
//         console.log("Rendering Template");
//         const hookElement = document.getElementById(hookId);
//         if (hookElement) {
//           hookElement.innerHTML = template;
//           hookElement.querySelector("h2")!.textContent =
//             "My name is " + this.name + " & my age is " + this.age;
//         }
//       }
//     };
//   };
// }

// @withTemplate("<h2>Gaurav</h2>", "app")
// class Person {
//   // define the class here
//   name = "John";
//   age: number;
//   constructor(age: number) {
//     this.age = age;
//     console.log("creating logging person.....");
//   }
// }

// const n = new Person(27);

// ? the methods and the accessor can return the value in decorator but the properties and parameters can also return the value but it will not considered by the typescript or it will be ignored by the typescript

// *#########################################################################################

//! Example of AutoBind

// function Auto_bind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   console.log(originalMethod);
//   const alteredDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false, // because it does not show up in "for in loops"
//     get() {
//       const boundFunction = originalMethod.bind(this); // the *["this"]* keyword inside the get method refers to the instance of the object that owns the method being decorated. It ensures that the method is always called with the correct context, even if it's detached from its original object. This is useful in cases where you want to pass the method as a callback or event handler without worrying about losing the reference to the object it belongs to.
//       return boundFunction;
//     },
//   };
//   console.log(alteredDescriptor);
//   return alteredDescriptor; // here this Auto_bind function returned the descriptor object which will replace the original descriptor. So this new configuration will overwrite the old configuration and add the new layer which is getter function
// }

// // ! the below code is javascript but now we are going to use decorators which will automatically bind the class Printer with it

// class Printer {
//   message: string = "This Works!";

//   @Auto_bind
//   showMessage(): void {
//     console.log(this.message); // whenever i click on the button it will not show the message but shows "undefined" because the keyword "this" will not point to the message but it referred to the target of the event which is "click" event at the moment. So to rectify it we have to "bind" to the class "Printer" to "this" keyword.
//   }
// }

// let p = new Printer();
// const button = document
//   .querySelector("button")!
//   .addEventListener("click", p.showMessage);

// *######################################################################################

// ! How to do validation using Decorators....
// by using validation Decorators we are force the user to fill the details which is need to be filled

class Course {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseValidation = document.querySelector("form")!;
courseValidation.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const newCourse = new Course(title, price);
  console.log(newCourse);
});
