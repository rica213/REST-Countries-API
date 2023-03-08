import url from './url.js';
import retrieve from './retrieve.js';
import './details.css';
// -- Global variables
const result = retrieve(url);
const detailsSection = document.querySelector('.detailed-country');
const countriesSection = document.querySelector('.countries');

const backButton = () => {
  document.querySelector('.back-btn').addEventListener('click', () => {
    countriesSection.style.display = 'block';
    detailsSection.style.display = 'none';
  });
};
// -- function to take the native name from the data received from the api
// (since is in a super nested object)
function nativeName(country) {
  return Object.values(country.name.nativeName)
    .map((native) => native.common)
    .join(', ');
}
// -- Render details of the country.
function createDetails(country) {
  const html = `
    <button class="back-btn">
    <p>←</p>
    <p> Back</p>
    </button>
    <div class="details-container-country">
      <img class="flag-detailed" src="${country.flags.png}" alt="${
  country.flags.alt
}">
      <div class="country-full-details">
        <h2 class="official-name-det">${country.name.official}</h2>
        <div class="all-details">
         <div class="country-details-text">
          <p class="details-text"><span>Native Name: </span>${nativeName(
    country,
  )}</p>
          <p class="details-text"><span>Population: </span>${
  country.population
}</p>
          <p class="details-text"><span>Region: </span>${country.region}</p>
          <p class="details-text"><span>Sub Region: </span>${
  country.subregion
}</p>
          <p class="details-text"><span>Capital: </span>${
  country.capital[0]
}</p>
          </div>
          <div class= "other-det">
          <p class="details-text"><span>Top Level Domain: </span>${
  country.tld
}</p>
          <p class="details-text"><span>Currencies: </span>${Object.values(
    country.currencies,
  ).map((coin) => coin.name)}</p>
          <p class="details-text"><span>Languages: </span>${Object.values(
    country.languages,
  )}</p>
        </div>
        </div>
        <div class="border-countries"></div>
      </div>
    </div>
  `;
  detailsSection.innerHTML = html;
  backButton();
}
// --Event listener that opens details page when user click in each card.
function countryDetails() {
  const card = document.querySelectorAll('.countries li');
  card.forEach((country) => {
    country.addEventListener('click', () => {
      countriesSection.style.display = 'none';
      detailsSection.style.display = 'block';
      const officialName = country.querySelector('.official-name').textContent;
      result.then((countries) => {
        const country = countries.find(
          (country) => country.name.official === officialName,
        );
        createDetails(country);
      });
    });
  });
}

export default countryDetails;
