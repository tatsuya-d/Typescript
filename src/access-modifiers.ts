export {};

class Person {
  public name: string;
  protected age: number;
  protected nationalited: string;

  constructor(name: string, age: number, nationalited: string) {
    this.name = name;
    this.age = age;
    this.nationalited = nationalited;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
class Android extends Person {
  constructor(name: string, age: number, nationalited: string) {
    super(name, age, nationalited);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age},nationalited: ${this.nationalited}`;
  }
}
let taro = new Person("Tatsuya", 31, "Japan");
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
//let hanako = new Person();
