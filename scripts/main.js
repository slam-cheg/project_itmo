
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


/*Контейнер с карточками публикациями*/ 
let containerPublications = document.querySelector('.publications__list');


let cardTestPublication = containerPublications.querySelector('.card');
let buttonShare = cardTestPublication.querySelector('.card__share');
let tooltipShare = document.querySelector(".tooltip");

/*Открытие tooltip_share тест*/ 
function openTooltip(tooltipShare) {
  tooltipShare.classList.toggle('tooltip_opened');
}

buttonShare.addEventListener('click', () => {
  openTooltip(tooltipShare)
});


/*Функция создания карточки для блока о нас*/ 

/*Массив готовый*/ 
const aboutCardsArr = [

  { 
    date: 'Понедельник, 5 июля 2021г',
    title: 'ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    
  },
  
  { 
    date: 'Понедельник, 5 июля 2021г',
    title: 'АВТОРЫ РОБОТА-МУЗЫКАНТА РОБЕРТА РОБОТЕЦКОГО ПРИЗНАНЫ ЛУЧШИМИ НОВИЧ…',
    text: `Команда ИТМО стала лучшей на
международном финале RoboCup-2021. Успех
ребятам принес Роберт Роботецкий — робот-виртуоз,
исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники...`,
    
  },
  { 
    date: 'Суббота, 3 июля 2021г',
    title: 'ВОЗВРАЩЕНИЕ НА ПЕТРОПАВЛОВКУ: КАК ПРОШЕЛ ВЫПУСКНОЙ ITMO. LIVE — 2021',
    text: `Команда ИТМО сделала многое, чтобы вернуть
формат выпускного этого и прошлого года. Из-за
эпидемиологической ситуации отменена развлекательная часть,
но сохранилась торжественная. Выпускники смогли получить
дипломы из рук деканов и услышать поздравления ректора.`,
    
  },
  { 
    date: 'Суббота, 3 июля 2021г',
    title: 'ВОЗВРАЩЕНИЕ НА ПЕТРОПАВЛОВКУ: КАК ПРОШЕЛ ВЫПУСКНОЙ ITMO. LIVE — 2021',
    text: `Команда ИТМО сделала многое, чтобы вернуть
формат выпускного этого и прошлого года. Из-за
эпидемиологической ситуации отменена развлекательная часть,
но сохранилась торжественная. Выпускники смогли получить
дипломы из рук деканов и услышать поздравления ректора.`,
    
  },
  { 
    date: 'Суббота, 3 июля 2021г',
    title: 'ВОЗВРАЩЕНИЕ НА ПЕТРОПАВЛОВКУ: КАК ПРОШЕЛ ВЫПУСКНОЙ ITMO. LIVE — 2021',
    text: `Команда ИТМО сделала многое, чтобы вернуть
формат выпускного этого и прошлого года. Из-за
эпидемиологической ситуации отменена развлекательная часть,
но сохранилась торжественная. Выпускники смогли получить
дипломы из рук деканов и услышать поздравления ректора.`,
    
  },

];
/*Функция создания карточки*/ 

/*Контейнер с карточками о нас*/ 
const aboutList = document.querySelector('.about__list');
let templateCardAbout = document.querySelector('#template-card-about').content;

function createCard(item) {

  let aboutItem = templateCardAbout.querySelector('.card ').cloneNode(true);

  /*берем данные из словаря или формы для рендеринга контента карточки*/
  aboutItem.classList.add('glide__slide');
  aboutItem.querySelector('.card__info').textContent = item.date;
  aboutItem.querySelector('.card__title').textContent = item.title;
  aboutItem.querySelector('.card__description').textContent = item.text;
  return  aboutItem;

}

function addCard (item, container) {
  let cardAbout = createCard(item);
  container.append(cardAbout);
}


/*Вызов функции добавления карточек "из коробки на страницу" на страницу в цикле по массиву*/ 

aboutCardsArr.forEach((item) => {
  addCard(item, aboutList)
});


 /*let testOpenTooltip = document.querySelector('#template-card').content;
 let placeItem = templatePlace.querySelector('.card').cloneNode(true);*/

 /* Функция получения кол-ва карточек на странице, по ширине экрана
function getCardsPerPage() {
  let screenWidth = window.screen.width;
  let cardsPerPage = 0;

  if (screenWidth > 865) {
    cardsPerPage = 4;
  } else if (screenWidth <= 865 && screenWidth > 620) {
    cardsPerPage = 3;
  } else if (screenWidth <= 620) {
    cardsPerPage = 2;
  }

  return cardsPerPage;
}
*/

