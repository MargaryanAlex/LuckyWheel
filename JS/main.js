const spin = document.getElementById('btn');
const wheel = document.getElementById('wheel');
const prizeBox = document.getElementById('prizebox');
let spincount = document.getElementById('spincount');
console.log(spincount);
let step = 0;
let freeSpin = 5;
const prizeArr = [
    0,
    400,
    0,
    200,
    0,
    300,
    0,
    100
];
let stepAngle = 360 / prizeArr.length;

function rotate() {
    let currentStep = getRandomNumber(0, prizeArr.length);
    let currentAngle = currentStep * stepAngle
    console.log(currentAngle);
    spincount.innerHTML = freeSpin--;
    step += 5 * 360;
    prizeElement = document.createElement('div');
    prizeElement.innerHTML = prizeArr[currentStep];
    prizeElement.classList.add('box');
    wheel.style.transform = `rotate(${currentAngle+step}deg)`;
}

function getRandomNumber(min, max) {
    if (max === undefined)
        return Math.floor(Math.random() * (min));
    return Math.floor(Math.random() * (max - min) + min);
};

var locked = false;
spin.addEventListener('click', () => {
    if(locked) return;
    locked = true;
    freeSpin >= 0 ? rotate() : "";
    setTimeout(function () {
        prizeBox.append(prizeElement);
        locked = false;
    }, 2000);
});
spincount.innerHTML = freeSpin--;
