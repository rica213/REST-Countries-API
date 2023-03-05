const formSearch = document.querySelector('.search-country-form');
const inputSearch = document.querySelector('.search-country-input');


export const getDomelements = () =>{
  const countryOfficial = document.querySelectorAll('.official-name');
  return countryOfficial;
}

const convertInput = (str) => {
  const strConverted =  str.charAt(0).toUpperCase() + str.slice(1);
  return strConverted
}
const displaySearched = (countryInput, countriesDom) => {
  const countries = Array.from(countriesDom);
  countries.forEach((country) => {
    const countryOfficial = country.textContent;
    let score = 0;
    if (countryOfficial.includes(countryInput)) {
      score = countryOfficial.split(countryInput).join('').length;
      country.parentElement.parentElement.style.display = "block";
    } else {
      country.parentElement.parentElement.classList.add('hidden');
    }
    country.dataset.score = score;
  });
  countries.sort((a, b) => b.dataset.score - a.dataset.score);
  const countriesContainer = document.querySelector('.countries-container');
  countries.forEach((country) => {
    countriesContainer.appendChild(country.parentElement.parentElement);
  });
}


inputSearch.addEventListener('input', (e) => {
  const countryInput = convertInput(e.target.value);
  const countriesDom = getDomelements();
  displaySearched(countryInput, countriesDom);
});

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  const countryInput = convertInput(inputSearch.value);
  const countriesDom = getDomelements();
  displaySearched(countryInput, countriesDom);
  formSearch.reset();
});
