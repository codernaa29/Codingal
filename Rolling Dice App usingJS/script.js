let dice;


let dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

let stopped = true;
let t;

function change() {
    let random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

function toggle() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    } else{
        clearInterval(t);
        stopped = true;
    }
}

window.onload = function () {
    dice = document.getElementById("dice");
    toggle();
}