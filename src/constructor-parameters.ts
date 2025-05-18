export {};

class Person {
  constructor(public name: string, public age: number) {}
}

let taro = new Person("tatsuya", 31);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ["Tatsuya", 31];
const tatsu = new Person(...profile);

console.log(tatsu);