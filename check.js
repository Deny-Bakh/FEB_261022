const button = document.querySelector('#ecommerceButton');
const popup = document.querySelector('.popup_wrapper');

button.addEventListener('click', clickHandler);

function clickHandler() {
  // console.log('check')
  popup.classList.add('active_click')
};