"use strict";
// console.log("test");

let input;
let total = 0;
// input = prompt("Введите число");
// input = Number(input);
// console.log(input);

// if (Number.isNaN(Number(input))) {
//   alert("Было введено не число, попробуйте еще раз");

do {
  input = prompt("Введите число");
  let inputNumber = Number(input);
  if (isNaN(inputNumber)) {
    alert(`Было введено не число, попробуйте еще раз`);
  }
  console.log(input);
  total += inputNumber;
} while (input !== null);

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
