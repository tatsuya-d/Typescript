export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

const me = new Japanese.Tokyo.Person("Tatsuya");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("たつやん")
console.log(meOsaka);

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);
