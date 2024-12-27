
let counter = 0;

const card = document.querySelector("#card")

const btn1 = document.querySelector("#btn1")

const btn2 = document.querySelector("#btn2")

const reset = document.querySelector("#reset")

const head =document.querySelector("#head")


btn1.addEventListener('click', () => {
    counter++;
    updateCounter();
});

btn2.addEventListener('click', () => {
    counter--;
    updateCounter();
});

reset.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

function updateCounter() {
    head.textContent = counter;
}