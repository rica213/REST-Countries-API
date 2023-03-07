const detailsSection = document.querySelector(".detailed-country");
const contriesSection = document.querySelector('.countries');

const createDetails = (name) => {
  console.log(name)
  let html = '';
  html +=  `
  <div>
  ${name}
  </div>`
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