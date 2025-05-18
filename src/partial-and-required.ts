export {};

type Profile = {
  name: string;
  age?: number;
  zipCode:number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };コピーは汎用的ではない。

type PartialType = Partial<Profile>;//部分的な

type PequiredType = Required<Profile>//必須

