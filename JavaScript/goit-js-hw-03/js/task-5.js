"use strict";
// console.log("test");
// debugger;

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const array = [];

  for (const product of products) {
    let value = product[prop];
    // console.log(product);
    if (value !== undefined) {
      array.push(value);
    }
  }
  return array;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

// ======================================================================

//   const values = [];

//   for (var i = 0; i < products.length; i++) {
//     console.log(products[i].name + " " + products[i].price);
//   }

//   for (const key in products) {
//     console.log(key);
//   }

//   for (let i = 0; i < products.length; i += 1) {
//     let arr = Object.values(products[i]);
// console.log(arr);

// products[i] = arr;
// console.log(arr);
//   }

// ======================================================================

//   for (let i = 0; i < products.length; i += 1) {
//     let arr = Object.entries(products[i]);
//     products[i] = arr;
//     console.log(arr);

// const index = products[i][0].indexOf(prop);
// let newArr = [];

// newArr.push(products[i][0][1]);

// console.log(newArr);
//   }
//   return newArr;
