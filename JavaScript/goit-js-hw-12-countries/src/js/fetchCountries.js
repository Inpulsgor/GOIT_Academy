import { requestFilter } from './requestFilter';

const fetchCountries = searchQuery => {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      }
    })
    .then(data => requestFilter(data))
    .catch(error => console.log(error));
};

export default fetchCountries;
