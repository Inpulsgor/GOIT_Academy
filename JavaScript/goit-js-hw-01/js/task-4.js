"use strict";
// console.log("test");

// debugger;
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let orderNumber;

orderNumber = prompt("Какое количество дроидов вы хотите купить?");
console.log(orderNumber);

if (orderNumber === null) {
  console.log("Отменено пользователем!");
  orderNumber = Number(orderNumber);
}

totalPrice = orderNumber * pricePerDroid;
console.log(totalPrice);

const creditsLeft = credits - totalPrice;

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${orderNumber} дроидов, на счету осталось ${creditsLeft} кредитов.`
  );
}
