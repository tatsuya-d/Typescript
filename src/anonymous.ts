export{};

let bmi: (height: number, weight: number) => number = function (
  height: number, 
  weight: number
): number {
  return weight / (height * weight);
}

console.log(bmi(1.75, 63));
