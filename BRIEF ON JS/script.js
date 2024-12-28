var a = 10; // number
var b = 5.6; // number
var c = 5.6;
var d = "JavaScript"; // string
var e = false; //boolean
var f = null;
var g;

document.write("a and b are equal? " + (a == b));
document.write("<br>");
document.write("b and c are equal? " + (b == c));
document.write("<br>");
document.write("d = " + d);
document.write("<br>");
document.write("e = " + e);
document.write("<br>");
document.write("f = " + f);
document.write("<br>");
document.write("g = " + g);
document.write("<br>");

function showGreeting() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "Good morning";
    }
    else if (hour < 17) {
        greeting = "Good afternoon";
    }
    else {
        greeting = "Good evening";
    }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("greeting").innerHTML = greeting;
}

var i = 1;
while (i <= 10) {
    document.write(i + " ");
    i = i + 1;
}