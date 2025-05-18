import { getLineAndCharacterOfPosition } from "typescript";

export {};


type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1:{name:string;age:number;} = {
  name:"Tatsuya",
  age:31
} ;

type profile =  {
  name: string;
  age: number;
};

const example2:profile = {
  name:"Tatsuya",
  age:31
} ;

type profile2 = typeof example2;



