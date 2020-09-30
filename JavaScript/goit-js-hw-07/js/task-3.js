"use strict";
// console.log("test");
// debugger;
// ==========================================
const images = [{
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

function getImage(createImage) {
  let image = '';
  createImage.map(({
    url,
    alt
  }) => {
    image += `<li><img src="${url}" alt="${alt}"></li>`;
  })
  return image;
};
// ==========================================
// function getImage(createImage) {
//   return createImage
//     .map(({
//       url,
//       alt
//     }) => `<li><img src="${url}" alt="${alt}"></li>`)
//     .join("");
// }
// ==========================================


const style = function () {
  gallery.style.display = 'flex';
  gallery.style.flexDirection = 'column';
  gallery.style.listStyle = 'none';
}
style();

gallery.insertAdjacentHTML('beforeend', getImage(images));

// ==========================================
// images.forEach(function (elem) {
//   // console.log(elem);
//   gallery.insertAdjacentHTML(
//     "beforeEnd",
//     `<li><img  src="${elem.url}"alt="${elem.alt}"></li>`
//   );
// });
// ==========================================
//* В HTML есть список ul#gallery.

//* Напиши скрипт для создания галлереи изображений по массиву данных.

//* Используй массив объектов images для создания тегов img вложенных в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//* Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//* Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.