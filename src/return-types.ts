export {};

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

type returnTypeFromAdd = ReturnType<typeof add>;

console.log();
