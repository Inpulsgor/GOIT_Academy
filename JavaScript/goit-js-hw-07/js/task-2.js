"use strict";
// console.log("test");
// debugger;

// ==========================================
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");

// ingredients.forEach(function (ingredient) {
//   const li = document.createElement("li");
//   // li.innerHTML += ingredient;
//   li.textContent += ingredient;
//   ul.appendChild(li);
// });

// ==========================================
const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent += ingredient;
  return li;
});
document.querySelector("#ingredients").prepend(...listItems);
// ==========================================

//* В HTML есть пустой список ul#ingredients.
//* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
