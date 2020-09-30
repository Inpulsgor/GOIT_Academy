"use strict";
// console.log("test");
// debugger;

const countTotalSalary = function (employees) {
  let TotalSalary = 0;
  for (let key in employees) {
    TotalSalary += employees[key];
  }
  return `Total:, ${TotalSalary}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
