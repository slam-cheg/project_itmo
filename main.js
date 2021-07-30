/*Открытие навигационного меню */ 
let burgerMenuButton = document.querySelector('.header__button-burger');
let burgerMenu = document.querySelector('.header__nav-bar');

function openMenu(burgerMenu) {
    burgerMenu.classList.add('header__nav-bar_active')
  }

burgerMenuButton.addEventListener('click', () => {
    openMenu(burgerMenu);
  }); 


/*Закрытие навигационного меню */ 
let navBarMobileClose = document.querySelector('.header__button-close');

function closeMenu(burgerMenu) {
    burgerMenu.classList.remove("header__nav-bar_active");
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