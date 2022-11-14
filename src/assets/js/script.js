const btn = document.querySelector('.open-close');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');
const openclose = document.querySelector('.open-close');

btn.addEventListener('click', () => {
  let open = menuMobile.classList.contains('menu-mobile-open');

  overlay.classList.toggle('overlay-open');

  if (!open) {
    menuMobile.classList.add('menu-mobile-open');
    openclose.src = './assets/img/close.svg';
  } else {
    menuMobile.classList.remove('menu-mobile-open');
    openclose.src = './assets/img/menu.svg';
  }
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
  overlay.classList.remove('overlay-open');
  openclose.src = './assets/img/menu.svg';
});
