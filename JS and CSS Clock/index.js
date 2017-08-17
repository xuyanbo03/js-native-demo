const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let secondDeg=0;
let minsDeg=0;
let hourDeg=0;

function initDate() {
    const now = new Date();

    const second = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    secondDeg = (second / 60) * 360 + 90;
    minsDeg = (mins / 60) * 360 + (second / 60 / 60) * 360 + 90;
    hourDeg = (hour / 12) * 360 + (mins / 12 / 60) * 360 + (second / 12 / 60 / 60) * 360 + 90;
}

function updateDate() {
    secondDeg+=(1/60)*360;
    minsDeg+=(1/60/60)*360;
    hourDeg+=(1/12/60/60)*360;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

initDate();
setInterval(updateDate, 1000);