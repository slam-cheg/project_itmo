/*Открытие навигационного меню */ 
let burgerMenuButton = document.querySelector('.header__button-burger');
let burgerMenu = document.querySelector('.header__nav-bar');
let logoHeader = document.querySelector('.logo_place_header');

function openMenu(burgerMenu) {
    burgerMenu.classList.add('header__nav-bar_active');
    logoHeader.classList.add('logo_active');
    burgerMenuButton.classList.add('header__button-burger_active');
  }

burgerMenuButton.addEventListener('click', () => {
    openMenu(burgerMenu);
  }); 


/*Закрытие навигационного меню */ 
let navBarMobileClose = document.querySelector('.header__button-close');

function closeMenu(burgerMenu) {
    burgerMenu.classList.remove("header__nav-bar_active");
    logoHeader.classList.remove('logo_active');
    burgerMenuButton.classList.remove('header__button-burger_active');
  }

   navBarMobileClose.addEventListener('click', () => {
    closeMenu(burgerMenu)
  });


const publicationsList = document.querySelector('.publications__list');
let templateCard = document.querySelector('#template-card').content;

/*Открытие tooltip_share тест*/ 

let containerPublications = document.querySelector('.publications__list');
let cardTestPublication = containerPublications.querySelector('.card');
let buttonShare = cardTestPublication.querySelector('.card__share');
let tooltipShare = document.querySelector(".tooltip");

 
function openTooltip(tooltipShare) {
  tooltipShare.classList.toggle('tooltip_opened');
}

buttonShare.addEventListener('click', () => {
  openTooltip(tooltipShare)
});




 /*let testOpenTooltip = document.querySelector('#template-card').content;
 let placeItem = templatePlace.querySelector('.card').cloneNode(true);*/