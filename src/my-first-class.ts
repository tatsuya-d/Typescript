export{};

class Person {
  name:string;
  age:number;

  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
  profile():string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
let taro = new Person("Tatsuya",31);
console.log(taro.profile());
//let hanako = new Person();
