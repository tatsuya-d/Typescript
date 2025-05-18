export {};

type ObjectType = {
  name:string;
  age:number;
};
interface ObjectInterface {
  name:string;
  age:number;
};

let object: ObjectType = {
  name:"Tatsuya",
  age:31
};

//type interfaceは両方objectを定義できる。他に違いはあるが一旦このレクチャーではここまで

