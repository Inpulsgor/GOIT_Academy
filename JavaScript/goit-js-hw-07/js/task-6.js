"use strict";
// console.log("test");
// debugger;

const input = document.querySelector("#validation-input");
// console.log(input.getAttribute("data-length"));

function validation() {
  if (input.value.length !== 6) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

input.addEventListener("blur", validation);

//* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

//* Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
//* Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

//* Для добавления стилей, используй CSS - классы valid и invalid.
