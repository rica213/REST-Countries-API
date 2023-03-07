import url from "./url.js";
import retrieve from "./retrieve.js";


const result = retrieve(url);

const detailsSection = document.querySelector(".detailed-country");
const contriesSection = document.querySelector(".countries");

const createDetails = (officialName) => {
  result.then((country) => {
    country.forEach((country) => {
      let html = "";
      if(country.name.official === officialName) {
        console.log(country);
         html += `
          <button class="back-btn">Back</button>
          <div class="details-container-country">
            <img src="${country.flags.png}" alt="${country.flags.alt}" 
            <div class="country-full-details">
               <h2 class="official-name-det">${country.name.official}</h2>
               <div class="country-details-text">
                   <p class="details-text"><span>Native Name: </span></p>
                   <p class="details-text"><span>Population: </span>${
                     country.population
                   }</p>
                   <p class="details-text"><span>Region: </span>${
                     country.region
                   }</p>
                   <p class="details-text"><span>Sub Region: </span>${
                     country.subregion
                   }</p>
                   <p class="details-text"><span>Capital: </span>${
                     country.capital[0]
                   }</p>
                   <p class="details-text"><span>Top Level Domain: </span> ${
                     country.tld
                   }</p>
                   <p class="details-text"><span>Currencies: </span>${Object.values(
                     country.currencies
                   )}</p>
                   <p class="details-text"><span>Languages: </span>${Object.values(
                     country.languages)}</p>
  </div>
  <div class="border-countries"></div>
  </.>
  </div>`;
  detailsSection.innerHTML = html;
      }
    });
  });
};

const countryDetails = () => {
  const card = document.querySelectorAll(".countries li");
  card.forEach((country) => {
    country.addEventListener("click", () => {
      contriesSection.style.display = "none";
      detailsSection.style.display = "block";
      const officialName = country.querySelector('.official-name').textContent;
      createDetails(officialName);
    });
  });
};

export default countryDetails;
