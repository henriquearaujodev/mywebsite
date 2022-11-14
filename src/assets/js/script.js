const btn = document.querySelector('.open-close');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  let open = menuMobile.classList.contains('menu-mobile-open');

  !open
    ? menuMobile.classList.add('menu-mobile-open')
    : menuMobile.classList.remove('menu-mobile-open');
});
