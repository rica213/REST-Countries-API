import './style.css';
import url from './modules/url.js';
import retrieve from './modules/retrieve.js';
import displayCountries from './modules/display-countries.js';

const container = document.querySelector('.countries ul');
const result = retrieve(url);
window.addEventListener('load', () => {
  result.then((countries) => {
    displayCountries(countries, container);
  });
});