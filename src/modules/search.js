
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



const displaySearched = (countryInput,countriesDom) => {
  countriesDom.forEach((country)=>{
    const countryOfficial = country.textContent;
    if(countryOfficial.includes(countryInput)) {
      country.parentElement.parentElement.classList.add('found');
    } else {
      country.parentElement.parentElement.classList.add('hidden')
  
    }
  })
}

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  const countryInput = convertInput(inputSearch.value);
  const countriesDom = getDomelements();
  displaySearched(countryInput,countriesDom)
  formSearch.reset();
});

