export{};

type Profile = {
  name:string;
  age:number;
};

const me: Profile = {
  name:"Tatsuya",
  age:31,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend :PersonalDataType = {
  name:"Tomo",
  age:32,
};

//friend.age++;

type Yomitorisenyou<T> = {
  readonly [P in keyof T]:T[P];
};

type YomitorisenyouProfile = Yomitorisenyou<Profile>;
