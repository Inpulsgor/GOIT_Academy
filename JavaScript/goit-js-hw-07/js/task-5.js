"use strict";
// console.log("test");
// debugger;

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
// console.log(input);
// console.log(span);

function inputValue(e) {
  //   span.textContent = e.target.value;
  //=====================================
  // if (input.value !== "") {
  //   span.textContent = e.target.value;
  // } else {
  //   span.textContent = "незнакомец";
  // }
  //=====================================
  input.value !== ""
    ? (span.textContent = e.target.value)
    : (span.textContent = "незнакомец");
}

input.addEventListener("input", inputValue);

//* Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
