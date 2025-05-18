export {};

const kansu = ():number => 43;

let numberAny:  any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnkonwn = numberUnknown + 10;
  console.log(sumUnkonwn);
}


//型ガード
//any型だとコンパイルエラーに引っかからないため
