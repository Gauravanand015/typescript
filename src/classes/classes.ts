// what are classes? and what is object oriented programming?

// CLASSES:-> classes are the blueprints of the objects it defines how the objects should looks like which carry some properties and methods in it. Classes can create the multiple similar objects mush easily.

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   printName() {
//     console.log("NAME -> ", this.name);
//   }

//     printName(this: Person) {
//       console.log("NAME -> ", this.name + " my age is " + this.age);
//     }

//   printFullName(firstName: string, lastName: string) {
//     console.log("FULL_NAME -> ", firstName + " " + lastName);
//   }
// }

// const User = new Person("Gaurav", 27); // it is known as the instance of the [Person] class

// User.printName(); // in the line number 14 the keyword this refers to the instance of the [Person] class which is User itself so the [this.name] refers to the name in the [Person] class.

// However if we pass any arguments in the printFullName method then we don't need to use this keyword and directly console.log that arguments example written below ->
// User.printFullName("MSI", "ALPHA");

// lets look another things with [this] keyword....

// const UserCopied = { printName: User.printName };
// UserCopied.printName(); // it will not show any compilation error in the terminal but it will show undefined in the browser console because, the UserCopied is not based on the class [Person] it just the dummy object we are created which does not refers to the any class however {printName:User.printName} in this code value of the printName is a pointer to the printName method which is in User, so in printName method the [this] keyword does not refers to the User object i.e. it shows undefined in the browser console. To rectify that we have to [this:Person] in the print method toh make it happen for example ->

// print(this:Person){
//     console.log("NAME -> ",this.name);
// }

// #####################################################################################################

// private and public access modifiers --->

// class Department {
//     name:string | undefined;
//     employees:string[] = [];

//     constructor(name:string | undefined){
//         this.name = name;
//     }

//     printName(){
//         console.log(this.name);
//     }

//     addEmployee(employee:string){
//         this.employees.push(employee);
//     }

//     printEmployee(){
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const employee = new Department("Gaurav");
// employee.addEmployee("abc");
// employee.addEmployee("xyz");

// employee.employees[2] = "Gaurav" // we can access the employee like this also because it was public but when we use [private keyword] before employees like this [private employees:string[] = [];] then we can not access the employees like this employee.employees[2] = "Gaurav", instead we have to use the addEmployee method to push the value in it

// NOTE: we can also make the method private too like below snippet
// private addEmployee(employee:string){
//     this.employees.push(employee);}

// employee.printEmployee()

// #####################################################################################################

// class Department {
//     readonly id:string;
//     employees:string[] = [];

//     constructor(id:string){
//         this.id = id;
//     }

//      constructor(readonly id:string){} // shorthand initialization

//     printName(){
//         console.log(this.id);
//     }

//     addEmployee(employee:string){
//         this.employees.push(employee);
//     }

//     printEmployee(){
//         this.id = "56" // we cannot assign the id because it is the readonly property
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const employee = new Department("Gaurav");
// employee.addEmployee("abc");
// employee.addEmployee("xyz");

// employee.employees[2] = "Gaurav" // we can access the employee like this also because it was public but when we use [private keyword] before employees like this [private employees:string[] = [];] then we can not access the employees like this employee.employees[2] = "Gaurav", instead we have to use the addEmployee method to push the value in it

// NOTE: we can also make the method private too like below snippet
// private addEmployee(employee:string){
//     this.employees.push(employee);
// }

// employee.printEmployee()

// #######################################################################

// INHERITANCE

// class Department {
//   id: string;
//   name: string;
//   employees: string[] = [];
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   addEmployee(employee: string[]) {
//     this.employees.push(...employee);
//   }

//   printAllEmployees() {
//     console.log(this.employees);
//   }
// }

// class Administrator extends Department {
//   admin: { departmentName: string; adminName: string }[] = [];
//   constructor(id: string, name: string) {
//     super(id, name); // super keyword is used to access the properties of base class, in this example the base class is Department
//   }

//   addAdminAndDepartment(departmentName: string, adminName: string) {
//     this.admin.push({ departmentName, adminName });
//   }

//   printAdminAndDepartment() {
//     console.log(this.admin);
//   }
// }

// const accounting = new Department("id1", "Accounts");
// accounting.addEmployee(["Gaurav", "ABC"]);
// accounting.printAllEmployees();
// const Admin = new Administrator("id3", "Samantha");
// Admin.addAdminAndDepartment("IT", "Rahul");
// Admin.addAdminAndDepartment("IT", "Parul");
// Admin.addAdminAndDepartment("HR", "Pragati");
// Admin.printAdminAndDepartment();
// console.log(accounting);

// ##########################################################################################

// override properties and the protected modifier;

// class Department {
//   id: string;
//   name: string;
//   protected employees: string[] = []; // this protected keyword here is responsible for to access the employees property unlike using private keyword which will allow us to use the employees property only for the base class however when we use protected keyword it allows to access the employees property with the subclasses.This protected keyword is not available in JavaScript it only available in TypeScript

//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printAllEmployees() {
//     console.log(this.employees);
//   }
// }

// class Add extends Department {
//   constructor(id: string, name: string) {
//     super(id, name);
//   }

//   addEmployee(employee: string) {
//     if (this.employees.includes(employee)) {
//       console.log("Name is Already Present");
//     } else {
//       this.employees.push(employee);
//     }
//   }
// }

// Create an instance of the Department class
// const employees = new Department("ID9", "MSI");

// Create an instance of the Add class (which is a subclass of Department)
// const addingEmployee = new Add("ID7", "XYZ");

// Add an employee to the Department instance
// employees.addEmployee("Beta");

// Add an employee to the Add instance (which is also a Department)
// addingEmployee.addEmployee("Alpha"); // the array of employee which is formed by Add Subclass is totally different from the array of employees created by the base Class which is Department
// addingEmployee.addEmployee("Beta");
// addingEmployee.addEmployee("Gamma");
// addingEmployee.addEmployee("Beta");

// Print the employees of the Department instance
// employees.printAllEmployees(); // This will print ["Beta"]

// Print the employees of the Add instance
// addingEmployee.printAllEmployees(); // it will give the array of all the employee which is added by the sub class ["Add"] which is ["Alpha","Beta","Gamma"]

// ###########################################################################################

// GETTERS AND SETTERS

// class Department {
//   private lasReport: string[] = [];
//   id: string;
//   getter and setter methods are available in  JavaScript and TypeScript both....

//   get mostRecentReport() { // this is the getter function we have to return(** mandatory to return in getter function**) the most recent report for this function
//     if (!this.lasReport) {
//       throw new Error("No Reports Available");
//     }
//     return this.lasReport[this.lasReport.length - 1];
//   }

//   set mostRecentReport(report: string) { // this is the setter function we set the value as we want and write some complex logic in it
//     if (!report) {
//       throw new Error("Report cannot be empty");
//     }
//     this.addReport(report);
//   }

//   constructor(id: string) {
//     this.id = id;
//   }

//   addReport(report: string) {
//     this.lasReport.push(report);
//   }

//   getId() {
//     console.log(this.id);
//   }
// }

// const d = new Department("ID1");
// d.mostRecentReport = "id2"
// d.mostRecentReport = "id3"
// d.mostRecentReport;
// console.log(d)

// ###########################################################################################

// STATIC PROPERTIES AND METHODS......

// while we using static keyword in the class we don't have to create the instance of the class, we can directly access the static properties and methods.

// class Department {
//   static firstName = "Gaurav";
//   id: string;

//   constructor(id: string) {

//     this.id = id;

// console.log(this.firstName) // not allowed in this way inside the constructor..

// console.log(Department.firstName) // this is way we can access the value of the firstName inside the constructor..

//   }

//   static createId(newId: string) {
//     return {latestID: newId}
//   }
// }

// console.log(Department.firstName); // this is way we can access the value of the firstName directly without using new keyword or without make an instance of the Department class
// console.log(Department.createId("thor"));

// ###########################################################################################

// ABSTRACT CLASSES

// abstract class is used to force the subclass to use some abstract properties or methods which is declared in the base class for example is the in the base their is abstract method known as describe than the sub class which extends this base class has to use this abstract method describe...

// abstract class Department{
//   id: string;
//   name: string;

//   constructor(id:string, name:string){
//     this.id = id;
//     this.name = name;
//   }

//   abstract describe(this:Department):void; // if this abstract method is declared in the base class which is Department here, then the subclass which will inherit this abstract class Department has to use this abstract method anyhow
// }

// class AddEmployee extends Department{
//   constructor(id:string, name:string){
//     super(id,name)
//   }

//   describe(){ // this subclass has inherit the base class Department, so it has to use the describe abstract method
//       console.log("Department ->> " + this.name)
//   }
// }

// class ITDepartment extends Department{
//   constructor(id:string, name:string){
//     super(id,name)
//   }

//   describe(){ // this subclass has inherit the base class Department, so it has to use the describe abstract method
//       console.log("This Department is IT with the id ->> " + this.id)
//       console.log("This Department name is " + this.name)
//   }
// }

// const department = new Department("id7","Robotics"); // this is now allowed because we cannot create a instance of the abstract class

// const thisDepartment = new AddEmployee("id4","IT");
// thisDepartment.describe();

// const it = new ITDepartment("id4","MECHANICAL");
// it.describe();

// ###########################################################################################

// SINGLETONS AND PRIVATE CONSTRUCTORS

// this singleton private constructor is used to create a new instance within the class we cannot create the new instance outside the class using new keyword because of the private keyword, we have to create instance inside the class itself and can be created only one time throughout the lifecycle

class Department {
  private static instance: Department;
  id: string;

  private constructor(id: string) {
    this.id = id;
  }

  static getInstance(id:string){
    if(Department.instance){
      return Department.instance;
    }
    return this.instance = new Department(id);
  }
}

console.log(Department.getInstance("id7")); 
console.log(Department.getInstance("id1")); // this will return same output