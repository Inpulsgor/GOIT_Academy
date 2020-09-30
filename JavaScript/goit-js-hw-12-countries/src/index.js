import './styles.css';
import fetchCountries from './js/fetchCountries';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import lodash from 'lodash';

const input = document.querySelector('#js_input');

input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);
