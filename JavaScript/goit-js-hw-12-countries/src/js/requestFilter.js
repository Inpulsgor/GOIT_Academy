import { countriesListMarkup, markupCountry, clearData } from './markup';
import { alertFn } from './alert';

export const requestFilter = data => {
  if (!data) {
    return;
  }
  if (data.length > 10) {
    // console.log(data);
    clearData();
    alertFn();
    return;
  }
  if (data.length >= 2 && data.length <= 10) {
    // console.log(data);
    countriesListMarkup(data);
    return;
  }
  if (data.length === 1) {
    // console.log(data);
    markupCountry(data);
    return;
  }
};
