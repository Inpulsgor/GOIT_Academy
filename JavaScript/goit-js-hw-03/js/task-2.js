"use strict";
// console.log("test");
// debugger;

const countProps = function (obj) {
  const keys = Object.keys(obj);
  return `key values:`, keys.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(
  countProps({
    name: "Mango",
    age: 2,
  })
); // 2

console.log(
  countProps({
    mail: "poly@mail.com",
    isOnline: true,
    score: 500,
  })
); // 3

// =======================================================================

// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   console.log(`key values:`, keys.length);

//   const totalCounts = 0;

//   for (const key of keys) {
//     // console.log(key)
//     console.log(countProps[key]);
//     totalCounts += countProps[key];
//   }
//   // console.log(`Total:`, totalCounts)
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({
//   name: 'Mango',
//   age: 2
// })); // 2

// console.log(countProps({
//   mail: 'poly@mail.com',
//   isOnline: true,
//   score: 500
// })); // 3

// =======================================================================

// ===================================
// return Object.keys(obj).length
// ===================================
// let keys = [];
// keys = Object.keys(obj);
// console.log(`key values:`, keys.length);
