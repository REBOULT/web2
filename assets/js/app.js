// Constants Variables
const footerYear = document.querySelector('footer span');

const getCurrentYear = _ => new Date().getFullYear();
const footerSetYear = _ => footerYear.textContent = getCurrentYear();

footerSetYear();