numbers = [4, 5, 2, 8, 10, 3];
document.getElementById("numbers").innerHTML= numbers;

function asc() {
    numbers.sort(function(a,b) {
         return a - b;
    });

    document.getElementById("numbers").innerHTML = numbers;
}

function desc() {
    numbers.sort(function(a,b) {
        return b - a;
    });

    document.getElementById("numbers").innerHTML = numbers;
}

function square() {
    var squared = numbers.map(function(element) {
        return element * element;
    });
    document.getElementById("numbers").innerHTML = squared;
}

var x = 5;
var y = 4;
var result = eval("x - y + 2");
document.getElementById("eval_value").innerHTML = result;