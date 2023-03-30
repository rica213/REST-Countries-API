import './style.css';
import url from './modules/url.js';
import retrieve from './modules/retrieve.js';
import displayCountries from './modules/display-countries.js';
import filterByRegion from './modules/filter.js';

const filterInput = document.querySelector('.region-select');
const container = document.querySelector('.countries ul');
const result = retrieve(url);
window.addEventListener('load', () => {
  result.then((countries) => {
    displayCountries(countries, container);
  });
});

/* Filter by region */
filterInput.addEventListener('change', (e) => {
  const region = e.target.value;
  filterByRegion(result, region, container);
});
