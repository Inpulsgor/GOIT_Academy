"use strict";
// console.log("test");
// debugger;

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
// console.log(input);
// console.log(span);

function fn(e) {
  //   console.log(e.target.value);
  const value = e.target.value;
  span.style.fontSize = value + "px";
  //   console.log(span);
}

input.addEventListener("input", fn);

//* Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.
