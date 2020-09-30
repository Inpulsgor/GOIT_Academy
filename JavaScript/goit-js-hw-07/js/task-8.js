"use strict";
// console.log("test");
// debugger;

const refs = {
  controlsDiv: document.querySelector("#controls"),
  // numberInput: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxesDiv: document.querySelector("#boxes"),
};

refs.renderBtn.addEventListener("click", createAmount);
refs.destroyBtn.addEventListener("click", destroyBox);
// let amount;

function createAmount(e) {
  // let amount = numberInput.value;
  // let amount = e.currentTarget.value;
  let amount = document.querySelector("#controls input").value;
  // console.log(amount);
  createBox(amount);
}

function createBox(amount) {
  console.log(amount);
}

function destroyBox() {
  refs.boxesDiv.innerHTML = "";
}

//* Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

//* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div# boxes.

//* Каждый созданный div:

//*   Имеет случайный rgb цвет фона
//* Размеры самого первого div - 30 px на 30 px
//* Каждый следующий div после первого, должен быть шире и выше предыдущего на 10 px
//* Создай функцию destroyBoxes(), которая очищает div# boxes.
