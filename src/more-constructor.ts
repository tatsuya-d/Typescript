export{};

class Person {
  // public name:string;
  // protected age:number;

  constructor(public name:string, protected age:number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person("tatsuya",31);

console.log(me);
