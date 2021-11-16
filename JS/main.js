const btn = document.getElementById('btn');
const wheel = document.getElementById('wheel');
const prizeBox = document.getElementById('prizebox');
let spincount = document.getElementById('spincount');
console.log(spincount);
let value;
let plus = 0;
let freeSpin = 5;
let prize;

function rotate() {
    let random = Math.floor(Math.random() * 360);
    console.log(random);
    random >= 1 && random <= 45 ? info(0, 'TRY AGAIN') :
        random >= 46 && random <= 90 ? info(45, '100$') :
        random >= 91 && random <= 135 ? info(90, 'TRY AGAIN') :
        random >= 136 && random <= 180 ? info(135, '300$') :
        random >= 181 && random <= 225 ? info(180, 'TRY AGAIN') :
        random >= 226 && random <= 270 ? info(225, '200$') :
        random >= 271 && random <= 315 ? info(270, 'TRY AGAIN') :
        random >= 316 && random <= 360 ? info(315, '400$') : '';
    console.log(value);
    spincount.innerHTML = freeSpin--;
    plus += 5 * 360;

    function info(setVelue, setPrize) {
        value = setVelue;
        prize = setPrize;
    }
    prizeElement = document.createElement('div');
    prizeElement.innerHTML = prize;
    prizeElement.classList.add('box')
    wheel.style.transform = `rotate(${value+plus}deg)`;
}
btn.addEventListener('click', () => {
    freeSpin >= 0 ? rotate() : "";

    prizeBox.append(prizeElement);
});
spincount.innerHTML = freeSpin--;