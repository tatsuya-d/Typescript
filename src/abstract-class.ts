export{};

abstract class Animal {
  abstract cry():string;
}

class Lion extends Animal {
  cry(): string {
    return "road";
  }
}

class Tiger extends Animal {
  cry(): string {
    return "grrrr"
  }
}