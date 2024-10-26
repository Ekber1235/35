let counter = 0;
let interval;

const h1 = document.querySelector('.counter');
const stopButton = document.querySelector('.stop-button');

interval = setInterval(() => {
    counter++;
    h1.textContent = counter;
}, 1000);

stopButton.addEventListener('click', () => {
    clearInterval(interval);

});
