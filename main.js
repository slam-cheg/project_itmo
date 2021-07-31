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
/*Открытие popup_share*/ 
let testCard = document.querySelector('#template-card').content;
let placeItem = templatePlace.querySelector('.card').cloneNode(true);
let sharePublication = document.querySelector('.card__share');
let popupShare = document.querySelector(".popup_share");

 
 popupShare.addEventListener('click', function(evt) {
   const eventTarget = evt.target;
   eventTarget.classList.toggle('.popup_opened');
 });