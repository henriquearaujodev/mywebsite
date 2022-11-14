const btn = document.querySelector('.open-close');
const menuMobile = document.querySelector('.menu-mobile');

btn.addEventListener('click', () => {
  console.log('foiie');

  menuMobile.classList.toggle('menu-mobile-open');
});
