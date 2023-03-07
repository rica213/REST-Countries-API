const detailsSection = document.querySelector(".detailed-country");
const contriesSection = document.querySelector('.countries');

const createDetails = (name) => {
  const img = name.querySelector('.flag');
  const { src, alt } = img;
  const officialName = name.querySelector('.official-name').textContent;
  
  let html = '';
  html += `
  <button class="back-btn">Back</button>
  <div class="details-container-country">
  <img src=${src} class="flag-details" alt=${alt}>
  <div class="country-full-details">
  <h2 class="official-name-det"></h2>
  <div class="country-details-text">
  <p class="details-text"><span>Native Name</span></p>
  <p class="details-text"><span>Population</span></p>
  <p class="details-text"><span>Region</span></p>
  <p class="details-text"><span>Sub Region</span></p>
  <p class="details-text"><span>Capital</span></p>
  <p class="details-text"><span>Top Level Domain</span></p>
  <p class="details-text"><span>Euro</span></p>
  <p class="details-text"><span>Languages</span></p>
  </div>
  <div class="border-countries"></div>
  </div>
  </div>`;
  detailsSection.innerHTML = html
}

const countryDetails = () => {
  const card = document.querySelectorAll('.countries li');
  card.forEach((country)=> {
    country.addEventListener('click', () => {
      contriesSection.style.display = 'none';
      detailsSection.style.display = 'block';
      createDetails(country);
    })
  })
}

export default countryDetails;