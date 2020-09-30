import galleryItems from "./js/gallery-items.js";
// import { removeClass } from "./js/services.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxContent: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
  lightboxButton: document.querySelector(
    "button[data-action='close-lightbox']"
  ),
};
let currentImage;

//================= addListener/removeListener =================
addListener();
// addListener -----------
function addListener() {
  refs.galleryList.insertAdjacentHTML(
    "beforeend",
    listItemMarkup(galleryItems)
  );
  refs.galleryList.addEventListener("click", openModalHandler);
  refs.lightboxButton.addEventListener("click", closeModalHandler);
  refs.lightboxContent.addEventListener("click", closeOverlay);
}
// removeListener -----------
function removeListener() {
  refs.lightboxContent.removeEventListener("click", openModalHandler);
  refs.lightboxContent.removeEventListener("click", closeModalHandler);
  refs.lightboxContent.removeEventListener("click", closeOverlay);
  window.removeEventListener("keydown", closeByPressEsc);
}
//==============================================================
function listItemMarkup(createImage) {
  return createImage
    .map(
      ({ preview, original, description }, index) => `
    <li class="gallery__item">
      <a class="gallery__link" href='${original}'>
        <img class="gallery__image" src='${preview}'
      data-source='${original}' data-id='${index}'
      alt='${description}'
    />
  </a>
</li>`
    )
    .join("");
}
//openModalHandler -----------
function openModalHandler(e) {
  currentImage = e.target.dataset.id;
  // console.log(currentImage);
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = e.target.dataset.source;
  refs.lightboxImage.alt = e.target.alt;
  window.addEventListener("keydown", closeByPressEsc);
}
//closeModalHandler -----------
function closeModalHandler(e) {
  if (e.target.nodeName === "BUTTON") {
    removeClass();
    removeListener();
  }
}
//closeOverlay -----------
function closeOverlay(e) {
  if (e.target === e.currentTarget) {
    removeClass();
  }
}
//closeByPressEsc -----------
function closeByPressEsc(e) {
  if (e.code === "Escape") {
    removeClass();
  } else if (e.code === "ArrowLeft") {
    pressLeft();
  } else if (e.code === "ArrowRight") {
    pressRight();
  }
}
//pressLeft -----------
function pressLeft() {
  let array = [...document.querySelectorAll(".gallery__image")];
  const prevImg = array.find(
    (elem) => Number(elem.dataset.id) === currentImage - 1
  );
  if (currentImage <= 0) return;
  refs.lightboxImage.src = prevImg.dataset.source;
  currentImage -= 1;
}

//*pressRight ----------- NOT WORKING!!! ------------------------------------
function pressRight() {
  let array = [...document.querySelectorAll(".gallery__image")];
  const nextImg = array.find(
    (elem) => Number(elem.dataset.id) === currentImage + 1
  );
  // if (currentImage < array.length - 1) {
  //   refs.lightboxImage.src = nextImg.dataset.source;
  //   currentImage += 1;
  // }

  if (currentImage > array.length - 1) return;
  refs.lightboxImage.src = nextImg.dataset.source;
  currentImage += 1;
}

//removeClass -----------
const removeClass = () => {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.let = "";
};
