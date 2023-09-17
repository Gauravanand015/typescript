// ## Object and array example

// const person = {
//   name: "Gaurav",
//   age: 27,
//   hobbies:["sports","cooking"],
//   role:[2,"author"]
// };

// for(let hobbies of person.hobbies){
//   console.log(hobbies)
// }

// ###########################################################

// working with tuples

// const object:{
//   name:string;
//   age:number;
//   hobbies:string[];
//   role:[number,string]  // this is tuple with the data types and with the length which is 2(length of the array role) here but their is an exception we push the element in role but cannot assign it,we assign the value in place of number their should be number and in place of string their should be string  see the example below //
// } = {
//   name: "Gaurav",
//   age: 27,
//   hobbies:["sports","cooking"],
//   role:[2,"author"]
// };

// object.role.push("admin"); // exception
// object.role[0] = 10; // allowed
// object.role[1] = "actor" // allowed
// object.role[1] = 9 // not allowed it should be string because it is string in the role
// object.role[0] = "hero" // not allowed it should be number because it is number in the role

// console.log(object)

// ##########################################################

// WORKING WiTH ENUMS

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   USER,
// }
// this is how we can use enum and First letter(Role) should be capital and inside enum we can define roles and it may or may not be capital letters

// the role is assign like the above then it's compares the indexes of the role like admin has index 0 and so on

// we can assign the index to the roles which present at start and after it will increase automatically according to the define index however we can also assign any number to anyof the role we like for example ->
// enum Role {
// ADMIN = 5, -> assigned
// USER = 6, -> auto-increase
// READ_ONLY = 7 -> auto-increase
// }

// we can also assign the role like this -----
// enum Role {
// ADMIN = "Admin",
// USER = "User",
// READ_ONLY = "Read_only"
// }

// const person = {
//   name: "Gaurav",
//   age: 27,
//   hobbies: ["sports", "cooking"],
//   role: Role.USER,
// };

// switch (person.role) {
//   case Role.READ_ONLY:
//     console.log("is Read_only");
//     break;
//   case Role.ADMIN:
//     console.log("is admin");
//     break;
//   case Role.USER:
//     console.log("is user");
//     break;
//   default:
//     console.log("role is not defined");
// }

// ###########################################################

//  UNION TYPE

//we can assign any type by using pipeline symbol "|";

// function combine(n1:number | string, n2:number | string){
//   let result
//   if(typeof n1 == "number" && typeof n2 == "number" ){
//     result = n1 + n2
//   }else{
//     result = n1.toString() + n2.toString();
//   }

//   return result
// }

// console.log(combine(50,50));
// console.log(combine("Gaurav ","Anand"))

// ############################################################

// Literal types

// ############################################################

// Type Aliases custom type

// syntax
// type CombineAble = number | string; // custom type syntax is first we have to type "type" keyword then the name of the type like here is "CombineAble" the we can write the type

// function combine(n1:CombineAble, n2:CombineAble){
//   let result
//   if(typeof n1 == "number" && typeof n2 == "number" ){
//     result = n1 + n2
//   }else{
//     result = n1.toString() + n2.toString();
//   }

//   return result
// }

// console.log(combine(50,50));
// console.log(combine("Gaurav ","Anand"))

// #####################################################


// Function Return Type and Void Type

// function add(n1:number, n2:number):number{
//     return n1 + n2; // this return number type as we know that both value is number but after (n1:number, n2:number) : string it will show error because the return is number so to avoid this either we can type string in the arguments or in return we can write return n1.toString() + n2.toString()
// }

// function printResult(result:number){
//     console.log(result); // this function has return nothing so this is return type is void type we ca also write the this function in different manner see below
// }

// function printResult(result:number):void{
//     console.log(result); // this is the another way to write the above function in different manner
// }

// typescript has one type which is undefined for example
// function printResult(result:number):undefined{
//     console.log(result) // this is also the way to write the above function because whenever we are trying to console the printResult function it will show us undefined because we are not returning anything
// }

// #############################################################


// function as types

// function add(n1:number, n2:number):number{
//     return n1 + n2; 
// }

// function printResult(result:number){
//     console.log(result); 
// }

// let combineValues : (a:number,b:number) => number // this means that we also give function as type and it take only two parameters as numbers and return number
// combineValues = add // this is the correct by the above statement

// combineValues = printResult // this will show wrong because we have already tell that the combineValues take two arguments as a number and return number but in this code we are consoling the result that is not correct thing to do according to the above statement

// console.log(combineValues(8,8))

// #############################################################

// function as types and callbacks

// function add(n1:number, n2:number ,cb:(result:number) => void){
//     let result = n1 + n2;
//     cb(result) 
// }

// add(10,20,(result)=>{
//     console.log(result)
// })


// #############################################################

// unknown type

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Max';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// #############################################################

// never type

// function generateError(message: string, code: number): never {
//     throw { message: message, errorCode: code }
//   }
  
//   generateError('An error occurred!', 500);

  // #############################################################

  // NOTES ->

  // => if we want to run the specific file continuously then we have to do tsc app.ts --watch or tsc app.ts -w
  
  // => if we want to run the whole project first we have to do "tsc --init" then "tsc -w" these commands will the execute the project and wait for the change if it detect and change the it automatically run the project again 

  // And we can also do "tsc -w" this look all the tsc file and see the changes if any then it will automatically run the project

  // in typescripts we have include,exclude files option for tsconfig.json in which we can exclude the file  and the subfolder for example "*.dev.ts" this will exclude all the files which has "dev.ts" at the end and like this we can also exclude the folder and subfolder

  // now we have "include" options also it is same as "exclude" in this option we can include the file and subfolder which we want to run at any cost.

  // now their one more options "files" this will take only file name as options not folder or subfolder


  // #################################################################################################
  