"use strict";
// console.log("test");
// debugger;

const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
  const words = message.split(" ");
  console.log(words);
  const totalPrice = words.length * pricePerWord;
  // console.log(price);
  return totalPrice;
};

// console.log(calculateEngravingPrice);
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120