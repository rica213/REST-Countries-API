import './style.css';
import displayCountries from './modules/display-countries.js';
import filterByRegion from './modules/filter.js';
import result from './modules/retrieve.js';
import './modules/dark-mode.js';

const filterInput = document.querySelector('.region-select');
const container = document.querySelector('.countries ul');
window.addEventListener('load', () => {
  result.then((countries) => {
    displayCountries(countries, container);
  });
});

/* Filter by region */
filterInput.addEventListener('change', (e) => {
  const region = e.target.value;
  if (region === 'all') {
    container.innerHTML = '';
    result.then((countries) => {
      displayCountries(countries, container);
    });
  } else {
    filterByRegion(result, region, container);
  }
});
