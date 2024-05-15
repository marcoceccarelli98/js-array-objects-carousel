'use strict';

//IMAGES ARRAY OF OBJ
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Declare elements
const itemsContainer = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const item = document.createElement('div');
const img = document.createElement('img');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');

//Declare index
let activeIndex = 0;

//Add classes and path for img 
//img.src = itemActive.image;
item.classList.add('item');

//Append img to item and then item to container
itemsContainer.append(item);

next.addEventListener('click', () => {

    h1.innerText = images[activeIndex].title;
    h3.innerHTML = images[activeIndex].text
    img.src = images[activeIndex].image;
    item.classList.add('active');
    item.append(img);
    item.append(h1);
    item.append(h3);
});