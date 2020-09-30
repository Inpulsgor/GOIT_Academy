"use strict";
// console.log("test");
// debugger;

const findBestEmployee = function (employees) {
  let mostProductive;
  let task = 0;
  for (const [name, result] of Object.entries(employees)) {
    // console.log(employees);
    if (task < result) {
      task = result;
      mostProductive = name;
    }
  }
  // return console.log("bestEmployee :", bestEmployee, ":", work);
  return mostProductive + name;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// =============================================

// const values = Object.values(employees);
//   // console.log(values);
//   for (const value of values) {
//     // console.log(value);
//   }

//   const maxValue = (Math.max(...values));
//   console.log(maxValue);

//   for (let key in employees) {
//     console.log(key);
//   }
//   // return  [maxValue];
