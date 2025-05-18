export{};

const debugProfile = (name:string,age:number) => {
  console.log({name,age});
};

debugProfile("Tatsuya",32);


type Profile = Parameters<typeof debugProfile>;
const profile:Profile = ["a",33]
debugProfile(...profile);

