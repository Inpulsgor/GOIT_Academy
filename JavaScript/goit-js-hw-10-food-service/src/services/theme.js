import { load, save } from './localStorage';

const themeSwitch = document.querySelector('input.js-switch-input');
const body = document.querySelector('body');
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitch.addEventListener('change', handleCheck);

let checked = load('themeStatus');
checked = JSON.parse(checked);
console.log('checked', checked);

themeSwitch.checked = checked;
if (checked) {
  darkThemeAdd();
}

function handleCheck(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    darkThemeAdd();
  } else {
    lightThemeAdd();
  }
  save('themeStatus', isChecked);
}

function darkThemeAdd() {
  body.classList.remove(theme.LIGHT);
  body.classList.add(theme.DARK);
}

function lightThemeAdd() {
  body.classList.remove(theme.DARK);
  body.classList.add(theme.LIGHT);
}
