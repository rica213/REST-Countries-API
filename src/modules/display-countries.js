import countryDetails from "./country-details";
const displayCountries = (countries, container) => {
  countries.forEach((country) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${country.flags.png}" alt="${country.flags.alt}" class="flag">
      <div class="desc">
        <p class="official-name">${country.name.official}</p>
        <p class="population"><span>Population: </span>${country.population}</p>
        <p class="region"><span>Region: </span>${country.region}</p>
        <p class="capital"><span>Capital: </span>${country.capital}</p>
      </div>
    `;
    container.appendChild(li);
    
  });
  countryDetails();
};

export default displayCountries;