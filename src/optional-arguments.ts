export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * weight);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

//console.log(bmi(1.75, 63));
//bmi(身長,体重,console.logで出力するかどうか？)

//bmi(1.75, 63, true);
//bmi(1.75, 63, false);
//bmi(1.75, 63);
