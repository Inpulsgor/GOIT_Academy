import refs from './refs';
import api from './apiService';
import card from './template/card.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
// =============== load more - button ================
export const loadMore = () => {
  api.getImage().then(res => createCardItem(res));
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
};
// =============== input search query - result  ================
export const formInputSubmit = e => {
  e.preventDefault();
  const value = refs.form.elements.query.value;
  api.query = value;
  refs.gallery.innerHTML = '';
  api.resetPage();
  api.getImage().then(res => createCardItem(res));
  refs.form.reset();
};

// =============== render list item by request ================
const createCardItem = array => {
  const cardItemList = array.reduce((acc, item) => {
    return (acc += card(item));
  }, '');
  refs.gallery.insertAdjacentHTML('beforeend', cardItemList);
};
// =============== open modal window ================
export const openModal = e => {
  if (e.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(`<img src='${e.target.src}'">`);
  instance.show();
};
