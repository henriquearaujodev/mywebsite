const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');
const openclose = document.querySelector('.open-close');

btnOpen.addEventListener('click', () => {
  let open = menuMobile.classList.contains('menu-mobile-open');

  if (!open) {
    menuMobile.classList.add('menu-mobile-open');
  } else {
    menuMobile.classList.remove('menu-mobile-open');
  }
});

btnClose.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
  console.log('fechou');
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
  overlay.classList.remove('overlay-open');
  openclose.src = './assets/img/menu.svg';
});
