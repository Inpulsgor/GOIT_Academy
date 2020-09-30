import menu from './menu/menu.json';
import menuItem from './menu/menuTemplate.hbs';

export const menuMarkup = () => {
  const markup = menu.reduce((acc, temp) => {
    return (acc += menuItem(temp));
  }, '');
  //   console.log(markup);
  document.querySelector('ul.js-menu').innerHTML = markup;
};

menuMarkup();
