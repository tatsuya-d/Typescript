export {};

let fooCompatibility: any;
let barCompatibility: string = "Typescript";

console.log(typeof fooCompatibility);
fooCompatibility = barCompatibility;

console.log(typeof fooCompatibility);

let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "string";
fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber:number;

let fooNumberLiteral:1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age:number;
  name:string;

}

class Person {
  constructor(public age:number,public name:string) {}
}

let me: Animal;

me = new Person(31,"Tatsuya");



