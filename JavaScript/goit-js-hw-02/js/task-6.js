"use strict";
// console.log("test");
// debugger;

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  let inputNumber = Number(input);

  if (input === null) {
    continue;
  }
  // console.log(input);

  numbers.push(inputNumber);
  console.log(numbers);

} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна:, ${total}`);

// =================================================

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введите число');
//   let inputNumber = Number(input);

//   // if (Number.isNaN(input)) {
//   //   alert(`Не число`);
//   // }
//   // console.log(numbers);

//   if (input === null) {
//     continue;
//   }
//   // console.log(input);

//   numbers.push(inputNumber);
//   console.log(numbers);

// } while (input !== null);
// // console.log(numbers);

// // total += numbers;

// for (const number of numbers) {
//   total += number;
// }

// // console.log(total);
// console.log(`Общая сумма чисел равна:, ${total}`);