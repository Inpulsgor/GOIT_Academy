"use strict";
// console.log("test");

const total = 100;
let ordered = 20;
let message;

if (total > ordered) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно твоаров!";
}

console.log(message);

ordered = 80;

if (total > ordered) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно твоаров!";
}

console.log(message);

ordered = 130;

if (total > ordered) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно твоаров!";
}

console.log(message);

// const total = 100;
// console.log(total);

// const ordered = 20;
// console.log(ordered);

// const isInStock = total > ordered;

// if (isInStock) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

// ====================================== Solution 2

// const total = 100;
// let ordered = 130;
// let message;

// const isInStock = total > ordered;

// if (isInStock) {
//   message = "Заказ оформлен, с вами свяжется менеджер";
// } else {
//   message = "На складе недостаточно твоаров!";
// }

// console.log(message);
