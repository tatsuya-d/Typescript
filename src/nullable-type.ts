export {};

let profile: { name: string; age: number | null } = {
  name: "Tatsuya",
  age: null, //tsconfig.jsonで"strictNullChecks": false, tsconfig.jsonでコメントアウト外しtrueからfalseにするとどんなものにもnullが設定できるようになった
};
