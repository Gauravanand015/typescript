// Advanced Typing Concepts

// INTERSECTION TYPES

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// this same things can be achieved by using "INTERFACES" for example

// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin,Employee{}

// const e1: ElevatedEmployee = {
//   name: "Elevated",
//   privileges: ["admin"],
//   startDate: new Date(),
// };

// we can use intersection type with other types also for example

// type name = string | number;
// type age = number | boolean;

// type NameAndAge = name & age; // in the line we are combining both name and age and we hover over type NameAndAge we can se that is the number type because in type Name And in type Age number type is common in both so it returns you the number type

// #########################################################################################

// MORE ABOUT GUARDS TYPE

// Guards type is the technique or approach to checking weather properties or the methods are available to use it
// the app.ts file we learn about typeof which we can say that as a "GUARD TYPE"

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//   name: "Elevated",
//   privileges: ["admin"],
//   startDate: new Date(),
// };

//  both are custom type
// type Combine = string | number;
// type Numeric = number | boolean;

// type Universal = Combine & Numeric;

// const add = (a: Combine, b: Combine) => {
//   return a + b // this line shows error because it cannot decide weather the type is number or boolean or string that's way it is showing error to rectify it, we can use GUARD TYPE like typeof to check weather it is number or not if not we can return it otherwise concat the string

//   if (typeof a === "string" || typeof b === "string") {
//     return console.log(a.toString() + b.toString());
//   } else {
//     return console.log(a + b);
//   }
// };

//BUT

// type UnknownType = Employee | Admin;

// function printEmployeeInfo(emp: UnknownType) {
//   console.log("Name " + emp.name); // this will work because both Employee and Admin has name property inside it;

// console.log(emp.privileges) // this will not work because typescript cannot confirm that the privileges always in the arguments

// if(typeof emp === Employee){
// console.log("Privileges: "+ emp.privileges) // this will also not work because Employee and Admin are type describe in the typescript but not in javascript so this will also throw error
// }

// if(typeof emp === "object"){
// console.log("Privileges: "+ emp.privileges) // this will also not work because the it confirm that the emp is object but it cannot confirm that the objects contain the privileges properties inside it
// }

// but their is to check in IF condition
// these things can work
// ["in"] is also the TYPE GUARD like TYPEOF
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInfo(e1);

// Their is another type guard by which we can check if the properties or the methods are present inside it or not that is ["instanceof"]

// class Car {
//   drive() {
//     console.log("Driving a Car");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a Truck");
//   }

//   loadCargo(amount: Number) {
//     console.log("Loading Cargo of " + amount + "KG");
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive(); // this will work because the drive method is present in both class

// console.log(vehicle.loadCargo(10)) // this will not work because it is not present in both the class to rectify it we can use instanceof for example

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// ####################################################################################

// DISCRIMINATED UNIONS

//discriminated union is like pattern which we give some unique value or unique type which specific to particular object or classes or interface, it another type if TYPE GUARD;

// interface RoadRunner {
//   type: "RoadRunner"; // this type keyword discriminate the RoadRunner interface to the other interfaces this type RoadRunner only related the RoadRunner interface
//   runningSpeed: number;
// }

// interface Eagle {
//   type: "Eagle"; // this type keyword discriminate the Eagle interface to the other interfaces this type Eagle only related the Eagle interface
//   flyingSpeed: number;
// }

// type Animal = RoadRunner | Eagle;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "RoadRunner":
//       speed = animal.runningSpeed;
//       break;
//     case "Eagle":
//       speed = animal.flyingSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({type:"RoadRunner", runningSpeed:70})

// ###########################################################################################

// TYPE CASTING

// Typecasting, in the context of programming and computer science, refers to the process of converting a value from one data type (or data format) to another. This is necessary because in many programming languages, different operations or functions require data to be in specific formats or types.

// let x: any = "Hello, TypeScript!";
// let len: number = (x as string).length; // Type assertion

// let strNum: string = "42";
// let num: number = Number(strNum); // Using Number() to convert a string to a number

// function isString(value: any): value is string {
//   return typeof value === "string";
// }

// let y: any = "Hello, TypeScript!";
// if (isString(y)) {
//   let length: number = y.length; // Compiler knows 'y' is a string here
// }

// let para = document.querySelector("p") // in this code on hovering the para we see that typescript that this is the paragraph element

// let paragraph = document.getElementById("para") // but here we catches the p element by id so typescript does not know which element is this

// let userInput = document.getElementById("user-input")

// userInput.value = "Hi there!"// same goes for here but whenever we try catch the value of input it will show error because typescript does not which data type it support for that particular html-element so to avoid it we have to do typecasting for example

// let userInput = <HTMLInputElement>document.getElementById("user-input")!
// userInput.value = "Hi there!" // <HTMLInputElement> this thing will tell typescript that this the input element and will hold any value

// but the upper syntax not valid for React because "<></>" this angular brackets reserved for "Fragment" in React to avoid we write this thing with different way ->

// let userInput = document.getElementById("user-input")! as HTMLInputElement;
// userInput.value = "Hi there!"

// another way to write it is

// let userInput = document.getElementById("user-input")

// if(userInput){
//     (userInput as HTMLInputElement).value = "Hi there!"
// }

// ##################################################################################

// INDEX PROPERTIES

// index properties means that we can create interface with some value, which defines that we can create as many as properties but we defined the data type we cannot alter data while create the properties  for example

// interface ErrorContainer{
//     [key:string] : string // this line shows that the key must be string or that can be changed to string like number and the value must also be string; 
// }

// let errorHandle: ErrorContainer

// errorHandle = {
//     email:"Enter valid email address",
//     userName:"Must Start with Capital Letter"
// }

// ###################################################################################

// FUNCTION OVERLOADS

// In TypeScript, function overloading allows you to define multiple function signatures for a single function name. This is useful when you want a function to accept different combinations of argument types or a different number of arguments while providing type checking and type inference.

// type Combine = string | number;
// type Numeric = number | boolean;

// type Universal = Combine & Numeric;

// function add(a:Combine,b:Combine){
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// add(1,2); // in this condition typescript doesn't know which data type will add function return it may be string or number, so the solution for this is ["overload functions"]

// function add(a:number, b:number) : number;
// function add(a:string, b:number) : string;
// function add(a:number,b:string): string;
// function add(a:string,b:string):string
// function add(a:Combine,b:Combine){
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// let x = add("1",2); // by writing above overloads function it will scrutinize all the overload function and add function then it will it written the type according to the arguments provided by user here the return data type will be string you can check no hovering over the add;
// console.log(x)


// #####################################################################################

// OPTIONAL CHAINING

// const fetchedUsers = {
//     name:"Gaurav",
//     job:{title:"CEO",description:"Owner of the company"}
// }

// console.log(fetchedUsers?.job?.title)

// #####################################################################################

// NULLISH COALESCING

// const firstName = 0;

// let naming = firstName ?? "DEFAULT"; // ["??"] it is only valid for undefined or null means if the firstName is null or undefined then print DEFAULT else print the declared value, valid for 0 and empty string too

// console.log(naming);