
import url from './url.js';
import retrieve from './retrieve.js';
const formSearch = document.querySelector('.search-country-form');
const inputSearch = document.querySelector('.search-country-input');
const result = retrieve(url);


const searchCountry = (countries,input) => {
countries.forEach((country)=> {
  const officialName = country.name.official;
  //console.log(officialName,input)
  if (officialName.includes(input)) {
    console.log(officialName)
  }
})
} 
formSearch.addEventListener('submit', (e)=> {
  e.preventDefault();
  const countryInput = inputSearch.value;
  result.then((countries) => {
    searchCountry(countries, countryInput);

})
});
