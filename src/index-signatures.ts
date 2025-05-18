export {};

interface Profile {
  name:string;
  underTwenty:boolean;
  [index: string]: string | number|boolean;
}

let profile: Profile = {name : "Tatsuya",underTwenty :false};

// How towrite index signatures
//{[index:typeForIndex]:typeForValue}
profile.name = "Tatsuya";
profile.age = 31;
profile.nationality = "Japan";
profile.underTwenty = false;
