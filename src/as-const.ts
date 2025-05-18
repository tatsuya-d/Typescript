export {};

let name: string = "Tatsuya";

let nickname = "Tatsu" as const;

//nickname = "Ham";

nickname = "Tatsu";

let profile = {
  name: "Tatsuya",
  height: 175,
} as const;

//profile.name = "Ham";
//profile.height = 180;
