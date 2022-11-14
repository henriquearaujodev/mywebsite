const btn = document.querySelector('.open-close');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  console.log('foiie');

  let open = menuMobile.classList.contains('menu-mobile-open');
  if (!open) {
    menuMobile.classList.add('menu-mobile-open');
  } else {
    menuMobile.classList.remove('menu-mobile-open');
  }
});
