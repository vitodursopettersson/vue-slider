'use strict'

// Array Oggetti Img
const slideGroupImage = [
    {
        title: 'Lago di Lentini',
        description: 'Il lago di Lentini o biviere di Lentini è un lago della Sicilia. Si trova in provincia di Siracusa ai margini della provincia di Catania, e si estende nel territorio del comune di Lentini.',
        img: '01.jpg',
    },
    {
        title: 'Giardini Naxos',
        description: "Prima colonia greca in Sicilia, possiede un'ampia zona archeologica con annesso il relativo museo.",
        img: '02.jpg',
    },
    {
        title: 'Catania',
        description: "Catania è un'antica città portuale sulla costa orientale della Sicilia. È situata ai piedi dell'Etna, un vulcano attivo con sentieri che arrivano fino alla sua sommità.",
        img: '03.jpg',
    },
    {
        title: 'Siracusa',
        description: "Siracusa è una città sulla costa ionica della Sicilia. È nota per le rovine dell'antichità.",
        img: '04.jpg',
    },
    {
        title: 'Isole Eolie',
        description: "Le isole Eolie, dette anche isole Lipari, sono un arcipelago appartenente all'arco Eoliano situato nel mar Tirreno meridionale, a nord della costa siciliana, fanno parte della città metropolitana di Messina.Dal 2000 sono patrimonio dell’UNESCO.",
        img: '05.jpg',
    }
]

// Selettore Container Slider e Thumbnails
const sliderContainer = document.querySelector('.group-slider');
const thumbnailsContainer = document.querySelector('.group-thumbnails');

// Variabile items
let slideElement = '';
let thumbnailsElement = '';
let currentElement = 0

// Ciclo generazione slider
for (let i = 0; i < slideGroupImage.length; i++) {

    const element = slideGroupImage[i]
    if (i == currentElement) {
        slideElement += `
        <div class="item active element-${i}">
        <div class="slide__text">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>
        <img src="./img/${element.img}" alt="photo ${i}">
        </div>`
    } else {
        slideElement += `
        <div class="item element-${i}">
        <div class="slide__text">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>
        <img src="./img/${element.img}" alt="photo ${i}">
        </div>`
    }
}

// Ciclo Generazione Thumbnails
for (let i = 0; i < slideGroupImage.length; i++) {
    const element = slideGroupImage[i];

    if (i == currentElement) {
        thumbnailsElement += `
        <div class="thumbnails thumb-active">
        <div class="overlay" value="${i}">
        </div>
        <img src="./img/${element.img}" alt="thumbnail photo ${i}">
        </div>`
    } else {
        thumbnailsElement += `
        <div class="thumbnails">
        <div class="overlay" value="${i}">
        </div>
        <img src="./img/${element.img}" alt="thumbnail photo ${i}">
        </div>`
    }
}

// Generazione html
sliderContainer.innerHTML = slideElement;
thumbnailsContainer.innerHTML += thumbnailsElement;

// Variabili prev next
const functionPrev = document.querySelector('.prev');
const functionNext = document.querySelector('.next');

// Selettore Node Slide
const slideNode = document.querySelectorAll('.item');
const thumbNode = document.querySelectorAll('.thumbnails')

// Event Listener Next
functionNext.addEventListener('click', function () {

    if (currentElement < slideGroupImage.length - 1) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement++;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = 0;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    }
})

// Event Listener Prev
functionPrev.addEventListener('click', function () {

    if (currentElement != 0) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement--;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = slideGroupImage.length - 1;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    }
})

// Event Listener
thumbNode.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = index;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    });
});

// Variabili Button
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

// Play Stop Button
stopButton.addEventListener('click', function () {
    clearInterval(autoplayFunction);
})

playButton.addEventListener('click', function () {
    clearInterval(autoplayFunction);
    setInterval(autoplaySlider, 3000);
})

// Autoplay
const autoplayFunction = setInterval(autoplaySlider, 3000);
function autoplaySlider() {
    if (currentElement < slideGroupImage.length - 1) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement++;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = 0;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    }
}