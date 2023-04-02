const darkModeBtn = document.querySelector('.dark-mode-btn');
// const boqdy = document.querySelector('.countries ul');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
