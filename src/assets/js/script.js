const btn = document.querySelector('.open-close');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
  let open = menuMobile.classList.contains('menu-mobile-open');

  overlay.classList.toggle('overlay-open');

  !open
    ? menuMobile.classList.add('menu-mobile-open')
    : menuMobile.classList.remove('menu-mobile-open');
});
