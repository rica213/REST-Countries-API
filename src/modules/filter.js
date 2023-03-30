import displayCountries from './display-countries.js';

const filterByRegion = (data, region, container) => {
  // data is the promise returned after the fetching
  data.then((countries) => {
    const filterCountries = countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase(),
    );
    container.innerHTML = '';
    displayCountries(filterCountries, container);
  });
};

export default filterByRegion;
