"use strict";
// console.log("test");
// debugger;

// const counter = document.querySelector("#counter");
const span = document.querySelector("#value");
const increment = document.querySelector("[data-action='increment']");
const decrement = document.querySelector("[data-action='decrement']");
let counterValue = 0;
// console.log(counter);
// console.log(span);
// console.log(increment);
// console.log(decrement);
// console.log(counterValue);

function increase() {
  counterValue += 1;
  span.textContent = counterValue;
}

function decrease() {
  counterValue -= 1;
  span.textContent = counterValue;
}

increment.addEventListener("click", increase);
decrement.addEventListener("click", decrease);
// console.log(span);

//* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//* Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//* Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//* Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
