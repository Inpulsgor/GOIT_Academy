import countriesItem from '../countriesItem.hbs';

const countryList = document.querySelector('.country_list');
const countryInfo = document.querySelector('.country_info');

export const countriesListMarkup = data => {
  const value = data.reduce((acc, country) => {
    return (acc += `<li class="list_item">${country.name}</li>`);
  }, '');

  countryList.innerHTML = value;
  countryInfo.innerHTML = '';
};

export const markupCountry = data => {
  const value = data.reduce((acc, country) => {
    return (acc += countriesItem(country));
  }, '');
  console.log(value);
  countryInfo.innerHTML = value;
  countryList.innerHTML = '';
};

export const clearData = () => {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
};
