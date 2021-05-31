const calculadora = require("./calculadora");

// console.log(calculadora.ppower(-2, 1));
// console.log(calculadora.ppower(-2, 2));
// console.log(calculadora.ppower(-2, 3));
// console.log(calculadora.ppower(-2, 4));
// console.log(calculadora.ppower(-2, 5));

for (let i = -100; i <= 100; i++) {
  console.log(2, "^", i);
  console.time("Norm");
  calculadora.power(2, i);
  console.timeEnd("Norm");
}
