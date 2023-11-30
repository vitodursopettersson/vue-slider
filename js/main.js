'use strict'

const { createApp } = Vue;

createApp({
    data() {
        let currentSlide = 0;
        let currentInterval = null
        const slideGroupImage = [
            {
                title: 'Lago di Lentini',
                description: 'Il lago di Lentini o biviere di Lentini è un lago della Sicilia. Si trova in provincia di Siracusa ai margini della provincia di Catania, e si estende nel territorio del comune di Lentini.',
                img: 'img/01.jpg',
            },
            {
                title: 'Giardini Naxos',
                description: "Prima colonia greca in Sicilia, possiede un'ampia zona archeologica con annesso il relativo museo.",
                img: 'img/02.jpg',
            },
            {
                title: 'Catania',
                description: "Catania è un'antica città portuale sulla costa orientale della Sicilia. È situata ai piedi dell'Etna, un vulcano attivo con sentieri che arrivano fino alla sua sommità.",
                img: 'img/03.jpg',
            },
            {
                title: 'Siracusa',
                description: "Siracusa è una città sulla costa ionica della Sicilia. È nota per le rovine dell'antichità.",
                img: 'img/04.jpg',
            },
            {
                title: 'Isole Eolie',
                description: "Le isole Eolie, dette anche isole Lipari, sono un arcipelago appartenente all'arco Eoliano situato nel mar Tirreno meridionale, a nord della costa siciliana, fanno parte della città metropolitana di Messina.Dal 2000 sono patrimonio dell’UNESCO.",
                img: 'img/05.jpg',
            }
        ];
        return {
            slideGroupImage,
            currentSlide,
            currentInterval,
        }

    },
    methods: {
        prev() {
            if (this.currentSlide === 0) {
                this.currentSlide = this.slideGroupImage.length;
            } else {
                this.currentSlide--;
            }
        },
        next() {
            if (this.currentSlide === this.slideGroupImage.length) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }
        },
        setSlide(index) {
            this.currentSlide = index
        },
        startAutoplay() {
            clearInterval(this.currentInterval);
            this.currentInterval = setInterval(this.next, 3000);
        },
        stopAutoplay() {
            clearInterval(this.currentInterval);
        }
    },
    mounted() {
        this.startAutoplay()
    }

}).mount('#app')