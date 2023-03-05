const formSearch = document.querySelector('.search-country-form');
const inputSearch = document.querySelector('.search-country-input');
// -- 3. Displays all the countries which name matches the input that the user is writing
// with preference the closest name.
const displaySearched = (countryInput, countriesDom) => {
  const countries = Array.from(countriesDom);
  countries.forEach((country) => {
    const countryOfficial = country.textContent;
    let score = 0;
    if (countryOfficial.includes(countryInput)) {
      score = countryOfficial.split(countryInput).join('').length;
      country.parentElement.parentElement.style.display = 'block';
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
};
// -- 2.b Function that takes the all the Dom countries.
const getDomelements = () => {
  const countryOfficial = document.querySelectorAll('.official-name');
  return countryOfficial;
};

// -- 2.a Function that makes the first letter of a string to UpperCase.
const convertInput = (str) => {
  const words = str.split(' ');
  const convertedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const convertedString = convertedWords.join(' ');
  return convertedString;
};

// -- 1.b Add event to extract every input while user is writing.
inputSearch.addEventListener('input', (e) => {
  const countryInput = convertInput(e.target.value);
  const countriesDom = getDomelements();
  displaySearched(countryInput, countriesDom);
});

// -- 1.a Add event to submit the form to extract the input when finish.
formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const countryInput = convertInput(inputSearch.value);
  const countriesDom = getDomelements();
  displaySearched(countryInput, countriesDom);
  formSearch.reset();
});

export default getDomelements;