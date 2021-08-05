// ВСЕ ПЕРЕМЕННЫЕ

const cardsContainer = document.querySelector('.projects__cards');
const cardTemplate = document.querySelector('#projects-card').content;
const smoothLinks = document.querySelectorAll('a[href^="#"]');
const allProjectsTab = document.querySelector('#all-projects');
const gosProjectsTab = document.querySelector('#gos-projects');
const specProjectsTab = document.querySelector('#spec-projects');
const progressProjectsTab = document.querySelector('#progress-projects');

const gosProjects = [];
const specProjects = [];
const progressProjects = [];

addedProjects = [
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'gosprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/Sberbank_Logo.svg',
        activeImage: 'images/Sberbank-logo-blue.svg',
        background: 'images/sberbank-background.png',
        company: 'Сбербанк',
        projectType: 'specprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'gosprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'specprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'specprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'gosprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'progressprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/Sberbank_Logo.svg',
        activeImage: 'images/Sberbank-logo-blue.svg',
        background: 'images/sberbank-background.png',
        company: 'Сбербанк',
        projectType: 'progressprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'gosprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'progressprojects'
    },
    {
        text: 'Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.',
        image: 'images/gazprom-logo-white.svg',
        activeImage: 'images/gazprom-logo-blue.svg',
        background: 'images/gazprom-background.png',
        company: 'Газпром',
        projectType: 'gosprojects'
    }
];

addedProjects.forEach(item => {

    if (item.projectType === 'gosprojects') {
        gosProjects.push(item);
    }
    if (item.projectType === 'specprojects') {
        specProjects.push(item);
    }
    if (item.projectType === 'progressprojects') {
        progressProjects.push(item);
    }

})

changeCards(addedProjects);

allProjectsTab.addEventListener('click', (event) => {
    changeTabs(addedProjects);
    changebuttons(event);
});

gosProjectsTab.addEventListener('click', (event) => {
    changeTabs(gosProjects);
    changebuttons(event);
});
specProjectsTab.addEventListener('click', (event) => {
    changeTabs(specProjects);
    changebuttons(event);
});
progressProjectsTab.addEventListener('click', (event) => {
    changeTabs(progressProjects);
    changebuttons(event);
});


function changebuttons(event) {
    const button = event.target;
    const oldButton = document.querySelector('.projects__filter-list-item_active');
    oldButton.classList.toggle('projects__filter-list-item_active');
    button.classList.toggle('projects__filter-list-item_active');

}


function changeTabs(array) {

    if (cardsContainer.length !== 0) {

        const cards = cardsContainer.querySelectorAll('.projects__card');
        cards.forEach(item => {
            item.remove();
        })
    }

    changeCards(array);
}

function changeCards(array) {

    array.reverse().forEach(item => {

        cardText = item.text;
        cardImage = item.image;
        cardImageActive = item.activeImage;
        company = item.company;
        backgroundImg = item.background;
        type = item.projectType;

        createCard(cardText, cardImage, cardImageActive, company, backgroundImg);

        if (document.documentElement.clientWidth >= 1180) {
            if (cardsContainer.children.length < 8) {
                addCard(cardText, cardImage, cardImageActive, company, backgroundImg);
            } else {
                return;
            }
        } if (document.documentElement.clientWidth < 1180 && document.documentElement.clientWidth >= 768) {
            if (cardsContainer.children.length < 6) {
                addCard(cardText, cardImage, cardImageActive, company, backgroundImg);
            } else {
                return;
            }
        } if (document.documentElement.clientWidth <= 767) {
            if (cardsContainer.children.length < 4) {
                addCard(cardText, cardImage, cardImageActive, company, backgroundImg);
            } else {
                return;
            }
        }
    });
}


function createCard(cardText, cardImage, cardImageActive, company, backgroundImg) {
    const cardElement = cardTemplate.querySelector('.projects__card').cloneNode(true);
    const backgroundPlase = cardElement.querySelector('.projects__card-preview');

    backgroundPlase.style.backgroundImage = 'url(' + backgroundImg + ')';
    cardElement.querySelector('.projects__card-text').textContent = cardText;
    cardElement.querySelector('.projects__card-text_preview').textContent = cardText;
    cardElement.querySelector('#activeProject').src = cardImage;
    cardElement.querySelector('#deactiveProject').src = cardImageActive;
    cardElement.querySelector('#activeProject').alt = company;
    cardElement.querySelector('#deactiveProject').alt = company;

    cardElement.querySelector('.projects__card-button').addEventListener('click', checkOpening);

    return cardElement;
};

function addCard() { // функция создания карточек

    const card = createCard(cardText, cardImage, cardImageActive, company, backgroundImg);
    cardsContainer.prepend(card); // создаю карточку с записанными данными в параметр cardElement
}


function openProject(event) {

    const button = event.target;
    const card = button.closest('.projects__card');
    const previewCard = card.querySelector('.projects__card-preview');
    const previewText = card.querySelector('.projects__card-text_preview');
    const deactiveLogo = card.querySelector('#deactiveProject');
    const activeLogo = card.querySelector('#activeProject');

    button.classList.add('projects__card-button_active');
    card.classList.add('projects__card_active');
    previewCard.classList.add('projects__card-preview_active');
    previewText.classList.add('projects__card-text_active');

    deactiveLogo.classList.remove('projects__card-logo_deactive');
    deactiveLogo.classList.add('projects__card-logo_active');
    activeLogo.classList.remove('projects__card-logo_active');
    activeLogo.classList.add('projects__card-logo_deactive');

}

function checkOpening(event) {

    if (cardsContainer.querySelector('.projects__card_active')) {
        closeProject();
    } else {
        openProject(event);
    }

}

function closeProject() {

    const activeCard = cardsContainer.querySelector('.projects__card_active');
    const activeCardPreview = cardsContainer.querySelector('.projects__card-preview_active');
    const activeButton = cardsContainer.querySelector('.projects__card-button_active');
    const activeTextPreview = cardsContainer.querySelector('.projects__card-text_active');
    const deactiveLogo = activeCard.querySelector('#deactiveProject');
    const activeLogo = activeCard.querySelector('#activeProject');

    activeCard.classList.remove('projects__card_active');
    activeCardPreview.classList.remove('projects__card-preview_active');
    activeButton.classList.remove('projects__card-button_active');
    activeTextPreview.classList.remove('projects__card-text_active');

    deactiveLogo.classList.add('projects__card-logo_deactive');
    deactiveLogo.classList.remove('projects__card-logo_active');
    activeLogo.classList.remove('projects__card-logo_deactive');
}



for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};