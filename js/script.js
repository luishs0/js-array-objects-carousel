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

// CREO GLI ELEMENTI
const container = document.querySelector(".container");

const slider = document.createElement("div");
slider.classList.add("slider");

const item = document.createElement("div");
item.classList.add("item");

const text = document.createElement("div");
text.classList.add("text");

const imgContainer = document.createElement("div");
imgContainer.classList.add("img");

const left = document.createElement("div");
left.classList.add("left");
left.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

const right = document.createElement("div");
right.classList.add("right");
right.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;




// LI METTO AL SUO POSTO
container.append(slider);

slider.append(item, left, right);


item.append(text, imgContainer);



for (let i = 0; i < images.length; i++) {
    imgContainer.innerHTML += `<img class="img${i + 1} imgs d-none" src="${images[i].image}" alt="">`
    text.innerHTML += `<h1 class="titles d-none">${images[i].title}</h1> <p class="texts d-none">${images[i].text}</p>`;

}
 
const imgList = document.getElementsByClassName("imgs");


const titleList = document.getElementsByClassName("titles");


const textList = document.getElementsByClassName("texts");




imgList[0].classList.remove("d-none");
// imgList[0].classList.add("active");
titleList[0].classList.remove("d-none");
textList[0].classList.remove("d-none");

let count = 0;
right.addEventListener("click", function(){
   if (count < 4) {
    imgList[count].classList.add("d-none");
    titleList[count].classList.add("d-none");
    textList[count].classList.add("d-none");


    imgList[count + 1].classList.remove("d-none");
    titleList[count + 1].classList.remove("d-none");
    textList[count + 1].classList.remove("d-none");
    count++;
   } else if (count === 4) {
    imgList[count].classList.add("d-none");
    titleList[count].classList.add("d-none");
    textList[count].classList.add("d-none");


    count = 0;
    imgList[count].classList.remove("d-none");
    titleList[count].classList.remove("d-none");
    textList[count].classList.remove("d-none");
   }
})


left.addEventListener("click", function(){

   if (count > 0) {
        imgList[count].classList.add("d-none");
        imgList[count - 1].classList.remove("d-none");

        titleList[count].classList.add("d-none");
        titleList[count - 1].classList.remove("d-none");

        textList[count].classList.add("d-none");
        textList[count - 1].classList.remove("d-none");
        count--; 
    } else if (count === 0) {
        imgList[count].classList.add("d-none");
        imgList[4].classList.remove("d-none");

        titleList[count].classList.add("d-none");
        titleList[4].classList.remove("d-none");

        textList[count].classList.add("d-none");
        textList[4].classList.remove("d-none");
        count = 4;
    } 

})




















