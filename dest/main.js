// // Variables and types
// const a = "5";
// console.log('aaa', a);
// let b: string = "hello";
// b = 'heythere';
// console.log(b);
// // Functions 
// const getSurname = (name: string, surname: string): string => {
//   return name + ' ' + surname;
// }
// console.log(getSurname(
//   'true',
//   'good'
// ));
// // Objects and interfaces
// const user: { name: string, age: number } = {
//   name: "pawan",
//   age: 21,
// };
// // Below object is of type name: string, but required type is name: string, age: number
// // const user2: {name: string, age: number} = {
// //   name: 'Aman',
// // };
// // 1. Types ends with a semi-colon, 
// // 2. All types specified are mandatory by default in the interace.
// // Too many interfaces can create problems
// interface User {
//   name: string;
//   age: number;
// }
// const user3: User = {
//   name: 'pawan',
//   age: 21,
// }
// // This is the same error as above
// // const user4: User = {
// //   name: 'Pawan kumar',
// // }
// // Setting properties to optional
// interface User2 {
//   name: string;
//   age?: number;
//   getName(): string;
// }
// const user5: User2 = {
//   name: 'Pawan kumar',
//   getName() {
//     return 'Hey There' + ' ' + this.name; 
//   }
// }
// const user6: User2 = {
//   name: "Sachin",
//   getName() {
//     return `Hello, ${this.name}`;
//   }
// }
// console.log(user5.getName()); // this returns undefined
// console.log(user6.getName()); // this doesn't returns undefined.
// // Types and Unions 
// let username: string = "protege";
// | -> union operator used to combine multiple types
// let pageNumber: string | number = "1";
// pageNumber = 1;  // TSC wont throw an error, because pageNumber can be either string or number
// let errorMessage:  string | null = null;
//  We can also combine interfaces and other primitive or non-primitive types
// interface User {
//   name: string;
//   surname: string;
// }
// let user: User | null = null;
// a very nasty code 
// let someVar: string | number | null | undefined | string[] | object; 
// ------------ Types in TS --------------------
// Like in typedef in cpp, we have type  here in TS which can be used to assign alternative names to different types.
// type ID = string; 
// interface User {
//   id: ID;
//   name: string;
//   surname: string;
// }
// interface User1 {
//   id: string;
//   name: string;
//   surname: string;
// }
// Above two interfaces are same, but we can use type alias to make it more readable
// type PopularTypes = string; 
// const popularTags: PopularTypes[] = ['dragon', 'coffee']; // well, this code is totallly fine, but it would be nice to make it of the above type to have a clear understanding  about the entity .
// Combining types and aliases in TS.
// type MayBePopularTag = PopularTypes | null; 
// let mayBePopularType: MayBePopularTag = 'dragon';
// mayBePopularType = null;
// type MayBePopularTag = PopularTypes[] | null;
// let mayBePopularType: MayBePopularTag = ['dragon'];
// "any" type, turns of the typescript checks and allows us to reassign any type of value to the variable.
// let foo: any =  'hhello';
// foo =  1; 
// console.log(foo.bar());
// "void" type in TS, used to return nothing from a function.
// const returnNothing = (): void => {
//   // this will throw an error, however returning 'null, undefined' is fine
//   return 'good';
// }
// "never" type, used to indicate that a function will never reach an endpoint
// below function will never end and  will be haulted after it throws error, so it never excecutes completely.
// const doSomething = (): never => {
//   throw "never";
// }
// "unknown" type, we can't assign a unknown type directly to a well specified type variable.
// let vAny: any  = 10 ;
// let vUnknown: unknown = 10;
// 
// let s1: string = vAny; // this is fine
// let s2: string = vUnknown; // this is not fine, reason mentioned above in L155;
// Type assertion of unknown type in TS to work with it in TS  
// "as" keyword is also known as type assertion.
// let s2: string = vUnknown as string; // this is how we do type conversion in TS.
// let strValue: string = "3";
// let numericValue: number = (strValue as unknown) as number;
// console.log(typeof numericValue);
// TypeScript type assertion with DOM elements. 
// const inputElement = document.querySelector('.foo');
// console.log('inputElement', inputElement.value); // this throws error as there's no value property on the inputElement of type Element. A very common fix for this can be type assert the inputElement to any;
// console.log('inputElement', (inputElement as any).value); // this is how we can fix the error, but this is actually a start to other bigger problems in the code as it turns off the type checking of typescript. 
// below is a better fix to the above issue by type assertion of inputElement2 to HTMLInputElement.
// const inputElement2 = document.querySelector('foo') as HTMLInputElement; 
// console.log(inputElement2.value);
// Let's now add an event listener using  TS; 
// const inputElement = document.querySelector(".foo");
// inputElement.addEventListener('blur', (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log(target.value);
// })
// Classes in TypeScript .
// class User {
//   private firstName: string; 
//   private lastName: string;
//   readonly unchangeableName: string; 
//   constructor(firstName: string, lastName: string){
//     this.firstName = firstName; 
//     this.lastName = lastName; 
//     this.unchangeableName = this.unchangeableName;
//   }
//   // changeUnchangeableName(): void {
//   //   this.unchangeableName = 'fooBar'; // Cannot assign to 'unchangeableName' because it is a read-only property.
//   // }
//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };
// const user1 = new User('Pawan', 'Kumar');
// console.log(user1.getName(),  user1);
// Making a class implement an interface
// It's  like having a abstract class's method implemented in concrete class in C++.
// Specifically, declare methods etc in the interface and then implement them in the class.
// interface UserInterface {
//   getFullName(): string;
// }
// class User2 implements UserInterface {
//   getFullName(): string {
//     return "Hare Krishna"
//   }
// }
// const user3 = new User2();
// console.log(user3.getFullName());
// -------------------
// Static members of the class are only accesible from the class, but not the instances of the class.
// class SomeClass {
//   static maxAge = 60; 
// };
// const someClassObj = new SomeClass(); 
// console.log(SomeClass.maxAge);  // only accessbile by the class and not by the instance of the class.
// Inheritance in TypeScript
// class User implements UserInterface {
//   firstName: string;
//   lastName: string;
//   readonly unchangeableName: string;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangeableName = this.unchangeableName;
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };
// class Admin extends User {
//   private editor: string; 
//   getEditor(): string {
//     return this.editor;
//   }
//   setEditor(editor: string): void {
//     this.editor = editor;
//   } 
// }
// const admin = new Admin('Pawan', 'Kumar');
// admin.setEditor('VSCode');
// console.log(admin.getEditor());
// Generic interfaces and functions in TypeScript.
// const addId = <T>(obj: T) => {
//   const id = Math.random().toString(16);
//   return {
//     ...obj,
//     id,
//   }
// }
// interface UserInterface {
//   name: string; 
// }
// const user: UserInterface = {
//   name: "jack",
// }
// console.log(addId<UserInterface>(user));
// above line has a problem, as it is so generic, it will allow us passing even a string as a type, which will create issues as spread operator is  not going to work as expected with the string. Below is the problematic code.
// console.log(addId<string>('foo')); // Output: { '0': 'f', '1': 'o', '2': 'o', id: '0.cbc261e787a31' }; which doesn't makes much sense while spreading a string in object. 
// TO avoid taking anything other than an object in the generic type within <>, below is the correct code for the same. 
// This is generic to only objects, can pass any kind of objects with any interface as the type of the object.  
// const retID = <T extends object>(obj: T) => {
//   const id = Math.random().toString(16);
//   return {
//     ...obj,
//     id,
//   }
// }
// interface UserInterface2 {
//   name: string;
// }
// const user2: UserInterface2 = {
//   name: 'Pawan',
// };
// interface UserInterface3 {
//   name: string; 
//   age: number; 
// }
// const user3: UserInterface3 = {
//   name: 'Krishna',
//   age: 21,
// }; 
// console.log(retID(user3))
// console.log(retID<string>('ello')); // Error: Type 'string' does not satisfy the constraint 'object'.ts(2344)
// Creating generic interfaces. 
// interface UserInterface { 
//   name: string; 
//   age: number; 
// }
// const user: UserInterface = {
//   name: 'Pawan',
//   age: 21,
// }
// interface UserInterface2 <T, V> {
//   name: string; 
//   data: T;
//   meta: V;
// }
// const user2: UserInterface2<{meta: string}, string> = {
//   name: 'Pawan',
//   data: {
//     meta: 'Pawan again'
//   },
//   meta: "Hola"
// };
// const user3: UserInterface2<{meta: {id: string}}, object[]> = {
//   name: "Pawan",
//   data: {
//     meta: {
//       id: '22'
//     }
//   },
//   meta: [
//     {
//       good: "hey"
//     }
//   ]
// }
// const user4: UserInterface2<string[], Date> = {
//   name: "Pawan string",
//   data: ['foo', 'bar'],
//   meta: new Date()
// };
// const updateArray = append<string>('foo', ['bar', 'baz']);
// const searchString:string = 'foo';
// A generic function that takes a type argument T.
// const _hasSearchString = any<string>( (el: string) => el.includes(searchString) ,['fooooo', 'bar', 'baz'])
// Enums in TS;
// const statuses = { 
//   started: 0, 
//   inProgress: 1, 
//   done: 2
// };
// console.log(statuses.started, statuses.inProgress)
// enum StatusEnum {
//   NotStarted = 'notStarted', 
//   InProgress = 'inProgress',
//   Done = 'done'
// };
// let notStartedYet: StatusEnum = StatusEnum.NotStarted;
// notStartedYet = StatusEnum.InProgress;
// console.log(notStartedYet);
// notStartedYet = StatusEnum.Done;  // No other data Types can be assigned to it now. Only StatusEnum.property can be used to assign to notStarted: StatusEnum variable.
// console.log(notStartedYet);
// // Using enums in interface.
// interface Task <T> {
//   id: string; 
//   status: T
// }; 
// const Task1: Task<StatusEnum> = {
//   id: '1',
//   status: StatusEnum.Done,
// }
// interface Task2 {
//   id: string; 
//   status: StatusEnum;
// }
// const user3: Task2 = {
//   id: '1',
//   status: StatusEnum.Done,
// };
