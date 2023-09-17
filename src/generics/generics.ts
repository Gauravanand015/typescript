// GENERICS

// generics type can be defined as, the type which is connected to the other types, the syntax is

// const names : Array<string | number> = []; // this is the syntax of the generics in this line we can see that inside the array we can use string type we can also use or "|" for other type. Type which is wrapped in the angular brackets shows that this is the generics type

// const promise : Promise<string> = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("I am Done")
//     },2000)
// })

// promise.then((data => console.log(data)))

// ################################################################################

// GENERIC FUNCTION

// function merge<T, U>(objA: T, objB: U) { // this T and U refers that both the object A and B might have the different data type, it might have the same data type also, you can give value Alphabet like S,O etc

//   return Object.assign({},objA, objB); // in this line we are merging the the to object objA and objB in the empty object
// }

// const merged = merge({ name: "Gaurav",hobbies:["Cricket","Gaming","Coding"] }, { age: 27 }); //this is the one to pass the parameters but we can also pass it with specific type too like name must string data type or something else, but that thing will be the redundant task
// console.log(merged);

// const merged = merge<{name:string,hobbies:string[]},{age:number}>({ name: "Gaurav",hobbies:["Cricket","Gaming","Coding"] }, { age: 27 }) // this thing here will ensure that the name must string and all

// ########################################################################################

// WORKING WITH CONSTRAINTS

// working the constraints means that we can restrict the T and U by assign them what should be their data type by using ["extends"] keyword, it is not mandatory to restrict all the parameters, we do it by our choice like I don't want to restrict U then we can leave it

// by assign the data type this ensure that this parameter has to be that particular data type

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({},objA, objB);
// }

//  const merged = merge({ name: "Gaurav",hobbies:["Cricket","Gaming","Coding"] },27); // this will show(throw) error because 27 is a number not the object
//  console.log(merged);

// const merged = merge({ name: "Gaurav",hobbies:["Cricket","Gaming","Coding"] },{age:27}); // this will show(throw) error because 27 is a number not the object
// console.log(merged);

// ###############################################################################################

// ANOTHER GENERIC FUNCTIONS;

// interface Lengthy{
//     length: number; // this interface has length property which tells us that any function or class inherits its have length property
// }

// function countAndPrint<T extends Lengthy>(element:T):[T,string]{ // this line tell us that T extends with interface Lengthy and will return T data type which is anything except object because it does not have length property and return string data type
//     let desc = "Got no value."
//     if(element.length === 1){
//         desc = "Got 1 element."
//     }else if(element.length>1){
//         desc = "Got "+ element.length + " value"
//     }

//     return [element,desc]
// }

// console.log(countAndPrint("Hi there!"));
// console.log(countAndPrint(""));

// ###############################################################################################

// THE KEYOF CONSTRAINTS

// this ["keyof"] keyword will ensure that the object we passing in the parameters will be containing that particular key in that object for example;

// function findValueOfoObject<T extends object, U extends keyof T>(obj:T,key:U){ // this line confirms that the T must be an object  and U must be the key of the object
//     console.log(obj[key]);
// }

// findValueOfoObject({},"name") // this will show error because the object does not contain name property
// findValueOfoObject({name:"Gaurav"},"age") // this will show error because the object does not contain age property
// findValueOfoObject({name:"Gaurav"},"name")

// ##################################################################################################

// GENERICS CLASSES

// we can create a generics classes and after that we can create the objects of different types

// class DataStorage<T extends number | string | boolean>{ // this line tells us about that the ["T"] will either number,string or boolean
//      private sample : T[] = [] // this line tells us about array will store the data type ["T"]

//      addItem(item:T):void{
//         this.sample.push(item);
//      }

//      removeItem(item:T):void{
//         this.sample.splice(this.sample.indexOf(item),1)
//      }

//      getItem(){
//         console.log([...this.sample])
//      }
// }

// const textStorage = new DataStorage()
// textStorage.addItem("Gaurav");
// textStorage.addItem("Sample")
// textStorage.getItem()
// textStorage.removeItem("Sample")
// textStorage.getItem()

// can de the same things with number data but we can do the same thing with objects too but we have to write some extra condition in removeItem method

// ##################################################################################################

// GENERICS UTILITY TYPES

// this utility types is in the typescript only not in javascript, the utility type like "Partial","Readonly" etc will give you the extra safety,flexibility the code for example

// interface CourseGoal {
//     title:String,
//     description:String,
//     completeUntil:Date
// }

// function createCourseGoals(title:string,description:string,date:Date):CourseGoal{
// return { // this method is fine  but i don not want to this like this so, we are using different method
//     title,
//     description,
//     completeUntil:date
// }

// let courseGoal = {}; // this snippet will show error because the object is empty it does not hold the below property, in typescript things are not working same as JavaScript so rectify it we can give it as data type CourseGoal
// courseGoal.title = title;
// courseGoal.description = description;
// courseGoal.completeUntil = date;

// let courseGoal: CourseGoal = {}; // this snippet will show error because the object is empty again it does not justify the CourseGoal data type because it has some properties in it so to rectify it we can use ["Partial"] utility type
// courseGoal.title = title;
// courseGoal.description = description;
// courseGoal.completeUntil = date;
// return courseGoal;

// let courseGoal: Partial<CourseGoal> = {}; // this Partial keyword tell as us that this empty object will become CourseGoal in the future,(working of partial it wrap the Data type defined which CourseGoal here and set it to optional(temporarily) so we can set this empty object initially step by step) at the we can see the error while returning because it is still the Partial type we have to change it to the CourseGoal by using ["as"] keyword
// courseGoal.title = title;
// courseGoal.description = description;
// courseGoal.completeUntil = date;
// return courseGoal as CourseGoal; // typecasting
// }

// const names:Readonly<String[]> = ["Gaurav","ABC"];
// names.push("XYZ") // this is correct but we do not want to change the array so what we do is we can use the utility type ["Readonly"] this hold the array and make this array immutable
// names.pop()

// ####################################################################################################
