const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');
const openclose = document.querySelector('.open-close');

// btn menu mobile
const btnInicio = document.querySelector('.btn-inicio');
const btnPortfolio = document.querySelector('.btn-portfolio');
const btnTecnologia = document.querySelector('.btn-tecnologias');
const btnSobre = document.querySelector('.btn-sobre');

btnInicio.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
});

btnSobre.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
});

btnTecnologia.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
});

btnPortfolio.addEventListener('click', () => {
  menuMobile.classList.remove('menu-mobile-open');
});

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
});
